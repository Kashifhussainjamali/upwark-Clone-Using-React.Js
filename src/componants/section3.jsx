import style from "./section2.module.css"
import { useState } from "react";


const Section3=({count_1,count_2,hour,detail,spents,loca})=>{

    let [purposal1,purposal2]=useState([])

    // const currentTime = new Date().toLocaleTimeString();

    let [time1,time2]=useState([])

    let [get1,set1]=useState([])

    const KeyDown=(event)=>{
        if (event.key==="Enter"){
          if (event.target.value!=""){
              let result=event.target.value;
              event.target.value=""
              
              count_2((count_1)+1)

              let newtime=[...time1,new Date().toLocaleTimeString()]
              time2(newtime)

              let newresult=[...purposal1,result]
              purposal2(newresult)
          }
        }
    }
    const change=(index)=>{
        set1(index)
    }


    return<>
    
    <div className={style["sectionmain"]}>
    <hr />
        <small className={style["small"]}>Posted 34 minutes ago</small>
        <ul className={style["ul1"]}>
            <li className={style["regarding"]}>Woocommerce & Shopify Expert Needed <br /> for Ongoing Agency Projects</li>
            <li><img src="icons2.png" alt="" /><b className={style["count"]}>{count_1}</b></li>
        </ul>
        <small className={style["small"]}>{hour}</small>
        <p className={style["article"]}>{detail}</p>
        <ul className={style["detail"]}>
            <li className={style["li1"]}><img src="verified.png" alt="" className={style["icon"]}/> Payment verified</li>
            <li className={style["li1"]}>⭐⭐⭐⭐⭐</li>
            <li className={style["li1"]}>${spents} Spent</li>
            <li className={style["li1"]}><img src="location.png" alt="" className={style["icon"]}/> {loca}</li>
        </ul>

        <b className={style["entery"]}>Your Purposal: <input type="text" placeholder="enter purposal here" className={style["input"]}
        onKeyDown={KeyDown}/></b>    
        <br />
        <br />


        <b className={style["purposale"]}>Purposals.</b><br />

        <ul class="list-group">
            <table>
                <tr>
                    <th>Data.</th>
                    <th>Time.</th>
                </tr>
                <tr>
                    <td> <ul class="list-group list-group-numbered">
                        {purposal1.map((pro,index) =><li className={`list-group-item ${get1=== index ? 'active': "" }`}
                        onClick={()=>change(index)}>{pro}
                        </li>)}
                        </ul>
                        </td>

                        <td>
                        <ul class="list-group">
                        {time1.map((tim,index) =><li className={`list-group-item ${get1=== index ? 'active': "" }`}
                        onClick={()=>change(index)}>{tim}</li>)}
                        </ul></td>
                </tr>
            </table>
        
    </ul>
    </div>
    
    </>
}
export default Section3