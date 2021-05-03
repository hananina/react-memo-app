import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MemoItem from "../components/memos/MemoItem";

function MemoPage() {
  const { memoId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos/" +
          memoId +
          ".json"
      )
      .then((res) => {
        const memo = {
          id: memoId,
          ...res.data,
        };

        setIsLoading(false);
        setLoadedData(memo);
      });
  }, [memoId]);

  if (isLoading) {
    return (
      <section>
        <p>Is Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Memo Detail</h1>
      <MemoItem
        key={loadedData.id}
        id={loadedData.id}
        title={loadedData.title}
        content={loadedData.content}
        createdAt={loadedData.createdAt}
        isFavorite={loadedData.isFavorite}
      />
    </section>
  );
}

export default MemoPage;
