import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    marginBottom: "1rem",
  },
});

function MemoItem(props) {
  function deleteMemoHandler(id) {
    console.log(id);

    axios
      .delete(
        "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos/" +
          id +
          ".json"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // TODO:
    // データを状態にしてから、状態を変更する必要があります。
    // 状態を変更すると、ページが自動的に再レン​​ダリングされ
    // 、状態の変更されたデータが表示されます。
    // したがって、削除機能では、選択したデータを削除し、
    // 残りのデータを自分の状態に渡すだけです。

    // 共通のデータを持っておく。
    // 全体のmomoListのようなデータ
    // それを更新する。

    //！これが有力。。。？
    // pinthis memoの実装を見て、
    // 親Compoにどうやってdeletememo handlerを渡すか確認
    // 親コンポ、あのすべてを読んでいるところで、
    // 新しいmemoList（一つを削除してその後全部をまた取ってきたやつ）をつくる。
    // 新しいmemolistをpropsとして流す

    //reactの配列から削除して、そのさくじょしたものを渡すといいのではないか？
    //それだとDBに同期できない。。。
    //https://stackoverflow.com/a/58620507/4802945
  }

  const classes = useStyles();
  return (
    <li key={props.id}>
      <Card className={classes.card}>
        <CardContent>
          <h3>{props.title}</h3>
          <div>{props.content}</div>
          <div>
            <button type="button">Pin this memo</button>
            <button type="button" onClick={() => deleteMemoHandler(props.id)}>
              Delete this memo
            </button>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}

export default MemoItem;
