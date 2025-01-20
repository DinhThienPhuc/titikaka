interface ICard3Props {
  time: string;
  title: string;
  badges: string[];
  imageUrl: string;
}

const Card3 = ({ time, title, badges, imageUrl }: ICard3Props) => {
  return (
    <a
      href="#"
      className="bg-white h-96 rounded-3xl inline-flex w-full flex-col justify-between relative after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-3xl after:shadow-card-1"
    >
      <span className="p-8">
        <p className="text-xs">{time}</p>
        <h3 className="text-xl font-poly-sans-median mt-4 mb-2">{title}</h3>
        <span className="flex gap-2">
          {badges.map((badge: string) => (
            <span
              key={badge}
              className="border border-black px-1 py-0.5 text-[0.7rem] rounded-md font-poly-sans-median"
            >
              {badge}
            </span>
          ))}
        </span>
      </span>
      <img
        src={imageUrl}
        alt={imageUrl}
        className="h-1/2 w-full rounded-b-3xl"
      />
    </a>
  );
};

export default Card3;
