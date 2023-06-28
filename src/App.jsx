
import { Outlet } from 'react-router-dom'
import './App.css'
import { Helmet } from 'react-helmet-async'
function App() {


  return (
    <>
    <Helmet>
      <title>Music School - Home</title>
    </Helmet>
     <Outlet></Outlet>
    </>
  )
}

export default App
