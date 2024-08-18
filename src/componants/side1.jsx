import style from "./side1.module.css"

function Side1(){
    return<>
        <div className={style["maindiv"]}>
            <ul className={style["ul1"]}>
                <li className={style["text"]}>Promote with ads</li>
                <li><img src="down.png" alt="" className={style["logo"]}/></li>
            </ul>
            <hr />
            <ul className={style["ul1"]} >
                <li className={style["text"]} style={{marginRight:"75px"}}>Connects</li>
                <li><img src="down.png" alt="" className={style["logo"]}/></li>
            </ul>
            <hr />
            <ul className={style["ul1"]} >
                <li className={style["text"]} style={{marginRight:"55px"}}>Preferences</li>
                <li><img src="down.png" alt="" className={style["logo"]}/></li>
            </ul>
            <hr />
            <ul className={style["ul1"]}>
                <li className={style["text"]}  style={{marginRight:"70px"}}>Proposals</li>
                <li><img src="down.png" alt="" className={style["logo"]}/></li>
            </ul>
            <hr />
            <ul className={style["ul1"]}>
                <li className={style["text"]}  style={{marginRight:"25px"}}>Project Catalog</li>
                <li><img src="down.png" alt="" className={style["logo"]}/></li>
            </ul>
            <hr />
        </div>
    </>
}
export default Side1;