import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

const ProduktDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState();

  const fetchData = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>{product?.title}</h2>
      <img style={{height:'100px'}} src={product?.image}/>
    </div>
  );
};
export default ProduktDetails;
