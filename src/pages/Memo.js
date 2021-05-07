import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MemoDetail from "../components/memos/MemoDetail";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

function MemoPage() {
  const { memoId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [memoData, setmemoData] = useState([]);
  const history = useHistory();

  function deleteMemoHandler() {
    axios
      .delete(
        "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos/" +
          memoId +
          ".json"
      )
      .then((res) => {
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
        setmemoData(memo);
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

      <IconButton
        onClick={deleteMemoHandler}
        aria-label="delete item"
        component="span"
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        component={Link}
        to={`/memo/${memoData.id}/edit`}
        aria-label="delete item"
      >
        <EditIcon />
      </IconButton>

      <MemoDetail
        key={memoData.id}
        id={memoData.id}
        title={memoData.title}
        content={memoData.content}
        createdAt={memoData.createdAt}
        isFavorite={memoData.isFavorite}
      />
    </section>
  );
}

export default MemoPage;
