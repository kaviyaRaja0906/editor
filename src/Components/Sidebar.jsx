import React from "react";
import styles from "./styles.module.scss";
import logo from "../assets/logo.png";
import {FiPlus} from "react-icons/fi";
import {MdVideoSettings} from "react-icons/md";
import {BiHomeHeart} from "react-icons/bi";
import {CgTemplate} from "react-icons/cg";

function Sidebar(){
    return(
      <div className={styles.sidebar}>
        <div className={styles.sidebar__container}>
          <img className={styles.logo} src={logo} alt=""></img>
          <div className={styles.menu}>
            <div className={styles.menu__item}>
              <a>New Video</a> <FiPlus/>
            </div>
            <div className={styles.menu__item}>
              <BiHomeHeart/><a>Home</a>
            </div>
            <div className={styles.menu__item}>
              <CgTemplate/><a>Template</a>
            </div>
            <div className={styles.menu__item}>
              <MdVideoSettings/><a>All Videos</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;