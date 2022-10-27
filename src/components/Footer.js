import slackIcon from '../assets/slack.png'
import githubIcon from '../assets/Icon-git.png';
import I4GIcon from '../assets/I4G.png';
import zuri from '../assets/zuri.svg';

export default function Footer() {
  return (
    <div className='my-10 flex flex-col w-full'>
      <div className='flex gap-5 m-auto'>
        <img className='h-6 w-6' src={slackIcon} alt="slack" />
        <img className='h-6 w-6' src={githubIcon} alt="git" />
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
