import { Link, Outlet } from "react-router-dom";

import classes from "./app.module.scss";
import photo from "@/assets/photo.jpg";
import Cloud from "@/assets/cloud.svg";
export const App = () => {
  if (__PLATRORM__ === "mobile") {
    return <div>Is mobile platform</div>;
  }
  if (__PLATRORM__ === "desktop") {
    return <div>Is desktop platform</div>;
  }
  function checkTS(a: string) {
    console.log(a);
  }

  checkTS(123);

  return (
    <div>
      <h2>Platfrom={__PLATRORM__}</h2>
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
