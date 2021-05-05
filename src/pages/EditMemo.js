import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import EditMemoForm from "../components/memos/EditMemoForm";
import { useParams } from "react-router-dom";

function EditMemoPage() {
  const { memoId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [memoData, setmemoData] = useState([]);
  const history = useHistory();

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

  function editTitleHandler(event) {
    setmemoData({
      title: event.target.value,
      content: memoData.content,
      createdAt: new Date(),
      isFavorite: memoData.isFavorite,
    });
  }

  function editContentHandler(event) {
    setmemoData({
      title: memoData.title,
      content: event.target.value,
      createdAt: new Date(),
      isFavorite: memoData.isFavorite,
    });
  }

  function editMemoHandler(EditedData) {
    axios
      .put(
        "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos/" +
          memoId +
          ".json",
        {
          title: memoData.title,
          content: memoData.content,
          createdAt: memoData.createdAt,
          isFavorite: memoData.isFavorite,
        }
      )
      .then(() => {
        history.replace("/");
      });
  }

  if (isLoading) {
    return (
      <section>
        <p>Is Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Edit Memo</h1>
      <EditMemoForm
        memo={memoData}
        onEditTitle={editTitleHandler}
        onEditContent={editContentHandler}
        onEditMemo={editMemoHandler}
      />
    </section>
  );
}

export default EditMemoPage;
