import { redirect } from "next/navigation";

export default function Home() {
  redirect("/Hero"); // ✅ จะพาไปหน้า /hero ทันที
}