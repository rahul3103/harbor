import useSWR from "swr";
import fetcher from "../store/fetcher";
import Card from "./Card";
import useMenuStore from "../store/menu";
import { filterOptions, sortOptions } from "../utils/options";

function filterCards(cards, value) {
  const option = filterOptions[value];
  if (!option.key) return cards;
  return cards.filter((card) => card[option.key] === option.val);
}

function sortCards(cards, value) {
  const option = sortOptions[value];
  if (!option.key) return cards;
  return cards.sort((firstItem, secondItem) =>
    firstItem[option.key] > secondItem[option.key] ? 1 : -1
  );
}

function CardList() {
  const { data } = useSWR("/api/testnets", fetcher);
  const testnets = data.data.testnet;
  const { filtervalue, sortValue } = useMenuStore((state) => state);
  const filteredCards = sortCards(
    filterCards(testnets, filtervalue),
    sortValue
  );

  return (
    <div className="space-y-6">
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
