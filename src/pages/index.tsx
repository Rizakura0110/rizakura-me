import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[rizakura]</p>
        <p>
          <a href="https://twitter.com/rizakura___" target="_blank">Twitter</a>
        </p>
        <p>
          <a href="https://github.com/Rizakura0110" target="_blank">GitHub</a>
        </p>
      </section>
    </Layout>
  )
}