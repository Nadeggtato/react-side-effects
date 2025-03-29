import { useEffect, useState } from "react"

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  return (
    <h1>Window width: { windowWidth }</h1>
  )
}
