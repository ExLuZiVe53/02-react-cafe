// import { useState } from "react";
import CafeInfo from "./CafeInfo/CafeInfo";
import VoteOptions from "./VoteOptions/VoteOptions";
import VoteStats from "./VoteStats/VoteStats";

import css from "./App.module.css";

// const [votes, setVotes] = useState({ good: 0, neutral: 0, bad: 0 });

function App() {
  return (
    <>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
      <div className={css.app}></div>
    </>
  );
}

export default App;
