import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{border:"2px solid grey", fontSize:"25px" ,paddingLeft:"100px", display:"flex", backgroundColor:"#edf2f7"}}>
        <div>Soumalya Ghoshal</div>
        <Link href="/projects"><div style={{marginLeft:"100px",textDecoration:"none"}}>Projects</div></Link>
    </div>
  )
}

export default Navbar