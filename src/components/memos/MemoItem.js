import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: '1rem',
  },
});

function MemoItem(props) {
  const classes = useStyles();
  return (
    <li className={classes.root} key={props.id}>
      <Card>
        <CardContent>
          <h3>{props.title}</h3>
          <div>{props.content}</div>
          <div>
            <button type="button">Pin this memo</button>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}

export default MemoItem;
