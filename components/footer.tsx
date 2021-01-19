export default function Footer() {
  
  const profileLinks = [
    {
      link: 'https://github.com/Bilal-io',
      name: 'Github'
    },
    {
      link: 'https://twitter.com/imbk_dev',
      name: 'Twitter'
    },
    {
      link: 'https://www.linkedin.com/in/mrkhoukhi/',
      name: 'LinkedIn'
    },
    {
      link: 'mailto:hello@bilalkhoukhi.com',
      name: 'Email'
    }
  ]

  return (
    <footer className="container w-full max-w-4xl border-grey-800 border-t-2 pt-8 pb-4 text-center">
      <p className="mb-4 text-md font-bold">Sorry no comments system yet, use the links below for questions and comments</p>
      <div className="flex flex-wrap justify-center">
        {
          profileLinks.map(profile => {
            return (
              <a key={profile.name} className="text-red-500 hover:text-white font-semibold hover:bg-red-500 uppercase mr-8 p-2 last:m-0"
                rel="noopener" href={profile.link} target="_blank">{profile.name}</a>
            )
          })
        }
      </div>
    </footer>
  )
}
