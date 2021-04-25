import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/Page2/1000">URL Parameter</Link>
      <br />
      <Link to="/Page2/1000?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
