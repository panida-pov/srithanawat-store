import styles from "./Checkbox.module.css";

function Checkbox(props) {
  return (
    <div className={styles.Checkbox}>
      <label>
        <input
          type="checkbox"
          value={props.value}
          onChange={props.onChange}
          checked={props.check}
        />
        {props.value}
      </label>
    </div>
  );
}

export default Checkbox;
