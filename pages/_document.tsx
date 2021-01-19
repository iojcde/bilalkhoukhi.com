import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script 
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", ${process.env.NEXT_PUBLIC_MS_CLARITY});
              `
            }}
          />
        </Head>
        <body className="bg-white dark:bg-grey-900 text-grey-900 dark:text-white font-roboto-mono transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument