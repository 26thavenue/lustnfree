
const Footer = () => {
  return (
    <div className='bg-black w-full text-white'>
        <div className="flex items-center justify-between p-12">
            <div className='grid gap-2'>
                <p className='mb-1 text-red-600'>MENU</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <div className='grid gap-2'>
                <p className='mb-1 text-red-600'>QUICK LINKS</p>
                <p>FAQs</p>
                <p>Donate</p>
                <p>Newsletter</p>
            </div>
            <div></div>
        </div>

        <div className="flex justify-between p-12 text-[14px]">
            <p className=' text-gray-600'>©Copyright 2023, All Rights Reserved.</p>
            <div className="flex items-center justify-between gap-4">
                <p>Terms Of Use</p>
                <p>Privacy Policy</p>

            </div>
        </div>
        
    </div>
  )
}

export default Footer