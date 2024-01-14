import { Link, Outlet } from "react-router-dom";

import classes from "./app.module.scss";
import photo from "@/assets/photo.jpg";
import Cloud from "@/assets/cloud.svg";
export const App = () => {
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"shop"}>Shop</Link>
      <Cloud width={60} height={60} />
      Hello world!!
      <img width={60} height={60} src={photo} alt="avatar" />
      <button className={classes.button}>Touch</button>
      <Outlet />
    </div>
  );
};
