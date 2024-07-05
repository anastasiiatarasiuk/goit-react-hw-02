import s from "./Options.module.css";

const Options = ({ onFeedback, total, reset }) => {
  return (
    <div className={s.optionsBtnContainer}>
      <button className={s.optionsBtn} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={s.optionsBtn} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.optionsBtn} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={s.optionsBtn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
