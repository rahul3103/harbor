import Settings from "../public/icons/settings.svg";
import ClockStroke from "../public/icons/clock_stroke.svg";
import Middot from "../public/icons/middot.svg";
import Status from "./Status";
import ImageStacked from "./ImageStacked";
import { getTimeFrom, pluralize } from "../utils/tools";
function getCleanName(name) {
  return name.replaceAll(/-|_/gm, " ");
}

function Card({ card }) {
  let bgColor = "bg-white";
  let borderColor = "border-neutral-200";
  let shadow = "shadow-card";
  if (card.status === "FAILED") {
    bgColor = "bg-red-350";
    borderColor = "border-red-450";
  }
  if (card.status === "KILLED") {
    bgColor = "bg-gray-75";
    borderColor = "border-gray-150";
    shadow = "";
  }

  return (
    <article
      className={`flex w-full flex-col justify-between space-y-3 rounded-2.5xl border py-4 pl-4 md:py-6 md:px-8 ${shadow} ${bgColor} ${borderColor}`}
    >
      <div className="items-center justify-between space-y-3 md:flex md:space-y-0">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold capitalize leading-6 text-black-0">
            {getCleanName(card.name)}
          </span>
          <span className="flex items-center rounded-full bg-gray-130 py-0.5 px-3 text-sm font-semibold text-gray-250	">
            {card.id.substr(-4)}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Status status={card.status} />
          <Middot className="h-1 w-1 text-gray-135" />
          <button className="flex items-center space-x-1.5 text-sm text-blue-50">
            <Settings className="h-3.5 w-3.5" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </div>
      <div className="items-center justify-between space-y-3 md:flex md:space-y-0">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">
            {pluralize(card.testnet_off_chain_actors.length, "off-chain actor")}
          </span>
          <Middot className="h-1 w-1 text-gray-135" />
          <span className="text-sm font-medium">
            {pluralize(card.testnet_chains.length, "Blockchain")}
          </span>
          <ImageStacked stacks={card.testnet_chains} />
        </div>
        <div className="flex items-center space-x-1.5 text-gray-250 md:justify-end">
          <ClockStroke className="h-3.5 w-3.5" />
          <span className="text-xs+ font-medium">
            {`Modified ${getTimeFrom(card.updated_at)}`}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Card;
