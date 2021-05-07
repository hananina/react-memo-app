import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MemoList from "../components/memos/MemoList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  if (favoritesCtx.totalFavorites === 0) {
    return (
      <section>
        <h1>Pinned Memos</h1>
        <p>You got no Pinned Memo yet.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Pinned Memos</h1>
      <MemoList memos={favoritesCtx.favorites}></MemoList>
    </section>
  );
}

export default FavoritesPage;
