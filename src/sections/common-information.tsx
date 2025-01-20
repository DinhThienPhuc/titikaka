interface ICommonInformationProps {
  label: string;
  emphasizeSubLabel: string;
  normalSubLabel: string;
  description: string;
}

const CommonInformation = ({
  label,
  emphasizeSubLabel,
  normalSubLabel,
  description,
}: ICommonInformationProps) => {
  return (
    <div className="mt-[120px]">
      <p className="text-xl text-center">{label}</p>
      <h2 className="text-[2.8rem] md:text-[4rem] w-5/6 leading-[3rem] md:leading-[4rem] mx-auto font-poly-sans-median font-bold mt-6">
        <span className="block text-center">{emphasizeSubLabel}</span>
        <span className="block text-center text-[0.95em] font-tobias font-light md:w-5/6 lg:w-5/12 md:mx-auto">
          {normalSubLabel}
        </span>
      </h2>
      <p className="text-xl text-center mt-6 w-11/12 md:w-5/6 lg:w-5/12 mx-auto mb-8 md:mb-12">
        {description}
      </p>
    </div>
  );
};

export default CommonInformation;
