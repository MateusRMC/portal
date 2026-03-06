import Image from "next/image";
import styles from "./page.module.css";
import { supabase } from "@supabase/supabase-js"

export default async function Page() {
  const data = await fetch('https://portal-heymateus.vercel.app/api/readcases');
  const cases = await data.json();
  
  return (
    <ul>
      {cases.map((coisa) => (
        <li key={coisa.id}>{coisa.title}</li>
      ))}
    </ul>
  )
}
