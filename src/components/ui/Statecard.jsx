export default function StatCard({ label, value, delta, direction = "flat" }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {delta && <div className={`stat-delta ${direction}`}>{delta}</div>}
    </div>
  );
}