'use client'

import Image from 'next/image'
import styles from './page.module.css'
import CountryList from './Countries'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import { useDisclosure } from '@chakra-ui/react'
import Modal from './Modal'
import { useState } from 'react'

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default function Home() {
  const [ userName, setUserName ] = useState<string>('')
  const [ job, setJob ] = useState<string>('')
  const { 
    isOpen: isNameModalOpen, 
    onOpen: onNameModalOpen,
    onClose: onNameModalClose,
  } = useDisclosure({ defaultIsOpen: true })
  const { 
    isOpen: isJobModalOpen,
    onOpen: onJobModalOpen, 
    onClose: onJobModalClose
  } = useDisclosure()


  return (
    <ApolloProvider client={client}>
    <main className={styles.main}>
      <div>{`${userName}, ${job}`}</div>
      <CountryList/>
      <Modal
        title='What is your name' 
        children='input text here' 
        isOpen={isNameModalOpen}
        onClose={() => {
          onNameModalClose()
          onJobModalOpen()
          setUserName('username')
        }}
      />
      <Modal
        title='What is your job?' 
        children='input text here' 
        isOpen={isJobModalOpen}
        onClose={() => { 
          onJobModalClose()
          setJob('job')
        }}
      />
      {/* <div className={styles.description}>

        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
    </ApolloProvider>
  )
}
