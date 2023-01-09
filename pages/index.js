import Image from "next/image"
import Navbar from "../components/navbar"


export default function Home({res}) {
  return (
    <>
    <Navbar/>
     <div>
      <Image src={res.avatar_url} alt="image" height={150} width={150} />
        <h2>{res.name}</h2>
        <h3>{res.login}</h3>
        <h3>{res.bio}</h3>
        <h4>{res.location}</h4>
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
