import Link from "next/link";

import { ArrowRightLight, CalendarLight, ClockLight } from "@acme/ui";

import { SectionHeading } from "~/components/molecules/section-heading";

export function NewsSection() {
  const featuredNews = [
    {
      category: "THỊ TRƯỜNG",
      date: "27 THÁNG 8, 2024",
      title: "Giải pháp đột phá cho chuỗi cung ứng thực phẩm",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
      time: "20 PHÚT",
    },
    {
      category: "CÔNG NGHỆ",
      date: "27 THÁNG 8, 2024",
      title: "Ứng dụng Blockchain trong quản lý vận hành",
      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop",
    },
    {
      category: "KINH TẾ",
      date: "27 THÁNG 8, 2024",
      title: "Dự báo tăng trưởng công nghiệp 2025",
      image:
        "https://images.unsplash.com/photo-1611974714851-48206139d733?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "TIN TỨC",
      date: "27 THÁNG 8, 2024",
      title: "Khai trương phòng thí nghiệm vật liệu Nano mới",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      time: "20 PHÚT",
    },
    {
      category: "CHUYỂN ĐỔI SỐ",
      date: "27 THÁNG 8, 2024",
      title: "Hệ thống bảo mật dữ liệu cấp quốc phòng",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=2070&auto=format&fit=crop",
      time: "20 PHÚT",
    },
  ];

  const sidebarNews = [
    {
      category: "BẢO MẬT",
      date: "27 THÁNG 8, 2024",
      title: "Giải pháp truyền thông bảo mật cho doanh nghiệp",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "TIN TỨC",
      date: "27 THÁNG 8, 2024",
      title: "Xây dựng chiến lược an ninh mạng 4.0",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "KINH TẾ",
      date: "27 THÁNG 8, 2024",
      title: "Xu hướng thiết kế giao diện hiện đại",
      image:
        "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "THỊ TRƯỜNG",
      date: "27 THÁNG 8, 2024",
      title: "Tối ưu hóa chi phí sản xuất bằng AI",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "CÔNG NGHỆ",
      date: "27 THÁNG 8, 2024",
      title: "Kỷ nguyên mới của máy tính lượng tử",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "ROBOTICS",
      date: "27 THÁNG 8, 2024",
      title: "Xu hướng tự động hóa công nghiệp 2024",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <SectionHeading
            subtitle="Tin tức mới nhất"
            title="Cập Nhật Trí Thức & Công Nghệ"
            align="left"
            className="mb-0"
          />
          <Link
            href="/tin-tuc"
            className="text-primary hidden items-center gap-2 text-sm font-black tracking-widest transition-all hover:gap-3 md:flex"
          >
            XEM TẤT CẢ TIN TỨC <ArrowRightLight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Main Grid Section */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:col-span-8">
            {/* Top 3 Cards */}
            {featuredNews.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden bg-neutral-900 md:col-span-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A10]/85 to-[#1B4D2E]/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="mb-4 inline-block w-fit border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black tracking-widest text-white backdrop-blur-md">
                    {item.category}
                  </span>
                  <h3 className="group-hover:text-primary mb-4 text-lg leading-tight font-bold text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CalendarLight className="size-3" /> {item.date}
                    </span>
                    {item.time && (
                      <span className="flex items-center gap-1.5">
                        <ClockLight className="size-3" /> {item.time}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom 2 Large Cards */}
            {featuredNews.slice(3, 5).map((item, i) => (
              <div
                key={i}
                className="group relative aspect-[16/10] cursor-pointer overflow-hidden bg-neutral-900 md:col-span-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A10]/85 to-[#1B4D2E]/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="mb-4 inline-block w-fit border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black tracking-widest text-white backdrop-blur-md">
                    {item.category}
                  </span>
                  <h3 className="group-hover:text-primary mb-4 max-w-[80%] text-2xl leading-tight font-bold text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CalendarLight className="size-3" /> {item.date}
                    </span>
                    {item.time && (
                      <span className="flex items-center gap-1.5">
                        <ClockLight className="size-3" /> {item.time}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Section */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-4">
            {sidebarNews.map((item, i) => (
              <div
                key={i}
                className="group flex cursor-pointer gap-4 border-b border-neutral-100 pb-4 last:border-0 last:pb-0"
              >
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <span className="w-fit border border-neutral-200 px-2 py-0.5 text-[10px] font-black tracking-widest text-neutral-400">
                    {item.category}
                  </span>
                  <h4 className="group-hover:text-primary line-clamp-2 text-sm leading-snug font-bold text-[#1B4D2E] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-neutral-400">
                    <CalendarLight className="size-3" /> {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
