import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Community.module.css';
import QuillEditor from '@/components/QuillEditor';
import { useRouter } from 'next/router';
import postCommunity from '@/lib/postCommunity';
import { enqueueSnackbar } from 'notistack';

export default function CommunityWrite() {
    const router = useRouter();
    
    const [category, setCategory] = useState(['자유게시판', 'free']);
    const [isCategoryOpened, setIsUserMenuOpened] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [mountBody, setMountBody] = useState(false); // 리렌더링 용도 state

    function rerenderBody() {
        setMountBody(mb => !mb);
    }

    async function submit(e) {
        e.preventDefault();
        if (!title || !body) {
            enqueueSnackbar('제목과 본문을 작성하세요.');
            return;
        }

        const res = await postCommunity(
            category[1],
            title,
            body
        );

        if (res.ok) {
            router.push({ pathname: '/community' });
        } else {
            enqueueSnackbar('글쓰기 중 오류가 발생하였습니다.');
        }
    }

    return (
        <>
        <Head>
            <title>TUX - 글쓰기</title>
        </Head>
        <main className='row'>
            <div className={styles.board}>
                <div style={{ position: 'relative' }}>
                    <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
                        type="button" onClick={() => { setIsUserMenuOpened(!isCategoryOpened) }}>
                    { category[0] }
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg></button>
                    <div style={{ display: (isCategoryOpened) ? 'block' : 'none', position: 'absolute', top: '100%' }} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { setCategory(['공지사항', 'notice']); setIsUserMenuOpened(false) }}>공지사항</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { setCategory(['팀원 모집', 'teamrecruitment']); setIsUserMenuOpened(false) }}>팀원 모집</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { setCategory(['대회/공모전', 'contest']); setIsUserMenuOpened(false) }}>대회/공모전</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { setCategory(['채용/취업 정보', 'job']); setIsUserMenuOpened(false) }}>채용/취업 정보</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { setCategory(['자유게시판', 'free']); setIsUserMenuOpened(false) }}>자유게시판</button>
                        </li>
                        </ul>
                    </div>
                </div>
                <form>
                    <div className="my-4">
                        <input className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                            type="text" placeholder='제목을 입력하세요' value={title} onChange={(e) => { setTitle(e.target.value) }}/>
                    </div>
                    <div className='bg-white'>
                        <QuillEditor
                            body={body}
                            handleQuillChange={setBody}
                            mountBody={mountBody}
                        />
                    </div>
                </form>
                <div className='flex justify-between mt-4'>
                    <button className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 ml-2 inline-block"
                        onClick={() => { router.back() }}>
                        취소
                    </button>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 ml-2 inline-block"
                        onClick={submit}>
                        글쓰기
                    </button>
                </div>
            </div>
        </main>
        </>
    )
}
