import Link from "next/link";

import {
  ArrowRightLight,
  Button,
  CloudDownloadLight,
  MediaPlayCircleLight,
  ShieldLight,
} from "@acme/ui";

import { SectionHeading } from "~/components/molecules/section-heading";

export default async function SanPhamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Mock data based on slug (or just general mock)
  const product = {
    id: slug.toUpperCase(),
    name:
      slug.toUpperCase() === "UAV-X1"
        ? "MBNLK-X1 Trinh sát"
        : "Hệ thống Phòng thủ Tích hợp",
    series: "PRO SERIES ELITE",
    description:
      "Hệ thống giám sát và trinh sát tầm xa thế hệ mới, được tối ưu hóa cho các môi trường khắc nghiệt nhất. Tích hợp AI để nhận diện mục tiêu tự động.",
    classification: "MỨC ĐỘ BẢO MẬT 4",
    quickSpecs: [
      { label: "MÃ SỐ SERIAL", value: `SKU-${slug.toUpperCase()}-V4` },
      { label: "ĐỘ CHÍNH XÁC", value: "±0.001%" },
      { label: "ĐỘ TRỄ", value: "<0.5ms" },
    ],
    parameters: [
      {
        param: "Dải áp suất vận hành",
        value: "0 - 10,000 PSI / 700 Bar",
        note: "Vận hành định mức",
      },
      {
        param: "Tín hiệu đầu ra",
        value: "Digital (MODBus RTU / RS-485)",
        note: "Cách ly nhiễu",
      },
      {
        param: "Chỉ số bảo vệ (IP)",
        value: "IP68 / IP69K (Ngâm nước)",
        note: "Chuẩn MIL-STD",
      },
      {
        param: "Bù nhiệt độ",
        value: "-40°C to +125°C",
        note: "Đã kiểm nghiệm",
      },
      {
        param: "Vật liệu cấu trúc",
        value: "Hợp kim Titanium (Grade 5)",
        note: "Chuẩn hàng không",
      },
    ],
    downloads: [
      { name: "THONGSOKYTHUAT_MBNLKX1_V4.PDF", size: "2.4 MB" },
      { name: "BANTVE_MBNLKX1.ZIP", size: "156 MB" },
      { name: "INTEGRATION_GUIDE.TXT", size: "45 KB" },
    ],
  };

  return (
    <main className="min-h-screen bg-[#1B4D2E] text-white">
      {/* Hero Section style Image 11 */}
      <section className="relative overflow-hidden pt-24 pb-24">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=2070&auto=format&fit=crop"
            alt="Ảnh nền sản phẩm"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A10]/85 to-[#1B4D2E]/40" />
        </div>

        <div className="relative z-10 container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="bg-primary/50 border-primary/50 mb-6 flex w-fit items-center gap-2 border px-3 py-1 text-[10px] font-black tracking-[0.3em] text-white uppercase">
                {product.classification}
              </div>
              <h1 className="mb-8 text-5xl leading-[1.06] font-black tracking-normal uppercase md:text-7xl">
                {product.id} <br />
                <span className="text-primary">{product.series}</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed font-medium text-white">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href={`/san-pham/${slug}/lien-he`}>
                  <Button className="bg-primary hover:text-primary rounded-none px-8 py-6 text-sm font-semibold tracking-wider text-white uppercase hover:bg-white">
                    YÊU CẦU BÁO GIÁ KỸ THUẬT
                  </Button>
                </Link>
                <Link href={`/san-pham/${slug}/lien-he`}>
                  <Button
                    variant="outline"
                    className="rounded-none border-white/20 px-8 py-6 text-sm font-semibold tracking-wider text-white uppercase hover:bg-white/10"
                  >
                    XEM CHI TIẾT THIẾT KẾ
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Specs Box - Styled to match reference image */}
            <div className="group relative overflow-hidden border border-white/10 bg-[#1B4D2E]/40 p-10 backdrop-blur-2xl lg:col-span-5">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldLight className="size-24" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <div className="mb-2 text-[10px] font-black tracking-[0.2em] text-white uppercase">
                    {product.quickSpecs[0]?.label}
                  </div>
                  <div className="text-primary text-2xl font-black tracking-tight">
                    {product.quickSpecs[0]?.value}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="mb-2 text-[10px] font-black tracking-[0.2em] text-white uppercase">
                      {product.quickSpecs[1]?.label}
                    </div>
                    <div className="text-xl font-black text-white">
                      {product.quickSpecs[1]?.value}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] font-black tracking-[0.2em] text-white uppercase">
                      {product.quickSpecs[2]?.label}
                    </div>
                    <div className="text-xl font-black text-white">
                      {product.quickSpecs[2]?.value}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Parameters Section */}
      <section className="bg-white py-16 text-[#1B4D2E]">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <SectionHeading title="Thông số kỹ thuật" />
            <div className="mb-4 text-[10px] font-black tracking-widest text-neutral-400 uppercase">
              TÀI LIỆU: TR-2024-FTC-01
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-left text-white">
                  <th className="p-5 text-[10px] font-black tracking-widest uppercase">
                    Thông số
                  </th>
                  <th className="p-5 text-[10px] font-black tracking-widest uppercase">
                    Giá trị vận hành
                  </th>
                  <th className="p-5 text-[10px] font-black tracking-widest uppercase">
                    Ghi chú
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.parameters.map((p, i) => (
                  <tr
                    key={i}
                    className="border-b border-neutral-100 transition-colors hover:bg-neutral-50"
                  >
                    <td className="text-primary p-5 text-sm font-black uppercase">
                      {p.param}
                    </td>
                    <td className="p-5 text-sm font-medium">{p.value}</td>
                    <td className="p-5 text-xs font-bold tracking-wider text-neutral-400 uppercase">
                      {p.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Media & Downloads Section */}
      <section className="bg-[#F8FAFC] py-12 text-[#1B4D2E]">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* Video Tutorial */}
            <div className="lg:col-span-8">
              <h4 className="mb-6 flex items-center gap-3 text-sm font-black tracking-widest uppercase">
                <span className="bg-primary size-2" /> Video Hướng dẫn Kỹ thuật
              </h4>
              <div className="group relative aspect-video cursor-pointer overflow-hidden bg-neutral-900 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="Video hướng dẫn"
                  className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="group-hover:bg-primary group-hover:border-primary flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all group-hover:scale-110">
                    <MediaPlayCircleLight className="size-12 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-[10px] font-black tracking-widest text-white/60 uppercase">
                  VIDEO: HƯỚNG_DẪN_VẬN_HÀNH_V4.MP4
                </div>
              </div>
            </div>

            {/* Downloads & Support */}
            <div className="space-y-6 lg:col-span-4">
              <div className="border border-neutral-100 bg-white p-8 shadow-sm">
                <h4 className="mb-6 text-[10px] font-black tracking-widest text-neutral-400 uppercase">
                  Tài liệu kỹ thuật
                </h4>
                <div className="space-y-3">
                  {product.downloads.map((file, i) => (
                    <div
                      key={i}
                      className="group hover:bg-primary/5 flex cursor-pointer items-center justify-between bg-neutral-50 p-4 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <CloudDownloadLight className="size-4 text-neutral-400" />
                        <span className="text-xs font-bold text-[#1B4D2E]">
                          {file.name}
                        </span>
                      </div>
                      <span className="text-[9px] font-black text-neutral-400">
                        {file.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1B4D2E] p-8 text-white shadow-lg shadow-[#1B4D2E]/20">
                <h4 className="text-primary mb-3 text-[10px] font-black tracking-widest uppercase">
                  Hỗ trợ vận hành
                </h4>
                <p className="mb-6 text-sm leading-relaxed text-neutral-400">
                  Hỗ trợ kỹ thuật 24/7 cho các đơn vị đã triển khai hệ thống.
                </p>
                <Link href={`/san-pham/${slug}/lien-he`}>
                  <Button className="hover:bg-primary w-full rounded-none bg-white py-5 text-sm font-semibold tracking-wider text-[#1B4D2E] uppercase transition-all hover:text-white">
                    LIÊN HỆ PHÒNG KỸ THUẬT
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Systems Section */}
      <section className="border-t border-neutral-100 bg-white py-16 text-[#1B4D2E]">
        <div className="container">
          <SectionHeading title="Hệ thống liên quan" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "BT-600 CƠ CẤU CHẤP HÀNH NẶNG",
                cat: "CẢM BIẾN / NGUỒN",
                img: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "HUB ĐIỀU KHIỂN TRUNG TÂM",
                cat: "ĐIỀU KHIỂN",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
              },
              {
                name: "KẾT NỐI VỆ TINH",
                cat: "KẾT NỐI",
                img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-square cursor-pointer overflow-hidden shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A10]/85 to-[#1B4D2E]/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-primary mb-2 text-[10px] font-black tracking-widest uppercase">
                    {item.cat}
                  </span>
                  <h5 className="mb-3 text-lg leading-tight font-black text-white">
                    {item.name}
                  </h5>
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white/60 uppercase">
                    XEM CHI TIẾT <ArrowRightLight className="size-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
