import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short.").max(80, "Name is too long."),
  email: z.string().trim().email("Please provide a valid email address."),
  subject: z.string().trim().min(3, "Subject is too short.").max(120, "Subject is too long."),
  message: z.string().trim().min(20, "Message should be at least 20 characters.").max(3000, "Message is too long."),
  company: z.string().max(100).optional().default(""),
});

export type ContactPayload = z.infer<typeof contactSchema>;
