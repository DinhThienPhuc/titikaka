import ButtonLink from "../components/button-link";
import CommonInformation from "../sections/common-information";

const footerData: {
  [key: string]: {
    title: string;
    links: { label: string; href: string }[];
  };
} = {
  product: {
    title: "Product",
    links: [
      { label: "Editor", href: "/editor" },
      { label: "Collaboration", href: "/collaboration" },
      { label: "Content AI", href: "/content-ai" },
      { label: "Documents", href: "/documents" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  docs: {
    title: "Docs",
    links: [
      { label: "Editor", href: "/docs/editor" },
      { label: "Hocuspocus", href: "/docs/hocuspocus" },
      { label: "Extensions", href: "/docs/extensions" },
      { label: "Examples", href: "/docs/examples" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Release notes", href: "/release-notes" },
      { label: "ROI Calculator", href: "/roi-calculator" },
      { label: "Experiments", href: "/experiments" },
      { label: "MIT license", href: "/license" },
      { label: "Security", href: "/security" },
      { label: "Pro license", href: "/pro-license" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Discord", href: "https://discord.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "X", href: "https://x.com" },
    ],
  },
};

const footerSubItem = [
  "System status",
  "Privacy policy",
  "Terms",
  "Legal notice",
];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pb-9 pt-20 md:pt-28 lg:pt-32 mt-20 rounded-t-3xl bg-footer-img bg-no-repeat bg-cover">
      <div className="-mt-[120px]">
        <CommonInformation
          label=""
          emphasizeSubLabel="Start your journey"
          normalSubLabel="with Tiptap"
          description=""
          textStyle="light"
        />
      </div>

      <div className="text-center mt-8 mb-16 md:mt-12 md:mb-20 lg:mt-16 lg:mb-24">
        <ButtonLink
          variant="inverse"
          rightIcon={
            <img
              src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05437 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.4566 13.8417 6.0427 13.2383 5.47698C12.029 4.34323 10.6931 2.62751 10.1006 0.257462L8.16032 0.742528C8.87215 3.58987 10.4711 5.62416 11.8704 6.93605C11.8933 6.95755 11.9162 6.97887 11.9391 6.99999H0V8.99999H11.9391C11.9162 9.02112 11.8933 9.04243 11.8704 9.06393C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.95729 14.4066 9.54338 14.8166 9.27313C15.0213 9.13826 15.1862 9.03993 15.2965 8.97704C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89382L15.4495 8.89325L16 8.61803V7.38197Z' fill='black'/%3E%3C/svg%3E%0A"
              className="h-2.5"
            />
          }
        >
          Get start now
        </ButtonLink>
      </div>

      <div className="mt-10 flex flex-wrap justify-center lg:w-2/3 lg:mx-auto">
        {Object.keys(footerData).map((key) => {
          return (
            <div key={key} className="w-1/3 md:w-1/4 lg:w-1/5 shrink-0 mb-12">
              <h4 className="text-white text-center text-sm lg:text-base font-poly-sans-median font-semibold">
                {footerData[key].title}
              </h4>
              <span className="mt-2 flex flex-col gap-2">
                {footerData[key].links.map((item) => {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[#fff9] text-center text-sm lg:text-base font-poly-sans-neutral hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-center">
        <span className="text-white text-xs lg:text-sm font-poly-sans-neutral text-center">
          © 2021 Tiptap
        </span>
        <span className="flex gap-4 justify-center">
          {footerSubItem.map((item) => {
            return (
              <a
                key={item}
                href="/status"
                className="text-[#fff9] hover:text-white transition-colors text-xs lg:text-sm font-poly-sans-neutral"
              >
                {item}
              </a>
            );
          })}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
