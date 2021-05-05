import axios from "axios";
import { useState, useEffect } from "react";
import MemoList from "../components/memos/MemoList";


const sortMemos = (memos) => {
  return memos.sort((memoA, memoB ) =>  {
    console.log(memoA);
    return memoA.createdAt < memoB.createdAt ? 1 : -1
  })
}

function AllMemosPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

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
        const sortedMemos = sortMemos(memos)
        setLoadedData(sortedMemos);
        setIsLoading(false);
      });
  }, []);

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
