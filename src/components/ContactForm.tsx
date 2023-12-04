

const ContactForm = () => {
  return (
    <div className="container max-w-[800px] bg-red-700 text-white p-12  mx-auto my-12 rounded-md">
        <p className="text-3xl font-bold mb-3">Connect With Us</p>
        <p className="font-light">Hey there! Got something on your mind? We're here to help, chat, or brainstorm. Your thoughts matter, 
            and we're here to make your experience even better. Your messages brighten our day!</p>

        <form className="grid gap-3  grid-cols-2 my-3">
            <input type='' placeholder="Name" className='px-6 py-4 rounded-md'/>
            <input type='' placeholder="Email" className='px-6 py-4 rounded-md'/>
            <input type='' placeholder="Phone" className='px-6 py-4 rounded-md'/>
            <select id="" name="Select your service" title="Select Your Service" className='px-6 py-4 rounded-md '>
  
            </select>
            <textarea name="message" title="Additional Details" placeholder="Additional Details" className='px-6 col-span-2 rounded-md h-32 placeholder-black' >
                Additional Details!
            </textarea>
            <button className="bg-black col-span-2 px-6 py-3 text-center text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out gap-2 ">Send</button>
        </form>
    </div>
  )
}

export default ContactForm