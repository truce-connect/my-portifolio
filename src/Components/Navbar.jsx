 import logo from '../assets/logo.jpg'
 import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import all icons from the 'fa' set
 import { AiOutlineWhatsApp } from 'react-icons/ai';






const Navbar = () => {
  return (
    
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div  className="flex flex-shrink-0 items-center">
            <img  className="w-[80px] rounded-full" src= {logo} alt="" />

        </div>
        <div  className='m-8 flex items-center gap-4 text-2xl'>
            <FaLinkedin/>
            <a href='https://github.com/truce-connect'><FaGithub/></a>
            <a href='https://github.com/truce-connect'><AiOutlineWhatsApp/></a>
            <a href="https://www.instagram.com/truce__connect/profilecard/?igsh=MWtlbTRzYjV3bHpnMQ=="><FaInstagram/></a>

        </div>

    </nav>
    
  )
}

export default Navbar