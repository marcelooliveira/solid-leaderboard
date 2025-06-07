import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

function getAvatarDic() {
  return {
    "0": "not set",
    "1": "👨🏻",
    "2": "👨🏼",
    "3": "👨🏽",
    "4": "👨🏾",
    "5": "👨🏿",
    "6": "👩🏻",
    "7": "👩🏼",
    "8": "👩🏽",
    "9": "👩🏾",
    "10": "👩🏿",
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { data: scores, error } = await supabase
      .from('scores')
      .select('*');

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const avatarDic = getAvatarDic();

    const sorted = (scores ?? [])
      .sort((a, b) => b.points - a.points)
      .map((s, i) => ({
        id: s.id,
        ranking: i + 1,
        avatar: avatarDic[s.avatar.toString()] || "not set",
        playername: s.playername,
        points: s.points,
      }));

    return res.status(200).json(sorted);
  } else if (req.method === 'POST') {
    const { avatar, playername, points } = req.body;

    const { data, error } = await supabase
      .from('scores')
      .insert([{ avatar: parseInt(avatar), playername, points: parseInt(points) }])
      .select()
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json(data);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
