import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="bg-black flex justify-between items-center p-5">
            <div className="p-5 font-mono">
                <p className="text-white">© 2025 FitPlex</p>
            </div>

            <div className="flex gap-5">
                <Link href="https://www.facebook.com/?locale=es_LA">
                    <FaFacebook className="w-6 h-6 text-blue-600" />
                </Link>
                
                <Link href="https://www.instagram.com/">
                    <FaInstagram className="w-6 h-6 text-pink-500" />
                </Link>
            </div>
        </footer>
    )
}