import clsx from "clsx";

const FEATURE_TEXT = [
  "Headless",
  "Modular",
  "Expandable",
  "Flexible",
  "Fully Customizable",
  "SEO Friendly",
  "Maximally scalable",
  "Cloud or On premises",
];

const dumpArray = Array.from({ length: 8 });

const MostFeatures = () => {
  return (
    <section className="mt-[120px] w-screen">
      {FEATURE_TEXT.map((text, index1) => {
        return (
          <div
            className="overflow-scroll no-scrollbar flex"
            dir={index1 % 2 === 1 ? "rtl" : "ltr"}
          >
            {dumpArray.map((_: unknown, index2: number) => {
              return (
                <div
                  aria-hidden={
                    index1 % 2 === 1
                      ? index2 !== dumpArray.length - 1
                      : !!index2
                  }
                  className={clsx(
                    "flex gap-16 shrink-0 will-change-transform mr-8",
                    index1 % 2 === 1
                      ? "infinity-scroll-inverse-35s"
                      : "infinity-scroll-35s"
                  )}
                >
                  <span
                    className={clsx(
                      "font-poly-sans-median text-9xl md:text-[10rem] lg:text-[11rem] font-bold",
                      index2 % 2 === 1 ? "outlined" : ""
                    )}
                  >
                    {text}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default MostFeatures;
