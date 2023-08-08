import geo from "../resource/Geo-icon.svg"

export default function Card () {
    return (
        <div className="Card">
            <img className="location-photo" src="https://source.unsplash.com/WLxQvbMyfas" alt="Mount Fuji"/>
            <header className="location-link">
                <img src={geo} alt=''/>
                <span className="country">JAPAN</span>
                <a href="https://goo.gl/maps/EP5J9aAFigoTGhnZ8">View on Google Maps</a>
            </header>
            <h1 className="place-name">Mount Fuji</h1>
            <p className="date-of-visit">12 Jan, 2021 - 24 Jan, 2021</p>
            <p className="place-desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    )
}