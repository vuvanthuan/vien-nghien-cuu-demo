import Link from "next/link";

import { Button, Checkbox, SearchLight, Slider } from "@acme/ui";

export default function SanPhamPage() {
  const products = [
    {
      id: "UAV-X1",
      title: "Hệ thống MBNLK Trinh sát Tầm xa",
      category: "THIẾT BỊ BAY",
      specs: {
        range: "200km",
        endurance: "24h",
        payload: "50kg",
      },
      image:
        "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2070&auto=format&fit=crop",
      status: "SẴN SÀNG",
    },
    {
      id: "RDR-2000",
      title: "Radar Quét Mảng Pha Chủ động",
      category: "HỆ THỐNG RADAR",
      specs: {
        detection: "150km",
        tracking: "100 mục tiêu",
        band: "X-Band",
      },
      image:
        "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=2070&auto=format&fit=crop",
      status: "NGHIÊN CỨU",
    },
    {
      id: "OPT-TRM",
      title: "Hệ thống Quang điện tử Hồng ngoại",
      category: "QUANG ĐIỆN TỬ",
      specs: {
        sensor: "Gen 3 Uncooled",
        res: "1280x720",
        zoom: "30x Optical",
      },
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      status: "SẴN SÀNG",
    },
    {
      id: "COM-SEC",
      title: "Máy thông tin Vô tuyến Nhảy tần",
      category: "THÔNG TIN LIÊN LẠC",
      specs: {
        freq: "30-512 MHz",
        power: "20W",
        encryption: "AES-256",
      },
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      status: "SẴN SÀNG",
    },
    {
      id: "NAV-INS",
      title: "Khối Dẫn đường Quán tính Chính xác",
      category: "DẪN ĐƯỜNG",
      specs: {
        accuracy: "0.01 deg/hr",
        tech: "FOG",
        interface: "MIL-STD-1553",
      },
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      status: "SẴN SÀNG",
    },
    {
      id: "PWR-MOD",
      title: "Module Nguồn Công suất Cao",
      category: "PHỤ TRỢ",
      specs: {
        output: "50kW",
        cooling: "Liquid",
        efficiency: "95%",
      },
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      status: "ĐẶT TRƯỚC",
    },
  ];

  return (
    <main className="bg-[#F8FAFC]">
      {/* Hero Header style like Image 9 */}
      <div className="relative flex h-[300px] flex-col items-center justify-center overflow-hidden bg-neutral-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1444312645910-ffa973656eba?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          alt="Ảnh sản phẩm chủ lực"
        />
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl leading-tight font-black tracking-normal md:text-5xl">
            Danh mục sản phẩm
          </h1>
          <nav className="flex items-center justify-center gap-2 text-xs font-black tracking-widest uppercase opacity-70">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span className="size-1 rounded-full bg-white" />
            <span className="text-white">Sản phẩm</span>
          </nav>
        </div>
      </div>

      {/* Main Grid style like Image 10 (Sidebar + Grid) */}
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sidebar Filters */}
          <aside className="space-y-10 lg:col-span-3">
            {/* Search Box */}
            <div className="border border-neutral-100 bg-white p-8 shadow-sm">
              <h4 className="border-primary mb-6 w-fit border-b-2 pb-2 text-sm font-black tracking-widest text-[#1B4D2E] uppercase">
                Tìm kiếm
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Mã SP, tên thiết bị..."
                  className="focus:border-primary w-full border border-neutral-100 bg-neutral-50 px-4 py-3 text-sm transition-all focus:outline-none"
                />
                <SearchLight className="absolute top-1/2 right-4 size-4 -translate-y-1/2 text-neutral-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="border border-neutral-100 bg-white p-8 shadow-sm">
              <h4 className="border-primary mb-6 w-fit border-b-2 pb-2 text-sm font-black tracking-widest text-[#1B4D2E] uppercase">
                Loại thiết bị
              </h4>
              <div className="space-y-3">
                {[
                  "Máy bay Không người lái",
                  "Hệ thống Radar",
                  "Quang điện tử",
                  "Thông tin liên lạc",
                  "Dẫn đường & Điều khiển",
                ].map((cat) => (
                  <label
                    key={cat}
                    className="group flex cursor-pointer items-center gap-3"
                  >
                    <Checkbox className="rounded-none border-neutral-300" />
                    <span className="group-hover:text-primary text-sm font-medium text-neutral-600 transition-colors">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Hiệu năng / Công suất */}
            <div className="border border-neutral-100 bg-white p-8 shadow-sm">
              <h4 className="border-primary mb-6 w-fit border-b-2 pb-2 text-sm font-black tracking-widest text-[#1B4D2E] uppercase">
                Hiệu năng / Công suất
              </h4>
              <div className="px-2">
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="mb-6"
                />
                <div className="flex justify-between text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                  <span>Dưới 10kW</span>
                  <span>Trên 100kW</span>
                </div>
              </div>
            </div>

            <Button className="bg-primary shadow-primary/20 w-full rounded-none py-6 text-sm font-semibold tracking-wider text-white uppercase shadow-md hover:bg-[#1B4D2E]">
              ÁP DỤNG BỘ LỌC
            </Button>
          </aside>

          {/* Product Grid */}
          <div className="space-y-10 lg:col-span-9">
            {/* Toolbar style like Image 9 */}
            <div className="flex flex-col items-center justify-between gap-4 border border-neutral-100 bg-white p-6 shadow-sm md:flex-row">
              <div className="text-sm font-medium text-neutral-500">
                Hiển thị <span className="font-black text-[#1B4D2E]">10</span>{" "}
                trong số <span className="font-black text-[#1B4D2E]">42</span>{" "}
                thiết bị kỹ thuật cao
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                  Sắp xếp:
                </span>
                <select className="focus:border-primary border border-neutral-100 bg-neutral-50 px-4 py-2 text-xs font-bold text-[#1B4D2E] focus:outline-none">
                  <option>Mới nhất</option>
                  <option>Mã hiệu A-Z</option>
                  <option>Hiệu năng cao</option>
                </select>
              </div>
            </div>

            {/* Grid style combine */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col overflow-hidden border border-neutral-100 bg-white shadow-sm transition-all hover:shadow-2xl"
                >
                  {/* Image with status badge style Image 10 */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#1B4D2E] px-3 py-1 text-[9px] font-black tracking-widest text-white">
                      {product.status}
                    </div>
                  </div>

                  {/* Content style combine */}
                  <div className="flex flex-grow flex-col p-8">
                    <div className="text-primary mb-2 text-[10px] font-black tracking-[0.2em]">
                      {product.id}
                    </div>
                    <h3 className="group-hover:text-primary mb-4 line-clamp-2 text-lg leading-tight font-black text-[#1B4D2E] transition-colors">
                      {product.title}
                    </h3>

                    {/* Specs style Image 10 */}
                    <div className="mb-8 space-y-2 border-t border-neutral-50 pt-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between text-[11px]"
                        >
                          <span className="font-bold tracking-wider text-neutral-400 uppercase">
                            {key}:
                          </span>
                          <span className="font-black text-[#1B4D2E]">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-3">
                      <Link
                        href={`/san-pham/${product.id}`}
                        className="flex w-full items-center justify-center rounded-none border border-neutral-200 py-4 text-[9px] font-black tracking-widest text-[#1B4D2E] uppercase transition-all hover:bg-neutral-50"
                      >
                        CHI TIẾT
                      </Link>
                      <Link
                        href={`/san-pham/${product.id}/lien-he`}
                        className="hover:bg-primary flex w-full items-center justify-center rounded-none bg-[#1B4D2E] py-4 text-sm font-semibold tracking-wider text-white uppercase transition-all"
                      >
                        TƯ VẤN
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination style Image 9/10 */}
            <div className="flex justify-center gap-2 pt-10">
              <Button
                variant="outline"
                className="bg-primary size-12 rounded-none border-neutral-200 text-sm font-semibold tracking-wider text-white uppercase"
              >
                1
              </Button>
              <Button
                variant="outline"
                className="size-12 rounded-none border-neutral-200 text-sm font-semibold tracking-wider uppercase hover:bg-neutral-50"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="size-12 rounded-none border-neutral-200 text-sm font-semibold tracking-wider uppercase hover:bg-neutral-50"
              >
                3
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-none border-neutral-200 px-6 text-sm font-semibold tracking-wider uppercase hover:bg-neutral-50"
              >
                SAU →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
