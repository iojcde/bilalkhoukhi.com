import { useRouter } from 'next/router'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import DarkToggle from './dark-toggle'

export default function Header() {
  const [menuState, setMenuState] = useState(true)
  const [darkTheme, setDarkTheme] = useState(false)
  const router = useRouter()

  const links = [
    {
      url: '/',
      name: 'Blog'
    },
    {
      url: '/about',
      name: 'About'
    }
  ]

  // const toggleDarkMode = () => {
  //   // Whenever the user explicitly chooses light mode
  //   if (darkTheme) {
  //     localStorage.theme = 'light';
  //     document.querySelector('html').classList.remove('dark');
  //     setDarkTheme(false);
  //   } else {
  //     localStorage.theme = 'dark';
  //     document.querySelector('html').classList.add('dark');
  //     setDarkTheme(true);
  //   }
  // }

  // useEffect(() => {
  //   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     localStorage.theme = 'dark';
  //     document.querySelector('html').classList.add('dark');
  //     setDarkTheme(true);
  //   }
  // }, [])

  return (
    <nav className="flex w-full max-w-none mx-auto items-center justify-between flex-wrap p-6">
      <div className="bg-grey-900 dark:bg-white transition-colors duration-500 hover:bg-red-400 dark:hover:bg-red-400 hover:transition-colors hover:duration-500">
        <Link href="/">
          <a className="text-white dark:text-grey-900 transition-colors duration-500 font-bold no-underline text-xl w-10 h-10 leading-4 flex justify-center items-center tracking-tight">bk</a>
        </Link>
      </div>
      {/* <div className="block sm:hidden">
        <button onClick={() => setMenuState(!menuState)} className="flex items-center px-3 py-2 border rounded text-red-400 border-red-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <div className="flex items-center w-auto mt-4 ml-auto text-sm">
        {
          links.map((link, index) => {
            return (
              <Link href={link.url} key={index}>
                <a className={`block md:inline-block pl-2 md:pl-0 mr-8  ${router.pathname.includes(link.url) ? 'text-red-400 font-bold' : null}`}>
                  {link.name}
                </a>
              </Link>
            )
          })
        }
        
        {/* <DarkToggle darkTheme={darkTheme} toggleDarkMode={toggleDarkMode} /> */}
      </div>
    </nav>
  )
}
