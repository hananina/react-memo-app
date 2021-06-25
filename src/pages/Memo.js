import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MemoDetail from "../components/memos/MemoDetail";
import { useHistory } from "react-router";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

function MemoPage() {
  const { memoId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [memoData, setmemoData] = useState([]);
  const history = useHistory();

  async function deleteMemoHandler() {
    try {
      const response = await axios.delete("https://react-memo-app-64433-default-rtdb.firebaseio.com/memos/" + memoId + ".json")

      history.replace("/");

    } catch (error) {
      console.log(error);
    }
  }
 

  useEffect(() => {
    setIsLoading(true);

    async function getMemo() {
      try {
        const response = await axios.get("https://react-memo-app-64433-default-rtdb.firebaseio.com/memos/" + memoId + ".json")
    
        const memo = {
          id: memoId,
          ...response.data,
        };
  
        setIsLoading(false);
        setmemoData(memo);
        
      } catch (error) {
        console.log(error);
      }
    }    

    getMemo();
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
      />
    </section>
  );
}

export default MemoPage;
