import axios from "axios";
import NewMemoForm from "../components/memos/NewMemoForm";
function addMemoHandlere(memoData) {
  console.log(memoData);

  axios
    .post(
      "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos.json",
      {
        title: memoData.title,
        content: memoData.content,
      }
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
}

function NewMemo() {
  return (
    <section>
      <h1>NewMemo</h1>
      <NewMemoForm onAddMemo={addMemoHandlere} />
    </section>
  );
}

export default NewMemo;
