import { Bars3Icon } from "@heroicons/react/20/solid";
import useSWR from "swr";
import SelectMenu from "../SelectMenu";
import fetcher from "../../store/fetcher";
import useMenuStore from "../../store/menu";
import { filterOptions, sortOptions } from "../../utils/options";
import Status from "../Status";
import Add from "../../public/icons/add.svg";
import Middot from "../../public/icons/middot.svg";
import { filterCards } from "../../utils/tools";
import HeaderSkeleton from "../Skeletons/HeaderSkeleton";

function ContainerHeader() {
  const final = useSWR("/api/testnets", fetcher);
  const { data, isValidating, error } = final;
  const {
    filtervalue,
    sortValue,
    updateSort,
    updateFilter,
    toggleMobileDrawer,
  } = useMenuStore((state) => state);
  if (!data || data?.message || error)
    return (
      <h1 className="mt-10 text-center text-2xl font-bold leading-7 text-black-0">
        Something went wrong
      </h1>
    );
  if (isValidating)
    return (
      <div className="bg-neutral-100 px-2 py-4 md:px-15 md:pt-10">
        <HeaderSkeleton />
      </div>
    );
  const testnets = data.data.testnet;

  return (
    <div className="flex-wrap items-center justify-between bg-neutral-100 px-2 py-4 md:px-15 md:pt-10 tablet:flex">
      <div className="flex justify-between align-baseline md:space-x-5">
        <h1 className="text-2xl font-bold leading-7 text-black-0">
          {`Testnets (${filterCards(testnets, filtervalue).length})`}
        </h1>
        <button className="flex items-center space-x-2 text-sm text-blue-50">
          <Add className="h-3.5 w-3.5" />
          <span className="font-semibold">New Testnet</span>
        </button>
      </div>
      <div className="flex flex-col items-center justify-between md:flex-row md:space-x-3">
        <SelectMenu
          selected={filtervalue}
          options={filterOptions.map((option) => (
            <Status key={option.val} status={option.val} />
          ))}
          onUpdate={updateFilter}
          title="Filter By:"
        />
        <Middot className="hidden h-1 w-1 text-gray-135 md:block" />
        <SelectMenu
          selected={sortValue}
          options={sortOptions}
          onUpdate={updateSort}
          title="Sort By:"
        />
        <Middot className="hidden h-1 w-1 text-gray-135 md:block lg:hidden" />
        <button
          type="button"
          className="p-2 text-black-555 hover:text-gray-500 lg:hidden"
          onClick={toggleMobileDrawer}
        >
          <span className="sr-only">Menu</span>
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default ContainerHeader;
