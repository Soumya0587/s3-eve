import Image from "next/image"
import Link from "next/link"

import Navbar from "../components/navbar"



export default function Home({res}) {

  const skills=["HTML", "CSS" , "JavaScript" , "React" , "Next.js" , "Node"]


  return (
    <>
    <Navbar/>
    
     <div>
      <Image src={res.avatar_url} alt="image" height={150} width={150} />
        <h2>{res.name}</h2>
        <h3>{res.login}</h3>
        <h3>{res.bio}</h3>
        <h4>{res.location}</h4>
        <div >
        <Link href="https://drive.google.com/drive/folders/191b5XGfAm-rwMgnj8I7XT7Fh-QKP5FyC?usp=share_link">
        <button style={{backgroundColor:"#3182ce", borderRadius:"15px", height:"40px", width:"130px",marginLeft:"25px",border:"0px",color:"white"}}>Resume</button>
        </Link>

          <Link href={res.blog}>
          <button style={{backgroundColor:"#38a169", borderRadius:"15px", height:"40px", width:"130px",border:"0px",marginLeft:"25px",color:"white"}}>Portfolio</button>
          </Link>
        
        <Link href="https://github.com/Soumya0587">
        <button style={{backgroundColor:"#3182ce", borderRadius:"15px", height:"40px", width:"130px",marginLeft:"25px",border:"0px",color:"white"}}>Follow</button>
        </Link>
        
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)", marginTop:"40px",width:"200px",gap:"15px"}}>
          {skills.map((el,i)=>(
            
              <div style={{backgroundColor:"#3182ce", borderRadius:"15px",color:"white",textAlign:"center" ,height:"25px", width:"90px",marginLeft:"25px",border:"0px"}} key={i}>{el}</div>
          
            
          ))}
        </div>
    </div>
   
    </>
  )
}
export async function getStaticProps(){
  let data = await fetch("https://api.github.com/users/soumya0587")
  let response= await data.json()
  return{
      props:{
          res : response
      }
  }
}

