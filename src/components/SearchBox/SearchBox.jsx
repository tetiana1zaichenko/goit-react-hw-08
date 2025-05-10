import { changeFilter, selectNameFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
