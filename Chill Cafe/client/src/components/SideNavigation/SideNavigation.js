import { Link } from "react-router-dom"

const SideNavigation = () => {
    return (
        <section className="sidebar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/food'>Food</Link></li>
                <li><Link to='/drinks'>Drinks</Link></li>
                <li><Link to='/reservation'>Reservation</Link></li>
            </ul>
        </section>
    )
}

export default SideNavigation