import Link from "next/link";

import { ArrowRightLight, Button, cn, ShieldLight } from "@acme/ui";

export default function GioiThieuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#1B4D2E]">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F1A10]/85 to-[#1B4D2E]/40" />
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
            alt="Ảnh nền giới thiệu"
            className="h-full w-full object-cover object-center opacity-40 grayscale"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 container pt-24 pb-16">
          <div className="animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="text-primary border-primary/30 bg-primary/10 mb-8 flex w-fit items-center gap-2 border px-4 py-1 text-[12px] font-black tracking-[0.4em] uppercase">
              BỀ DÀY KINH NGHIỆM
            </div>

            <div className="mb-10">
              <h1 className="text-5xl leading-[1.08] font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">
                <span className="block whitespace-nowrap">Kiến tạo</span>
                <span className="block whitespace-nowrap">Công nghiệp</span>
                <span className="block whitespace-nowrap text-[#52B788]">
                  Tương lai
                </span>
              </h1>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 h-14 rounded-none px-12 text-sm font-semibold tracking-wider uppercase"
              >
                Khám phá hệ thống Lab
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center border border-neutral-100 bg-[#F8FAFC] p-10">
              <div className="bg-secondary mb-6 flex size-12 items-center justify-center">
                <ShieldLight className="size-6 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-black text-[#1B4D2E] uppercase">
                Sứ Mệnh
              </h3>
              <p className="leading-relaxed font-medium text-neutral-500">
                Sứ mệnh của chúng tôi là đẩy mạnh giới hạn của khoa học ứng dụng
                không gian và nghiên cứu chuyên sâu về cơ chế thông minh. Chúng
                tôi cam kết cung cấp các nền tảng kỹ thuật tối ưu, thúc đẩy sự
                chuyển đổi công nghiệp của đất nước thông qua các thành tựu
                nghiên cứu tiên tiến.
              </p>
            </div>
            <div className="group relative flex flex-col justify-center overflow-hidden bg-[#1B4D2E] p-12 text-white">
              <div className="relative z-10">
                <h3 className="mb-6 text-3xl font-black uppercase">
                  Tầm Nhìn 2030
                </h3>
                <p className="mb-8 leading-relaxed font-medium text-neutral-200">
                  Trở thành Trung tâm Nghiên cứu đa ngành hàng đầu khu vực, là
                  nhân tố then chốt giúp ngành công nghiệp kỹ thuật không gian
                  Việt Nam vươn tầm quốc tế.
                </p>
                <div className="text-primary flex cursor-pointer items-center gap-3 text-[10px] font-black tracking-widest uppercase transition-all group-hover:gap-5">
                  KHÁM PHÁ CHIẾN LƯỢC <ArrowRightLight className="size-4" />
                </div>
              </div>
              <ShieldLight className="absolute -right-10 -bottom-10 size-64 text-white/5" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container">
          <div className="mb-12 flex items-end justify-between">
            <div className="w-[600px]">
              <h2 className="mb-4 text-4xl font-black text-[#1B4D2E] uppercase">
                Hệ thống Phòng Thí nghiệm
              </h2>
              <p className="font-medium text-neutral-500">
                Đa dạng các phòng nghiên cứu chuyên biệt đáp ứng nhu cầu nghiên
                cứu liên ngành hiện đại nhất thế giới.
              </p>
            </div>
            <Link href="/san-pham">
              <Button
                variant="outline"
                className="rounded-none border-[#1B4D2E] px-8 text-sm font-semibold tracking-wider uppercase"
              >
                XEM TẤT CẢ PHÒNG THÍ NGHIỆM
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Trung Tâm Quang Điện Tử",
                desc: "Nghiên cứu và phát triển các cảm biến quang học độ chính xác cao cho hệ thống giám sát không gian.",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
                lab: "PTN-01",
              },
              {
                title: "Xưởng Chế Tạo Chính Xác",
                desc: "Sử dụng công nghệ in 3D kim loại và CNC 5 trục để tạo ra các linh kiện hàng không vũ trụ tinh xảo.",
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
                lab: "PTN-02",
              },
              {
                title: "Phòng Phân Tích Dữ Liệu",
                desc: "Xử lý khối lượng dữ liệu khổng lồ bằng AI và học sâu để dự báo và tối ưu hóa vận hành hệ thống.",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
                lab: "PTN-03",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group overflow-hidden border border-neutral-100 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="text-primary mb-2 flex items-center gap-2 text-[9px] font-black tracking-widest uppercase">
                    <span className="bg-primary h-[1px] w-4" /> {item.lab}
                  </div>
                  <h4 className="mb-4 text-xl font-black text-[#1B4D2E] uppercase">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed font-medium text-neutral-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">
              ĐỘI NGŨ CHUYÊN GIA
            </span>
            <h2 className="mt-4 text-4xl font-black text-[#1B4D2E] uppercase">
              Những Bộ Óc Đằng Sau Sự Đổi Mới
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "TS. Nguyễn Minh Châu",
                role: "Giám đốc Nghiên cứu",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "ThS. Lê Thanh Hà",
                role: "Kỹ sư Trưởng Hệ thống",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
              },
              {
                name: "TS. Phạm Hoàng Nam",
                role: "Chuyên gia Trí tuệ Nhân tạo & Robot",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "ThS. Trần Thu Thủy",
                role: "Trưởng phòng Thí nghiệm",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
              },
            ].map((item, i) => (
              <div key={i} className="group text-center">
                <div className="mb-6 aspect-[3/4] overflow-hidden border border-neutral-100 shadow-md grayscale transition-all duration-500 hover:grayscale-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="mb-1 text-lg font-black text-[#1B4D2E] uppercase">
                  {item.name}
                </h4>
                <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1B4D2E] py-16 text-white">
        <div className="relative z-10 container">
          <h2 className="border-primary mb-16 border-l-4 pl-8 text-4xl font-black uppercase">
            Hành trình Phát triển
          </h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 hidden w-[1px] bg-white/10 md:block" />
            <div className="space-y-24">
              {[
                {
                  year: "2010",
                  title: "Thành Lập Viện",
                  desc: "Khởi đầu với 10 Tiến sĩ Khoa học đầu ngành trong lĩnh vực khí động học.",
                  side: "left",
                },
                {
                  year: "2015",
                  title: "Đột Phá Quang Điện Tử",
                  desc: "Thử nghiệm thành công cảm biến hồng ngoại thế hệ mới cho ứng dụng hàng không.",
                  side: "right",
                },
                {
                  year: "2020",
                  title: "Mở Rộng Trụ Sở Lab",
                  desc: "Khánh thành tổ hợp phòng thí nghiệm trọng điểm quốc gia tại Khu CNC Hòa Lạc.",
                  side: "left",
                },
                {
                  year: "2024",
                  title: "Tiên Phong AI Công Nghiệp",
                  desc: "Dẫn đầu việc ứng dụng AI vào hệ thống tự trị thông minh cho các đối tác toàn cầu.",
                  side: "right",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "relative flex flex-col items-center md:flex-row",
                    item.side === "left" ? "md:flex-row-reverse" : "",
                  )}
                >
                  <div className="w-full flex-1" />
                  <div className="bg-primary relative z-20 mx-8 flex size-12 shrink-0 items-center justify-center rounded-full">
                    <span className="text-[10px] font-black">{item.year}</span>
                  </div>
                  <div className="w-full flex-1 text-center md:text-left">
                    <div
                      className={cn(
                        "hover:border-primary/50 border border-white/10 bg-white/5 p-8 transition-colors",
                        item.side === "left" ? "md:text-right" : "",
                      )}
                    >
                      <h4 className="text-primary mb-3 text-xl font-black uppercase">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed font-medium text-neutral-200">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-black text-[#1B4D2E] uppercase">
            Giá Trị Cốt Lõi
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "CHÍNH XÁC",
                desc: "Tuyệt đối trong mọi phép đo và thực nghiệm nghiên cứu.",
                icon: "ShieldLight",
              },
              {
                title: "ĐỔI MỚI",
                desc: "Không ngừng tìm kiếm và sáng tạo những giải pháp mới.",
                icon: "ShieldLight",
              },
              {
                title: "BẢO MẬT",
                desc: "Tuân thủ nghiêm ngặt các quy tắc bảo mật thông tin tối cao.",
                icon: "ShieldLight",
              },
              {
                title: "HỢP TÁC",
                desc: "Sức mạnh tập thể kiến tạo nên những thành tựu vĩ đại.",
                icon: "ShieldLight",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group border border-neutral-100 p-10 text-center transition-colors hover:bg-[#F8FAFC]"
              >
                <div className="group-hover:bg-primary mx-auto mb-6 flex size-12 items-center justify-center bg-[#F1F5F9] transition-all group-hover:text-white">
                  <ShieldLight className="size-6" />
                </div>
                <h4 className="mb-4 text-lg font-black text-[#1B4D2E] uppercase">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed font-bold text-neutral-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
