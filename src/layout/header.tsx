import { ButtonHTMLAttributes, useState } from "react";
import ButtonLink from "../components/button-link";
import clsx from "clsx";

const menuItems = [
  { title: "Features", hasSubmenu: true },
  { title: "Customers", hasSubmenu: false },
  { title: "Enterprise", hasSubmenu: false },
  { title: "Pricing", hasSubmenu: false },
  { title: "Docs", hasSubmenu: false },
];

const features = [
  {
    title: "Editor",
    description: "The plug-and-play headless rich text editor framework",
  },
  {
    title: "Collaboration",
    description: "Sync documents and interactions in realtime",
  },
  {
    title: "Content AI",
    description: "Transform in-line text, images and documents with AI",
  },
  {
    title: "Comments",
    description: "Add comments to your editor, documents and nodes",
    beta: true,
  },
];

const infrastructure = [
  {
    title: "Templates",
    description: "User interface React templates ready-to-use for your project",
    beta: true,
  },
  {
    title: "Documents",
    description:
      "Manage your documents and workflow self-hosted or in our cloud",
  },
];

const Logo = () => {
  return (
    <svg
      width="4.2rem"
      height="1rem"
      viewBox="0 0 84 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.2939 2.38667H38.6146V4.59824H34.7075V15.3612H32.201V4.59824H28.2939V2.38667Z"
        fill="currentColor"
      ></path>
      <path
        d="M40.0963 4.4508V2.0918H42.4553V4.4508H40.0963ZM40.0963 15.3612V5.6303H42.4553V15.3612H40.0963Z"
        fill="currentColor"
      ></path>
      <path
        d="M46.7388 5.6303V5.99889C46.7388 6.38592 46.6466 6.68079 46.4807 7.01253C46.407 7.19682 46.278 7.41798 46.4623 7.51013C46.6466 7.60228 46.7572 7.36269 46.7941 7.28897C47.3838 6.25691 48.3606 5.48286 49.8718 5.48286C52.3967 5.48286 54.1106 7.69443 54.1106 10.4957C54.1106 13.2971 52.3967 15.5086 49.8718 15.5086C48.3974 15.5086 47.3838 14.753 46.7941 13.6841C46.7572 13.6288 46.6835 13.4445 46.5176 13.4998C46.3149 13.5735 46.3886 13.7578 46.4807 13.9421C46.6466 14.2738 46.7388 14.5687 46.7388 14.9373V18.8997H44.3798V5.6303H46.7388ZM49.3189 13.3708C50.9776 13.3708 51.7516 12.0438 51.7516 10.4957C51.7516 8.94765 50.9776 7.62071 49.3189 7.62071C47.7708 7.62071 46.7388 8.94765 46.7388 10.4957C46.7388 12.0438 47.7708 13.3708 49.3189 13.3708Z"
        fill="currentColor"
      ></path>
      <path
        d="M61.3459 7.69443H58.692V12.136C58.692 13.2049 58.7104 13.2971 59.7056 13.2971H61.3459V15.3612H59.208C57.2545 15.3612 56.333 14.7161 56.333 12.3756V7.69443H54.5638V5.6303H56.333V2.97642H58.692V5.6303H61.3459V7.69443Z"
        fill="currentColor"
      ></path>
      <path
        d="M69.7536 5.6303H72.1126V15.3612H69.7536V14.9373C69.7536 14.5687 69.8457 14.2738 70.0116 13.9421C70.1037 13.7578 70.1775 13.5735 69.9747 13.4998C69.8089 13.4445 69.7351 13.6288 69.6983 13.6841C69.0164 14.6977 68.0949 15.5086 66.6205 15.5086C64.0957 15.5086 62.3817 13.2971 62.3817 10.4957C62.3817 7.69443 64.0957 5.48286 66.6205 5.48286C68.1318 5.48286 69.1638 6.22005 69.6983 7.28897C69.7351 7.36269 69.8457 7.60228 70.03 7.51013C70.2143 7.41798 70.1037 7.19682 70.0116 7.01253C69.8457 6.68079 69.7536 6.38592 69.7536 5.99889V5.6303ZM67.1734 13.3708C68.7215 13.3708 69.7536 12.0438 69.7536 10.4957C69.7536 8.94765 68.7215 7.62071 67.1734 7.62071C65.5147 7.62071 64.7407 8.94765 64.7407 10.4957C64.7407 12.0438 65.5147 13.3708 67.1734 13.3708Z"
        fill="currentColor"
      ></path>
      <path
        d="M76.3991 5.6303V5.99889C76.3991 6.38592 76.3069 6.68079 76.141 7.01253C76.0673 7.19682 75.9383 7.41798 76.1226 7.51013C76.3069 7.60228 76.4175 7.36269 76.4544 7.28897C77.0441 6.25691 78.0209 5.48286 79.5321 5.48286C82.057 5.48286 83.771 7.69443 83.771 10.4957C83.771 13.2971 82.057 15.5086 79.5321 15.5086C78.0577 15.5086 77.0441 14.753 76.4544 13.6841C76.4175 13.6288 76.3438 13.4445 76.1779 13.4998C75.9752 13.5735 76.0489 13.7578 76.141 13.9421C76.3069 14.2738 76.3991 14.5687 76.3991 14.9373V18.8997H74.0401V5.6303H76.3991ZM78.9792 13.3708C80.6379 13.3708 81.4119 12.0438 81.4119 10.4957C81.4119 8.94765 80.6379 7.62071 78.9792 7.62071C77.4311 7.62071 76.3991 8.94765 76.3991 10.4957C76.3991 12.0438 77.4311 13.3708 78.9792 13.3708Z"
        fill="currentColor"
      ></path>
      <path
        d="M10.2499 0C8.40798 0 6.68237 0.497993 5.20039 1.36667C4.90185 1.54167 4.77093 1.93059 5.02448 2.16608C5.24757 2.37329 5.54646 2.5 5.87494 2.5H14.6248C14.9533 2.5 15.2522 2.37329 15.4753 2.16608C15.7289 1.93059 15.5979 1.54167 15.2994 1.36667C13.8174 0.497993 12.0918 0 10.2499 0Z"
        fill="currentColor"
      ></path>
      <path
        d="M20.2498 10C20.2498 9.30963 19.6902 8.75 18.9998 8.75H1.49999C0.809625 8.75 0.25 9.30963 0.25 10C0.25 10.6904 0.809625 11.25 1.49999 11.25H18.9998C19.6902 11.25 20.2498 10.6904 20.2498 10Z"
        fill="currentColor"
      ></path>
      <path
        d="M15.4753 17.8339C15.7289 18.0694 15.5979 18.4583 15.2994 18.6333C13.8174 19.502 12.0918 20 10.2499 20C8.40798 20 6.68236 19.502 5.20039 18.6333C4.90185 18.4583 4.77092 18.0694 5.02447 17.8339C5.24756 17.6267 5.54646 17.5 5.87494 17.5H14.6248C14.9533 17.5 15.2522 17.6267 15.4753 17.8339Z"
        fill="currentColor"
      ></path>
      <path
        d="M1.49999 5.625C1.49999 4.93463 2.05961 4.375 2.74997 4.375H17.7498C18.4402 4.375 18.9998 4.93463 18.9998 5.625C18.9998 6.31537 18.4402 6.875 17.7498 6.875H2.74997C2.05961 6.875 1.49999 6.31537 1.49999 5.625Z"
        fill="currentColor"
      ></path>
      <path
        d="M1.49999 14.375C1.49999 13.6846 2.05961 13.125 2.74997 13.125H17.7498C18.4402 13.125 18.9998 13.6846 18.9998 14.375C18.9998 15.0654 18.4402 15.625 17.7498 15.625H2.74997C2.05961 15.625 1.49999 15.0654 1.49999 14.375Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const MenuButton = ({
  isMenuOpen,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { isMenuOpen: boolean }) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-6 h-6 bg-transparent border-none flex flex-wrap justify-center items-center cursor-pointer scale-75 transition-all md:hidden",
        isMenuOpen ? "rotate-45" : "rotate-0"
      )}
    >
      <span className="w-1 h-1 bg-black rounded-full m-1"></span>
      <span className="w-1 h-1 bg-black rounded-full m-1"></span>
      <span className="w-1 h-1 bg-black rounded-full m-1"></span>
      <span className="w-1 h-1 bg-black rounded-full m-1"></span>
    </button>
  );
};

const LightRightArrow = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.9573 14.4066 9.54339 14.8166 9.27313C15.0213 9.13826 15.1862 9.03994 15.2965 8.97705C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89383L15.4495 8.89326L16 8.61803V7.38197Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-1 px-2 pb-1 md:pt-3 md:px-3 lg:pt-5">
      <div className="bg-white rounded-xl w-full lg:w-9/12 lg:max-w-3xl lg:mx-auto shadow-card-1">
        <div className="flex items-center justify-between h-12 md:h-[3.25rem] py-2 px-3">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="flex items-center gap-4">
              {menuItems.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={clsx(
                      "text-sm lg:text-base hidden md:block",
                      item.hasSubmenu &&
                        "relative pr-3 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:border-r-2 after:border-b-2 after:border-black after:p-0.5 after:rotate-45 after:transition-transform"
                    )}
                    onClick={() =>
                      item.hasSubmenu && setIsOpen((prev) => !prev)
                    }
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm lg:text-base">Contact sales</button>
            <ButtonLink
              className="inline-flex gap-2 text-sm lg:text-base !font-light items-center !px-1.5 !py-1 rounded-lg border-2 border-transparent bg-neutral-900 text-white border-neutral-900"
              variant="contained"
              rightIcon={<LightRightArrow />}
            >
              Sign in
            </ButtonLink>
            <MenuButton
              isMenuOpen={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
        </div>
        {isOpen && (
          <div className="p-4 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <button className="flex items-center justify-between w-full text-left py-2 hover:bg-gray-100 rounded">
                  <span>{item.title}</span>
                </button>
                {item.hasSubmenu && (
                  <div className="pl-4 space-y-4">
                    <h3 className="font-semibold">
                      Advanced content editing features
                    </h3>
                    {features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full mt-1"></div>
                        <div>
                          <h4 className="font-semibold">
                            {feature.title}
                            {feature.beta && (
                              <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded-full">
                                Beta
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                    <h3 className="font-semibold mt-4">
                      Workflow boost & Infrastructure
                    </h3>
                    {infrastructure.map((item, iIndex) => (
                      <div key={iIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full mt-1"></div>
                        <div>
                          <h4 className="font-semibold">
                            {item.title}
                            {item.beta && (
                              <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded-full">
                                Beta
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
