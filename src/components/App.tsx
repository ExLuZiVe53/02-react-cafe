import { useState } from "react";
import CafeInfo from "./CafeInfo/CafeInfo";
import VoteOptions from "./VoteOptions/VoteOptions";
import VoteStats from "./VoteStats/VoteStats";

import { Votes } from "../types/votes";

import css from "./App.module.css";
import type { VoteType } from "../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVoteGood = (types: VoteType) => {
    setVotes({ ...votes, good: votes.good + 1 });
  };

  const handleVoteNeutral = (types: VoteType) => {
    setVotes({ ...votes, neutral: votes.neutral + 1 });
  };

  const handleVoteBad = (types: VoteType) => {
    setVotes({ ...votes, bad: votes.bad + 1 });
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <CafeInfo />
      <VoteOptions
        good={handleVoteGood}
        neutral={handleVoteNeutral}
        bad={handleVoteBad}
        reset={resetVotes}
      />
      <VoteStats />
      <div className={css.app}></div>
    </>
  );
}
