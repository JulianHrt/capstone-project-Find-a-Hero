import { data } from "../../components/utils/data";
import AdListItems from "../../components/AdListItems";

export default function AdListPage() {
  const heroCounter = data.length;

  return (
    <>
      <h1>I found {heroCounter} Heroes for you:</h1>
      <AdListItems />
    </>
  );
}
