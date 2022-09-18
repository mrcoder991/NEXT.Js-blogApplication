import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <style jsx>
                {`
                    .mainnav ul{
                        display: flex;
                        justify-content: center;
                          margin-top: 50px;
                      }
                       
                      .mainnav ul li{
                        margin: 0 24px;
                          list-style: none;
                          font-weight: bold;
                      }
                    `}
            </style>
            <nav className='mainnav'>
                <ul>
                    <Link href="/"><a><li>Home</li></a></Link>
                    <Link href="/about"><a ><li>About</li></a></Link>
                    <Link href="/blog"><a><li>Blog</li></a></Link>
                    <Link href="/contact"><a><li>Contact</li></a></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar