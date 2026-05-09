import { GlobeLight, MedalLight, ShieldLight, StarLight } from "@acme/ui";

import { SectionHeading } from "~/components/molecules/section-heading";

export function AwardsSection() {
  const awards = [
    {
      year: "2024",
      title: "Giải thưởng Sáng tạo Khoa học Công nghệ",
      org: "Bộ Khoa học và Công nghệ",
      icon: MedalLight,
    },
    {
      year: "2023",
      title: "Top 10 Viện Nghiên cứu Đột phá nhất",
      org: "Giải thưởng Công nghệ Châu Á",
      icon: GlobeLight,
    },
    {
      year: "2023",
      title: "Chứng nhận Chuyên gia AI Xuất sắc",
      org: "Hiệp hội Trí tuệ Nhân tạo Quốc tế",
      icon: StarLight,
    },
    {
      year: "2022",
      title: "Huy chương Vàng Sản phẩm Công nghệ 4.0",
      org: "Triển lãm Công nghệ Việt Nam",
      icon: ShieldLight,
    },
  ];

  return (
    <section className="border-t border-neutral-100 bg-white py-10">
      <div className="container">
        <SectionHeading title="Giải Thưởng & Chứng Nhận" align="center" />

        <div className="grid grid-cols-1 gap-0 border border-neutral-100 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, i) => (
            <div
              key={i}
              className="group border-r border-b border-neutral-100 p-10 transition-all duration-500 last:border-r-0 hover:bg-neutral-50 lg:[&:nth-child(4n)]:border-r-0"
            >
              <div className="text-primary/20 group-hover:text-primary mb-6 text-4xl font-black transition-colors">
                {award.year}
              </div>
              <div className="group-hover:bg-primary/10 mb-6 flex size-12 items-center justify-center rounded-md bg-neutral-100 transition-colors">
                <award.icon className="group-hover:text-primary size-6 text-neutral-400 transition-colors" />
              </div>
              <h3 className="mb-3 text-lg leading-tight font-black text-[#1B4D2E]">
                {award.title}
              </h3>
              <p className="text-xs font-black tracking-widest text-neutral-400 uppercase">
                {award.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
