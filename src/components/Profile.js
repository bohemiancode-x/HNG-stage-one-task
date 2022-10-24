import profileImg from '../assets/images/profile.jpg'
import shareIcon from '../assets/share-icon.svg'

export default function Profile() {
  return (
    <div className='relative flex flex-col items-center mt-10 w-full'>
        <div>
         <img className='h-28 w-28 rounded-full' id='profile__img' src={profileImg} alt="" />
        </div>
        <h3 className='font-bold mt-5' id='twitter'>emmie_porsche</h3>
        <h3 className='hidden' id='slack'>Emmanuel Ayo</h3>
        <button className='absolute top-0 right-0'>
            <img src={shareIcon} alt="" />
        </button>
    </div>
  )
}
