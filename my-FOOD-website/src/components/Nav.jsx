import Logo from "../components/img/Logo.png"
import SearchBar from './Searchbar'
import Image from "next/image"
import Link from "next/link"

export default function nav() {
  return (
    <div className='items-center justify-between px-5 py-5 flex '>
        <div>
            <Link href='/'> 
                <Image src={Logo} alt="logo" width={70} />
            </Link>
        </div>
        <div>
            <SearchBar/>
            
        </div>
        <div className="flex justify-between items-center gap-3">
            <button className='text-orange-600 text-lg'>
                Sign-up
            </button>
            <button className='px-6 py-3 text-white bg-orange-600 text-lg'>
                Log-in
            </button>

        </div>
    </div>
  )
}
