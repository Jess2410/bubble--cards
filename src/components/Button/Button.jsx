import styles from "./Button.module.css";

const FloatingButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default FloatingButton;
