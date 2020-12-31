import Layout from '../components/page-layout'

export default function About() {
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

  const tech = ["Javascript", "Nodejs", "Typescript", "Angular", "React", "GraphQL", "HTML", "CSS", "SCSS", "SQL", "PostgreSQL", "ORM", "Express", "Hapi", "Linux", "Bash", "Python", "Serverless", "Knative", "Docker", "Kubernetes"]
  return (
    <Layout title="About BK">
        <header className="mb-8">
          {/* <!-- Page header --> */}
          <h1 className="mb-1 text-4xl">Hi, I am BK</h1>
          {/* <!-- Page sub-header --> */}
          <p className="text-xl">Front-End Engineer @ BuildOn Technologies, located in HTX</p>
        </header>

        {/* <!-- WHo I am section --> */}
        <section className="mb-8">
          <h3 className="mb-4 text-xl font-bold">WHAT I DO</h3>
          <div className="">
            <p className="mb-2">Professionally I use different tools to build different products. At home, I enjoy making espresso while failing to do basic latte art. I run Kubernetes on my homelab, it gives me the opportunity to expose myself to the world of k8s while I deploy apps I build as prototypes to solve specific problems, for fun or to learn something new.</p>
          </div>
        </section>

        {/* <!-- Contact info section --> */}
        <section className="mb-8">
          <h3 className="mb-4 text-xl font-bold">HOW TO REACH ME</h3>
          <div className="flex flex-wrap">
            {
              profileLinks.map(profile => {
                return (
                  <a key={profile.name} className="text-red-500 hover:text-white font-semibold hover:bg-red-500 uppercase mr-8 p-2 last:m-0"
                    rel="noopener" href={profile.link} target="_blank">{profile.name}</a>
                )
              })
            }
          </div>
        </section>

        {/* <!-- List of technologies I use --> */}
        <section className="mb-8">
          <h3 className="mb-4 text-xl font-bold">WHAT I USE</h3>
          <div className="flex flex-wrap">
            {
              tech.map(t => {
                return (
                  <span key={t} className="bg-grey-900 text-grey-100 dark:bg-grey-100 dark:text-grey-900 transition-colors duration-500 rounded-sm text-base px-3 py-1 mr-3 mb-3">{t}</span>
                )
              })
            }
          </div>
        </section>
    </Layout>
  )
}
