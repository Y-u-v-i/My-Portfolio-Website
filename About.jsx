import Aboutimg from '../assets/About.png'
export default function About(){
    const config = {
        line1: `I am a person of kind who mingle with new individuals and develop a healthy relationship or it can be mentioned,
                a type of networking skill.`,
        line2: `During free time, I engage myself in playing outdoor games with friends and family and also love to learn 
                new technologies blooming around the world and gathering what's happening around me.`,
        line3: `I am also proficient in handling databases like MySQL, frameworks like ReactJS and VueJS, and backend and front-end languages like HTML, CSS, JavaScript, Python, and C.`
    };
    
    return <section className='flex flex-col md:flex-row px-5 bg-secondary' id='about'>
        <div className='md:w-1/2'>
            <img src={Aboutimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center  text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}