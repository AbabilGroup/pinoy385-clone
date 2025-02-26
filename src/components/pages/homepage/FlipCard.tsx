import { CiStar } from "react-icons/ci";

const FlipCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="card">
      <div className="card__content relative p-20 text-center transition-transform duration-1000">
        <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex min-h-[280px] items-center justify-center border border-primary-pi p-28">
          <div className="space-y-2">
            <div className="flex items-center justify-center">
              <CiStar className="text-7xl text-primary-pi" />
            </div>
            <h2 className="text-xl font-semibold uppercase">{title}</h2>
          </div>
        </div>

        <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex min-h-[280px] items-center justify-center bg-accent p-8">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

{
  /* <div className="card">
  <div className="card__content relative p-20 text-center transition-transform duration-1000">
    <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center border border-primary-pi p-28">
      <div className="space-y-2">
        <div className="flex items-center justify-center">
          <CiStar className="text-7xl text-primary-pi" />
        </div>
        <h2 className="text-xl uppercase">{title}</h2>
      </div>
    </div>

    <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-accent p-8">
      <p>{description}</p>
    </div>
  </div>
</div>; */
}
