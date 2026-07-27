import { useState } from 'react'
import IntroLoader from './components/IntroLoader'

function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      {introDone && (
        <main className="min-h-screen bg-abbie-bg text-white">
          <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-3xl">Main site coming in Step 3 🚀</h1>
          </div>
        </main>
      )}
    </>
  )
}

export default App