"use client";

import dynamic from "next/dynamic";

import {
  ArrowRightLight,
  Button,
  cn,
  EnvelopeLight,
  Input,
  MapPinLight,
  PhoneLight,
  ShieldLight,
  Textarea,
} from "@acme/ui";

const Map = dynamic(() => import("~/components/molecules/map"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-neutral-900" />,
});

export default function LienHePage() {
  const center: [number, number] = [21.0285, 105.8542];

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="container pb-20">
        {/* Header Section */}
        <div className="mb-10 border-l-4 border-[#1B4D2E] pl-8">
          <h1 className="mb-4 text-4xl leading-tight font-black tracking-normal text-[#1B4D2E] md:text-5xl">
            Tư vấn kỹ thuật & liên hệ
          </h1>
          <p className="max-w-2xl leading-relaxed font-medium text-neutral-500">
            Kết nối với các chuyên gia kỹ thuật của chúng tôi để được hỗ trợ
            chính xác, hợp tác nghiên cứu và cấp chứng chỉ công nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6 lg:col-span-5">
            {/* Headquarters */}
            <div className="group hover:border-primary border border-neutral-100 bg-white p-8 shadow-sm transition-colors">
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center">
                  <MapPinLight className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-black text-[#1B4D2E] uppercase">
                    Trụ sở chính
                  </h3>
                  <p className="text-sm leading-relaxed font-bold text-neutral-500">
                    123 Tech Park Avenue, High-Tech District
                    <br />
                    Hanoi, Vietnam 100000
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group hover:border-primary border border-neutral-100 bg-white p-8 shadow-sm transition-colors">
                <PhoneLight className="text-primary mb-4 size-5" />
                <h4 className="mb-1 text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                  Điện thoại
                </h4>
                <p className="text-sm font-black text-[#1B4D2E]">
                  +84 (0) 24 3456 7890
                </p>
              </div>
              <div className="group hover:border-primary border border-neutral-100 bg-white p-8 shadow-sm transition-colors">
                <EnvelopeLight className="text-primary mb-4 size-5" />
                <h4 className="mb-1 text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                  Email
                </h4>
                <p className="text-sm font-black text-[#1B4D2E]">
                  inquiry@iri-eng.vn
                </p>
              </div>
            </div>

            {/* Operations Center */}
            <div className="relative overflow-hidden bg-[#0F1A10] p-10 text-white">
              <div className="relative z-10">
                <h3 className="mb-8 border-b border-white/10 pb-4 text-xl font-black uppercase">
                  Trung tâm điều hành
                </h3>
                <div className="space-y-4">
                  {[
                    { day: "Thứ 2 - Thứ 6", time: "08:00 - 17:00" },
                    { day: "Thứ 7", time: "08:00 - 12:00" },
                    {
                      day: "Chủ nhật",
                      time: "ĐÓNG CỬA",
                      color: "text-red-400",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs font-bold tracking-wider uppercase"
                    >
                      <span className="text-neutral-400">{item.day}</span>
                      <span className={cn(item.color ?? "text-white")}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <ShieldLight className="absolute -right-10 -bottom-10 size-40 text-white/5" />
            </div>

            {/* Industrial Image */}
            <div className="aspect-[16/9] overflow-hidden contrast-125 grayscale">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Phòng thí nghiệm công nghiệp"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Inquiry Form */}
          <div className="border border-neutral-100 bg-white p-10 shadow-lg shadow-neutral-100/50 lg:col-span-7 lg:p-16">
            <h2 className="mb-4 text-3xl font-black text-[#1B4D2E] uppercase">
              Yêu cầu Tư vấn Kỹ thuật
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-medium text-neutral-400">
              Gửi thông số dự án hoặc yêu cầu nghiên cứu của bạn. Đội ngũ chuyên
              gia của chúng tôi sẽ xem xét và phản hồi trong vòng 24 giờ làm
              việc.
            </p>

            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#1B4D2E] uppercase">
                    Họ và tên *
                  </label>
                  <Input
                    placeholder="Nguyễn Văn A"
                    className="focus:border-primary h-12 rounded-none border-neutral-200 bg-neutral-50 px-6 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#1B4D2E] uppercase">
                    Tổ chức / Đơn vị *
                  </label>
                  <Input
                    placeholder="Công ty / Trường đại học"
                    className="focus:border-primary h-12 rounded-none border-neutral-200 bg-neutral-50 px-6 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#1B4D2E] uppercase">
                    Địa chỉ Email *
                  </label>
                  <Input
                    placeholder="lienhe@xuongvukhi.vn"
                    type="email"
                    className="focus:border-primary h-12 rounded-none border-neutral-200 bg-neutral-50 px-6 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#1B4D2E] uppercase">
                    Loại yêu cầu
                  </label>
                  <select className="focus:border-primary h-12 w-full rounded-none border border-neutral-200 bg-neutral-50 px-6 text-sm font-medium outline-none">
                    <option>Tư vấn kỹ thuật</option>
                    <option>Hợp tác nghiên cứu</option>
                    <option>Yêu cầu báo giá</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-[#1B4D2E] uppercase">
                  Thông số dự án / Lời nhắn
                </label>
                <Textarea
                  placeholder="Vui lòng mô tả chi tiết yêu cầu kỹ thuật hoặc đề xuất nghiên cứu của bạn..."
                  className="focus:border-primary min-h-[160px] rounded-none border-neutral-200 bg-neutral-50 p-6 leading-relaxed font-medium"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="accent-primary size-4 rounded-none"
                />
                <label
                  htmlFor="consent"
                  className="text-[11px] font-bold text-neutral-400"
                >
                  Tôi đồng ý với việc xử lý dữ liệu của mình theo{" "}
                  <span className="hover:text-primary cursor-pointer text-[#1B4D2E] underline">
                    Chính sách bảo mật
                  </span>
                  .
                </label>
              </div>

              <Button className="hover:bg-primary flex w-full items-center gap-3 rounded-none bg-[#1B4D2E] px-12 py-7 text-sm font-semibold tracking-wider text-white uppercase md:w-fit">
                GỬI YÊU CẦU KỸ THUẬT <ArrowRightLight className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="border-t border-neutral-200 bg-neutral-100">
        <div className="relative h-[500px] w-full overflow-hidden">
          <Map center={center} markerText="Trụ sở chính Viện Nghiên Cứu VNC" />
        </div>
      </section>
    </main>
  );
}
