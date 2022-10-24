import vectorOne from '../assets/vector1.svg';
import vectorTwo from '../assets/vector2.svg';
import vectorThree from '../assets/vector3.svg';
import vectorFour from '../assets/vector4.svg';
import githubIcon from '../assets/Icon-git.png';

export default function Footer() {
  return (
    <div className='mt-10 flex gap-5 m-auto'>
        <div className='grid grid-cols-2 w-5 h-5'>
            <img src={vectorOne} alt="" />
            <img src={vectorTwo} alt="" />
            <img src={vectorThree} alt="" />
            <img src={vectorFour} alt="" />
        </div>
        <img src={githubIcon} alt="git" />
    </div>
  )
}
