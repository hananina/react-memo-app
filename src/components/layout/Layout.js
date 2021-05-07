import AppBar from "./AppBar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  main: {
    padding: "1rem",
  },
  container: {},
});

function Layout(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar></AppBar>
      <main className={classes.main}>
        <div className={classes.container}>{props.children}</div>
      </main>
    </div>
  );
}

export default Layout;
