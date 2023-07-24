import getCurrentUser from '@/lib/getCurrentUser';
import logout from '@/lib/logout';
import { useCustomContext } from '@/reducers/customContext';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Header() {
    const router = useRouter();
    const { state, dispatch } = useCustomContext();

    const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);

    /* 최초 로그인 상태 확인 */
    useEffect(() => {
        getCurrentUser(dispatch);
    }, []);

    function roleString(role) {
        switch(role) {
            case 'GUEST':
                return '게스트';
            case 'USER':
                return '회원';
            case 'MANAGER':
                return '관리자';
            case 'ADMIN':
                return '최고관리자';
        }
    }


    return (
      <header className='row'>
        <div className={styles.header}>
            <Link href='/'>
                <div className={styles.headerLogo}>
                        <svg stroke="#111" fill="#111" strokeWidth="0" viewBox="0 0 512 512" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
                            <path d="M426.3 396c-6.7-4-13.2-11-12-18.8 2.3-15.3 2.5-21.5-.2-25.8-1.9-3.2-5.5-5-8.6-5.8 2-2.5 3.1-5.4 3.8-10.9 1.3-10-4.7-41-12.7-65.7s-29.9-50-44.7-68c-26-31.8-22.8-39.2-26.3-99.7C323.4 62.8 306.3 32 256 32s-67 32-67 59c0 28.7 2 51 2 51 1.3 33.4 1 39.4-8 55.3-4.9 8.7-27 30-35.7 44.7s-7.6 29.5-24.6 52.8c-12.4 17-13.8 28.4-9.7 44-7 8.2-3.6 19.9-5 24.9-2.6 8.7-13.7 10.3-22.3 11s-15.3 0-18.7 5.3.7 16 4.3 30-7.3 15-7.3 31 30 16 59.7 22.7 40.7 16.3 56 16.3 26.8-10.2 38-19.3c7.2-5.9 29-3.7 42.3-3.7s34.3-.6 45.7 2.4S317 480 345 480s34.7-20.7 61-34.3 42-20 42-29.7-15-16-21.7-20zm-226.5 55.5c-1.3 13-12.6 17.1-24.1 16.1-13-1.1-29-7.6-44.1-12.1s-35.5-7.5-49-9.9c-15.3-2.7 0-13.6-.2-34.2-.1-8-7.1-19.4-4.2-24.7s17.3-2.4 22.3-3.8 12.7-5.7 15.3-11.9c1.4-3.4 1.8-17.7 2.9-22.8 1.1-4.9 7.9-7.2 22.2.1s28.9 38.1 42.3 59.8 17.9 30.4 16.6 43.4zm118.5-65.8c2 10.3 3.2 24.5.7 36.3s-7 15.5-10.7 23c-2.2-6.8 5.3-13.8 4.4-30.8-.5-9.5-.8-7.8-11.5 1.8-12.2 10.8-27.6 20.1-53 22.5-21 2-32.5-8.3-32.5-8.3 5 16-4.3 24.7-4.3 24.7.3-3.7.8-14.3-2.5-21.6-4-9-9.3-18.7-9.3-18.7s8.6-2.7 11.6-10 2-17.3-8.7-27.7-52.5-37.6-55.9-42.1c-4.9-6.5-6.7-10.2-7-23.2s5.4-24.8 4.3-20.3c-.8 3.2.1 6.8.1 19.8s7.6 23.3 13.9 25c9.5 2.6 2-26.1 8-53.1s11.7-32.8 19.2-43.8 19.2-20.5 17-43.1-.1-20.1 5.1-11.8c4 6.5 13.3 24 24.7 22 19.4-3.3 43.9-24.6 47.6-28.2 3.7-3.6.7-7.1-2.3-5.8-15.5 6.7-44.3 21.5-51.5 18.2s-18.1-20.6-16.8-19.5c15.4 13.6 19.9 11.1 26.4 9 8.4-2.8 12.8-4.3 28.5-11.3s20.7-5.3 22.3-8.7-.4-6.7-4.7-5.7c-6.4 1.5-3.4 5.1-22.7 12.3-25.3 9.5-33.3 10.3-44 3-8.6-5.9-15-12.7-15-16.7s8.3-8.3 12.3-11.3 12.3-10.9 12.3-10.9 1-7.2-.6-12.7c-1.9-6.5-7.8-9.3-11.9-8.1-4.1 1.1-8 5.5-6.8 14.8 1 8.3 7 11 7 11s-2.7 3.5-5.2 4.7c0 0-.8-.3-3.5-6.3s-6.6-19.5-.3-31.1 19.6-5.2 23.8 3.8c3.9 8.3 2.4 22.7 2.4 22.7 6-2.2 13-2 21 3.5-7.1-29.8 9.5-41.1 22-41.1s22.3 9.6 22.3 25c0 12-3.5 18.2-6.9 22-4.1-.5-8.2-1.5-6.3-3.4 1.3-1.4 4.4-5.7 4.4-13.2s-5.9-13.7-13.7-13.7c-9.2 0-12.6 8.3-13.7 13s-.4 8.6-.2 10.4c.6 5 10.9 9.6 23.9 12.9s11.3 9 8.3 25.3 6.3 18.3 14.3 33.8 5.7 21.8 15.9 35.2 19 47.8 16.4 76.8c-.9 10.5-3.9 10.2 7.3 6.7 5.6-1.7 12-2.7 12-2.7 3.1-6.3 3.4-16.3 3.5-22.3.2-13.5.7-41.5-26.7-71.5 0 0 29.5 21.7 34 62 2.5 22.3-2 32.4-2 32.4 5.3 1.3 9.8 7.3 12.6 11.8 3.7 6.1-3.9-5.8-20-5.8-8.5 0-15.3 3.9-18.5 7.9s-3.1 7.6-3.2 11.7c-7.1-1.2-12.4 0-16.8 4.9-5.6 7-2.8 24.2-.8 34.6zm90.1 47.2c-24.1 10.4-32.7 23.5-47.7 31.5s-27.7 2.3-33.7-8 10.4-28.2 4.7-59.6c-4.4-24.2-6.3-31-4.9-36.8 1.4-5.5 9.4-4.4 11.5-3.9 1.3 5.4 6.7 19.5 27 19.5 0 0 23.2 2.6 32.7-21.2 0 0 5.7-.2 7.2 3.5 2.3 5.8-2.9 16.5-2.8 21.3.3 15.7 11.7 21.1 28.4 32 8.2 5.6 2.1 11.1-22.4 21.7z"></path>
                        </svg>
                        <div>
                            <h1>TUX</h1>
                            <p>Linux & OSS Club</p>
                        </div>
                </div>
            </Link>
            <div className={styles.userArea}>
                {
                    !state.isLogined &&
                    <Link href='/login' className={styles.loginButton}>로그인</Link>
                }
                {
                    state.isLogined &&
                    <>
                        <div className={styles.userLabel} onClick={()=> { setIsUserMenuOpened(!isUserMenuOpened) }}>
                            <p>{state.nickname}<span style={{color: '#777'}}>님</span></p>
                            <p>{roleString(state.role)} <span style={{color: '#777'}}>권한</span></p>

                            <div id="dropdown" className={styles.userMenu + " z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"}
                            style={{ display: (isUserMenuOpened) ? 'block' : 'none' }}>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100"
                                            onClick={() => { logout(dispatch) }}>로그아웃</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
        <nav className={styles.nav}>
            <Link href='/info'><li className={router.pathname.startsWith('/info') ? styles.active : '' }>소개</li></Link>
            <Link href='/community'><li className={router.pathname.startsWith('/community') ? styles.active : '' }>커뮤니티</li></Link>
            <Link href='/dataroom'><li className={router.pathname.startsWith('/dataroom') ? styles.active : '' }>자료실</li></Link>
            <Link href='/gallery'><li className={router.pathname.startsWith('/gallery') ? styles.active : '' }>갤러리</li></Link>
            <Link href='/apply'><li className={router.pathname.startsWith('/apply') ? styles.active : '' }>지원하기</li></Link>
            <Link href='/contact'><li className={router.pathname.startsWith('/contact') ? styles.active : '' }>연락처</li></Link>
        </nav>
      </header>
    )
  }
  