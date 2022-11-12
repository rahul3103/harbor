import { Bars3Icon, Squares2X2Icon } from "@heroicons/react/20/solid";
import useSWR from "swr";
import CardList from "./CardList";
import SelectMenu from "./SelectMenu";
import fetcher from "../store/fetcher";
import useMenuStore from "../store/menu";
import { filterOptions, sortOptions } from "../utils/options";
import Status from "./Status";

function Container() {
  const { data } = useSWR("/api/testnets", fetcher);
  const testnets = data.data.testnet;
  const {
    filtervalue,
    sortValue,
    updateSort,
    updateFilter,
    toggleMobileDrawer,
  } = useMenuStore((state) => state);

  return (
    <section className="bg-neutral-100 px-2 py-4 md:px-15 md:py-10 lg:col-span-1">
      <div className="items-baseline justify-between pb-5 md:flex">
        <h1 className="text-2xl font-bold tracking-tight text-black-0">
          {`Testnets (${testnets.length})`}
        </h1>
        <div className="flex items-center justify-between md:space-x-3">
          <SelectMenu
            selected={filtervalue}
            options={filterOptions.map((option) => (
              <Status key={option.val} status={option.val} />
            ))}
            onUpdate={updateFilter}
            title="Filter By:"
          />
          <span className="text-gray-135">&#183;</span>
          <SelectMenu
            selected={sortValue}
            options={sortOptions}
            onUpdate={updateSort}
            title="Sort By:"
          />
          <span className="text-gray-135 lg:hidden">&#183;</span>

          {/* <button
            type="button"
            className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
          >
            <span className="sr-only">View grid</span>
            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
          </button> */}
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
      <CardList />
    </section>
  );
}

export default Container;
