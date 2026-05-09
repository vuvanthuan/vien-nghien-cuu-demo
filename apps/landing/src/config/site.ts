export const siteConfig = {
  name: "Viện Nghiên Cứu",
  description: "Cổng thông tin và đào tạo trực tuyến",
  mainNav: [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Giới thiệu",
      href: "/gioi-thieu",
    },
    {
      title: "Sản phẩm",
      href: "/san-pham",
    },
    {
      title: "Tin tức",
      href: "/tin-tuc",
    },
    {
      title: "Liên hệ",
      href: "/lien-he",
    },
  ],
  links: {
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export type SiteConfig = typeof siteConfig;
