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
    const {processor, ram, storage, display} = laptop.specs;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-bold text-gray-800 text-center">{laptop.name}</h1>
                <h2 className="text-lg text-gray-600 text-center mb-4">Model: {laptop.model}</h2>
                <ul className="text-gray-700 space-y-2">
                    <li><strong>Processor:</strong> {processor}</li>
                    <li><strong>RAM:</strong> {ram}</li>
                    <li><strong>Storage:</strong> {storage}</li>
                    <li><strong>Display:</strong> {display}</li>
                </ul>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Buy Product
                </button>
            </div>
        </div>
    );
}
export default ProductsInformation;