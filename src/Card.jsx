import pfp from "./assets/pfp.jpg"

function Card(){

return(
    <div className="card">
        <img className="img" src={pfp} alt="profile picture"></img>
        <h2 className="title">Void</h2>
        <p className="text">Just goofing around with React </p>
    </div>
);

}

export default Card;