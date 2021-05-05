import { useHistory } from "react-router";
import axios from "axios";
import NewMemoForm from "../components/memos/NewMemoForm";

function NewMemoPage() {
  const history = useHistory();

  function addMemoHandler(memoData) {
    axios
      .post(
        "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos.json",
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

  return (
    <section>
      <h1>New Memo</h1>
      <NewMemoForm onAddMemo={addMemoHandler} />
    </section>
  );
}

export default NewMemoPage;
