

export default function Home({res}) {
  return (
    <>
     <div>
        <h3>{res.name}</h3>
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
