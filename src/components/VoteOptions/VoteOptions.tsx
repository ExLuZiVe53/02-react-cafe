import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  goodProp: () => void;
  neutralProp: () => void;
  badProp: () => void;
  // onVote: () => string;
  onReset: () => void;
}

export default function VoteOptions({
  goodProp,
  neutralProp,
  badProp,
  // onVote,
  onReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={goodProp}>
        Good
      </button>
      <button className={css.button} onClick={neutralProp}>
        Neutral
      </button>
      <button className={css.button} onClick={badProp}>
        Bad
      </button>
      <button className={`${css.button} ${css.reset}`} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
