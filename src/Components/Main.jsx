import React from "react";
import styles from "./styles.module.scss";
import profile from "../assets/profile.jpg";
import bali from "../assets/bali.jpg";
import camping from "../assets/camping.jpg";
import trek from "../assets/trek.jpg";
import {RiSearch2Line} from "react-icons/ri";
import {BsCameraVideoFill} from "react-icons/bs";
import {HiOutlineScissors} from "react-icons/hi";
import {MdKeyboardArrowRight} from "react-icons/md";

function Main(){
    return(
      <div className={styles.main}>
        <div className={styles.nav}>
          <div className={styles.search}>
            <div className={styles.search__icon}>
             <RiSearch2Line/>
            </div>
            <input type="text" placeholder="Search"></input>
           </div>
            <div className={styles.profile}>
                <img className={styles.profile__img} src={profile} alt=""></img>
            </div>
        </div>
        <div className={styles.main__content}>
            <div className={styles.actions}>
              <div className={styles.actions__links}>
                <HiOutlineScissors/><a>Create Project</a>
              </div>
              <div className={styles.actions__links}>
                <BsCameraVideoFill/><a>Record Video</a>
              </div>
            </div>
            <div className={styles.actions__all}>
                <a>All videos<MdKeyboardArrowRight/></a>
              </div>
        </div>
        <div className={styles.videos}>
         <h3>Recent Videos</h3>
         <div className={styles.videos__list}>
            <div className={styles.item}>
                <img className={styles.img} src={bali} alt=""></img>
                <h4>Bali itenary - A complete guide</h4>
            </div>
            <div className={styles.item}>
                <img  className={styles.img} src={camping} alt=""></img>
                <h4>River side Camping - Must visit</h4>
            </div>
            <div className={styles.item}>
                <img  className={styles.img} src={trek} alt=""></img>
                <h4>Trekking to breakthtaking views</h4>
            </div>
         </div>
        </div>
      </div>
    );
}

export default Main;