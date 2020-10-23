import ReactMarkdown from 'react-markdown'

function About() {
  return <>
    <Head>
    <title>RossConf</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <aside>
    <a href='/about'>Our about page</a>
  </aside>

  <main className={styles.main}>
    <h1 className={styles.title}>
      Welcome to <a href="https://rossconf.io">Rossconf!</a>
    </h1>

    {projects.remote2020.title}

    <ReactMarkdown source={
`
# Your

- markdown
- here

`
    } />
  </main>
</>
}

export default About
