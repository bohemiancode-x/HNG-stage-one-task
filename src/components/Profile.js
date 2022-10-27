import { useState } from 'react'
import profileImg from '../assets/images/profile.jpg'
import shareIcon from '../assets/share-icon.svg'
import shareIconWeb from '../assets/Icon.svg'
import cameraIcon from '../assets/camera-icon.svg'

export default function Profile() {
  const [hover, setHover] = useState(false);
  const [tooltipHover, setTooltipHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
    //console.log(hover);
  };
  const toggleToolTip = () => {
    setTooltipHover(!tooltipHover)
  };



  return (
    <div className='relative flex flex-col items-center mt-10 w-full'>
        <div onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()} className='relative overflow-hidden'>
          <div className={hover ? 'absolute flex items-end justify-center h-full w-full rounded-full bg-[#777]/70' : 'hidden'}>
            <img className='mb-3 h-7 w-7'  src={cameraIcon} alt="" />
          </div>
         <img className='h-28 w-28 rounded-full' id='profile__img' src={profileImg} alt="" />
        </div>
        <h3 className='font-bold mt-5' id='twitter'>emmie_porsche</h3>
        <h3 className='hidden' id='slack'>bohemian-x</h3>
        <button className='absolute top-0 right-0 md:right-24'>
            <img className='md:hidden' src={shareIcon} alt="" />
            <div className='hidden md:flex md:flex-row-reverse gap-2 relative'>
              <img onMouseEnter={() => toggleToolTip()} onMouseLeave={() => toggleToolTip()}  className='border-2 border-dotted rounded-full p-2 border-[#EAECF0]' src={shareIconWeb} alt="" />
              <span className={tooltipHover ? 'tooltip' : 'invisible'}>Share Link</span>
            </div>
        </button>
    </div>
  )
}
