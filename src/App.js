import { Route, Switch } from "react-router-dom";
import AllMemosPage from "./pages/AllMemos";
import MemoPage from "./pages/Memo";
import NewMemoPage from "./pages/NewMemo";
import EditMemoPage from "./pages/EditMemo";
import PinnedMemosPage from "./pages/PinnedMemos";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMemosPage />
        </Route>
        <Route path="/new-memo">
          <NewMemoPage />
        </Route>
        <Route path="/edit-memo">
          <EditMemoPage />
        </Route>
        <Route path="/pinned-memos">
          <PinnedMemosPage />
        </Route>
        <Route path="/memo/:id">
          <MemoPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
