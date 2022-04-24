import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Deposits from '../components/Deposits'
import Orders from '../components/Orders'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Crypto Exchange</title>
        <meta name="description" content="Your New Crypto Exchange" />
        <link rel="icon" href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uPBrGqSV8_52CWr-Oz2_JgHaHa%26pid%3DApi&f=1" />
      </Head>

      <Header/>
      <main>
        {/* <h2 className="text-2xl font-extrabold text-black sm:text-4xl">Testing 123</h2>  */}
        <Deposits/>
        <Orders/>
      </main>
      <Footer/>
      
    </div>
  )
}

export default Home
