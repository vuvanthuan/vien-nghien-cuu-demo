import Link from "next/link";

import {
  ArrowRightLight,
  Button,
  GlobeLight,
  ShieldLight,
  ZapLight,
} from "@acme/ui";

import { SectionHeading } from "~/components/molecules/section-heading";

export function ResearchAreas() {
  return (
    <section className="border-t border-neutral-100 bg-white py-10">
      <div className="container">
        <SectionHeading
          subtitle="Năng lực cốt lõi"
          title="Lĩnh Vực Nghiên Cứu Cốt Lõi"
          description="Nền tảng kỹ thuật số cho hệ sinh thái công nghiệp hiện đại."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 1: Tự động hóa & AI (8 cols) */}
          <div className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden bg-[#F4F7FF] p-10 lg:col-span-8">
            <div className="relative z-10 max-w-[60%]">
              <div className="bg-primary/10 text-primary mb-8 flex size-14 items-center justify-center rounded-md">
                <ZapLight className="size-8" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-[#1B4D2E]">
                Tự động hóa & AI
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Phát triển các hệ thống điều khiển thông minh và thuật toán học
                máy tối ưu hóa quy trình sản xuất quy mô lớn.
              </p>
            </div>

            {/* Background Image on the right */}
            <div className="absolute right-0 bottom-0 h-full w-[45%] opacity-20 transition-transform duration-700 group-hover:scale-105 lg:opacity-100">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                className="h-full w-full object-cover"
                alt="AI"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FF] via-[#F4F7FF]/50 to-transparent" />
            </div>

            <div className="relative z-10 mt-8 flex items-center justify-between">
              <Link
                href="#"
                className="text-primary group/link flex items-center gap-2 font-bold"
              >
                Tìm hiểu thêm{" "}
                <ArrowRightLight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
              <ArrowRightLight className="size-6 rotate-[-45deg] text-neutral-300" />
            </div>
          </div>

          {/* Card 2: Năng lượng Tái tạo (4 cols) */}
          <div className="flex min-h-[380px] flex-col justify-between border border-white/5 bg-[#1B4D2E] p-10 text-white transition-all duration-500 hover:shadow-2xl lg:col-span-4">
            <div>
              <div className="mb-8 flex size-14 items-center justify-center rounded-md bg-white/80 text-white">
                <GlobeLight
                  className="size-8 !text-white"
                  color="currentColor"
                />
              </div>
              <h3 className="mb-4 text-3xl font-bold">Năng lượng Tái tạo</h3>
              <p className="border-b border-white/10 pb-8 text-lg leading-relaxed text-neutral-300">
                Giải pháp lưu trữ năng lượng và tối ưu hóa lưới điện thông minh
                cho các khu công nghiệp xanh.
              </p>
            </div>
            <Link
              href="#"
              className="text-primary group/link flex items-center gap-2 text-sm font-black tracking-widest"
            >
              TÌM HIỂU THÊM{" "}
              <ArrowRightLight className="size-4 transition-transform group-hover/link:translate-x-2" />
            </Link>
          </div>

          {/* Card 3: Vật liệu Tiên tiến (4 cols) */}
          <div className="flex min-h-[380px] flex-col justify-between border border-neutral-100 bg-white p-10 lg:col-span-4">
            <div>
              <div className="bg-primary/10 text-primary mb-8 flex size-14 items-center justify-center rounded-md">
                <ShieldLight className="size-8" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-[#1B4D2E]">
                Vật liệu Tiên tiến
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nghiên cứu cấu trúc nano và composite cường độ cao cho ngành
                hàng không và quốc phòng.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <Link
                href="#"
                className="text-primary group/link flex items-center gap-2 font-bold"
              >
                Tìm hiểu thêm{" "}
                <ArrowRightLight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
              <ArrowRightLight className="size-6 rotate-[-45deg] text-neutral-300" />
            </div>
          </div>

          {/* Card 4: Tư vấn Chuyển đổi Số (8 cols) */}
          <div className="flex min-h-[380px] flex-col justify-between border border-neutral-100 bg-white p-10 lg:col-span-8">
            <div className="flex h-full flex-col justify-between gap-12 lg:flex-row lg:items-center">
              <div className="max-w-[60%]">
                <h3 className="mb-4 text-3xl font-bold text-[#1B4D2E]">
                  Tư vấn Chuyển đổi Số
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Lộ trình tích hợp công nghệ 4.0 toàn diện cho doanh nghiệp sản
                  xuất.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button className="hover:bg-primary h-14 rounded-none bg-[#1B4D2E] px-10 text-sm font-semibold tracking-wider text-white uppercase transition-all">
                  Liên hệ chuyên gia
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
