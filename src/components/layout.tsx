import Head from 'next/head'
//import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

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
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}