import { BrowserRouter as Router } from 'react-router-dom'
import { LayoutContainer } from '@/components/layout'

function App() {
  return (
    <Router>
      <LayoutContainer>
        <h1 className="text-3xl font-bold text-slate-700 underline">
          Hello world!
        </h1>
      </LayoutContainer>
    </Router>
  )
}

export default App
