import { SectionHeading } from "~/components/molecules/section-heading";

export function PartnersSection() {
  const partners = [
    {
      name: "Viettel",
      logo: "https://placehold.co/320x120/ffffff/1B4D2E?text=Viettel",
    },
    {
      name: "VNPT",
      logo: "https://placehold.co/320x120/ffffff/1B4D2E?text=VNPT",
    },
    {
      name: "FPT Defense",
      logo: "https://placehold.co/320x120/ffffff/1B4D2E?text=FPT+Defense",
    },
    {
      name: "Vinsmart",
      logo: "https://placehold.co/320x120/ffffff/1B4D2E?text=Vinsmart",
    },
    {
      name: "MISA",
      logo: "https://placehold.co/320x120/ffffff/1B4D2E?text=MISA",
    },
    {
      name: "CMC Tech",
      logo: "https://placehold.co/320x120/ffffff/1B4D2E?text=CMC+Tech",
    },
  ];

  return (
    <section className="border-t border-neutral-100 bg-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="lg:col-span-1">
            <SectionHeading
              title="Đối Tác Chiến Lược"
              description="Chúng tôi tự hào đồng hành cùng các tập đoàn công nghệ hàng đầu và các viện nghiên cứu quốc tế để kiến tạo những giải pháp đột phá."
              className="mb-8"
            />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Chúng tôi tự hào đồng hành cùng các tập đoàn công nghệ hàng đầu và
              các viện nghiên cứu quốc tế để kiến tạo những giải pháp đột phá.
            </p>
            <div className="mt-5 flex gap-12">
              <div className="military-divider">
                <div className="text-primary text-3xl font-black">50+</div>
                <div className="mt-1 text-xs font-black tracking-widest text-neutral-400 uppercase">
                  Đối tác
                </div>
              </div>
              <div className="military-divider">
                <div className="text-primary text-3xl font-black">20+</div>
                <div className="mt-1 text-xs font-black tracking-widest text-neutral-400 uppercase">
                  Quốc gia
                </div>
              </div>
            </div>
          </div>

          {/* Right: Logo Grid */}
          <div className="grid grid-cols-2 border border-neutral-200 md:grid-cols-3">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex aspect-video items-center justify-center border-r border-b border-neutral-200 p-8 transition-colors last:border-r-0 hover:bg-neutral-50 md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 w-auto opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
