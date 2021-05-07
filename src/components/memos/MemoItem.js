import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
import moment from "moment";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  anchor: {
    textDecoration: "none",
  },
  card: {
    marginBottom: "1rem",
  },
  favButton: {
    position: "absolute",
    top: ".5rem",
    right: ".5rem",
  },
  heading: {
    marginBottom: "1rem",
    fontWeight: "600",
    fontSize: "1.2rem",
  },
  body: {
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
    <li key={props.id} className={classes.root}>
      <IconButton
        className={classes.favButton}
        onClick={toggleFavoriteHandler}
        aria-label="save item"
        component="span"
      >
        {itemIsFavorite ? <TurnedInIcon /> : <TurnedInNotIcon />}
      </IconButton>

      <Link to={`/memo/${props.id}`} className={classes.anchor}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.heading}>{props.title}</div>
            <div className={classes.body}>{props.content}</div>
            <div>{userCreatedAt}</div>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}

export default MemoItem;
