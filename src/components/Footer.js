import vectorOne from '../assets/vector1.svg';
import vectorTwo from '../assets/vector2.svg';
import vectorThree from '../assets/vector3.svg';
import vectorFour from '../assets/vector4.svg';
import githubIcon from '../assets/Icon-git.png';
import I4GIcon from '../assets/I4G.png';
import zuri from '../assets/zuri.svg';

export default function Footer() {
  return (
    <div className='mt-10 flex flex-col w-full'>
      <div className='flex gap-5 m-auto'>
        <div className='grid grid-cols-2 w-5 h-5'>
            <img src={vectorOne} alt="" />
            <img src={vectorTwo} alt="" />
            <img src={vectorThree} alt="" />
            <img src={vectorFour} alt="" />
        </div>
        <img src={githubIcon} alt="git" />
      </div>
      <span className='hidden md:block mt-16 h-[1px] opacity-50 w-full bg-[#777777] '></span>

        <div className='hidden md:flex justify-between mt-10'>
          <img src={zuri} alt="zuri" />
          <p className='opacity-50'>HNG Internship 9 Frontend Task</p>
          <img src={I4GIcon} alt="i4g" />
        </div>
    </div>
  )
}
