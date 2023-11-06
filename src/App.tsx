import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { LayoutContainer } from '@/components/layout'
import { ExampleContainer } from '@/features/example'
import { NotFound } from '@/pages/_404NotFound'

function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<ExampleContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutContainer>
    </BrowserRouter>
  )
}

export default App
