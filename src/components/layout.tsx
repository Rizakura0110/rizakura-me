import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'rizakura'

export default function Layout({
  children,
  home,
  post
}: {
  children: React.ReactNode
  home?: boolean
  post?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.jpg" />
      </Head>
      <header className={styles.header}>
        {home && (
          <>
            <div className={utilStyles.menu}>
              <div className={utilStyles.aboutHeadingMd}>
                <Link href={`/`}>
                  <a>Home</a>
                </Link>
              </div>
              <div className={utilStyles.aboutHeadingMd}>
                <Link href={`/about`}>
                  <a>About</a>
                </Link>
              </div>
            </div>
            
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}