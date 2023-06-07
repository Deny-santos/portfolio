import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderActive } from "react-icons/vsc"

const values = {
    experience: {
      icon: <FaAward className='about__icon'/>,
      title: "Experience",
      description: "2,5+ years of experience"
    },
    tec: {
      icon: <FiUsers className='about__icon' />,
      title: "Technologies",
      description: "Javascript / React and Next"
    },
    projects: {
      icon: <VscFolderActive className='about__icon' />,
      title: "Projects",
      description: "10+ Fineshed"
    }
  }

  export const abouts = [values.experience, values.tec, values.projects]
  