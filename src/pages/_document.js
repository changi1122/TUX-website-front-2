import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&amp;display=swap" rel="stylesheet" />
        <link href="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css" rel="stylesheet"/>
        <script src="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.js"></script>
        <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/highlight.min.js"></script>
        <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/styles/default.min.css"/>
        <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
