import style from "./footer.module.css"

function Footer(){
    return<>

    <div className={style["footermain"]}>
        <li style={{listStyle:"none",display:"flex"}}>
        <ul className={style["ul1"]}>
            <li className={style["li1"]}>About Us</li>
            <li className={style["li1"]}>Feedback</li>
            <li className={style["li1"]}>Community</li>
        </ul>
        <ul className={style["ul1"]}>
            <li className={style["li1"]}>Trust, Safety & Security</li>
            <li className={style["li1"]}>Help & Support</li>
            <li className={style["li1"]}>Upwork Foundation</li>
        </ul>
        <ul className={style["ul1"]}>
            <li className={style["li1"]}>Terms of Service</li>
            <li className={style["li1"]}>Privacy Policy</li>
            <li className={style["li1"]}>CA Notice at Collection</li>
            <li className={style["li1"]}>Cookie Settings</li>
        </ul>
        <ul className={style["ul1"]}>
            <li className={style["li1"]}>Accessibility</li>
            <li className={style["li1"]}>Desktop App</li>
            <li className={style["li1"]}>Cookie Policy</li>
            <li className={style["li1"]}>Enterprise Solutions</li>
        </ul>
        </li>
        <ul className={style["ul2"]}>
            <li>Follow Us <img src="fb.png" alt="" /></li>
            <li style={{marginLeft:"650px"}}>Mobile App <img src="ios.png" alt="" /></li>
            
        </ul>
        <hr style={{color:"white",width:"1150px",marginLeft:"30px"}}/>
        <p className={style["p"]}>© 2015 - 2024 Upwork® Global Inc.</p>
    </div>
    
    </>
}
export default Footer