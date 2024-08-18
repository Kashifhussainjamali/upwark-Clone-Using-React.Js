import style from "./side2.module.css"

function Side2(){
    return<>
        <div className={style["maindiv"]}>
            <ul className={style["ul1"]}>
                <li className={style["text"]}>Upwork Academy </li>
                <li><img src="share.png" alt="" className={style["logo"]}/></li>
            </ul>
            
            <ul className={style["ul1"]} >
                <li className={style["text"]}>Direct Contracts </li>
                <li><img src="share.png" alt="" className={style["logo"]}/></li>
            </ul>
           
            <ul className={style["ul1"]} >
                <li className={style["text"]}>Get Paid </li>
                <li><img src="share.png" alt="" className={style["logo"]}/></li>
            </ul>
          
            <ul className={style["ul1"]}>
                <li className={style["text"]}>Community & Forums</li>
                <li><img src="share.png" alt="" className={style["logo"]}/></li>
            </ul>
        
            <ul className={style["ul1"]}>
                <li className={style["text"]}>Help Center</li>
                <li><img src="share.png" alt="" className={style["logo"]}/></li>
            </ul>
            
        </div>
    </>
}
export default Side2;