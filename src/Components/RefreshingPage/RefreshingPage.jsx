import { Hourglass } from "react-loader-spinner";
import css from "./RefreshingPage.module.css";

export default function RefreshingPage() {
  return (
    <div className={css.backdrop}>
      <Hourglass
        className={css.loader}
        visible={true}
        height="150"
        width="150"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
      <b className={css.text}>Refreshing user...</b>
    </div>
  );
}
