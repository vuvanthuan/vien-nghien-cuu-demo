export function Partners() {
  const partners = ["TCVN-9001", "VN-TECH", "VKHQS", "PTN-A", "CHKQS"];

  return (
    <section className="border-t border-white/10 bg-[#1B4D2E] py-12">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale transition-all hover:grayscale-0 md:justify-between">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="hover:text-primary cursor-default text-xl font-black tracking-[0.2em] text-white transition-colors md:text-2xl"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
