import ButtonLink, { IButtonLinkProps } from "./button-link";

interface ICard2Props {
  image: string;
  label: string;
  description: string;
  buttonLinkProps: IButtonLinkProps;
}

const Card2 = ({
  image,
  label,
  description,
  buttonLinkProps = {},
}: ICard2Props) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full relative after:content-[''] overflow-hidden rounded-3xl after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-3xl after:shadow-card-1">
        <img src={image} alt={image} className="w-full h-full" />
      </div>

      <div className="flex flex-col justify-between mt-6 flex-1">
        <div>
          <h3 className="text-xl font-poly-sans-median">{label}</h3>
          <p className="mt-4 opacity-75 text-sm">{description}</p>
        </div>
        <ButtonLink {...buttonLinkProps} />
      </div>
    </div>
  );
};

export default Card2;
