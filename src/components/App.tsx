// import { useState } from "react";
import CafeInfo from "./CafeInfo/CafeInfo";
import VoteOptions from "./VoteOptions/VoteOptions";
import VoteStats from "./VoteStats/VoteStats";

// import type { Votes } from "../types/votes";

import css from "./App.module.css";

export default function App() {
  // const [votes, setVotes] = useState<Votes>({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // }
  // );

  // const handleVoteGood = (type: VoteType) => {
  //   setVotes({ ...votes, good: votes.good + 1 });
  //   console.log(type);
  // };

  // const handleVoteNeutral = (type: VoteType) => {
  //   setVotes({ ...votes, neutral: votes.neutral + 1 });
  //   console.log(type);
  // };

  // const handleVoteBad = (type: VoteType) => {
  //   setVotes({ ...votes, bad: votes.bad + 1 });
  //   console.log(type);
  // };

  // const resetVotes = () => {
  //   setVotes({ good: 0, neutral: 0, bad: 0 });
  // };

  // const handleVote = (type: keyof Votes) => {
  //   return setVotes({
  //     ...votes,
  //     [type]: votes[type] + 1,
  //   });
  // };

  return (
    <>
      <CafeInfo />
      <VoteOptions
      // good={handleVoteGood}
      // neutral={handleVoteNeutral}
      // bad={handleVoteBad}
      // reset={resetVotes}
      // vote={handleVote}
      />

      <VoteStats />
      <div className={css.app}></div>
    </>
  );
}
