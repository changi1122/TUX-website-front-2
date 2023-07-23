import Head from 'next/head';
import { getMarkdownDocs } from '@/lib/getMarkdownDocs';

export default function Home({ contentHtml }) {
  return (
    <>
    <Head>
      <title>TUX - 소개</title>
    </Head>
    <main className='row'>
      <div className="text-left mt-2" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', fontSize: '14px' }}>
        <div style={{ margin: '20px 10px 0' }}>
          <div className="text-4xl font-black">TUX</div>
          <div>Linux & OSS Club</div>
          <div>since 2020</div>
        </div>
        <div style={{ margin: '20px 10px 0' }}>
          <table>
            <tbody>
            <tr>
              <td style={{ display: 'inline-block', marginRight: '4px' }}>지도교수</td>
              <td><b style={{ fontWeight: 'bold' }}>노서영 교수님</b></td>
            </tr>
            <tr>
              <td>위치</td>
              <td><b style={{ fontWeight: 'bold' }}>S4-1 108호</b></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr/>
        {/* 본문 내용은 /docs/info.md 파일에 Markdown과 Html을 사용하여 작성합니다. */}
        <div
            className='md'
            dangerouslySetInnerHTML={{ __html: contentHtml }}>
        </div>
    </main>
    </>
  )
}

export async function getStaticProps() {
  const { contentHtml } = await getMarkdownDocs('info');

  return {
    props: {
      contentHtml,
    },
  };
}
