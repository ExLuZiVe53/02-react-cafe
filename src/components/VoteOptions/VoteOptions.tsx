import type { ClickProp } from "../../types/votes";
import css from "./VoteOptions.module.css";

export default function VoteOptions({
  goodProp,
  neutralProp,
  badProp,
  //   onVote,
  onReset,
}: ClickProp) {
  //   const onVote = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     console.log(type);
  //     console.log(event);
  //   };

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
