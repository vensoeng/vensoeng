import { Link,NavLink } from 'react-router-dom';
import '../../assets/css/header.css';
import alienImg from '../../assets/img/alien.jpg';
import favIcon from '../../assets/img/favicon.png';
import { ExportCircle,Flash } from 'iconsax-reactjs';
export default function Header()
{
    return(
        <header className="webhead">
            <div className="wh-box df-s">
                <div className="logo icon icon-ra icon-sm">
                    {/* <h1>តោះ</h1> */}
                    <img className='img-c' src={favIcon} alt=''/>
                </div>
                <div className="link-box">
                    <ul className="df-s scroll-x">
                        <li className='df-c'><NavLink className={({ isActive }) => isActive ? "df-c active" : "df-c"} to="/">ទំព័រដើម</NavLink></li>
                        <li className='df-c'><NavLink className={({ isActive }) => isActive ? "df-c active" : "df-c"} to="/about">អំពីខ្ញុំ</NavLink></li>
                        <li className='df-c'><NavLink className={({ isActive }) => isActive ? "df-c active" : "df-c"} to="/website">ការងារខ្ញុំ</NavLink></li>
                        <li className='df-c'><NavLink className={({ isActive }) => isActive ? "df-c active" : "df-c"} to="/creator">មាតិការ</NavLink></li>
                        <li className='df-c'><NavLink className={({ isActive }) => isActive ? "df-c active" : "df-c"} to="/poster">ការរចនា</NavLink></li>
                    </ul>
                </div>
                <div className="btn-main df-r">
                    <Link to='/login' className="btn">
                        <p>ទំនាក់ទំនង់</p>
                    </Link>
                    <Link to='/register' className="btn">
                        <p>ចុះឈ្មោះរៀន</p>
                        <div className="icon icon-ra icon-sm ip">
                            <Flash/>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}