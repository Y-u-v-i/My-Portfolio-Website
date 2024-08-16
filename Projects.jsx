import Notes from "../assets/Notes.png"
import crud from "../assets/crud.png"
import calci from "../assets/calculator.png"
import encrypt from "../assets/enc.png"
import home from "../assets/home.png"
export default function Projects(){
    const config={
        projects:[
            {
                image:Notes,
                description:'To-Do notes app using HTML,CSS and Javascript',
                link:'https://github.com/Y-u-v-i/Notes-Application'
            },
            {
                image:crud,
                description:'CRUD database for storing basic datas of candidates or students using Django and MySQL',
                link:'https://github.com/Y-u-v-i/Student-Management-CRUD-using-Python-Django-and-SQL-'
            },
            {
                image:calci,
                description:'A basic calculator for calculating mathematical problems using HTML,CSS and Javascript',
                link:'https://github.com/Y-u-v-i/Calculator-using-HTML-CSS-Javascript'
            },
            {
                image:encrypt,
                description:'A basic Password Manager using Python-file handling as backend',
                link:'https://github.com/Y-u-v-i/Password-Manager-using-Cryptography-library-in-Python'
            },
            {
                image:home,
                description:'Google home page clone using HTML,Tailwindcss and Javascript ',
                link:'https://github.com/Y-u-v-i/Google-Home-Page-clone-using-Tailwindcss'
            }
        ]
    }
    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5 ">
           <h1 className="text-4xl border-b-4 border-secondary mb-5 text-center w-[170px] font-bold">Projects</h1>
            <p>These are my projects done so for...Kindly check them out 😊 </p>
        </div>
       </div>    
        <div className="w-full">
          <div className="flex  flex-col md:flex-row px-10 gap-5">
                {config.projects.map((project)=> (
                    // eslint-disable-next-line react/jsx-key
                    <a href={project.link}>
                    <div className="relative">
                        <img className="h-[200px] w-[500px]" src={project.image}/>
                        <div className="project-desc">
                            <p className="text-center px-5 py-5 md:px-0">{project.description}</p>
                            <div className="flex justify-center">
                                <a className="btn" target="_blank" href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                    </a>
                ))}
          </div>
        </div>
    </section>
}