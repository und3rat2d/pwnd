const COMMITS = [
  {
    hash: "a3f1c9d",
    message: "Fix rate limiter double-counting on retry",
    repo: "api-gateway",
    time: "17m ago",
  },
  {
    hash: "9e02b41",
    message: "Add spacing scale tokens for dense layouts",
    repo: "design-tokens",
    time: "58m ago",
  },
  {
    hash: "c77a01e",
    message: "Resolve VPC peering conflict with staging route table",
    repo: "infra-terraform",
    time: "3h ago",
  },
  {
    hash: "1b4f8aa",
    message: "Bump release notes for 2.4.0",
    repo: "mobile-app",
    time: "5h ago",
  },
  {
    hash: "72dc3e0",
    message: "Merge branch 'main' into feat/rate-limits",
    repo: "api-gateway",
    time: "6h ago",
  },
];

export default function ActivityFeed() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Recent activity</h2>
        <span className="count">last 6h</span>
      </div>

      <div className="panel">
        {COMMITS.map((commit) => (
          <div className="activity-row" key={commit.hash}>
            <span className="activity-hash">{commit.hash}</span>
            <div className="activity-body">
              <p className="activity-msg">{commit.message}</p>
              <div className="activity-meta">
                <span className="repo">{commit.repo}</span> · {commit.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}