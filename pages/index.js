import { SWRConfig } from "swr";
import fetcher from "../store/fetcher";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export default function Home({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <div className="flex h-screen flex-col">
        <Navbar />
        <Slider />
      </div>
    </SWRConfig>
  );
}

const API = `${process.env.DOMAIN}/api/testnets`;

export async function getStaticProps() {
  const resp = await fetcher(API);
  console.log(resp);
  return {
    props: {
      fallback: {
        "/api/testnets": resp,
      },
    },
  };
}
