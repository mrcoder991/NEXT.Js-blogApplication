import React,{useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css';
 
const slug = (props) => {

    const [blog, setBlog] = useState(props.myblog)

    // useEffect(() => {
    //     if (!router.isReady) return;
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    //     .then((a) => {
    //         return a.json();
    //     }).then((parsed) => {
    //         setBlog(parsed)
    //     })

    // }, [router.isReady])
    

    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{blog.title}</h1>
            <hr />
            <div>
               {blog.content}
            </div>
        </main>
    </div>;
};


export async function getServerSideProps(context) {

    let data = await  fetch(`http://localhost:3000/api/getblog?slug=${context.query.slug}`)
    let myblog = await data.json()

    return {
        props:{myblog}, 
    }
}
 
export default slug;