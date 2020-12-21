import React from 'react';
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
const About = () => {
    return (
    <div>
        <Navbar/>
        <div className='container'>
        <main className={styles.main}>
        <h1 className={styles.title}>
        This is the About Page        
        </h1>
        <h5>Sample to convert Client APP to Server-side Rendering</h5>
        <div class="card shadow" >
            <div class="card-body" style={{width:'20rem'}}>
            <img className="card-img-top" src="/about.png" />
            <p class="card-text">NextJS is a Javascript library that uses and elevates the usage of very famous tools and frameworks in the frontend universe.</p>
            </div>
            </div>
        </main>
        </div>
    </div>)
}

export default About;