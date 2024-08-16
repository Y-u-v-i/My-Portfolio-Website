import Resimg from '../assets/resume.png'
export default function Resume(){
    const config={
        link:'https://drive.google.com/file/d/1jtMtbH-rgX4tNBvGTjBYLWTFZgUlAPgh/view?usp=sharing'
    }
    return <section id='resume' className='flex flex-col md:flex-row px-6 bg-secondary'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px] mr-5' src={Resimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center  text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You view and download my resume <a className='btn px-5' href={config.link}> Download</a></p>
            </div>
        </div>
    </section>
}