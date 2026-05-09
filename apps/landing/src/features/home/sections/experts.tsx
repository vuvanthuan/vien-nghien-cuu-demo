import { Card } from "@acme/ui";

import { SectionHeading } from "~/components/molecules/section-heading";

export function Experts() {
  const experts = [
    {
      id: "VNC-692",
      name: "TS. Nguyễn Văn An",
      role: "GIÁM ĐỐC KỸ THUẬT",
      exp: "22 Năm",
      degree: "TS tại Đức",
      field: "Cơ học chính xác",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "VNC-901",
      name: "ThS. Lê Thị Bình",
      role: "TRƯỞNG PHÒNG ĐIỆN TỬ",
      exp: "15 Năm",
      degree: "Thạc sỹ Pháp",
      field: "Tự động hóa",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      id: "VNC-643",
      name: "TS. Phạm Văn Chung",
      role: "CHUYÊN GIA VẬT LIỆU",
      exp: "28 Năm",
      degree: "TS tại Nhật Bản",
      field: "Polyme & Composite",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "VNC-955",
      name: "KS. Trần Thị Diệu",
      role: "QUẢN LÝ CHẤT LƯỢNG",
      exp: "10 Năm",
      degree: "Kỹ sư Việt Nam",
      field: "Kiểm định ISO",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container">
        <SectionHeading title="Đội ngũ Chuyên gia" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert, i) => (
            <Card
              key={i}
              className="text-card-foreground group flex flex-col gap-6 overflow-hidden rounded-none border border-neutral-100 bg-white py-6 pt-0 shadow-sm shadow-black/5"
            >
              <div className="relative -mt-6 aspect-[4/5] overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col px-6">
                <h3 className="mb-1 text-xl font-bold text-[#1B4D2E]">
                  {expert.name}
                </h3>
                <span className="text-primary mb-6 block text-[10px] font-bold tracking-widest uppercase">
                  {expert.role}
                </span>

                <div className="mt-auto space-y-3 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Kinh nghiệm:</span>
                    <span className="font-bold text-[#1B4D2E]">
                      {expert.exp}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Học vị:</span>
                    <span className="font-bold text-[#1B4D2E]">
                      {expert.degree}
                    </span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-neutral-400">Lĩnh vực:</span>
                    <span className="max-w-[120px] text-right font-bold text-[#1B4D2E]">
                      {expert.field}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
