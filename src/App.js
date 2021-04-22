import { Route, Switch } from 'react-router-dom';
import AllMemos from './pages/AllMemos';
import Memo from './pages/Memo';
import NewMemo from './pages/NewMemo';
import EditMemo from './pages/EditMemo';
import PinnedMemos from './pages/PinnedMemos';

function App() {
  return (
    <div>
      <Switch>
        {' '}
        <Route path="/" exact>
          <AllMemos />
        </Route>
        <Route path="/memo">
          <Memo />
        </Route>
        <Route path="/new-memo">
          <NewMemo />
        </Route>
        <Route path="/edit-memo">
          <EditMemo />
        </Route>
        <Route path="/pinned-memos">
          <PinnedMemos />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
