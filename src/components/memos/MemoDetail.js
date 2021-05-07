import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
import moment from "moment";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

const useStyles = makeStyles({
  card: {
    marginBottom: "1rem",
    position: "relative",
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

function MemoDetail(props) {
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
    <Card className={classes.card}>
      <IconButton
        className={classes.favButton}
        onClick={toggleFavoriteHandler}
        aria-label="save item"
        component="span"
      >
        {itemIsFavorite ? <TurnedInIcon /> : <TurnedInNotIcon />}
      </IconButton>
      <CardContent>
        <div className={classes.heading}>{props.title}</div>
        <div className={classes.body}>{props.content}</div>
        <div>{userCreatedAt}</div>
      </CardContent>
    </Card>
  );
}

export default MemoDetail;
