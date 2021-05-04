// import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import EditMemoForm from "../components/memos/EditMemoForm";
import { useParams } from "react-router-dom";

function EditMemoPage() {
  const { memoId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  // const history = useHistory();

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
    console.log("handleTitleChange");
    setLoadedData({ title: event.target.value });
    console.log(loadedData);
  }

  function editContentHandler(event) {
    setLoadedData({ content: event.target.value });
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
      />
    </section>
  );
}

export default EditMemoPage;
