import { useState } from "react";
import CafeInfo from "./CafeInfo/CafeInfo";
import VoteOptions from "./VoteOptions/VoteOptions";
import VoteStats from "./VoteStats/VoteStats";

import type { Votes, VoteType } from "../types/votes";

import css from "./App.module.css";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const handleVoteGood = () => {
  //   setVotes({ ...votes, good: votes.good + 1 });
  //   // console.log(type);
  // };

  // const handleVoteNeutral = () => {
  //   setVotes({ ...votes, neutral: votes.neutral + 1 });
  //   // console.log(type);
  // };

  // const handleVoteBad = () => {
  //   setVotes({ ...votes, bad: votes.bad + 1 });
  //   // console.log(type);
  // };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  // const handleVote = (vote: keyof Votes) => {
  //   setVotes({
  //     ...votes,
  //     [vote]: votes[vote] + 1,
  //   });
  // };

  const type: Array<string> = ["good", "neutral", "bad"];

  const handleVote = (type: string[]) => {
    type.map((oneType: string) => {
      switch (oneType) {
        case "good":
          setVotes({ ...votes, good: votes.good + 1 });
          break;
        case "neutral":
          setVotes({ ...votes, neutral: votes.neutral + 1 });
          break;
        case "bad":
          setVotes({ ...votes, bad: votes.bad + 1 });
          break;
        default:
          throw new Error("Invalid type");
      }
      console.log(oneType);
    });
  };

  return (
    <>
      <CafeInfo />
      <VoteOptions
        // goodProp={handleVoteGood}
        // neutralProp={handleVoteNeutral}
        // badProp={handleVoteBad}
        type={type}
        onReset={resetVotes}
        onVote={handleVote}
      />

      <VoteStats
        goodStats={votes.good}
        neutralStats={votes.neutral}
        badStats={votes.bad}
        // total={totalVotes}
      />
      <div className={css.app}></div>
    </>
  );
}

//================================================================================//================================================================================

// import { useState } from "react";
// import type { Votes, VoteType } from "../types/votes";

// import css from "./App.module.css";
// import styles from "./VoteStats/VoteStats.module.css";

// function CafeInfo() {
//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Sip Happens Café</h1>
//       <p className={css.description}>
//         Please rate our service by selecting one of the options below.
//       </p>
//     </div>
//   );
// }
// interface ClickProp {
//   goodProp: () => void;
//   neutralProp: () => void;
//   badProp: () => void;
// }

// function VoteOptions({ goodProp, neutralProp, badProp }: ClickProp) {
//   return (
//     <div className={css.container}>
//       <button className={css.button} onClick={goodProp}>
//         Good
//       </button>
//       <button className={css.button} onClick={neutralProp}>
//         Neutral
//       </button>
//       <button className={css.button} onClick={badProp}>
//         Bad
//       </button>
//       <button className={`${css.button} ${css.reset}`}>Reset</button>
//     </div>
//   );
// }

// function VoteStats() {
//   return (
//     <div className={styles.container}>
//       <p className={styles.stat}>
//         Good: <strong>0</strong>
//       </p>
//       <p className={styles.stat}>
//         Neutral: <strong>0</strong>
//       </p>
//       <p className={styles.stat}>
//         Bad: <strong>0</strong>
//       </p>
//       <p className={styles.stat}>
//         Total: <strong>0</strong>
//       </p>
//       <p className={styles.stat}>
//         Positive: <strong>0%</strong>
//       </p>
//     </div>
//   );
// }

// function Notification() {
//   return <p className={css.message}>No feedback yet</p>;
// }

// export default function App() {
//   const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

//   const handleVoteGood = (type: VoteType) => {
//     setVotes({ ...votes, good: votes.good + 1 });
//     console.log(type);
//   };

//   const handleVoteNeutral = (type: VoteType) => {
//     setVotes({ ...votes, neutral: votes.neutral + 1 });
//     console.log(type);
//   };

//   const handleVoteBad = (type: VoteType) => {
//     setVotes({ ...votes, bad: votes.bad + 1 });
//     console.log(type);
//   };

//   return (
//     <>
//       <CafeInfo />
//       <VoteOptions
//         goodProp={handleVoteGood}
//         neutralProp={handleVoteNeutral}
//         badProp={handleVoteBad}
//       />
//       <VoteStats />
//       <Notification />
//       <div className={css.app}></div>
//     </>
//   );
// }
