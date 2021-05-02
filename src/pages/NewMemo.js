import { useHistory } from "react-router";
import axios from "axios";
import NewMemoForm from "../components/memos/NewMemoForm";

function NewMemoPage() {
  const history = useHistory();

  function addMemoHandlere(memoData) {
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
      .then((res) => {
        console.log(res);
        console.log(res.data);
        history.replace("/");
      });
  }

  return (
    <section>
      <h1>New Memo</h1>
      <NewMemoForm onAddMemo={addMemoHandlere} />
    </section>
  );
}

export default NewMemoPage;
