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
        </ul>

    </div>
  )
}
