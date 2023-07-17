import "./App.css";
import Navbar from "./components/Navbar";
import Pageone from "./pages/Pageone";
import {
  BrowserRouter as 
  Route, Switch
} from "react-router-dom";
import Pagetwo from "./pages/pagetwo";
import Pagethree from "./pages/pagethree";
import Pagefour from "./pages/Pagefour";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/pageone'>
            <Pageone/>
          </Route>
          <Route exact path='/pagetwo'>
            <Pagetwo/>
          </Route>
          <Route exact path='/pagethree'>
            <Pagethree/>
          </Route>
          <Route exact path='/pagefour'>
            <Pagefour/>
          </Route>
        </Switch>

        </div>

    </>
  );
}

export default App;
