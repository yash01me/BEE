import { useEffect } from 'react'

function App() {
  useEffect(() => {
  let wss = new WebSocket('wss://localhost:8888');
  }, [])
  return (
    <>
      <h1>Ping Pong</h1>
    </>
  )
}

export default App
