import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home({
}: {
}) {
  return (
    <Layout home>
      <Head>
        <title>About</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <Link href="https://twitter.com/rizakura_" >
          <a target="_blank">・Twitter</a>
          </Link>
        </p>
        <p>
          <Link href="https://github.com/Rizakura0110">
          <a target="_blank">・GitHub</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}