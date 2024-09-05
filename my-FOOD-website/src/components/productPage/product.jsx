import Link from 'next/link';
import Image from 'next/image';
import Rice from '../img/rice.png'

const product = ({ image, description, price }) => {

    return (
        <>
            <div>
                <div className="card flex justify-center align-middle">
                    <div className="card-details w-2/5 h-32">
                        <div className='flex justify-between py-4'>

                            <p className=''>Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </div>
                        <div className="card-img bg-slate-200  rounded-2xl m-0">
                            <Link href='/' className='flex justify-center'>
                                <Image src={Rice} alt="food" className='w-60' />
                            </Link>
                            <div className='flex justify-between'>
                                <div className='bg-slate-50 rounded-full px-2 mb-3 mx-8'>
                                    <p>Breakfast</p>
                                </div>
                                <div className='bg-slate-50 rounded-full px-2 mb-3 mx-8'>
                                    <p>Delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between py-5'>
                            <div className='flex justify-evenly font-semibold text-lg'>
                                <p>Coconut Rice and chicken </p>
                                <p className='ms-14 text-[#FF7622]'>$10</p>
                            </div>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                                <p className='text-gray-500'>Maitama, Abuja</p>
                            </div>
                        </div>
                        <div className='rounded-full outline outline-1 inline-block outline-gray-300 px-3 my-4 font-semibold'>
                            <p>Chicken Republic</p>
                        </div>
                        <div>
                            <p className='font-semibold'>Description: {description}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit earum sit exercitationem sunt amet reiciendis accusantium sint alias nemo modi.</p>
                            <p className='font-semibold my-3 text-lg'>$10</p>
                        </div>
                        <div className='flex justify-between'>
                            <button className='bg-[#FF7622] px-20 py-2 text-white rounded-lg font-semibold'>ADD TO CART</button>
                            <div className='bg-black text-white flex justify-center  px-6 rounded-full'>
                                <button href="" className='text-center px-2'>-</button>
                                <button className='px-2'>1</button>
                                <button href="" className='px-2'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default product