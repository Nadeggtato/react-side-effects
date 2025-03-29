import WindowTracker from "@/components/WindowTracker";
import { useState } from "react";

export default function Home() {
  const [isTrackerVisible, setIsTrackerVisible] = useState<boolean>(true)

  function toggle() {
    setIsTrackerVisible(prevValue => !prevValue)
  }

  return (
    <main className="container">
      <button onClick={toggle}>
        Toggle WindowTracker
      </button>
      { isTrackerVisible && <WindowTracker/> }
    </main>
  );
}
