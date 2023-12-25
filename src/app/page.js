import Form from '../../components/Form'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Subhero from '../../components/Subhero'

export default function Home() {
  return (
    <div className='bg-white'>
    <Navbar/>
    <Hero/>
    <Subhero/>
    <Form/>
    </div>
  )
}
