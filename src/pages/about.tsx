import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Link } from '@chakra-ui/react'

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
          <Link href="https://github.com/Rizakura0110">
            ・GitHub
          </Link>
        </p>
      </section>
    </Layout>
  )
}