import axios from "axios";
import { useState, useEffect } from "react";
import MemoList from "../components/memos/MemoList";

const DUMMY_DATA = [
  {
    id: "1",
    title: "this is a first memo desuyo",
    content: "this is a first memo content desuyo",
  },
  {
    id: "2",
    title: "this is a 2nd memo desuyo",
    content: "this is a 2nd memo content desuyo",
  },
  {
    id: "3",
    title: "this is a Third memo desuyo",
    content: "this is a Third memo content desuyo",
  },
];

function AllMemosPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos.json"
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const memos = [];

        for (const key in res.data) {
          const memo = {
            id: key,
            ...res.data[key],
          };

          memos.push(memo);
        }

        setIsLoading(false);
        setLoadedData(memos);
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
