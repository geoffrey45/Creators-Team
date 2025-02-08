import { laptops } from "./lappy";
import { useParams } from "react-router-dom";
function ProductsInformation()
{
    const { id } = useParams();

    const laptop = laptops.find((laptop) => laptop.id === parseInt(id));
    if(!laptop)
    {
        return <h1>Product not found</h1>
    }

    return (
        <div>
            <h1>{laptop.id}</h1>
            <h1>{laptop.name}</h1>
            <h1>{laptop.model}</h1>
            <h1>{laptop.specs}</h1>
        </div>
    );
}
export default ProductsInformation;