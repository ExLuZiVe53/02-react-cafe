import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  goodProp: (type: VoteType) => void;
  neutralProp: (type: VoteType) => void;
  badProp: (type: VoteType) => void;
  type: VoteType;
  // onVote: () => string;
  onReset: () => void;
}

export default function VoteOptions({
  type,
  goodProp,
  neutralProp,
  badProp,
  // onVote,
  onReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => goodProp(type)}>
        Good
      </button>
      <button className={css.button} onClick={() => neutralProp(type)}>
        Neutral
      </button>
      <button className={css.button} onClick={() => badProp(type)}>
        Bad
      </button>
      <button className={`${css.button} ${css.reset}`} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
