// Deterministic pseudo-activity so the heatmap looks alive without a backend.
function levelFor(i) {
  const v = (i * 37 + 11) % 10;
  if (v > 7) return 4;
  if (v > 5) return 3;
  if (v > 3) return 2;
  if (v > 1) return 1;
  return 0;
}

export default function Heatmap() {
  const cells = Array.from({ length: 65 }, (_, i) => levelFor(i));

  return (
    <div className="heatmap" role="img" aria-label="Commit activity over the last 90 days">
      {cells.map((level, i) => (
        <div key={i} className="cell" data-level={level} />
      ))}
    </div>
  );
}