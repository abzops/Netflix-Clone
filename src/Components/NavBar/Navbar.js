import React, { useRef,useEffect,useState} from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [show, setShow] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const clickOut = (e)=>{
            if (show &&ref.current && !ref.current.contains(e.target)) {
               setShow (false)
            }
        }
        document.addEventListener("click",clickOut);
        return () => {
            document.removeEventListener("click",clickOut);
        }
    }, [show])
    return (
        <div className="navbar" ref={ref}>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />

            <Link className='link1' to="/">Home</Link>
            <Link  to="/tvshows">TV Shows</Link>
            <Link  to="/movies">Movies</Link>
            <Link  to="/new&popular">New & Popular</Link>
            <Link  to="/mylist">My List</Link>


            <img className="avatar"  onClick={()=>setShow(!show)} src="https://www.yorkoptometryclinic.ca/images/img_avatar.png" alt="" />
            {
                show?
                <div className="dropdown-content">
                <img className="profile" src="https://www.yorkoptometryclinic.ca/images/img_avatar.png" alt="" />
                    <p className="profile-name">Profile Name</p>
                    <a href="#" className="manage-profile">Manage Profile</a>
                    <hr />
                    <a href="#">Account</a>
                    <a href="#">Help Center</a>
                    <a href="#">Sign Out</a>
                </div>
                :null
            }
           
            <FontAwesomeIcon  onClick={()=>setShow(!show)}  className="icon" icon={faCaretDown} color="white"/>
        </div>
    )
}
export default NavBar
