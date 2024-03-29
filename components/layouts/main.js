import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Página web de Angeliana Alvarez" />
        <meta name="author" content="Diego Toro" />
        <link rel="icon" type="url" href="https://pbs.twimg.com/media/FlFT-KJWIAADq21?format=webp&name=tiny" />
        <meta name="twitter:title" content="Angeliana Alvarez" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@d_caldasCaridad" />
        <meta name="twitter:creator" content="@d_caldasCaridad" />
        <meta property="og:site_name" content="Angeliana Alvarez" />
        <meta name="og:title" content="Angeliana Alvarez" />
        <meta property="og:type" content="website" />
        
        <title>Angeliana Alvarez - Inicio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <br />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
