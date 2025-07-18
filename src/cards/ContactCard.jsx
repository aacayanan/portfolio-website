function ContactCard() {

    const handleButtonClick = () => {
        const userEmail = document.querySelector('input[type="email"]').value;
        const userMessage = document.querySelector('textarea').value;
        // TODO: Implement email sending logic here
    }

    return (
        <div className='flex flex-col gap-2.5'>
            <div className='text-black text-xl font-bold'>
                Contact Me
            </div>
            <div className='p-6 border rounded-lg border-gray-400'>
                <div className='flex w-full justify-center items-center pb-4 text-md font-semibold text-black'>
                    Send me an email
                </div>
                <div className='flex flex-col gap-4 justify-center'>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="p-2 border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        rows="4"
                    ></textarea>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                        onClick={handleButtonClick}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;