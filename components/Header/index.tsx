import styles from './header.module.css'
import Image from 'next/image'
import {SearchInput} from "../SearchInput"
import Logo from "../../assets/logo.webp"
import Profile from '../../assets/profile.svg'
import Heart from '../../assets/heart.svg'
import Bag from '../../assets/bag.svg'
import {menuMock} from "../../utils/menuMock"

export const Header = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <img src="https://image.graodegente.app/staticImages/2kbo7_GraoHorizontal.webp"  alt="Logo"/>
                <SearchInput/>
                <div className={styles.containerIconMenu}>
                    <Profile widht={50} height={26}/>
                    <h3>Entre ou cadastre-se</h3>
                    <Heart widht={26} height={26}/>
                    <Bag widht={26} height={26}/>
                </div>
            
            </div>
            <div  className={styles.containerMenuItem}>
                {menuMock.map((menuItem,index)=>{
                    return(
                        <label>{menuItem}</label>
                    )
                })}
            </div>

        </div>
    )
}