import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Add1 from './componants/add1'
import Navbar from './componants/navbar'
import Part1 from './componants/part1'
import Section1 from './componants/section1'
import Section2 from './componants/section2'
import Section3 from './componants/section3'
import Profile from './componants/profile'
import Side1 from './componants/side1'
import Side2 from './componants/side2'
import Button1 from './componants/button'
import Footer from './componants/footer'


function App() {
  let [count1,count2]=useState(0)
  let hours="Hourly - Intermediate - Est. Time: Less than 1 month, Less than 30 hrs/week"
  let details="UPwork ADS Hello, Mr.Samir D. First of all, we reviewed your capability introduction and found it very interesting. We run a metal print brand, metaleks.com. We produce each metal print product our selves and use social media platforms like TikTok and Instagram to drive traffic to Shopify for conversion. Currently, we have 30+social media accounts and over 2 million fans worldwide.Our artwork comes from over 400 artists and creators worldwide. We aim to develop it into a platform where artists can share their work and earn revenue. We are running ads on Facebook, TikTok, and Google, but we are not experts. We spend about $10,000 on advertising each month, but our current ROI is only around 2. If you're interested, you can first check out our social media accounts by searching for 'metaleks.' The posts and videos there can be used as ad materials. If you're interested, we'd be very happy to collaborate with you."
  let spent=0
  let location="AVS"

  let [count11,count22]=useState(0)
  let hours1="Fixed-price - Intermediate - Est. Budget: $10"
  let detail1="I want to setup the Facebook Ads Pixel and Conversion APIs for my Shopify store. I am looking for someone who can do this immediately."
  let location1="Pakistan"
   
  let [count111,count222]=useState(0)
  let hours2="Hourly: $15-$20 - Expert - Est. Time: More than 6 months, 30+ hrs/week"
  let detail2="We are a growing agency in need of an expert in Woocommerce and Shopify to handle multiple client projects on a regular basis. We are looking for someone with deep experience in both platforms who can efficiently execute tasks, provide creative solutions, and ensure high-quality outcomes for our clients. What We're Looking For: - Expertise in Woocommerce and Shopify: You should have extensive experience in setting up, customizing, and optimizing online stores on both platforms. - Strong Technical Skills: Ability to handle custom coding, "
  let location2="Pakistan"
  let spent2="10K+"



  return (
    <>
    <Navbar></Navbar>
    <div style={{display:"flex"}}>
    <div>
      
      <Add1></Add1>
      <Part1></Part1>
      <Section1 count_1={count1} count_2={count2} hour={hours} detail={details} spents={spent} loca={location}></Section1>
      <Section2 count_1={count11} count_2={count22} hour={hours1} detail={detail1} spents={spent} loca={location1}></Section2>
      <Section3 count_1={count111} count_2={count222} hour={hours2} detail={detail2} spents={spent2} loca={location2}></Section3>
      </div>
      <div>
        <Profile></Profile>
        <Side1></Side1>
        <Side2></Side2>
      </div>
      </div>
      <Button1></Button1>
      <Footer></Footer>
    </>
  )
}

export default App
