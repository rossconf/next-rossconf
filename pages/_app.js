// pages/_app.js
//import 'bootstrap/scss/bootstrap.scss'
import '../styles/custom.scss'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp