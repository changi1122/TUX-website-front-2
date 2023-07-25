import Link from 'next/link';

export default function LinkDial() {

    

    return (
        <>
        <div data-dial-init className="fixed bottom-6 right-24 group dialDiv">
            <div className="flex flex-col items-center hidden mb-4 space-y-2">
                <a href='https://eis.cbnu.ac.kr/' target='_blank'>
                    <button type="button" className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                        <svg className="w-5 h-5 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 right-16 top-1/2 whitespace-nowrap">개신누리</span>
                    </button>
                </a>
                <a href='https://lms.chungbuk.ac.kr/' target='_blank'>
                    <button type="button" className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                        <svg className="w-5 h-5 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 right-16 top-1/2 whitespace-nowrap">LMS (이캠퍼스)</span>
                    </button>
                </a>
                <a href='https://software.cbnu.ac.kr/' target='_blank'>
                    <button type="button" className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                        <svg className="w-5 h-5 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14v4m-4 1h8M1 10h18M2 1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                        </svg>
                        <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 right-16 top-1/2 whitespace-nowrap">소프트웨어학부</span>
                    </button>
                </a>
                <a href='https://sw7up.cbnu.ac.kr/' target='_blank'>
                    <button type="button" className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                        <svg className="w-5 h-5 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"/>
                        </svg>
                        <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 right-16 top-1/2 whitespace-nowrap">SW중심대학사업단</span>
                    </button>
                </a>
                <a href='https://www.chungbuk.ac.kr/' target='_blank'>
                    <button type="button" className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                        <svg className="w-5 h-5 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15V9m4 6V9m4 6V9m4 6V9M2 16h16M1 19h18M2 7v1h16V7l-8-6-8 6Z"/>
                        </svg>
                        <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 right-16 top-1/2 whitespace-nowrap">충북대학교</span>
                    </button>
                </a>
                {/*<a href='https://github.com/CBNU-TUX' target='_blank'>
                    <button type="button" className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                        <svg className="w-5 h-5 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                        </svg>
                        <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 right-16 top-1/2 whitespace-nowrap">TUX 깃허브</span>
                    </button>
                </a>*/}
            </div>
            <button type="button" aria-controls="speed-dial-menu-text-outside-button-square" aria-expanded="false" >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 p-3 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                    <path fill='#fff' d="M9 7a1 1 0 0 1 .117 1.993L9 9H7a3 3 0 0 0-.176 5.995L7 15h2a1 1 0 0 1 .117 1.993L9 17H7a5 5 0 0 1-.217-9.995L7 7h2Zm8 0a5 5 0 0 1 .217 9.995L17 17h-2a1 1 0 0 1-.117-1.993L15 15h2a3 3 0 0 0 .176-5.995L17 9h-2a1 1 0 0 1-.117-1.993L15 7h2ZM7 11h10a1 1 0 0 1 .117 1.993L17 13H7a1 1 0 0 1-.117-1.993L7 11h10H7Z"/>
                </svg>
                <span className="sr-only">관련 링크 열기</span>
            </button>
        </div>
        </>
    )
}