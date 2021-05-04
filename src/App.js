import { Route, Switch } from "react-router-dom";
import AllMemosPage from "./pages/AllMemos";
import MemoPage from "./pages/Memo";
import NewMemoPage from "./pages/NewMemo";
import EditMemoPage from "./pages/EditMemo";
import FavoritesPage from "./pages/Favorites";
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
        <Route path="/memo/:memoId/edit">
          <EditMemoPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/memo/:memoId">
          <MemoPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
