const REPOS = [
  {
    name: "gitware-core",
    path: "~/dev/gitware-core",
    branch: "main",
    status: "clean",
    add: 0,
    del: 0,
    updated: "2m ago",
  },
  {
    name: "api-gateway",
    path: "~/dev/api-gateway",
    branch: "feat/rate-limits",
    status: "dirty",
    add: 84,
    del: 12,
    updated: "17m ago",
  },
  {
    name: "design-tokens",
    path: "~/dev/design-tokens",
    branch: "main",
    status: "clean",
    add: 0,
    del: 0,
    updated: "1h ago",
  },
  {
    name: "infra-terraform",
    path: "~/dev/infra-terraform",
    branch: "fix/vpc-peering",
    status: "conflict",
    add: 23,
    del: 41,
    updated: "3h ago",
  },
  {
    name: "mobile-app",
    path: "~/dev/mobile-app",
    branch: "release/2.4",
    status: "dirty",
    add: 6,
    del: 2,
    updated: "5h ago",
  },
];

export default function RepoTable() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Repositories</h2>
        <span className="count">{REPOS.length} tracked</span>
      </div>

      <div className="panel">
        <div className="repo-row head">
          <span>Name</span>
          <span>Branch</span>
          <span>Status</span>
          <span>Diff</span>
          <span>Updated</span>
        </div>

        {REPOS.map((repo) => (
          <div className="repo-row" key={repo.name}>
            <div>
              <div className="repo-name">{repo.name}</div>
              <span className="repo-path">{repo.path}</span>
            </div>

            <span className="branch-pill">{repo.branch}</span>

            <span className={`status-dot ${repo.status}`}>
              {repo.status === "clean" && "clean"}
              {repo.status === "dirty" && "modified"}
              {repo.status === "conflict" && "conflict"}
            </span>

            <span className="diffstat">
              {repo.add === 0 && repo.del === 0 ? (
                <span className="none">—</span>
              ) : (
                <>
                  <span className="add">+{repo.add}</span>
                  <span className="del">-{repo.del}</span>
                </>
              )}
            </span>

            <span className="repo-updated">{repo.updated}</span>
          </div>
        ))}
      </div>
    </section>
  );
}