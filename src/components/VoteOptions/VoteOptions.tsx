// import type { VoteType } from "../../types/votes";
// import css from "./VoteOptions.module.css";

// export default function VoteOptions(type: VoteType, vote: () => void) {
//   const onVote = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log(type);
//     console.log(event);
//   };

//   return (
//     <div className={css.container}>
//       <button className={css.button} onClick={() => vote}>
//         Good
//       </button>
//       <button className={css.button} onClick={() => vote}>
//         Neutral
//       </button>
//       <button className={css.button} onClick={() => vote}>
//         Bad
//       </button>
//       <button
//         className={`${css.button} ${css.reset}`}
//         // onClick={() => onReset()}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }
