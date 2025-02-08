import { Link } from "react-router-dom";

function ProductComponent(props)
{
    return (
        <div className="bg-red-300">
            <Link to={`/product/${product.id}`}>
                <h1>{props.item.name}</h1>
                <p>{props.item.model}</p>            
            </Link>
        </div>
    )
}
export default ProductComponent;