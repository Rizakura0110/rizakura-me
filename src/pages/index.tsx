import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({
}: {
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[rizakura]</p>
        <p>
          <a href="https://twitter.com/rizakura___" target="_blank" rel="noreferrer">Twitter</a>
        </p>
        <p>
          <a href="https://github.com/Rizakura0110" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </section>
    </Layout>
  )
}