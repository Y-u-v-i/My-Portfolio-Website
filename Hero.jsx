import Heroimg from '../assets/hero.png'
import { FaGithub,FaInstagramSquare} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
export default function Hero(){
    const config={
        subtittle:'An aspiring engineer with better programming skills and communication skils'
    
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-4xl font-hero-font'>Hi, <br/>I am Yuva<span className='text-black'>raj</span> D
        <p className='text-2xl'>{config.subtittle}</p>
        </h1>
        <div className='flex py-10'>
            <a href='https://github.com/Y-u-v-i' className='pr-5 hover:text-white'><FaGithub size={40} /></a>
            <a href='https://www.linkedin.com/in/yuvi1729' className='pr-5 hover:text-white'><IoLogoLinkedin size={40} /></a>
            <a href='https://www.instagram.com/xx._uv_.xx/'className='hover:text-white'><FaInstagramSquare size={40} /></a>
        </div>
    </div>
        <img className="md:w-1/3" src={Heroimg}/>
    </section>
}