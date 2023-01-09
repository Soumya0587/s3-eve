import Link from 'next/link'
import React from 'react'

const Projects = ({data}) => {
    console.log(data)
  return (
    <div>
        <div style={{display :"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"20px" }}>
            {data.map((el)=>(
            <Link key={el.id} href={el.html_url}>
            <div key={el.id} style={{border:"2px solid grey", padding:"15px"}}>
                <h2>{el.name}</h2>
                <h4>{el.forks_count}</h4>
                <h4>{el.stargazers_count}</h4>
                <h2>{el.language}</h2>
            </div>
            </Link>
            ))}
        </div>
    </div>
  )
}
export async function getStaticProps(){
    let data = await fetch("https://api.github.com/search/repositories?q=user:soumya0587+fork:true&sort=updated&per_page=10&type=Repositories")
    let response= await data.json()
    let items= await response.items
    return{
        props:{
            data : items
        }
    }
  }
export default Projects