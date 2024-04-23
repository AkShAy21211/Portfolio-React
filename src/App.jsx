import Layout from './components/layouts/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import ParticleBackground from './components/cards/ParticleBackground';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {

  return (
    <>
    <ParallaxProvider>
      <Layout>
     <Home/>
     </Layout>
    </ParallaxProvider>
     
    </>
  )
}

export default App
