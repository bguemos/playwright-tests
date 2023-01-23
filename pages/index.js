import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Example #1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}> Welcome to my home page</h1>
      
      
        <link href="/about" className={styles.card}>
        <h2> About page</h2>
        </link>
         
        <link href="/grades" className={styles.card}>
        <h2> Grades page</h2>
        </link>
       

       <div className={styles.grid}>
        <div className={styles.grid__container}></div>
        <ul>
       <li>Create</li>
       <li>Reade</li>
       <li>Update</li>
       <li>Delete</li>
       </ul>

       <button> View all of this info</button>
      
      
      </div>
      </main>
  </>
  )
}
