export default function Contact(){
    const config={
        email:'yuvarajvictor1234@gmail.com',
        Phone:'+91 6382828391'
    }
    return <section  id='contact' className='flex flex-col px-5 bg-primary py-32'>
            <div className='flex flex-col items-center text-white'>
                <h1 className='text-4xl border-b-4 text-white border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5'> If You want to discuss in more detail, please contact </p>
                <p className="py-2"><span className="font-bold">Email:</span> {config.email}</p>
                <p className="py-2"><span className="font-bold">Phone No. :</span> {config.Phone}</p>
            </div>
    </section>
}