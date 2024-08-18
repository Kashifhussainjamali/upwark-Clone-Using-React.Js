import style from "./part1.module.css"
function Part1(){
    return <>

    <li className={style["searchbar"]}>
            <img src="search.png" alt="" className={style["searchlogo"]}/>
            <input type="text" placeholder="Search for jobs" className={style["input"]}/>
        </li>

    <p className={style["text"]}>Saved Searches: <span className={style["text2"]}>shopify_2, shopify</span></p> 
    <li className={style["doting"]}><h4>Jobs you might like</h4><img src="dots.png" alt="" className={style["dots"]}/></li>   

    <ul className={style["mainul"]}>
    <li>
        <p className={style["p1"]}>Saved Searches</p>
        <div className={style["greendiv"]}></div>
    </li>
    <li>
        <ul className={style["mainul"]}>
            <li className={style["best"]}>Best Matches</li>
            <li className={style["best"]}>Most Recent</li>
            <li className={style["best"]}>Saved Jobs</li>
        </ul>
        <div className={style["silverdiv"]}></div>
    </li>
    </ul>
    <p className={style["p2"]}>Build a personal feed of relevant jobs by saving up to 30 searches.</p>
    <hr className={style["hr1"]}/>

    <ul className={style["buttons"]}>
        <li className={style["all"]}>All</li>
        <li className={style["shopify"]}>shopify_2</li>
        <li className={style["shopify"]}>shopify</li>
        <li className={style["manage"]}>Manage</li>
    </ul>
    <button className={style["btn"]}>There are new jobs. Click to see them</button>
    </>
}
export default Part1