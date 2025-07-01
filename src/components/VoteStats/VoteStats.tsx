import styles from "./VoteStats.module.css";

interface VoteStatsProps {
  goodStats: number;
  neutralStats: number;
  badStats: number;
}

export default function VoteStats({
  goodStats,
  neutralStats,
  badStats,
}: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{goodStats}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutralStats}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{badStats}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>0</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>0%</strong>
      </p>
    </div>
  );
}
