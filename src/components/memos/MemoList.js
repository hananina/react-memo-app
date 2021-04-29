import MemoItem from './MemoItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    listStyle: 'none',
    margin: 0,
    padding: '1rem',
    backgroundColor: 'grey'
  },
});

function MemoList(props) {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {props.memos.map((memo) => (
        <MemoItem
          key={memo.id}
          id={memo.id}
          title={memo.title}
          content={memo.content}
        />
      ))}
    </ul>
  );
}

export default MemoList;
