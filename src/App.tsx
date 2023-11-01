import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LayoutContainer } from '@/components/layout'
import { ExampleContainer } from '@/features/example'
import { NotFound } from '@/pages/_404NotFound'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<ExampleContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutContainer>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        position="bottom-right"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App
