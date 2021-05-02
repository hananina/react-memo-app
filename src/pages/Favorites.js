import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MemoList from "../components/memos/MemoList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  console.log("favoritesCtx.favorites");
  console.log(favoritesCtx.favorites);

  return (
    <section>
      <h1>Pinned Memos</h1>
      <MemoList memos={favoritesCtx.favorites}></MemoList>
    </section>
  );
}

export default FavoritesPage;
