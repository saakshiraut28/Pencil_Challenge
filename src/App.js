import Explore from "./components/Explore.jsx";
import Dash from "./components/Dash";
import Events from "./components/Event.jsx";
import Dm from "./components/Dm.jsx";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Introduction from "./pages/Introduction.jsx";
import UserInputForm from "./pages/form/UserInputForm.jsx";
import LoginForm from "./pages/form/LoginForm.jsx";
import Settings from "./pages/form/Settings.jsx";
import Navigation from "./components/Navigation.jsx";
import Calendar from "./pages/Calendar.tsx";
import Invitation from "./pages/Invitation.jsx";
import Trending from "./pages/Trending.jsx";
import Banner from "./components/Banner.jsx";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/dash":
      Component = Dash;
      break;
    case "/explore":
      Component = Explore;
      break;
    case "/events":
      Component = Events;
      break;
    case "/dm":
      Component = Dm;
      break;
    case "/Introduction":
      Component = Introduction;
      break;
    case "/":
      Component = UserInputForm;
      break;
    case "/login":
      Component = LoginForm;
      break;
    case "/settings":
      Component = Settings;
      break;
    case "/Calendar":
      Component = Calendar;
      break;
    case "/invite":
      Component = Invitation;
      break;
    case "/trending":
      Component = Trending;
      break;
  }
  return (
    <>
      <div className="nav sticky top-0">
        <Navigation />
      </div>

      <BrowserRouter>
        <div className="container grid grid-cols-1 md:grid-cols-5 ">
          <div className="grid grid-cols-2 lg:w-64">
            <Sidebar>
              <Router>
                <Route exact path="/dash" component={Dash}></Route>
                <Route path="/explore" component={Explore}></Route>
                <Route path="/events" component={Events}></Route>
                <Route path="/dm" component={Dm}></Route>
                <Route path="/Introduction" component={Introduction}></Route>
                <Route path="/" component={UserInputForm}></Route>
                <Route path="/login" component={LoginForm}></Route>
                <Route path="/Settings" component={Settings}></Route>
                <Route path="/Calendar" component={Calendar}></Route>
                <Route path="/invite" component={Invitation}></Route>
                <Route path="/trending" component={Trending}></Route>
              </Router>
            </Sidebar>
          </div>
          <div className="grid md:col-span-5 lg:col-span-3  py-4 px-4">
            <Component />
          </div>
          <div></div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
