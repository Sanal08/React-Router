import { Route } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Home Page</h1>
      <Route path="/home/new-user">
        <h2> Welcome</h2>
        <p>We are always happy to make new friends!</p>
      </Route>
    </section>
  );
}
