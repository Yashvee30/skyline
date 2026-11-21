import { useEffect, useState } from "react"
import ContributionSkyline, { type ContributionDay } from "./ContributionSkyline"

export default function App() {
  const [data, setData] = useState<ContributionDay[] | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}contributions.json`)
      .then((r) => r.json())
      .then((j: ContributionDay[]) => setData(j))
      .catch(() => setData([]))
  }, [])

  if (!data) return <p style={{ padding: 24 }}>Loading…</p>

  return (
    <div style={{ maxWidth: 960, margin: "40px auto", padding: 16 }}>
      <ContributionSkyline data={data} palette="github" />
    </div>
  )
}
