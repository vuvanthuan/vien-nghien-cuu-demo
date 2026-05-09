import Link from "next/link";

import {
  Button,
  EnvelopeLight,
  GlobeLight,
  MapPinLight,
  PhoneLight,
} from "@acme/ui";

import { siteConfig } from "~/config/site";

export function Footer() {
  const footerLinks = [
    {
      title: "Sản phẩm",
      links: [
        { label: "Hệ thống Máy bay Không người lái", href: "/san-pham" },
        { label: "Giải pháp Trí tuệ Nhân tạo", href: "/san-pham" },
        { label: "Tự động hóa", href: "/san-pham" },
        { label: "Vật liệu mới", href: "/san-pham" },
      ],
    },
    {
      title: "Viện nghiên cứu",
      links: [
        { label: "Giới thiệu", href: "/gioi-thieu" },
        { label: "Đội ngũ chuyên gia", href: "/gioi-thieu" },
        { label: "Dự án tiêu biểu", href: "/" },
        { label: "Tuyển dụng", href: "/gioi-thieu" },
      ],
    },
    {
      title: "Hỗ trợ",
      links: [
        { label: "Tư vấn kỹ thuật", href: "/lien-he" },
        { label: "Câu hỏi thường gặp", href: "/lien-he" },
        { label: "Chăm sóc khách hàng", href: "/lien-he" },
        { label: "Tài liệu hướng dẫn", href: "/lien-he" },
      ],
    },
  ];

  return (
    <footer className="flex w-full flex-col">
      {/* CTA Section */}
      <div className="bg-[#F5F3FF] py-12">
        <div className="container flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="rounded-none bg-[#D1FAE5] px-6 py-4">
            <h2 className="text-2xl font-black tracking-tight text-[#064E3B] uppercase md:text-3xl">
              Bắt đầu hành trình công nghệ ngay
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/lien-he">
              <Button className="h-14 rounded-none bg-black px-10 text-sm font-semibold tracking-wider text-white uppercase hover:bg-neutral-800">
                Đăng ký tư vấn
              </Button>
            </Link>
            <Link href="/lien-he">
              <Button
                variant="outline"
                className="h-14 rounded-none border-neutral-200 bg-white px-10 text-sm font-semibold tracking-wider text-black uppercase hover:bg-neutral-50"
              >
                Yêu cầu Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-neutral-100 bg-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {/* Logo Column */}
            <div className="space-y-8 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="bg-primary flex size-8 items-center justify-center rounded-none font-bold text-white">
                  V
                </div>
                <span className="text-2xl font-black tracking-[0.035em] text-[#1B4D2E]">
                  VNC
                </span>
              </div>
              <p className="text-xs leading-relaxed font-medium text-neutral-400">
                © 2024 {siteConfig.name}. <br /> Bản quyền đã được bảo hộ.
              </p>
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="hover:bg-primary flex size-9 cursor-pointer items-center justify-center rounded-full border border-neutral-100 bg-neutral-50 text-neutral-400 transition-all hover:text-white"
                  >
                    <GlobeLight className="size-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((column, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-sm font-black tracking-widest text-[#1B4D2E] uppercase">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="hover:text-primary text-sm font-medium text-neutral-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-black tracking-widest text-[#1B4D2E] uppercase">
                Thông tin liên hệ
              </h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-3 text-sm font-medium text-neutral-500">
                  <PhoneLight className="size-5 text-neutral-300" />
                  <span>+84 (24) 1234 - 5678</span>
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-neutral-500">
                  <EnvelopeLight className="size-5 text-neutral-300" />
                  <span>contact@iri-research.vn</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-neutral-500">
                  <MapPinLight className="mt-0.5 size-5 text-neutral-300" />
                  <span>Khu công nghệ cao Hòa Lạc, Hà Nội</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-center gap-8 border-t border-neutral-100 pt-8 md:flex-row">
            {[
              "Điều khoản dịch vụ",
              "Chính sách bảo mật",
              "Chính sách Cookie",
            ].map((policy, i) => (
              <Link
                key={i}
                href="#"
                className="hover:text-primary text-[10px] font-bold tracking-widest text-neutral-400 uppercase transition-colors"
              >
                {policy}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
