import logo from "../resource/Earth-icon.svg"

export default function Header () {
    return (
        <nav>
            <img src={logo} alt="earth icon"></img>
            <span>my travel journal.</span>
        </nav>
    )
}