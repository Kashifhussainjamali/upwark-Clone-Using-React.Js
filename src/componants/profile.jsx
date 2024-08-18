import style from "./profile.module.css"
function Profile(){
    return<>
    <div className={style["maindiv"]}>
        <ul className={style["ul1"]}>
            <li><img src="profile.JPG" alt="" className={style["img"]}/></li>
            <li style={{marginLeft:"15px"}}>
                <li className={style["name"]}>Kashif Hussian</li>
                <li>Web Developer</li>
            </li>
        </ul>
        <u className={style["u"]}>Complete your profile</u>
        <div className={style["mining"]}>
        <div className={style["div1"]}>
            <div className={style["div2"]}></div>
        </div>
        <p>75%</p>
        </div>
    </div>
    </>
}
export default Profile