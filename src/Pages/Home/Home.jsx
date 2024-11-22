import Hero from "../../Components/Hero/hero"

import Climate from '../../Components/Climate/Climate'
import StatsAndProcess from '../../Components/Stats/Stats'

function Home() {
  return (
    <>
    <Climate/>
    <StatsAndProcess/>
    </>
    <div>
        <Hero/>
        
    </div>
  )
}

export default Home