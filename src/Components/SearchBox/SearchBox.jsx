import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  //   const filter = useSelector((state) => state.filters.name);

  return (
    <>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        placeholder="Search by name"
        onChange={handleFilterChange}
      />
    </>
  );
}
