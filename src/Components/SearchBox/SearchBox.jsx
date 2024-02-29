import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

export function SearchBox() {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <>
      <p className={css.text}>Find contacts</p>
      <input
        className={css.search}
        type="text"
        placeholder="Search by name/number"
        onChange={handleFilterChange}
      />
    </>
  );
}
