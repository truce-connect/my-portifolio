

import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { motion} from 'framer-motion'


const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }


    }

})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        
        <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
     transition={{ duration: 1.5 }}
        className="my-2 text-center text-4xl"> Technology</motion.h1>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1.5}}


        className=" flex flex-wrap items-center justify-center gap-4">

            <motion.div
            variants={iconVariants (2.5)}
            initial = 'initial'
            animate= 'animate'
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants (2.5)}
            initial = 'initial'
            animate= 'animate'
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl text-red-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants (2.5)}
            initial = 'initial'
            animate= 'animate'
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants (2.5)}
            initial = 'initial'
            animate= 'animate'
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJs className='text-7xl text-white-400'/>
            </motion.div>
            <motion.div 
            
            variants={iconVariants (2.5)}
            initial = 'initial'
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <  FaNodeJs className='text-7xl text-green-400'/>

            </motion.div>
            <motion.div 
            variants={iconVariants (2.5)}
            initial = 'initial'
            animate= 'animate'className="rounded-2xl border-4 border-neutral-800 p-4">
                < FaDatabase className='text-7xl text-blue-600'/>
            </motion.div>
        </motion.div>


    </div>

  )
}

export default Technologies