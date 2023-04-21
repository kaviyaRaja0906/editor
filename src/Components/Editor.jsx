import React,{useRef,useEffect} from "react";
import trek from "../assets/trek.jpg";
import audio from "../assets/audio.jpg";
import styles from "./styles.module.scss";
import {GiArrowCursor} from "react-icons/gi";
import {BsHandIndex,BsFillUnlockFill,BsFillSkipBackwardCircleFill,BsFillFastForwardCircleFill} from "react-icons/bs";
import {SlCrop} from "react-icons/sl";
import {FaUpload,FaPaste,FaList} from "react-icons/fa";
import {GrRefresh} from "react-icons/gr";
import {AiFillPlayCircle,AiOutlineTable,AiFillEye,AiOutlineZoomOut,AiOutlineZoomIn} from "react-icons/ai";
import {GiAnticlockwiseRotation} from "react-icons/gi";
import {HiScissors} from "react-icons/hi";
import {MdContentCopy,MdAddBox} from "react-icons/md";
import {RxTable} from "react-icons/rx";
import WaveSurfer from "wavesurfer.js";

function Editor(){
    const waveformRef = useRef();

useEffect(() => {
  if(waveformRef.current) {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
    });
  }
}, []);
    return(
      <div className={styles.editor}>
        <div className={styles.editor__container}>
            <div className={styles.assets}>
                <h2>Assets</h2>
                <div className={styles.assets__files}>
                    <div className={styles.item}>
                      <img src={trek} alt=""></img>
                      <p>vid-0120304.mpg</p>
                    </div>
                    <div className={styles.item}>
                      <img src={audio} alt=""></img>
                      <p>aud-0120304.mp3</p>
                    </div>
                </div>
                <div className={styles.order}>
                  <MdAddBox/>
                  <AiOutlineTable/>
                  <FaList/>
                </div>
            </div>
            <div className={styles.edit}>
              <div className={styles.options}>
                <GiArrowCursor/>
                <BsHandIndex/>
                <SlCrop/>
              </div>
              <div className={styles.video}>
              <img src={trek} alt=""></img>
              </div>
            </div>
            <div className={styles.props}>
                <div className={styles.export}>
                    <FaUpload/><button className={styles.export__btn}>Export</button>
                </div>
                <hr></hr>
                <div className={styles.properties}>
                    <h2>Properties</h2>
                    <div className={styles.prop}>
                      <p>Scale</p>
                      <input type="range" min="50" max="500" value="100" className={styles.slider} />
                      <input type="text" value="100%"/>
                    </div>
                    <div className={styles.prop}>
                      <p>Opacity</p>
                      <input type="range" min="50" max="500" value="100" className={styles.slider} />
                      <input type="text" value="100%"/>
                    </div>
                    <div className={styles.prop}>
                      <p>Rotation</p>
                      <GrRefresh/>
                      <p>Z</p>
                      <input type="text" value="0.0"/>
                    </div>
                    <div className={styles.prop}>
                      <GrRefresh/>
                      <p>Y</p>
                      <input type="text" value="0.0"/>
                    </div>
                    <div className={styles.prop}>
                      <GrRefresh/>
                      <p>Z</p>
                      <input type="text" value="0.0"/>
                    </div>
                </div>
                <hr></hr>
                <div className={styles.position}>
                    <div className={styles.pos}>
                     <p>Position</p>
                     <p>X</p>
                     <input type="text" value="0.0" />
                    </div>
                    <div className={styles.pos}>
                     <p>Y</p>
                     <input type="text" value="0.0"/>
                    </div>
                    <div className={styles.pos}>
                     <p>Z</p>
                     <input type="text" value="0.0"/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.buttons}>
          <BsFillSkipBackwardCircleFill/>
          <AiFillPlayCircle/>
          <BsFillFastForwardCircleFill/>
          <progress id="file" value="32" max="100"> 32% </progress>
          <p>00:00/00:00</p>
        </div>
        <div className={styles.editing}>
           <GiAnticlockwiseRotation/>
           <GrRefresh/>
           <HiScissors/>
           <MdContentCopy/>
           <FaPaste/>
           <RxTable/>
           <AiOutlineZoomOut/>
           <progress id="file" value="32" max="100"> 32% </progress>
           <AiOutlineZoomIn/>
        </div>
        <div className={styles.track}>
          <div className={styles.tracktable}>
            <div className={styles.left}>
              <p></p>
            </div>
            <div className={styles.right}>
            <p></p>
            </div>
          </div>
          <div className={styles.tracktable}>
            <div className={styles.left}>
              <p>Track 2</p>
              <div className={styles.view}>
                <AiFillEye/>
                <BsFillUnlockFill/>
              </div>
            </div>
            <div className={styles.right}>
            
            </div>
          </div>
          <div className={styles.tracktable}>
            <div className={styles.left}>
              <p>Track 1</p>
              <div className={styles.view}>
                <AiFillEye/>
                <BsFillUnlockFill/>
              </div>
            </div>
            <div className={styles.right}>
            
            </div>
          </div>
        </div>
      </div>
    );
}

export default Editor;