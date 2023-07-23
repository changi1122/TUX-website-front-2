import Head from 'next/head';
import { getMarkdownDocs } from '@/lib/getMarkdownDocs';

export default function Contact({ contentHtml }) {
  return (
    <>
    <Head>
      <title>TUX - 연락처</title>
    </Head>
    <main className='row'>
        {/* 본문 내용은 /docs/contact.md 파일에 Markdown과 Html을 사용하여 작성합니다. */}
        <div
            className='md'
            dangerouslySetInnerHTML={{ __html: contentHtml }}>
        </div>
    </main>
    </>
  )
}

export async function getStaticProps() {
    const { contentHtml } = await getMarkdownDocs('contact');

    return {
      props: {
        contentHtml,
      },
    };
  }