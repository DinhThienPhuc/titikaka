import ButtonLink from "../components/button-link";
import Card2 from "../components/card-2";
import CommonInformation from "./common-information";

const TEMPLATE_CARDS = [
  {
    image:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66703e6b957feabc6dd7f02a_notion-like-template.jpg",
    label: "Notion like template",
    description:
      "Launch your product with our prebuilt notion-like template and quickly release a full fledged editor experience.",
    buttonLinkProps: {
      children: "Preview",
      rightIcon: (
        <img
          src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05437 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.4566 13.8417 6.0427 13.2383 5.47698C12.029 4.34323 10.6931 2.62751 10.1006 0.257462L8.16032 0.742528C8.87215 3.58987 10.4711 5.62416 11.8704 6.93605C11.8933 6.95755 11.9162 6.97887 11.9391 6.99999H0V8.99999H11.9391C11.9162 9.02112 11.8933 9.04243 11.8704 9.06393C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.95729 14.4066 9.54338 14.8166 9.27313C15.0213 9.13826 15.1862 9.03993 15.2965 8.97704C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89382L15.4495 8.89325L16 8.61803V7.38197Z' fill='black'/%3E%3C/svg%3E%0A"
          className="h-2.5"
        />
      ),
    },
  },
  {
    image:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6684707bccb9c4d8f5c8e50e_basic_editor-template.jpg",
    label: "Simple editor template",
    description:
      "Add threads and comments to your documents and app with our Editor extension and Comments UI template.",
    buttonLinkProps: {
      children: "In development",
      disabled: true,
    },
  },
  {
    image:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/668468208d16778b95827777_tiptap_comments_template.jpg",
    label: "Comment template",
    description:
      "Add threads and comments to your documents and app with our Editor extension and Comments UI template.",
    buttonLinkProps: {
      children: "In development",
      disabled: true,
    },
  },
];

const Templates = () => {
  return (
    <section className="mt-[120px]">
      <CommonInformation
        label="Templates"
        emphasizeSubLabel="Set up your editor"
        normalSubLabel="with React templates"
        description="Get to market in the fast lane with our front-end templates. Customize, combine, and adapt them to your UX."
      />

      <div className="text-center mt-16">
        <ButtonLink
          rightIcon={
            <img
              src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05437 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.4566 13.8417 6.0427 13.2383 5.47698C12.029 4.34323 10.6931 2.62751 10.1006 0.257462L8.16032 0.742528C8.87215 3.58987 10.4711 5.62416 11.8704 6.93605C11.8933 6.95755 11.9162 6.97887 11.9391 6.99999H0V8.99999H11.9391C11.9162 9.02112 11.8933 9.04243 11.8704 9.06393C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.95729 14.4066 9.54338 14.8166 9.27313C15.0213 9.13826 15.1862 9.03993 15.2965 8.97704C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89382L15.4495 8.89325L16 8.61803V7.38197Z' fill='black'/%3E%3C/svg%3E%0A"
              className="h-2.5"
            />
          }
        >
          Explore templates
        </ButtonLink>
      </div>

      <div className="mt-16">
        <div className="overflow-scroll no-scrollbar">
          <div className="flex gap-8 px-8">
            {[...TEMPLATE_CARDS, ...TEMPLATE_CARDS, ...TEMPLATE_CARDS].map(
              (card, index) => {
                return (
                  <div
                    key={`${card.label}-${index}`}
                    className="w-[80vw] md:w-1/2 lg:w-3/12 h-96 md:h-[26rem] shrink-0 mx-auto"
                  >
                    <Card2 {...card} />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
