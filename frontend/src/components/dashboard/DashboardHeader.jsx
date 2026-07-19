import HeaderCard from "./HeaderCard";
import HeaderStatus from "./HeaderStatus";
import useHeaderCards from "./useHeaderCards";

const DashboardHeader = ({ activeTab, analysis }) => {
  const { current, cards } = useHeaderCards(activeTab, analysis);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-3">
        <div>
          <div className="flex items-center gap-4">
            <div>
              <h1 className="font-heading text-xl font-bold tracking-tight text-white">
                {current.title}
              </h1>

              <p className=" font-body mt-1 text-sm text-slate-400">
                {current.subtitle}
              </p>
            </div>
          </div>

          <HeaderStatus />
        </div>

        <div className="flex gap-2">
          {cards.map((card) => (
            <HeaderCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
