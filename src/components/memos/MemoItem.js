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

  const classes = useStyles();
  return (
    <div key={props.id}>
      <Card className={classes.card}>
        <CardContent>
          <Link to={`/memo/${props.id}`}>See Detail</Link>
          <h3>{props.title}</h3>
          <div>{props.content}</div>
          <div>{userCreatedAt}</div>
          <div>
            <button type="button" onClick={toggleFavoriteHandler}>
              {itemIsFavorite ? "remove Pin" : "Pin this memo"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MemoItem;
