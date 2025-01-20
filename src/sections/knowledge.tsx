import ButtonLink from "../components/button-link";
import Card3 from "../components/card-3";
import CardSpecific from "../components/card-specific";
import CommonInformation from "./common-information";

const CARDS = [
  {
    time: "Nov 15, 2024",
    title: "Introducing more extensive Tiptap experiments",
    badges: [],
    imageUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/67366ff37bcfc4c1566454d6_tiptap_experiments-blog-p-500.jpg",
  },
  {
    time: "Oct 31, 2024",
    title: "Introducing Snapshot Compare for Tiptap",
    badges: ["Documents"],
    imageUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6723950ff0a7d6118387415b_snapshot-compare_blog-p-500.jpg",
  },
  {
    time: "Oct 28, 2024",
    title: "Tiptap v2.9 has arrived",
    badges: ["Documents"],
    imageUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6721f488acdc8aa70e4c8234_tiptap_editor-2-5_blog-p-500.jpg",
  },
];

const Knowledge = () => {
  return (
    <section className="mt-[120px]">
      <CommonInformation
        label="Knowledge"
        emphasizeSubLabel="Code your editor"
        normalSubLabel="with everything you need"
        description="Learn how to build professional editors and get guidance, insights, and access to all the essentials in our docs and blog."
      />

      <div className="flex justify-between w-9/12 mx-auto mt-16">
        <span className="font-tobias text-xl lg:text-2xl">Release notes</span>
        <ButtonLink
          rightIcon={
            <img
              src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05437 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.4566 13.8417 6.0427 13.2383 5.47698C12.029 4.34323 10.6931 2.62751 10.1006 0.257462L8.16032 0.742528C8.87215 3.58987 10.4711 5.62416 11.8704 6.93605C11.8933 6.95755 11.9162 6.97887 11.9391 6.99999H0V8.99999H11.9391C11.9162 9.02112 11.8933 9.04243 11.8704 9.06393C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.95729 14.4066 9.54338 14.8166 9.27313C15.0213 9.13826 15.1862 9.03993 15.2965 8.97704C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89382L15.4495 8.89325L16 8.61803V7.38197Z' fill='black'/%3E%3C/svg%3E%0A"
              className="h-2.5"
            />
          }
        >
          All
        </ButtonLink>
      </div>
      <div className="mt-8 lg:w-11/12 lg:mx-auto">
        <div className="overflow-scroll no-scrollbar">
          <div className="flex gap-4 px-8 pb-1">
            {CARDS.map((card, index) => {
              return (
                <div
                  key={`${card.title}-${index}`}
                  className="w-[80vw] md:w-1/2 lg:w-4/12 shrink-0 mx-auto"
                >
                  <Card3 {...card} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-5/6 h-[500px] md:h-[650px] lg:h-[450px] mx-auto mt-8">
        <CardSpecific
          description="Code with clarity: Explore comprehensive docs and examples to jump start your journey with Tiptap."
          title="Developer's launchpad"
          buttonLinkProps={{
            rightIcon: (
              <img
                src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05437 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.4566 13.8417 6.0427 13.2383 5.47698C12.029 4.34323 10.6931 2.62751 10.1006 0.257462L8.16032 0.742528C8.87215 3.58987 10.4711 5.62416 11.8704 6.93605C11.8933 6.95755 11.9162 6.97887 11.9391 6.99999H0V8.99999H11.9391C11.9162 9.02112 11.8933 9.04243 11.8704 9.06393C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.95729 14.4066 9.54338 14.8166 9.27313C15.0213 9.13826 15.1862 9.03993 15.2965 8.97704C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89382L15.4495 8.89325L16 8.61803V7.38197Z' fill='black'/%3E%3C/svg%3E%0A"
                className="h-2.5"
              />
            ),
            children: "Documentation",
          }}
          imageUrl="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/666710cbb97aa4f3d0f72f65_tiptap-documentation.png"
        />
      </div>
    </section>
  );
};

export default Knowledge;
