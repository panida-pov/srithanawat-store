import styles from "./Tag.module.css";
function Tag(props) {
  return (
    <div className={styles.Tag}>
      {props.value}
      {props.button && (
        <button value={props.value} onClick={props.onClick}>
          x
        </button>
      )}
    </div>
  );
}

export default Tag;
