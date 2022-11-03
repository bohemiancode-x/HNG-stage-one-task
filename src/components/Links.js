import { Link } from "react-router-dom";
import slackIcon from '../assets/slack.png'
import githubIcon from '../assets/Icon-git.png';

const links = [
    {
        key: 1,
        text: 'Twitter Link',
        id: 'btn__twitter',
        link: 'https://twitter.com/emmie_porsche'
    },
    {
        key: 2,
        text: 'Zuri Team',
        id: 'btn__zuri',
        link: 'https://training.zuri.team/'
    },
    {
        key: 3,
        text: 'Zuri Books',
        id: 'books',
        link: 'http://books.zuri.team'
    },
    {
        key: 4,
        text: 'Python Books',
        id: 'book__python',
        link: 'https://books.zuri.team/python-for-beginners?ref_id=bohemian-x'
    },
    {
        key: 5,
        text: 'Background Check for Coders',
        id: 'pitch',
        link: 'https://background.zuri.team'
    },
    {
        key: 6,
        text: 'Design Books',
        id: 'book__design',
        link: 'https://books.zuri.team/design-rules'
    }
]

export default function Links() {
  return (
    <div className="mt-10">
        <ul className="flex flex-col gap-5">
            {links.map((link) => (
                    <a className="link" key={link.key} id={link.id}  target="_blank" rel="noreferrer" href={link.link}>
                        {link.text}
                    </a>  
            ))}
            <Link to='/contact' id="contact" className="link">Contact</Link>
        </ul>

        <div className='flex gap-5 m-auto items-center justify-center mt-10'>
            <img className='h-6 w-6' src={slackIcon} alt="slack" />
            <img className='h-6 w-6' src={githubIcon} alt="git" />
        </div>

    </div>
  )
}
