import Head from "next/head";

const AppHeader = () => {

  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>NewbAPI — API for everyone</title>
      <meta name="title" content="NewbAPI — API for everyone" />
      <meta name="description" content="Empower your developer journey with the limitless potential of APIs."/>
      <link rel="canonical" href="https://newbapi.com" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://newbapi.com/newbapi.png" />
      <meta property="og:title" content="NewbAPI — API for everyone" />
      <meta property="og:description" content="Empower your developer journey with the limitless potential of APIs." />
      <meta property="og:image" content="https://newbapi.com/newbapi.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://newbapi.com/newbapi.png" />
      <meta property="twitter:title" content="NewbAPI — API for everyone" />
      <meta property="twitter:description" content="Empower your developer journey with the limitless potential of APIs." />
      <meta property="twitter:image" content="https://newbapi.com/newbapi.png" />
      
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </Head>
  );
}

export default AppHeader