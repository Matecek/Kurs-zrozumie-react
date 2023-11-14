import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";

const element = (
  <>
    <h1>Nasz strona!</h1>
    <main>
      <Link />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et laboriosam,
        error vel rerum quis officia recusandae distinctio saepe iure aperiam.
      </p>
      <Link />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
