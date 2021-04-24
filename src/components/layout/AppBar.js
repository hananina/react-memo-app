import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbBar: {
    backgroundColor: '#ee7000',
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

function MainNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbBar}>
        <Typography variant="h6" className={classes.title}>
          React Memo App
        </Typography>

        <nav>
          <ul>
            <li>
              <Link to="/">All Memos</Link>
            </li>
            <li>
              <Link to="/">Pinned Memos</Link>
            </li>
            <li>
              <Link to="/new-memo">
                <IconButton edge="start" color="inherit" aria-label="menu">
                  Add New Memo
                  <NoteAddIcon />
                </IconButton>
              </Link>
            </li>
          </ul>
        </nav>
      </AppBar>
    </div>
  );
}

export default MainNavigation;
