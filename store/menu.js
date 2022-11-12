import create from "zustand";

const useMenuStore = create((set) => ({
  sortValue: 0,
  filtervalue: 0,
  mobileDrawer: false,
  updateSort: (sortValue) => set(() => ({ sortValue })),
  updateFilter: (filtervalue) => set(() => ({ filtervalue })),
  toggleMobileDrawer: () =>
    set(({ mobileDrawer }) => ({ mobileDrawer: !mobileDrawer })),
}));

export default useMenuStore;
