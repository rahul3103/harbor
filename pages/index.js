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
  let resp = {};
  try {
    resp = await fetcher(API);
    return {
      props: {
        fallback: {
          "/api/testnets": resp,
        },
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
