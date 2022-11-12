import Image from "next/image";
import { formatDistance, subDays } from "date-fns";
import Settings from "../public/icons/settings.svg";
import ClockStroke from "../public/icons/clock_stroke.svg";
import Status from "./Status";

function getCleanName(name) {
  return name.replaceAll(/-|_/gm, " ");
}

function Card({ card }) {
  let bgColor = "bg-white";
  let borderColor = "border-neutral-200";
  if (card.status === "FAILED") {
    bgColor = "bg-red-350";
    borderColor = "border-red-450";
  }
  if (card.status === "KILLED") {
    bgColor = "bg-gray-75";
    borderColor = "border-gray-150";
  }
  return (
    <article
      className={`flex w-full flex-col justify-between space-y-3 rounded-2.5xl border ${borderColor} py-4 pl-4 shadow-card md:py-6 md:px-8 ${bgColor}`}
    >
      <div className="items-center justify-between space-y-3 md:flex md:space-y-0">
        <div className="flex gap-4">
          <span className="text-xl font-bold capitalize text-black-0">
            {getCleanName(card.name)}
          </span>
          <span className="flex items-center rounded-full bg-gray-130 py-0.5 px-3 text-sm font-semibold text-gray-250	">
            5321
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Status status={card.status} />

          <span className="text-gray-135">&#183;</span>
          <div className="flex items-center space-x-1.5 text-blue-50">
            <Settings className="h-3.5 w-3.5" />
            <span className="text-sm font-medium">Settings</span>
          </div>
        </div>
      </div>
      <div className="items-center justify-between space-y-3 md:flex md:space-y-0">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">
            {card.testnet_off_chain_actors.length} off-chain actors
          </span>
          <span className="text-gray-135">&#183;</span>
          <span className="text-sm font-medium">
            {card.testnet_chains.length} Blockchain
          </span>
          <div className="flex -space-x-1 overflow-hidden">
            {card.testnet_chains.map((token) => (
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-150 bg-white"
                key={token.chain}
              >
                <Image
                  className="inline-block h-4 w-4"
                  src={`/images/blockchains/${token.chain}.png`}
                  alt="token"
                  width={16}
                  height={16}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-1.5 text-gray-250 md:justify-end">
          <ClockStroke className="h-3.5 w-3.5" />
          <span className="text-xs+ font-medium">
            {`Modified ${formatDistance(new Date(), new Date(card.created_at), {
              addPrefix: true,
            })}`}
            {/* {dayjs(card.created_at).fromNow()} */}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Card;
