import { useLocation } from "react-router-dom"

const Filters = () => {
    const location = useLocation()
    if (location.pathname === '/food' || location.pathname === '/drinks') {
        return (
            <section className="filters">
                <ul>
                    <li><a href="">Breakfast</a></li>
                    <li><a href="">Alcoholic</a></li>
                    <li><a href="">Alabala</a></li>
                    <li><a href="">Brunch</a></li>
                    <li><a href="">Natural</a></li>
                </ul>
            </section>
        )
    }
}

export default Filters