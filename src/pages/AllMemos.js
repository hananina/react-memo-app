import axios from "axios";
import { useState, useEffect, useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import MemoList from "../components/memos/MemoList";

function AllMemosPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  const favoriteCtx = useContext(FavoriteContext);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos.json"
      )
      .then((res) => {
        const memos = [];

        for (const key in res.data) {
          const memo = {
            id: key,
            ...res.data[key],
          };
          memos.push(memo);
        }
        
        // sort items on initial load
        const sortedMemos = memos.sort((memoA, memoB ) =>  {
          return   memoA.createdAt < memoB.createdAt ? 1: -1
        })

        setLoadedData(sortedMemos);
        setIsLoading(false);
      });
  }, []);

  // sort items when the length of fav context changed
  useEffect(() => {
    setIsLoading(true);

    const sortedMemos = loadedData.sort((memoA, memoB ) =>  {
      return   memoA.createdAt < memoB.createdAt ? 1: -1
    }).sort((memoA, memoB ) =>  {
      const memoAIsFavorite = favoriteCtx.itemIsFavorite(memoA.id);
      const memoBIsFavorite = favoriteCtx.itemIsFavorite(memoB.id);

      return (memoAIsFavorite === memoBIsFavorite)? 0 : memoAIsFavorite? -1 : 1 
    })

    const copiedSortedMemos = sortedMemos.slice(0);

    setLoadedData(copiedSortedMemos);
    setIsLoading(false);
    
  }, [favoriteCtx.totalFavorites]);


  if (isLoading) {
    return (
      <section>
        <p>Is Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Memos</h1>
      <MemoList memos={loadedData} />
    </section>
  );
}

export default AllMemosPage;
