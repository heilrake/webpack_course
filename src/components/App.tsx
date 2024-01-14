import classes from "./app.module.scss";
export const App = () => {
  return (
    <div>
      Hello world!!
      <button className={classes.button}>Touch</button>
    </div>
  );
};
