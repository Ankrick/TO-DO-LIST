import { Link } from "react-router-dom"
import Dropdown from "./Dropdown";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center p-5 bg-gray-50">
            <div>
                <h1 className="font-bold text-3xl text-red-500">Simplify</h1>
            </div>
            <ul className="flex space-x-8">
                <li><Link to ="/" className="hover:text-red-500">Home</Link></li>
                <li><Link to ="/about" className="hover:text-red-500">About</Link></li>
                <li><Link to ="/contact" className="hover:text-red-500">Contact</Link></li>
                <li><Dropdown/></li>
            </ul>
        </nav>
    )
}
 
    