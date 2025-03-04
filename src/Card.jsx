import { Link } from "react-router-dom";
import "./Card.css";
const Card= ({img,title,author,price,url}) =>{
    return(
        
        <Link to={url} className="card">
            <img src={img} alt="" />
            <p className="p1">{title}</p>
            <p className="p2">{author}</p>
            <hr />
            <p className="p3">{price}</p>
        </Link>
    
    )
}
export default Card;