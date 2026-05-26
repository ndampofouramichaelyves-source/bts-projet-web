import { useLocalStorage } from "../hooks/useLocalStorage";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

const tachesInitiales = [
  {
    id: 1,
    titre: "Conception de l'ontologie",
    description: "Rédiger les axiomes de base.",
    statut: "A faire",
  },
];

export default function Dashboard() {
  const [tasks, setTasks] = useLocalStorage("taskflow_data", tachesInitiales);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 700,
            fontSize: 38,
            letterSpacing: -1,
            color: "#1a1a2e",
            marginBottom: 8,
          }}
        >
          Tableau de bord
        </h1>
        <p style={{ color: "#8b8fa8", fontSize: 15 }}>
          Gérez et suivez les livrables de votre équipe
        </p>
      </div>

      <TaskForm onAddTask={(t) => setTasks([...tasks, t])} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: "#1a1a2e",
          }}
        >
          Toutes les tâches
        </span>
        <span
          style={{
            background: "rgba(99,91,255,0.08)",
            color: "#635bff",
            border: "1px solid rgba(99,91,255,0.2)",
            borderRadius: 20,
            padding: "3px 12px",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {tasks.length} tâche{tasks.length > 1 ? "s" : ""}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: 18,
        }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
