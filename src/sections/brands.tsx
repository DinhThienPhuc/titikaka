const brandsLogoUrls = [
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6780370fe4f75d3e91658bf2_thomson-reuters.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6765e8e251f5f8968c12de85_softexpert.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cf1d5842eaaa1369ec6c50_devrev.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cf1d3ad95bb891bb886bf4_scispace.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cf1ceb520ae15fbc1bfc12_bcg.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cf1ccd02eedd5e7621532e_reforge.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cef353420e0a8fd1d073f4_businessinsider.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6685ac2ed25ff116e7036155_deshawco.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66845e04c83ce5e180c03d76_posthog.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6679800e2efdf373581d13c8_linkedin.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/665ecfe1dd87825e576be850_productboard.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/665ecfc8e0c4cf1af23aef1a_axios.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/663a40baf0c0e3b8ff9d6a1b_staffbase.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66335bc65a5a96f03bd85095_beehiiv.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/667981520bfc75ec20044b65_front.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e2eb29fc38df24195b60e_charthop.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e54f7c691931c6ec6c258_jenniai.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e2e1ba78911d63f49f9cb_chegg.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e2dfbac8a307e381bb651_trainual.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e2cceccde7eb0623d6fc1_usertesting.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/65e8c99c97e1bfd2fe178f02_substack-wordmark.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e343961306cad6bbc9871_opal.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6567a8074d76ae804cd035d6_nextcloud.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6567a7db676805c34dc0bdb0_axioshq.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6567b06b17f49566a6f14e70_ycombinator.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6679c62c78c86381261859b6_ahrefs.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6567a745a93a6c937428f137_storyblok-long.svg",
  "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6679c641396e8cd540a7977b_gitlab-long.svg",
];

const Brands = () => {
  return (
    <section className="mt-[120px] w-screen">
      <div className="overflow-scroll no-scrollbar flex">
        <div className="flex gap-16 shrink-0 will-change-transform infinity-scroll mr-16">
          {brandsLogoUrls.map((url) => {
            return (
              <div
                key={url}
                className="flex justify-center items-center h-12 min-w-fit"
              >
                <img src={url} alt={url} className="h-100%" />
              </div>
            );
          })}
        </div>
        <div
          aria-hidden
          className="flex gap-16 shrink-0 will-change-transform infinity-scroll mr-16"
        >
          {brandsLogoUrls.map((url) => {
            return (
              <div
                key={`duplicate-${url}`}
                className="flex justify-center items-center h-12 min-w-fit"
              >
                <img src={url} alt={url} className="h-100%" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
