import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  appbBar: {
    flexDirection: "row",
    backgroundColor: "transparent",
    color: "#000",
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(2),
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
    color: "#fcb8d2",
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
              <IconButton edge="start" color="inherit" aria-label="menu">
                <NoteAddIcon />
              </IconButton>
            </Link>
          </li>
        </ul>
      </nav>
    </AppBar>
  );
}

export default MainNavigation;
