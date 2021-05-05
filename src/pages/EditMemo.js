import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import EditMemoForm from "../components/memos/EditMemoForm";
import { useParams } from "react-router-dom";

function EditMemoPage() {
  const { memoId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
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
        setLoadedData(memo);
      });
  }, [memoId]);

  function editTitleHandler(event) {
    setLoadedData({
      title: event.target.value,
      content: loadedData.content,
      createdAt: new Date(),
      isFavorite: loadedData.isFavorite,
    });
  }

  function editContentHandler(event) {
    setLoadedData({
      title: loadedData.title,
      content: event.target.value,
      createdAt: new Date(),
      isFavorite: loadedData.isFavorite,
    });
  }

  function editMemoHandler(EditedData) {
    axios
      .put(
        "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos/" +
          memoId +
          ".json",
        {
          title: loadedData.title,
          content: loadedData.content,
          createdAt: loadedData.createdAt,
          isFavorite: loadedData.isFavorite,
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
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
        memo={loadedData}
        onEditTitle={editTitleHandler}
        onEditContent={editContentHandler}
        onEditMemo={editMemoHandler}
      />
    </section>
  );
}

export default EditMemoPage;
