import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import ContactUs from "./pages/ContactUs/ContactUs";
import Articles from "./pages/Articles/Articles";
import ArticelDetails from "./pages/ArticleDetails/ArticelDetails";
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/articles" exact>
            <Articles />
          </Route>
          <Route path="/articles/:articelId">
            <ArticelDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
