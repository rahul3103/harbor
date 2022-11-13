import useSWR from "swr";
import fetcher from "../store/fetcher";
import Card from "./Card";
import useMenuStore from "../store/menu";
import { filterCards, sortCards } from "../utils/tools";
import CardSkeleton from "./CardSkeleton";

function CardList() {
  const { data, isValidating } = useSWR("/api/testnets", fetcher);
  const { filtervalue, sortValue } = useMenuStore((state) => state);

  if (isValidating)
    return (
      <div className="space-y-6 px-2 md:px-15">
        {[...Array(4).keys()].map((index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );

  const testnets = data.data.testnet;
  let filteredCards = [...testnets];
  sortCards(filteredCards, sortValue);
  filteredCards = filterCards(filteredCards, filtervalue);

  return (
    <div className="space-y-6 px-2 md:px-15">
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
