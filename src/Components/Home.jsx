import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import styles from "./styles.module.scss";

function Home(){
    return(
      <div className={styles.home}>
       <Sidebar/>
       <Main/>
      </div>
    );
}

export default Home;