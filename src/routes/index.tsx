import { createSignal, onMount, For } from "solid-js";
import { useNavigate } from "@solidjs/router";
// import { getScores } from '~/api/scores';

const getScores = async () => {
  let scoresUrl = "/api/scores";

  // let scoresUrl = "http://localhost:3000/api/scores";
  // if (process.env.VERCEL_URL) {
  //   scoresUrl = `http://${process.env.VERCEL_URL}/api/scores`;
  // }

  console.log("Fetching scores from:", scoresUrl);

  const res = await fetch(scoresUrl);

  console.log("Response status:", res.status);

  return res.json();
};

export default function Leaderboard() {
  const [scores, setScores] = createSignal([]);

  onMount(async () => {
    const data = await getScores();
    setScores(data);
  });

  const navigate = useNavigate();

  return (
    <div class="container mt-4">
      <div class="alert alert-danger text-center h2">GAME LEADERBOARD 21:15</div>
      <div class="bg-dark text-white row py-2">
        <div class="col-1 text-center">#</div>
        <div class="col-7">Player</div>
        <div class="col-4 text-end">Points</div>
      </div>
      {scores()?.map((s: any) => (
        <div class="row py-2 border-bottom">
          <div class="col-1 text-center">{s.ranking}</div>
          <div class="col-7">{s.avatar} {s.playername}</div>
          <div class="col-4 text-end">{s.points}</div>
        </div>
      ))}
      <div class="text-end mt-3">
        <button class="btn btn-primary" onClick={() => navigate("/player")}>
          ➕ Add New Entry
        </button>
      </div>
    </div>
  );
}
