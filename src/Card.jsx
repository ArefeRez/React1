import "./Card.css";
const Card= ({img,title,author,price}) =>{
    return(
        <>
        <div className="card">
            <img src={img} alt="" />
            <p className="p1">{title}</p>
            <p className="p2">{author}</p>
            <hr />
            <p className="p3">{price}</p>
        </div>
    </>
    )
}
export default Card;