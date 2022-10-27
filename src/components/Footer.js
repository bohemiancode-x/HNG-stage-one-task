import slackIcon from '../assets/slack.png'
import githubIcon from '../assets/Icon-git.png';
import I4GIcon from '../assets/I4G.png';

export default function Footer() {
  return (
    <div className='my-10 flex flex-col w-full'>
      <div className='flex gap-5 m-auto'>
        <img className='h-6 w-6' src={slackIcon} alt="slack" />
        <img className='h-6 w-6' src={githubIcon} alt="git" />
      </div>
      <span className='mt-16 h-[1px] opacity-40 w-full bg-[#777777] '></span>

        <div className='flex flex-col gap-3 md:flex-row justify-between mt-10'>
          <div className='flex gap-[1px] font-bold md:text-lg'>
            <p>Zuri</p>
            <span className='w-[6px] h-[6px] mt-3 md:mt-[14px] rounded-full bg-[red]'></span>
            <p>Internship</p>
          </div>
          <p className='text-sm opacity-50'>HNG Internship 9 Frontend Task</p>
          <img className='w-28 md:w-34' src={I4GIcon} alt="i4g" />
        </div>
    </div>
  )
}
