import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function NavBar() {

    return (
        <div className="flex justify-between items-center p-5 bg-black text-white">
            <div className="flex items-center gap-5">
                <FontAwesomeIcon icon={faDumbbell}  style={{ width: '40px', height: '40px' }}/>
                <Link href="/" className='text-2xl'>FitPlex</Link>
            </div>
            <ul className="flex justify-around gap-5">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/exercises">Exercises</Link></li>
                <li><Link href="/about">About Us</Link></li>
            </ul>
        </div>
    )
}