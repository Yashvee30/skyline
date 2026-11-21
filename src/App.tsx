import { useEffect, useState } from "react"
import ContributionSkyline, { type ContributionDay } from "./ContributionSkyline"

const USERNAME = "Yashvee30"

export default function App() {
  const [data, setData] = useState<ContributionDay[] | null>(null)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((r) => r.json())
      .then((j) =>
        setData(
          j.contributions.map((c: { date: string; count: number }) => ({
            date: c.date,
            count: c.count,
          }))
        )
      )
  }, [])

  if (!data) return <p style={{ padding: 24 }}>Loading…</p>

  return (
    <div style={{ maxWidth: 960, margin: "40px auto", padding: 16 }}>
      <ContributionSkyline data={data} palette="github" />
    </div>
  )
}
