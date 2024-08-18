import style from "./navbar.module.css"

function Navbar(){
    return<>
    <ul className={style["mainul"]}>
        <li><img src="logo.png" alt="" className={style["logo"]}/></li>
        <li class="nav-item dropdown" id={style["find"]}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Find work
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Find Work</a></li>
            <li><a class="dropdown-item" href="#">Saved Jobs</a></li>
            <li><a class="dropdown-item" href="#">Proposals & Offers</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Your Services</a></li>
            <li><a class="dropdown-item" href="#">Promote with ads</a></li>
            <li><a class="dropdown-item" href="#">Direct Contracts</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" id={style["find2"]}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Deliver work
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Your active contracts</a></li>
            <li><a class="dropdown-item" href="#">Contract history</a></li>
            <li><a class="dropdown-item" href="#">Hourly work diary</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" id={style["find2"]}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage finanaces
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Financial overview</a></li>
            <li><a class="dropdown-item" href="#">Your reports</a></li>
            <li><a class="dropdown-item" href="#">Billings and earnings</a></li>
            <li><a class="dropdown-item" href="#">Transactions and invoices</a></li>
            <li><a class="dropdown-item" href="#">Certificate of earnings </a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Payments</a></li>
            <li><a class="dropdown-item" href="#">Withdraw earnings</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Tax forms</a></li>
            <li><a class="dropdown-item" href="#">Tax information</a></li>
          </ul>
        </li>
        <li id={style["find2"]}>Messages</li>

        <li className={style["searchbar"]}>
            <img src="search.png" alt="" className={style["searchlogo"]}/>
            <input type="text" placeholder="Search" className={style["input"]}/>
            <li className={style["line"]}>|</li>

            <li class="nav-item dropdown" id={style["jobs"]}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jobs
          </a>
          <ul class="dropdown-menu" >
            <li><a class="dropdown-item" href="#">Jobs</a></li>
            <li><a class="dropdown-item" href="#">Talent</a></li>
            <li><a class="dropdown-item" href="#">Project</a></li>
          </ul>
        </li>

        </li>
        <li><img src="question.png" alt="" className={style["icons"]}/></li>
        <li><img src="apps.png" alt="" className={style["icons"]}/></li>
        <li><img src="bell.png" alt="" className={style["icons"]}/></li>
        <img src="profile.JPG" alt="" className={style["profile"]}/>
    </ul>
    </>
}
export default Navbar