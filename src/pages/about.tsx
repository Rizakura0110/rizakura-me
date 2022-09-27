import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Home({
}: {
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <Link href="/article/" isExternal>
            Posts<ExternalLinkIcon mx='2px' />
          </Link>
        </p>
        <p>
          <Link href="https://twitter.com/rizakura___" >
            Twitter<ExternalLinkIcon mx='2px' />
          </Link>
        </p>
        <p>
          <Link href="https://github.com/Rizakura0110">
            GitHub<ExternalLinkIcon mx='2px' />
          </Link>
        </p>
      </section>
    </Layout>
  )
}