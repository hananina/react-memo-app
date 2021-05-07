import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  appbBar: {
    flexDirection: "row",
    color: "#000",
    backgroundColor: "#fff",
    padding: theme.spacing(2),
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(2),
    fontWeight: "bold",
  },
  nav: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  navItem: {
    marginLeft: "1rem",
  },
  navAnchor: {
    textDecoration: "none",
    fontSize: "1rem",
    color: "#000",
  },
}));

function MainNavigation() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbBar}>
      <Typography variant="h6" className={classes.title}>
        📝 React Memo App
      </Typography>

      <nav>
        <ul className={classes.nav}>
          <li className={classes.navItem}>
            <Link className={classes.navAnchor} to="/">
              All Memos
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link className={classes.navAnchor} to="/favorites">
              Pinned Memos
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link className={classes.navAnchor} to="/new-memo">
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<NoteAddIcon />}
              >
                Add Memo
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </AppBar>
  );
}

export default MainNavigation;
