import { useState } from 'react'
import Layout from './components/layouts/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';



function App() {

  return (
    <>
     <Layout>
     <Home/>
     </Layout>
    </>
  )
}

export default App
