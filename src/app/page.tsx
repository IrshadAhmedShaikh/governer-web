import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "next/image";



export default function Home() {
  return (
    
    
    
  
  <div className="flex justify-around mt-10">
      
<div className="m-6 p-5">

  
      <h1 className="text-4xl"><b>Governor Sindh</b></h1>
      <p className="text-xl">Kamran Khan Tessori</p>
      <br></br>
      <h1 className="text-3xl text-blue-500" ><b>Certified Cloud</b></h1><br></br>
      <h1 className="text-3xl text-blue-500"><b>Applied Generated AI</b></h1>
      <br></br>
      <h1 className="text-3xl text-blue-500"><b>Engineer (GenEng)</b></h1>
      <br></br>
      <p className="text-2xl"><b>Earn up to $5000/month</b></p>

      <br></br>
      <p className="text-2xl"><b>Now Admission are open in Hyderabad</b></p> 
      <div className="" >
        <button className="text-2xl bg-blue-600" >Apply Now</button>
        <button className="items-center mt-0 0 0 m-5">562143 accepted applications</button>
      
      </div>
    
      
      
      
      

    

      </div>
      <div className="">
      <Image
      src='/image.png'
      alt='image'
      width={700}
      height={700}/>
      </div>
</div>


  )
}
