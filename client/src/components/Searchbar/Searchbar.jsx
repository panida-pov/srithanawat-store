import styles from "./Searchbar.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ClearIcon from "@mui/icons-material/Clear";
function Searchbar(props) {
  return (
    <form
      className={styles.SearchBar}
      onSubmit={(event) => event.preventDefault()}
    >
      <button type="submit">
        <SearchRoundedIcon style={{ fontSize: "1.2rem", color: "#3e5f7e" }} />
      </button>
      <input
        placeholder={`ค้นหาจาก "${props.category}"`}
        value={props.searchTerm}
        onChange={props.handleSearch}
      ></input>
      <button
        className={styles.clearButton}
        type="button"
        onClick={props.clearSearch}
      >
        <ClearIcon style={{ fontSize: "0.85rem", color: "#3e5f7e" }} />
      </button>
    </form>
  );
}

export default Searchbar;
