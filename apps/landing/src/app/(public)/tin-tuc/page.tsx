import Link from "next/link";

import { ArrowRightLight, Button, CalendarLight, ClockLight } from "@acme/ui";

import { SectionHeading } from "~/components/molecules/section-heading";

export default function TinTucPage() {
  const heroNews = [
    {
      id: 1,
      category: "CÔNG NGHỆ",
      title: "VNC công bố đột phá trong công nghệ in 3D Titanium cho y học",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      date: "08/05/2026",
    },
    {
      id: 2,
      category: "NGHIÊN CỨU",
      title: "Thử nghiệm thành công pin Liti-Lưu huỳnh mật độ năng lượng cao",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
      date: "07/05/2026",
    },
    {
      id: 3,
      category: "HỢP TÁC",
      title: "Hợp tác đào tạo nhân lực bán dẫn cùng đối tác quốc tế",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      date: "06/05/2026",
    },
  ];

  const recentPosts = [
    {
      id: 4,
      category: "TRÍ TUỆ NHÂN TẠO & DỮ LIỆU",
      title:
        "Giải pháp thị giác máy tính cho giám sát chất lượng sản xuất tự động",
      description:
        "Hệ thống sử dụng Học sâu để phát hiện lỗi sản phẩm với độ chính xác lên tới 99.8% trong thời gian thực...",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      date: "05/05/2026",
      time: "12 phút đọc",
    },
    {
      id: 5,
      category: "ROBOTICS",
      title: "Robot tự hành trong kho vận: Tương lai của Hậu cần thông minh",
      description:
        "Dự án nghiên cứu về các thuật toán định vị và tránh vật cản cho robot di động trong môi trường động...",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      date: "04/05/2026",
      time: "8 phút đọc",
    },
    {
      id: 6,
      category: "VẬT LIỆU",
      title: "Nghiên cứu tính chất cơ học của vật liệu Composite sợi Carbon",
      description:
        "Ứng dụng trong các cấu trúc chịu lực cường độ cao cho ngành hàng không và không gian vũ trụ...",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
      date: "03/05/2026",
      time: "15 phút đọc",
    },
    {
      id: 7,
      category: "NĂNG LƯỢNG",
      title: "Tối ưu hóa hệ thống lưu trữ năng lượng cho lưới điện thông minh",
      description:
        "Giải pháp quản lý nguồn điện phân tán và tích hợp năng lượng tái tạo vào hệ thống điện quốc gia...",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
      date: "02/05/2026",
      time: "10 phút đọc",
    },
  ];

  const miningStories = [
    {
      title: "Sản xuất Xanh",
      image:
        "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop",
      count: "12 Bài viết",
    },
    {
      title: "Kỹ thuật Y sinh",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop",
      count: "08 Bài viết",
    },
    {
      title: "Vật liệu Nano",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9d3a4461a?q=80&w=2070&auto=format&fit=crop",
      count: "15 Bài viết",
    },
    {
      title: "Hệ thống An ninh mạng",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      count: "20 Bài viết",
    },
  ];

  const trendingNews = [
    { title: "Xu hướng tự động hóa 2024", date: "22/04/2026" },
    { title: "Báo cáo thường niên VNC 2023", date: "20/04/2026" },
    { title: "Danh sách bằng sáng chế mới", date: "18/04/2026" },
    { title: "Tuyển dụng chuyên gia AI", date: "15/04/2026" },
  ];

  return (
    <main className="bg-[#F8FAFC] pb-20">
      {/* Breadcrumb & Page Title */}
      <div className="border-b border-neutral-100 bg-white py-10">
        <div className="container">
          <nav className="mb-4 flex items-center gap-2 text-[10px] font-black tracking-widest text-neutral-400 uppercase">
            <Link href="/" className="hover:text-primary">
              Trang chủ
            </Link>
            <span className="size-1 rounded-full bg-neutral-300" />
            <span className="text-primary">Tin tức & Sự kiện</span>
          </nav>
          <h1 className="text-4xl leading-tight font-black tracking-normal text-[#1B4D2E] md:text-5xl">
            Tin tức & sự kiện
          </h1>
        </div>
      </div>

      {/* Top Hero Section */}
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {heroNews.map((news) => (
            <div
              key={news.id}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
            >
              <img
                src={news.image}
                alt={news.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A10]/85 to-[#1B4D2E]/40 opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-primary mb-3 text-[10px] font-black tracking-[0.2em] uppercase">
                  {news.category}
                </span>
                <h2 className="group-hover:text-primary text-xl leading-tight font-black text-white transition-colors">
                  {news.title}
                </h2>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-black tracking-widest text-white/50">
                  {news.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Recent Posts List */}
          <div className="lg:col-span-8">
            <SectionHeading title="Bài viết mới nhất" className="mb-10" />
            <div className="space-y-12">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="group grid grid-cols-1 items-stretch overflow-hidden border border-neutral-100 bg-white shadow-sm transition-all hover:shadow-xl md:grid-cols-12"
                >
                  <div className="aspect-video overflow-hidden md:col-span-5 md:aspect-auto">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col p-8 md:col-span-7">
                    <span className="text-primary mb-3 block text-[10px] font-black tracking-[0.2em] uppercase">
                      {post.category}
                    </span>
                    <h3 className="group-hover:text-primary mb-4 text-2xl leading-tight font-black text-[#1B4D2E] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-neutral-500">
                      {post.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-neutral-400">
                        <span className="flex items-center gap-1.5">
                          <CalendarLight className="size-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <ClockLight className="size-3" /> {post.time}
                        </span>
                      </div>
                      <Link
                        href={`/tin-tuc/${post.id}`}
                        className="text-primary group/link flex items-center gap-2 text-[10px] font-black tracking-widest uppercase"
                      >
                        Đọc tiếp{" "}
                        <ArrowRightLight className="size-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center gap-2">
              <Button
                variant="outline"
                className="rounded-none px-6 text-sm font-semibold tracking-wider uppercase"
              >
                1
              </Button>
              <Button
                variant="ghost"
                className="rounded-none px-6 text-sm font-semibold tracking-wider uppercase"
              >
                2
              </Button>
              <Button
                variant="ghost"
                className="rounded-none px-6 text-sm font-semibold tracking-wider uppercase"
              >
                3
              </Button>
              <Button
                variant="ghost"
                className="rounded-none px-4 text-sm font-semibold tracking-wider uppercase"
              >
                Sau →
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12 pt-[70px] lg:col-span-4">
            {/* Trending News */}
            <div className="border border-neutral-100 bg-white p-8 shadow-sm">
              <h4 className="border-primary mb-8 w-fit border-b-2 pb-4 text-sm font-black tracking-widest text-[#1B4D2E] uppercase">
                Đang quan tâm
              </h4>
              <div className="space-y-8">
                {trendingNews.map((news, i) => (
                  <div key={i} className="group cursor-pointer">
                    <h5 className="group-hover:text-primary mb-2 text-sm leading-snug font-bold text-[#1B4D2E] transition-colors">
                      {news.title}
                    </h5>
                    <span className="text-[10px] font-black tracking-widest text-neutral-400">
                      {news.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags/Categories */}
            <div className="border border-neutral-100 bg-white p-8 shadow-sm">
              <h4 className="border-primary mb-8 w-fit border-b-2 pb-4 text-sm font-black tracking-widest text-[#1B4D2E] uppercase">
                Lĩnh vực chính
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "NGHIÊN CỨU",
                  "TRÍ TUỆ NHÂN TẠO & DỮ LIỆU LỚN",
                  "ROBOTICS",
                  "VẬT LIỆU",
                  "HỢP TÁC",
                  "SỰ KIỆN",
                  "NĂNG LƯỢNG",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="hover:border-primary hover:text-primary cursor-pointer border border-neutral-200 px-3 py-1.5 text-[10px] font-black tracking-widest text-neutral-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mining Stories / Key Topics Section */}
      <div className="border-y border-neutral-100 bg-white py-20">
        <div className="container">
          <SectionHeading
            title="Chuyên mục nghiên cứu"
            className="mb-12"
            align="center"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {miningStories.map((story, i) => (
              <div
                key={i}
                className="group relative aspect-video cursor-pointer overflow-hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1B4D2E]/40 transition-colors group-hover:bg-[#1B4D2E]/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h4 className="mb-2 text-xl font-black tracking-widest text-white uppercase">
                    {story.title}
                  </h4>
                  <span className="text-primary border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-md">
                    {story.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Newsletter Section */}
      <div className="container mt-20">
        <div className="relative flex flex-col items-center gap-12 overflow-hidden bg-[#1B4D2E] p-12 text-white md:flex-row md:p-20">
          <div className="relative z-10">
            <h2 className="mb-6 text-2xl leading-[1.14] font-black tracking-normal whitespace-normal md:text-5xl">
              Nhận thông tin
              <br />
              <span className="text-[#52B788]">nghiên cứu mới nhất</span>
            </h2>
            <p className="text-lg leading-relaxed text-[#C8D5C0]">
              Đăng ký để nhận các báo cáo khoa học, tin tức công nghệ và thông
              báo sự kiện mới nhất từ VNC hàng tuần.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-1/2">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="focus:border-primary flex-grow border border-white/30 bg-white/10 px-6 py-4 text-lg text-white placeholder:text-[#C8D5C0]/75 focus:outline-none"
              />
              <Button className="bg-primary hover:text-primary rounded-none px-10 py-7 text-sm font-semibold tracking-wider uppercase transition-all hover:bg-white">
                ĐĂNG KÝ NGAY
              </Button>
            </div>
            <p className="mt-4 text-[10px] tracking-widest text-neutral-500 uppercase italic">
              * Chúng tôi cam kết bảo mật thông tin và không gửi spam.
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="bg-primary/10 absolute top-0 right-0 -mt-32 -mr-32 size-64 rounded-full blur-3xl" />
          <div className="bg-primary/5 absolute bottom-0 left-0 -mb-24 -ml-24 size-48 rounded-full blur-2xl" />
        </div>
      </div>
    </main>
  );
}
