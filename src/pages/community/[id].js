import Head from 'next/head';
import { useState } from 'react';
import styles from '@/styles/Community.module.css';
import { useRouter } from 'next/router';
import getCommunity from '@/lib/getCommunity';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ko';
import deleteCommunity from '@/lib/deleteCommunity';
import { useCustomContext } from '@/reducers/customContext';

export default function CommunityDetail({ post, host }) {
    const router = useRouter();
    const { state, dispatch } = useCustomContext();

    const [shareLabel, setShareLabel] = useState('공유');

    async function handleDelete()
    {
        if (confirm("정말로 글을 삭제하시겠습니까?")) {
            await deleteCommunity(post.id);
            router.push('/community');
        }
    }

    return (
        <>
        <Head>
            <title>TUX - {post.title}</title>
        </Head>
        <main className='row'>
            <div className={styles.board}>
                <div className='block max-w px-6 py-3 my-3 bg-white border border-gray-200 rounded-lg shadow'>
                    <span className={badge(post.category)[0] + " text-xs font-medium rounded mr-2 mb-2 px-2.5 py-0.5 inline-block"}>{badge(post.category)[1]}</span>
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
                        {post.title}
                    </h3>
                    <div>
                        <span className='text-gray-500 text-sm font-medium mr-4' title={dayjs(post.createdDate).format("YYYY-MM-DD HH:mm:ss")}>
                            <span className='inline-block mr-1'>📅</span> {dayjs(post.createdDate).locale('ko').fromNow()}
                        </span>
                        <span className='text-gray-500 text-sm font-medium mr-4'><span className='inline-block mr-1'>🧑🏻‍💻</span> {post.author}</span>
                        <span className='text-gray-500 text-sm font-medium mr-4'><span className='inline-block mr-1'>👀</span> {post.view}</span>
                    </div>
                    <div className='md mt-4' dangerouslySetInnerHTML={{ __html: post.body }}>
                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <button className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 mr-2 inline-block"
                        onClick={() => { router.back() }}>
                        돌아가기
                    </button>
                    <div>
                        <button className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 ml-2 inline-block"
                            onClick={() => { window.navigator.clipboard.writeText(host+router.asPath); setShareLabel("복사됨!") }}>
                            {shareLabel}
                        </button>
                        {
                            state.userId === post.authorId &&
                            <button className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 ml-2 inline-block"
                                onClick={handleDelete}>
                                삭제
                            </button>
                        }
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

function badge(category) {
    switch(category) {
        case 'NOTICE':
            return ['bg-green-100 text-green-800', '공지사항'];
        case 'TEAMRECRUITMENT':
            return ['bg-pink-100 text-pink-800', '팀원 모집'];
        case 'CONTEST':
            return ['bg-yellow-100 text-yellow-800', '대회/공모전'];
        case 'JOB':
            return ['bg-red-100 text-red-800', '채용/취업 정보'];
        case 'FREE':
            return ['bg-purple-100 text-purple-800', '자유게시판'];
    }
}

export async function getServerSideProps(context) {
	const post = await getCommunity(context.params.id);

	return {
		props: {
        post,
        host: context.req.headers.host,
        cookie: context.req.headers.cookie
    }
  };
}
