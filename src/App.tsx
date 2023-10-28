import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LayoutContainer } from '@/components/layout'
import { ExampleContainer } from '@/features/example'
import 'react-toastify/dist/ReactToastify.css'
import { TailSpin } from 'react-loader-spinner'

function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<ExampleContainer />} />
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
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible
      />
    </BrowserRouter>
  )
}

export default App
