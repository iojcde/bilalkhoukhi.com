import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-grey-900 text-grey-900 dark:text-white font-roboto-mono transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument