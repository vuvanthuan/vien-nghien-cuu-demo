"use client";

import { use } from "react";
import dynamic from "next/dynamic";

import {
  Button,
  EnvelopeLight,
  Input,
  PhoneLight,
  ShieldLight,
  Textarea,
} from "@acme/ui";

const Map = dynamic(() => import("~/components/molecules/map"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-neutral-900" />,
});

export default function ProductContactPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const center: [number, number] = [21.0285, 105.8542];

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-16 pb-12">
      <div className="container">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="mb-4 text-4xl leading-tight font-black tracking-normal text-[#1B4D2E] md:text-5xl">
            Liên hệ & hợp tác nghiên cứu
          </h1>
          <p className="max-w-2xl leading-relaxed font-medium text-neutral-500">
            Yêu cầu tư vấn kỹ thuật và báo giá cho hệ thống{" "}
            <span className="text-primary font-black">
              {slug.toUpperCase()}
            </span>
            . Kết nối với các chuyên gia hàng đầu để thảo luận về giải pháp tối
            ưu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column - Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-100 bg-white p-10 shadow-xl shadow-neutral-200/50 lg:p-14">
              <h2 className="mb-4 text-3xl font-black text-[#1B4D2E] uppercase">
                Yêu cầu Tư vấn Kỹ thuật
              </h2>
              <p className="mb-10 text-sm leading-relaxed font-medium text-neutral-400">
                Vui lòng điền chi tiết đề xuất nghiên cứu hoặc yêu cầu kỹ thuật
                của bạn. Đội ngũ chuyên gia sẽ phản hồi trong vòng 24-48 giờ làm
                việc.
              </p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-[#1B4D2E] uppercase">
                      HỌ VÀ TÊN
                    </label>
                    <Input
                      placeholder="Nguyễn Văn A"
                      className="focus:border-primary h-14 rounded-none border-neutral-200 bg-[#F1F5F9] px-6 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-[#1B4D2E] uppercase">
                      EMAIL TỔ CHỨC
                    </label>
                    <Input
                      placeholder="ho.ten@donvi.gov.vn"
                      type="email"
                      className="focus:border-primary h-14 rounded-none border-neutral-200 bg-[#F1F5F9] px-6 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#1B4D2E] uppercase">
                    LĨNH VỰC NGHIÊN CỨU
                  </label>
                  <select className="focus:border-primary h-14 w-full rounded-none border border-neutral-200 bg-[#F1F5F9] px-6 text-sm font-medium outline-none">
                    <option>Hệ thống Động lực học</option>
                    <option>Vật liệu Hàng không</option>
                    <option>Hệ thống Điều khiển Tự động</option>
                    <option>An ninh mạng & AI</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#1B4D2E] uppercase">
                    CHI TIẾT ĐỀ XUẤT (TECHNICAL SCOPE)
                  </label>
                  <Textarea
                    placeholder={`Yêu cầu kỹ thuật chi tiết cho ${slug.toUpperCase()}...`}
                    className="focus:border-primary min-h-[180px] rounded-none border-neutral-200 bg-[#F1F5F9] p-6 leading-relaxed font-medium"
                  />
                </div>

                <div className="flex items-start gap-4 border-l-4 border-[#2D7A4F] bg-[#D4EAD8] p-6">
                  <ShieldLight className="mt-1 size-6 shrink-0 text-[#2D7A4F]" />
                  <p className="text-xs leading-relaxed font-bold text-[#1B4D2E]">
                    Dữ liệu được bảo mật theo tiêu chuẩn ISO 27001 và các giao
                    thức an ninh quốc phòng.
                  </p>
                </div>

                <Button className="hover:bg-primary flex w-full items-center justify-center gap-3 rounded-none bg-[#1B4D2E] px-12 py-8 text-sm font-semibold tracking-wider text-white uppercase md:w-fit">
                  GỬI YÊU CẦU NGHIÊN CỨU
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Specialized Units & Info */}
          <div className="space-y-10 lg:col-span-5">
            {/* Specialized Units */}
            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-xl font-black text-[#1B4D2E] uppercase">
                Đơn vị Chuyên trách
              </h3>
              <div className="space-y-4">
                <div className="group hover:border-primary border border-neutral-100 bg-white p-6 shadow-sm transition-all">
                  <div className="mb-3 flex items-start justify-between">
                    <h4 className="text-primary text-[10px] font-black tracking-widest uppercase">
                      PHÒNG NGHIÊN CỨU CHIẾN LƯỢC
                    </h4>
                    <div className="bg-primary size-2 animate-pulse" />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed font-medium text-neutral-500">
                    Chuyên trách các dự án cấp quốc gia và hợp tác quốc tế.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1B4D2E]">
                    <EnvelopeLight className="size-4 text-neutral-300" />{" "}
                    strategic@aero-res.vn
                  </div>
                </div>

                <div className="group hover:border-primary border border-neutral-100 bg-white p-6 shadow-sm transition-all">
                  <div className="mb-3 flex items-start justify-between">
                    <h4 className="text-primary text-[10px] font-black tracking-widest uppercase">
                      TRUNG TÂM KIỂM ĐỊNH KỸ THUẬT
                    </h4>
                    <div className="bg-primary size-2 animate-pulse" />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed font-medium text-neutral-500">
                    Tiêu chuẩn hóa và cấp chứng nhận an toàn hàng không.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1B4D2E]">
                    <PhoneLight className="size-4 text-neutral-300" /> +84 (24)
                    3999 8888
                  </div>
                </div>
              </div>
            </div>

            {/* Office Info */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-black text-[#1B4D2E] uppercase">
                Văn phòng Đại diện
              </h3>
              <div className="group relative aspect-[16/9] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Văn phòng đại diện"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A10]/85 to-[#1B4D2E]/40 opacity-80" />
                <div className="absolute bottom-6 left-6 border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="mb-1 text-[10px] font-black tracking-widest text-white/60 uppercase">
                    TRỤ SỞ HÀ NỘI
                  </div>
                  <div className="text-xs font-black tracking-[0.035em] text-white">
                    21.0285° N, 105.8542° E
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div>
                  <h5 className="mb-2 text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                    ĐỊA CHỈ TRỤ SỞ
                  </h5>
                  <p className="text-sm leading-relaxed font-bold text-[#1B4D2E]">
                    Khu Công nghệ cao Hòa Lạc, Km 29 Đại lộ Thăng Long, Thạch
                    Thất, Hà Nội, Việt Nam.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h5 className="mb-2 text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                      GIỜ HOẠT ĐỘNG
                    </h5>
                    <p className="text-xs font-bold text-[#1B4D2E]">
                      Thứ 2 - Thứ 6
                    </p>
                    <p className="text-xs font-medium text-neutral-500">
                      08:00 - 17:30 (GMT+7)
                    </p>
                  </div>
                  <div>
                    <h5 className="mb-2 text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                      HỖ TRỢ KỸ THUẬT
                    </h5>
                    <p className="text-xs font-bold text-[#1B4D2E]">
                      24/7 Hotline
                    </p>
                    <p className="text-xs font-medium text-neutral-500">
                      1900-AERO-RES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-12 border-t border-neutral-200">
        <div className="relative h-[500px] w-full">
          <Map center={center} markerText="Trụ sở Viện Nghiên Cứu VNC" />
        </div>
      </section>
    </main>
  );
}
