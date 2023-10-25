import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <section>
      <h1>Articles Page</h1>
      <ul>
        <li>
          <Link to="/articles/a1"> Article 1</Link>
        </li>
        <li>
          <Link to="/articles/2"> Article 2</Link>
        </li>
        <li>
          <Link to="/articles/a3"> Article 3</Link>
        </li>
      </ul>
    </section>
  );
}
