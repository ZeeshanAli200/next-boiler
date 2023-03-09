import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { ACCESS_TYPES, BRAND_NAME } from '@/constants'
import { useSelector } from 'react-redux'
import { HeroSection } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const state = useSelector((state) => state)
  console.log({ state })

  // console.log('getStore', dataHandler.getStore().getState())
  return (
    <>
      <Head>
        <title>{BRAND_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeroSection />
      </div>
    </>
  )
}
export async function getStaticProps() {
  return {
    props: {
      accessType: ACCESS_TYPES.PUBLIC,
    },
  }
}
