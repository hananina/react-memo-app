import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    marginBottom: "1rem",
  },
});

function MemoItem(props) {
  const classes = useStyles();
  return (
    <li key={props.id}>
      <Card className={classes.card}>
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
