import Head from 'next/head'

// import ReactMarkdown from 'react-markdown'
import { default as event } from '../src/remoteApril2021'

export default function Home() {
  const monthDayYear = () => {
    return event.date.toLocaleDateString().split("/")
  }

  return <>
    <Head>
      <title>RossConf</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <aside>
      <a href='/about'>Our about page</a>
    </aside>

    <div className="container-xl">
      <h1>
        Welcome to <a href="https://rossconf.io">Rossconf!</a>
      </h1>
      {event.title} - {monthDayYear()[2]}

      {monthDayYear()[1]} - {monthDayYear()[0]}
    </div>
  </>
}

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>RossConf</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://rossconf.io">Rossconf!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://rossconf.io/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Rossconf features and API.</p>
//           </a>

//           <a href="https://rossconf.io/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Rossconf in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/Rossconf/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Rossconf projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=Rossconf&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Rossconf site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }



// const fromMarkdown = (md) => {
//   <ReactMarkdown source={md} />
// }
