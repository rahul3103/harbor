import { Bars3Icon, Squares2X2Icon } from "@heroicons/react/20/solid";
import useSWR from "swr";
import CardList from "./CardList";
import SelectMenu from "./SelectMenu";
import fetcher from "../store/fetcher";
import useMenuStore from "../store/menu";
import { filterOptions, sortOptions } from "../utils/options";
import Status from "./Status";
import Add from "../public/icons/add.svg";

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
    <section className="bg-neutral-100 pb-4 md:pb-10 lg:col-span-1">
      <div className="bg-neutral-100 px-2 md:px-15">
        <div className="items-center justify-between  pt-4 pb-5 md:flex md:pt-10">
          <div className="flex justify-between  md:space-x-5">
            <h1 className="text-2xl font-bold tracking-tight text-black-0">
              {`Testnets (${testnets.length})`}
            </h1>
            <button className="btn flex items-center space-x-2 text-sm text-blue-50">
              <Add className="h-3.5 w-3.5" />
              <span className="font-semibold">New Testnet</span>
            </button>
          </div>
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
      </div>

      <div className="px-2 md:px-15">
        <CardList />
      </div>
    </section>
  );
}

export default Container;
