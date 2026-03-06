import Image from "next/image";
import styles from "./page.module.css";
import { supabase } from "@supabase/supabase-js"

export default async function Page() {
  const data = await fetch('https://portal-heymateus.vercel.app/api/readcases')
  const cases = await data.json()
  return (
    <ul>
      {cases.map((case) => (
        <li key={case.id}>{case.title}</li>
      ))}
    </ul>
  )
}
