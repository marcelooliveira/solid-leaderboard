import type { NextApiRequest, NextApiResponse } from 'next';

const scores = [
  { ranking: 1, playername: "Alice", points: 1200, avatar: "👩" },
  { ranking: 2, playername: "Bob", points: 1100, avatar: "🧑" },
  { ranking: 3, playername: "Charlie", points: 950, avatar: "👦" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(scores);
}