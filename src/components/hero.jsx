import { HERO } from "../constants" 
import cc from "../assets/carl1.png"
import { motion } from "framer-motion"

const hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
        <motion.div 
            initial={{opacity: 0 ,x:-50}} 
            animate={{opacity: 1 , x: 0}}
            transition={{ duration : 1.5}}
        className="w-full md:w-1/2">
            <p className="my-5 p-3.5 text-3xl tracking-tighter lg:text-4xl">
                {HERO.greet}
            </p>
            <p className="mb-8 p-2 text-xl">
                {HERO.wel}
                
            </p>
            <h2 className="my-1 p-1 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                {HERO.name}

            </h2>
            
            <p className="mb-8 p-2 text-xl">
                {HERO.description}
            </p>
        </motion.div>

        {/* second div */}

        <motion.div initial={{opacity :0 , scale :0.8}} animate={{opacity:1 , scale : 1}} transition={{duration :1.5}} className="w-full md:w-1/2 lg:p-8">
            <div className="flex justify-center">
                    <motion.img initial={{opacity: 0 }} 
            animate={{opacity: 1 }}
            transition={{ duration : 1.5}} src={cc} width={400} height={450} alt="Lokesh Sai" className="rounded-3xl border border-stone-500"/>
            </div>
        </motion.div    >


    </section>
  )
}

export default hero