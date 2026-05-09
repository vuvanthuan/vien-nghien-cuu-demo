import Link from "next/link";

import { Button, cn, GlobeLight, SearchLight } from "@acme/ui";

import { siteConfig } from "~/config/site";

export function Header() {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex gap-8 md:gap-12">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-primary flex size-9 items-center justify-center rounded-none text-xl font-black text-white">
              v
            </div>
            <span className="inline-block text-2xl font-black tracking-[0.035em] text-[#1B4D2E]">
              VNC
            </span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            {siteConfig.mainNav.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-semibold text-[#1B4D2E]/80 transition-colors hover:text-[#1B4D2E]",
                    )}
                  >
                    {item.title}
                  </Link>
                ),
            )}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden items-center gap-2 text-[#0F1A10] hover:text-[#1B4D2E] lg:flex"
            >
              <SearchLight className="size-4" />
              <span>Tìm kiếm</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden items-center gap-2 rounded-none border-[#B5C4B1] text-[#0F1A10] lg:flex"
            >
              <GlobeLight className="size-4" />
              <span>VI/EN</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
