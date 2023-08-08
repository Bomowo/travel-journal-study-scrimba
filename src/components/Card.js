import geo from "../resource/Geo-icon.svg"

export default function Card (props) {
    return (
        <div className="Card">
            <img className="location-photo" src={props.photo} alt={props.name}/>
            <header className="location-link">
                <img src={geo} alt=''/>
                <span className="country">{props.country}</span>
                <a href={props.maps}>View on Google Maps</a>
            </header>
            <h1 className="place-name">{props.name}</h1>
            <p className="date-of-visit">{props.date}</p>
            <p className="place-desc">{props.desc}</p>
        </div>
    )
}