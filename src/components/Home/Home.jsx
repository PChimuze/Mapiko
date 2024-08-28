
import { Footer } from '../footer'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Bgvideo from '../media/o sucesso.mp4'
import '../animations.css'


export const Home = () => {
  return (
    <section id ='home' className='bg-black transition-all duration-300 ease-in-out'>
      
     
      <motion.main
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
      >
         <video src={Bgvideo} autoPlay muted loop className='w-full h-[100vh] object-cover' />
            <div className=" absolute w-full  top-[28%] text-white ">
                
                <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.0, delay: 0.2 }}
            className="flex flex-col items-center justify-center pt-20"
          >
            <h1 className=" text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4">Bem-vindo ao Mapiko</h1>
            <p className="text-xl 2xl:text-2xl text-white mb-8">Mensagem aleatória</p>


            <motion.div  className='flex justify-between space-x-6'>

            

            <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            >

            <Link to="/portifolio">
              <button className=" w-32 lg:w-48 bg-blue-500/60 text-blue-50 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Portifolio
              </button>
              </Link>
              </motion.div>
              <motion.div 
initial={{ x: '-100%', opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8, delay: 0.6 }}

>

<Link  to="/servicos">
  <button className="w-32 lg:w-48 bg-orange-400/60 text-blue-50 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
  Serviços
  </button>
</Link>
</motion.div>



              </motion.div>



           
          </motion.div> 

          <motion.div  className='flex justify-center mt-4 space-x-6'>

            



<motion.div 
 initial={{ x: '-100%', opacity: 0 }}
 animate={{ x: 0, opacity: 1 }}
 transition={{ duration: 0.8, delay: 0.6 }}
           
>
           
            <Link to="contact" spy={true} smooth={true} offset={-100} key="contact">
              <button className=" w-32 h-14 lg:w-48 text-sm bg-black/60 text-blue-50 px-2 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Entrar em contacto
              </button>
            </Link>
            </motion.div>


<motion.div
initial={{ x: '100%', opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8, delay: 0.6 }}
>

<Link to="about" spy={true} smooth={true} offset={-100} key="about">
  <button className="w-32 text-base h-14 lg:w-48 bg-black/60 text-blue-50 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
    Sobre Nós
      </button>
  </Link>
  </motion.div>
  </motion.div>
  </div>
  

      </motion.main>
     
      </section>
  )

}

