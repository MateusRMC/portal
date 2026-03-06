import Image from "next/image";
import styles from "./page.module.css";
import { supabase } from "@supabase/supabase-js"

export default async function Home() {

const res = await fetch("https://portal-heymateus.vercel.app/api/readcases", {
  cache : "no-store",
});

  const json = await res.json();
  const data = Array.isArray(json.data) ? json.data : [];


  return(
  <div className="general">
    
  </div>
  );
}
