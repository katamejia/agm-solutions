import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
  } from "next/document";
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render() {
      return (
        <Html lang="en">
          <Head>
            {/* Meta tags y fuentes globales */}
            <meta charSet="UTF-8" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
              integrity="sha512-..."
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
            {/* Favicon opcional */}
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
          <body>
            <Main /> {/* Aquí se inyecta tu app */}
            <NextScript /> {/* Scripts necesarios para Next.js */}
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  