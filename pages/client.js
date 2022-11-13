import { SWRConfig } from "swr";
import Board from "../components/Board";

export default function Home() {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <Board />
    </SWRConfig>
  );
}
