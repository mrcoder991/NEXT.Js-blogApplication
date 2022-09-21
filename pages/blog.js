import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

const Blog = (props) => {
    let data = props.allBlogs;
    // console.log(data)
    const [blogs, setBlogs] = useState(props.allBlogs);
    // useEffect(() => {
    //     fetch('http://localhost:3000/api/blogs')
    //     .then((a) => {
    //         return a.json();
    //     }).then((parsed) => {
    //         setBlogs(parsed)
    //     })
    // }, [])

    return <div className={styles.container}>
        <main className={styles.main}>
            {blogs.map((blogitem) => {
                return <div key={blogitem.slug}>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                        <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
                    <p className={styles.blogItemp}>{blogitem.content.substr(0, 200)}...</p>
                </div>
            })}
        </main>
    </div>
};

export async function getServerSideProps(context){
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs = await data.json()

    return {
        props:{allBlogs}, 
    }
}

export default Blog;