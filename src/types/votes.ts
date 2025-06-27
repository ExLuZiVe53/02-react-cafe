export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

export type VoteType = "good" | "neutral" | "bad";

export interface ClickProp {
  goodProp: () => string;
  neutralProp: () => string;
  badProp: () => string;
  // onVote: () => void;
  onReset: () => void;
}
