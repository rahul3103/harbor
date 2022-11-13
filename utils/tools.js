import { formatDistance } from "date-fns";
import { sortOptions, filterOptions } from "./options";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function getTimeFrom(datefrom) {
  const msg = formatDistance(new Date(datefrom), new Date(), {
    addSuffix: false,
  });
  if (msg === "less than a minute") return "now";
  const days = Number(msg.replace(" days", ""));
  if (days > 6 && days < 29) return `${parseInt(days / 7)} weeks ago`;
  return `${msg} ago`;
}

export function filterCards(cards, value) {
  const option = filterOptions[value];
  if (!option.key) return cards;
  return cards.filter((card) => card[option.key] === option.val);
}

export function sortCards(cards, value) {
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
