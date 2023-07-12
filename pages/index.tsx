import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {Header} from "../components"
import Image from 'next/image'

const Home = ({ imgBackSide }:any) => {
  return (
    <div className={styles.container}>

      <Header/>
      <div className={styles.subContainer}>
      <button onClick={()=>console.log(imgBackSide[0].name)}> Aqui</button>
      <img alt='Oferta do dia' className={styles.imgBanner} src={imgBackSide[0].name} />
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {

  const data = await fetch('http://localhost:3000/api/images');
  const imgBackSide = await data.json();
  return { props: { imgBackSide } }
}