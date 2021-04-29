import AppBar from "./AppBar";

function Layout(props) {
  return (
    <div>
      <AppBar></AppBar>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
