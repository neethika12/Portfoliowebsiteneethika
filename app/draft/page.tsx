import { BentoHero } from "@/components/bento-hero";
import { BentoSidebar } from "@/components/bento-sidebar";

export default function DraftPage() {
  return (
    <main className="bento-shell flex min-h-screen flex-col lg:flex-row">
      <BentoSidebar />
      <div className="flex-1 px-6 py-10 sm:px-10 lg:py-14">
        <div className="mx-auto w-full max-w-[1200px]">
          <BentoHero />
        </div>
      </div>
    </main>
  );
}
