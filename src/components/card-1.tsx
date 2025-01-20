import ButtonLink from "./button-link";

interface ICard1Props {
  icon: string;
  label: string;
  badges: string[];
  description: string;
}

const Card1 = ({ icon, label, badges, description }: ICard1Props) => {
  return (
    <a
      href="#"
      className="bg-white h-96 p-8 rounded-3xl inline-flex w-full flex-col justify-between relative after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-3xl after:shadow-card-1"
    >
      <span>
        <img src={icon} alt={icon} className="h-8 mb-6" />
        <h3 className="text-xl font-poly-sans-median">{label}</h3>
        <div className="flex gap-2">
          {badges.map((badge: string) => (
            <span
              key={badge}
              className="border border-black px-1 py-0.5 text-[0.7rem] rounded-md font-poly-sans-median"
            >
              {badge}
            </span>
          ))}
        </div>
        <p className="mt-4 opacity-75 text-sm mb-8">{description}</p>
      </span>
      <ButtonLink
        rightIcon={
          <img
            src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05437 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.4566 13.8417 6.0427 13.2383 5.47698C12.029 4.34323 10.6931 2.62751 10.1006 0.257462L8.16032 0.742528C8.87215 3.58987 10.4711 5.62416 11.8704 6.93605C11.8933 6.95755 11.9162 6.97887 11.9391 6.99999H0V8.99999H11.9391C11.9162 9.02112 11.8933 9.04243 11.8704 9.06393C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.95729 14.4066 9.54338 14.8166 9.27313C15.0213 9.13826 15.1862 9.03993 15.2965 8.97704C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89382L15.4495 8.89325L16 8.61803V7.38197Z' fill='black'/%3E%3C/svg%3E%0A"
            className="h-2.5"
          />
        }
      >
        Learn more
      </ButtonLink>
    </a>
  );
};

export default Card1;
