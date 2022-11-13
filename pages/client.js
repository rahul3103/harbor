import { SWRConfig } from "swr";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <Slider />
    </SWRConfig>
  );
}
