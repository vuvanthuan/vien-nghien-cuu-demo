import { Button } from "@acme/ui";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#1B4D2E]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F1A10]/85 to-[#1B4D2E]/40" />

        {/* Background image (optimized Next.js style) */}
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
          alt="Ảnh nền phòng thí nghiệm"
          className="h-full w-full object-cover object-center opacity-40"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 container pt-24 pb-16">
        <div className="animate-in fade-in slide-in-from-left-6 max-w-4xl duration-700">
          {/* TITLE */}
          <div className="mb-10 max-w-4xl">
            <h1 className="text-5xl leading-[1.08] font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">
              <span className="block whitespace-nowrap">Đột phá</span>
              <span className="block whitespace-nowrap text-[#52B788]">
                Công nghệ
              </span>
              <span className="block whitespace-nowrap">Tương lai</span>
            </h1>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 h-12 w-full rounded-none px-8 text-sm font-semibold tracking-wider uppercase sm:h-14 sm:w-auto sm:px-12"
            >
              Khám phá ngay
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-none border-2 border-white/80 px-8 text-sm font-semibold tracking-wider text-black uppercase transition-all hover:bg-white hover:text-[#1B4D2E] sm:h-14 sm:w-auto sm:px-12"
            >
              Liên hệ
            </Button>
          </div>
        </div>
      </div>

      {/* FLOATING GLOW (SAFE VERSION) */}
      <div className="pointer-events-none absolute top-1/2 right-[-20%] hidden h-[60%] w-[60%] -translate-y-1/2 lg:block">
        <div className="relative h-full w-full">
          <div className="bg-primary/20 absolute inset-0 rounded-full blur-[120px]" />
        </div>
      </div>
    </section>
  );
}
