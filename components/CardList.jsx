import useSWR from "swr";
import fetcher from "../store/fetcher";
import Card from "./Card";
import useMenuStore from "../store/menu";
import { filterOptions, sortOptions } from "../utils/options";

function filterCards(cards, value) {
  const option = filterOptions[value];
  if (!option.key) return cards;
  cards.filter((card) => card[option.key] === option.val);
}

function sortCards(cards, value) {
  const option = sortOptions[value];
  if (!option.key) return cards;
  cards.sort((firstItem, secondItem) => {
    if (option.kind === "time")
      return new Date(firstItem[option.key]) < new Date(secondItem[option.key])
        ? 1
        : -1;
    if (option.order === "ascending")
      return firstItem[option.key] > secondItem[option.key] ? 1 : -1;
    if (option.order === "descending")
      return firstItem[option.key] < secondItem[option.key] ? 1 : -1;
  });
}

function CardList() {
  const { data } = useSWR("/api/testnets", fetcher);
  const testnets = data.data.testnet;
  let filteredCards = [...testnets];
  const { filtervalue, sortValue } = useMenuStore((state) => state);
  if (sortOptions[sortValue].order) {
    sortCards(filterCards(filteredCards, filtervalue), sortValue);
  }

  return (
    <div className="space-y-6">
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
