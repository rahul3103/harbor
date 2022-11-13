import CardList from "./CardList";
import ContainerHeader from "./ContainerHeader";

function Container() {
  return (
    <section className="min-h-content bg-neutral-100 pb-4 md:h-auto md:pb-10 lg:col-span-1">
      <ContainerHeader />
      <CardList />
    </section>
  );
}

export default Container;
