import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Community.module.css';
import Link from 'next/link';
import getCommunityList from '@/lib/getCommunityList';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useRouter } from 'next/router';
import Pagination from '@/components/Pagination';
import { useCustomContext } from '@/reducers/customContext';

export default function Community({ posts, query }) {
    const router = useRouter();
    const { state, dispatch } = useCustomContext();
  
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState((query.query) ? query.query : '');
    const [category, setCategory] = useState(defaultCategory(query.type));
    const [isCategoryOpened, setIsUserMenuOpened] = useState(false);

    function handleCategorySelect(category) {
        setCategory(defaultCategory(category));
        router.push({ pathname: '/community', query: { ...query, type: category } });
        setIsUserMenuOpened(false);
    }

    function handleSearch(e) {
        e.preventDefault();
        router.push({ pathname: '/community', query: { ...query, query: searchQuery } });
    }

    function handlePageChange(page) {
        setCurrentPage(page);
        router.push({ pathname: '/community', query: { ...query, page: page } });
    }
  
    return (
        <>
        <Head>
            <title>TUX - 커뮤니티</title>
        </Head>
        <main className='row'>
            <div className={styles.board}>
            {/* 카테고리/검색 바 */}
            <form>
                <div className="flex" style={{ position: 'relative' }}>
                    <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                        type="button" onClick={() => { setIsUserMenuOpened(!isCategoryOpened) }}>
                    { category[0] }
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg></button>
                    <div style={{ display: (isCategoryOpened) ? 'block' : 'none', position: 'absolute', top: '100%' }} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { handleCategorySelect('') }}>전체 글</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { handleCategorySelect('notice') }}>공지사항</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { handleCategorySelect('teamrecruitment') }}>팀원 모집</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { handleCategorySelect('contest') }}>대회/공모전</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { handleCategorySelect('job') }}>채용/취업 정보</button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                                onClick={() => { handleCategorySelect('free') }}>자유게시판</button>
                        </li>
                        </ul>
                    </div>
                    <div className="relative w-full">
                        <input value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}}
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="검색어 입력 또는 카테고리 선택..."/>
                        <button onClick={handleSearch} className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
            
            {/* 게시판 리스트 */}
            {
                posts.content.map(p => (
                <Link key={p.id} href={"/community/"+p.id} className="block max-w px-6 py-3 my-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <span className={badge(p.category)[0] + " text-xs font-medium rounded mr-2 mb-1 px-2.5 py-0.5 inline-block"}>{badge(p.category)[1]}</span>
                    <h3 className="mb-1 text-md font-bold tracking-tight text-gray-900" style={{ textWrap: 'nowrap', overflowX: 'hidden', textOverflow: 'ellipsis' }}>
                        {p.title}
                    </h3>
                    <div>
                        <span className='text-gray-500 text-sm font-medium mr-4'><span className='inline-block mr-1'>📅</span> {dayjs(p.createdDate).locale('ko').fromNow()}</span>
                        <span className='text-gray-500 text-sm font-medium mr-4'><span className='inline-block mr-1'>🧑🏻‍💻</span> {p.author}</span>
                        <span className='text-gray-500 text-sm font-medium mr-4'><span className='inline-block mr-1'>👀</span> {p.view}</span>
                    </div>
                </Link>
            ))}
            {
                posts.content.length == 0 &&
                <div className='text-center py-20'>
                    <p className='text-lg text-gray-500'>조건에 해당하는 게시물이 없습니다.</p>
                </div>
            }

            {/* Pagination/글쓰기 버튼 */}
            <div className='flex flex-wrap justify-center mt-6 mb-4'>
                <Pagination
                    className="pagination-bar"
                    currentPage={posts.pageable.pageNumber + 1}
                    totalCount={posts.totalElements}
                    pageSize={8}
                    onPageChange={handlePageChange}
                />
            </div>
            <div className='text-right'>
                {
                    state.isLogined &&
                    <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 ml-2 mt-2 inline-block"
                        href='/community/write'>
                        글쓰기
                    </Link>
                }
            </div>
            </div>
        </main>
        </>
    )
}

function defaultCategory(type) {
    switch(type) {
        case 'notice':
            return ['공지사항', 'notice'];
        case 'teamrecruitment':
            return ['팀원 모집', 'teamrecruitment'];
        case 'contest':
            return ['대회/공모전', 'contest'];
        case 'job':
            return ['채용/취업 정보', 'job'];
        case 'free':
            return ['자유게시판', 'free'];
        default:
            return ['전체 글', ''];
    }
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
        default:
            return ['bg-purple-100 text-purple-800', '자유게시판'];
    }
}

export async function getServerSideProps(context) {
	const posts = await getCommunityList(
        (context.query.type) ? context.query.type : undefined,
        (context.query.page) ? context.query.page : 1,
        8,
        context.query.query);

	return {
		props: {
        posts,
        query: context.query
    }
  };
}
