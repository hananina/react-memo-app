import axios from "axios";
import moment from "moment";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    marginBottom: "1rem",
  },
});

function MemoItem(props) {
  const userCreatedAt = moment(props.createdAt).format("YYYY/MM/DD hh:mm");

  const favoriteCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        content: props.content,
      });
    }
  }

  function deleteMemoHandler() {
    axios
      .delete(
        "https://react-memo-app-64433-default-rtdb.firebaseio.com/memos/" +
          props.id +
          ".json"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const classes = useStyles();
  return (
    <div key={props.id}>
      <Link to={`/memo/${props.id}`}>
        <Card className={classes.card}>
          <CardContent>
            <h3>{props.title}</h3>
            <div>{props.content}</div>
            <div>{userCreatedAt}</div>
            <div>
              <button type="button" onClick={toggleFavoriteHandler}>
                {itemIsFavorite ? "remove Pin" : "Pin this memo"}
              </button>
              <button type="button" onClick={deleteMemoHandler}>
                Delete this memo
              </button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default MemoItem;
