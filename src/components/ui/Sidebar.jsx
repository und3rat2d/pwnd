import Heatmap from "./Heatmap";

const NAV_ITEMS = [
  { label: "Overview", icon: "○", active: true },
  { label: "Repositories", icon: "▤" },
  { label: "Branches", icon: "⑂" },
  { label: "Activity", icon: "≡" },
  { label: "Settings", icon: "⚙" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="dot" />
        Gitware
      </div>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href="#" className={item.active ? "active" : ""}>
            <span className="icon">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer-label">Commits · 90d</div>
        <Heatmap />
      </div>
    </aside>
  );
}