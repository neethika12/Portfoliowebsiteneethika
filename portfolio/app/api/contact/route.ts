import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL;

function getClientIdentifier(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function canSendEmail() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      FROM_EMAIL &&
      TO_EMAIL,
  );
}

export async function POST(request: NextRequest) {
  const clientId = getClientIdentifier(request);
  if (isRateLimited(clientId)) {
    return NextResponse.json(
      { message: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Invalid form input.";
    return NextResponse.json({ message: firstError }, { status: 400 });
  }

  const payload = parsed.data;
  if (payload.company) {
    return NextResponse.json({ message: "Spam detected." }, { status: 400 });
  }

  const textBody = `Name: ${payload.name}
Email: ${payload.email}
Subject: ${payload.subject}

Message:
${payload.message}
`;

  if (!canSendEmail()) {
    // In local mode without SMTP, keep endpoint functional for demos and testing.
    console.info("Contact form submission (SMTP not configured):\n", textBody);
    return NextResponse.json({
      message:
        "Message received. Configure SMTP in environment variables to enable direct email delivery.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: payload.email,
      subject: `[Portfolio Contact] ${payload.subject}`,
      text: textBody,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Subject:</strong> ${payload.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully. Thank you for reaching out." });
  } catch (error) {
    console.error("Contact route error", error);
    return NextResponse.json({ message: "Unable to send message right now. Please try again later." }, { status: 500 });
  }
}
