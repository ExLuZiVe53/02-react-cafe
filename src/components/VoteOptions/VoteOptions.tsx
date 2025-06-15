import css from "./VoteOptions.module.css";

export default function VoteOptions(vote, type) {
  const onVote = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.type);
    console.log(vote);
  };

  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote(type)}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote(type)}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote(type)}>
        Bad
      </button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}
