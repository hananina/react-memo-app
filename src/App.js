import { Route, Switch } from "react-router-dom";
import AllMemos from "./pages/AllMemos";
import Memo from "./pages/Memo";
import NewMemo from "./pages/NewMemo";
import EditMemo from "./pages/EditMemo";
import PinnedMemos from "./pages/PinnedMemos";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMemos />
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
        <Route path="/memo/:id">
          <Memo />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
