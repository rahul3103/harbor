import { formatDistance } from "date-fns";

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
