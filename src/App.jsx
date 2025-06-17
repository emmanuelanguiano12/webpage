import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Presentation } from "./components/Presentation"
import { Projects } from "./components/Projects"

function App() {

  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200">
      <Presentation />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
