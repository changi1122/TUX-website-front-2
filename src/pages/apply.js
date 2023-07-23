import Head from 'next/head';
import { getMarkdownDocs } from '@/lib/getMarkdownDocs';

export default function Apply({ contentHtml }) {
  return (
    <>
    <Head>
      <title>TUX - 지원하기</title>
    </Head>
    <main className='row'>
        {/* 본문 내용은 /docs/apply.md 파일에 Markdown과 Html을 사용하여 작성합니다. */}
        <div
            className='md'
            dangerouslySetInnerHTML={{ __html: contentHtml }}>
        </div>
    </main>
    </>
  )
}

export async function getStaticProps() {
    const { contentHtml } = await getMarkdownDocs('apply');

    return {
      props: {
        contentHtml,
      },
    };
  }