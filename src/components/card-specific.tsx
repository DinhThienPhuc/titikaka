import ButtonLink, { IButtonLinkProps } from "./button-link";

interface ICardSpecificProps {
  description: string;
  title: string;
  buttonLinkProps: IButtonLinkProps;
  imageUrl: string;
}

const CardSpecific = ({
  description,
  title,
  buttonLinkProps,
  imageUrl,
}: ICardSpecificProps) => {
  return (
    <a
      href="#"
      className="bg-white h-full rounded-3xl inline-flex w-full flex-col lg:flex-row justify-between relative after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-3xl after:shadow-card-1"
    >
      <span className="p-6 lg:flex lg:flex-col lg:justify-center lg:pl-12">
        <h3 className="text-2xl md:text-[34px] lg:text-4xl font-poly-sans-median mt-4 mb-2 lg:mb-4 text-center lg:text-left">
          {title}
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl opacity-[0.7] text-center lg:text-left">
          {description}
        </p>
        <span className="text-center mt-8 hidden lg:block lg:text-left">
          <ButtonLink {...buttonLinkProps} />
        </span>
      </span>
      <span className="lg:shrink-0 lg:flex lg:flex-col lg:justify-between">
        <span className="block text-center mb-8 lg:hidden">
          <ButtonLink {...buttonLinkProps} />
        </span>
        <span className="lg:block" />
        <img
          src={imageUrl}
          alt={imageUrl}
          className="w-11/12 rounded-br-3xl float-right lg:w-auto lg:h-[95%]"
        />
      </span>
    </a>
  );
};

export default CardSpecific;
