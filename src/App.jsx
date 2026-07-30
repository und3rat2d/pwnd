import Sidebar from "@/components/ui/Sidebar";
import StatCard from "@/components/ui/Statecard";
import RepoTable from "@/components/ui/Repotable";
import ActivityFeed from "@/components/ui/Activityfeed";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main">
        <div className="topbar">
          <div>
            <p className="topbar-prompt">
              $ gitware status <span className="accent">--all</span>
            </p>
            <h1>Overview</h1>
          </div>

          <button className="sync-btn">
            <span className="pulse" />
            Sync all
          </button>
        </div>

        <div className="stat-grid">
          <StatCard label="Repositories" value="5" delta="all reachable" direction="flat" />
          <StatCard label="Dirty branches" value="3" delta="+1 since yesterday" direction="down" />
          <StatCard label="Open conflicts" value="1" delta="infra-terraform" direction="down" />
          <StatCard label="Commits today" value="12" delta="+4 vs avg" direction="up" />
        </div>

        <RepoTable />
        <ActivityFeed />
      </main>
    </div>
  );
}

export default App;