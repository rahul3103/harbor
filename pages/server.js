import { SWRConfig } from "swr";
import fetcher from "../store/fetcher";
import Slider from "../components/Slider";

export default function Home({ fallback }) {
  return (
    <SWRConfig
      value={{ fallback, revalidateOnMount: false, revalidateOnFocus: false }}
    >
      <Slider />
    </SWRConfig>
  );
}

const API = `${process.env.DOMAIN}/api/testnets`;

export async function getServerSideProps() {
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
