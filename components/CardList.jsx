import useSWR from "swr";
import fetcher from "../store/fetcher";
import Card from "./Card";
import useMenuStore from "../store/menu";
import { filterCards, sortCards } from "../utils/tools";

function CardList() {
  const { data } = useSWR("/api/testnets", fetcher);
  const testnets = data.data.testnet;
  let filteredCards = [...testnets];
  const { filtervalue, sortValue } = useMenuStore((state) => state);
  sortCards(filteredCards, sortValue);
  filteredCards = filterCards(filteredCards, filtervalue);

  return (
    <div className="space-y-6">
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
