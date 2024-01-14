import classes from "./app.module.scss";
import { Link, Outlet } from "react-router-dom";
export const App = () => {
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"shop"}>Shop</Link>
      Hello world!!
      <button className={classes.button}>Touch</button>
      <Outlet />
    </div>
  );
};
