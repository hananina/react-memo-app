import MemoItem from "./MemoItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    listStyle: "none",
    margin: 0,
    padding: "1rem",
  },
});

function MemoList(props) {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {props.memos.map((memo, index) => (
        <MemoItem
          key={memo.id}
          id={memo.id}
          title={memo.title}
          content={memo.content}
          createdAt={memo.createdAt}
          isFavorite={memo.isFavorite}
        />
      ))}
    </ul>
  );
}

export default MemoList;
