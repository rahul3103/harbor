import LeftArrow from "../public/icons/left_arrow.svg";
import Project from "../public/icons/project.svg";
import Testnets from "../public/icons/testnets.svg";
import Members from "../public/icons/members.svg";
import ProjectKey from "../public/icons/project_key.svg";
import Add from "../public/icons/add.svg";
import Clone from "../public/icons/clone.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useMenuStore from "../store/menu";

function Panel({ onDrawer }) {
  const { toggleMobileDrawer } = useMenuStore((state) => state);

  return (
    <aside
      className={`${
        onDrawer ? "block" : "hidden"
      } border-r border-solid border-gray-150 lg:block`}
    >
      <div className="flex justify-between border-b border-solid border-gray-150 py-1 pr-5">
        <button className="btn ml-4 gap-3 px-2 text-gray-250">
          <LeftArrow className="w-3.5" />
          <span className="text-sm font-semibold normal-case">
            Back to all projects
          </span>
        </button>
        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 lg:hidden"
          onClick={toggleMobileDrawer}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="pt-3">
        <div className="flex items-center gap-3 px-3 py-2">
          <span className="pl-2">
            <Project className="w-4 text-gray-150" />
          </span>
          <span className="text-base font-semibold text-black-0">
            Acme frontend
          </span>
        </div>
        <ul className="space-y-1 px-3 py-2 text-black-0">
          <li>
            <a className="flex items-center gap-3 rounded-lg bg-gray-75 py-2 pl-9 pr-5">
              <Testnets className="w-4" />
              <div className="flex flex-1 items-center gap-1.5">
                <span>Testnets</span>
                <span className="flex h-5 w-6 items-center rounded-full border border-gray-125 bg-white py-1 px-2 text-xs">
                  8
                </span>
              </div>
              <Add className="w-4 text-gray-175" />
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 rounded-lg py-2 pl-9 pr-5 hover:bg-gray-75">
              <Members className="w-4" />
              <div className="flex flex-1 items-center gap-1.5">
                <span>Members</span>
                <span className="flex h-5 w-6 items-center rounded-full border border-gray-125 bg-white py-1 px-2 text-xs">
                  1
                </span>
              </div>
              <Add className="w-4 text-gray-175" />
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 rounded-lg py-2 pl-9 pr-5 hover:bg-gray-75">
              <ProjectKey className="w-4" />
              <div className="flex flex-1 items-center gap-1.5">
                <span>Project Key</span>
              </div>
              <Clone className="w-4 text-gray-175" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Panel;