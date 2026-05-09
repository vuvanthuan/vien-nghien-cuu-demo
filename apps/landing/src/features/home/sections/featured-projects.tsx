import Link from "next/link";

import { Badge, Card, ExternalLinkLight } from "@acme/ui";

import { SectionHeading } from "~/components/molecules/section-heading";

export function FeaturedProjects() {
  const mainProject = {
    title: "Hệ thống giám sát chất lượng tự động AI",
    partner: "Đối tác: VinFast",
    desc: "Triển khai hệ thống Thị giác Máy tính giúp phát hiện lỗi bề mặt sơn với độ chính xác 99.9% tại nhà máy sản xuất ô tô điện.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    tags: ["Thị giác Máy tính", "Học sâu"],
  };

  const secondaryProjects = [
    {
      title: "Tối ưu hóa lưới điện thông minh miền Trung",
      category: "Năng lượng tái tạo",
      desc: "Phát triển thuật toán điều phối tải cho các trang trại điện gió và mặt trời.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Vật liệu Titanium in 3D cho chỉnh hình",
      category: "Y sinh công nghệ cao",
      desc: "Nghiên cứu cấu trúc rỗng cho các bộ phận cấy ghép xương hông cá thể hóa.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Bảo mật hệ thống SCADA quốc gia",
      category: "An ninh mạng",
      desc: "Nâng cấp hàng rào phòng thủ cho hạ tầng điều khiển công nghiệp trọng điểm.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <SectionHeading
            subtitle="DẤU ẤN CÔNG NGHỆ"
            title="Dự án Hợp tác Tiêu biểu"
            className="mb-0"
          />
          <Link
            href="/du-an"
            className="text-primary group mb-2 flex items-center gap-2 font-bold hover:underline"
          >
            Xem tất cả dự án
            <ExternalLinkLight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          {/* Main Feature Card */}
          <div className="lg:col-span-7">
            <Card className="group relative aspect-square min-h-[500px] overflow-hidden rounded-none border-none lg:aspect-auto lg:h-full">
              <img
                src={mainProject.image}
                alt={mainProject.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A10]/85 to-[#1B4D2E]/40" />

              <div className="absolute inset-x-0 bottom-0 space-y-6 p-10">
                <div className="space-y-2">
                  <p className="text-primary-400 text-sm font-bold">
                    {mainProject.partner}
                  </p>
                  <h3 className="text-3xl leading-tight font-bold text-white">
                    {mainProject.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-neutral-300">
                    {mainProject.desc}
                  </p>
                </div>

                <div className="flex gap-3">
                  {mainProject.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      className="rounded-none border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-wider text-white uppercase hover:bg-white/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Secondary Projects List */}
          <div className="flex h-full flex-col justify-between lg:col-span-5">
            {secondaryProjects.map((project, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 rounded-none p-4 transition-colors hover:bg-neutral-50"
              >
                <div className="size-24 shrink-0 overflow-hidden rounded-none bg-neutral-100 md:size-32">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-primary text-[10px] font-black tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h4 className="group-hover:text-primary text-xl leading-tight font-black text-[#1B4D2E] transition-colors">
                    {project.title}
                  </h4>
                  <p className="line-clamp-2 text-sm leading-relaxed font-medium text-neutral-500">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
