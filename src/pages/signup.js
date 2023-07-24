import Head from 'next/head';
import styles from '@/styles/Login.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';

import postUser from '@/lib/postUser';
import getCanUseAsNickname from '@/lib/getCanUseAsNickname';
import getCanUseAsUsername from '@/lib/getCanUseAsUsername';

export default function signup() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [department, setDepartment] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ruleAgree, setRuleAgree] = useState(false);
    const [inputError, setInputError] = useState([ false, false, false, false, false, false, false, false ]);

    function showSnackbar(message) {
        enqueueSnackbar(message);
    }

    async function validate(event) {
        event.preventDefault();
    
        if (!username ||
            !/^[A-Za-z0-9_]{4,}$/.test(username)) {
            showSnackbar('아이디는 알파벳과 숫자, \'_\' 문자로 4자 이상이어야 합니다.');
            setInputError([ true, false, false, false, false, false, false, false ]);
            return false;
        }
    
        if (!await getCanUseAsUsername(username)) {
            showSnackbar('이미 사용 중인 아이디입니다.');
            setInputError([ true, false, false, false, false, false, false, false ]);
            return false;
        }
    
        if (!password ||
            !/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9@$!%*#?&]{8,}$/.test(password)) {
            showSnackbar('비밀번호는 알파벳과 숫자를 포함하여, 8자 이상이어야 합니다. (사용가능 : 알파벳, 숫자, 특수문자(@$!%*#?&))');
            setInputError([ false, true, false, false, false, false, false, false ]);
            return false;
        }
    
        if (!password || password !== rePassword) {
            showSnackbar('비밀번호 재확인이 일치하지 않습니다.');
            setInputError([ false, false, true, false, false, false, false, false ]);
            return false;
        }
    
        if (!email ||
            !/.+@.+/.test(email)) {
            showSnackbar('정상적인 이메일 주소를 입력하여야 합니다.');
            setInputError([ false, false, false, true, false, false, false, false ]);
            return false;
        }
    
        if (!nickname) {
            showSnackbar('이름을 입력하여야 합니다.');
            setInputError([ false, false, false, false, true, false, false, false ]);
            return false;
        }
    
        if (!await getCanUseAsNickname(nickname)) {
            showSnackbar('이미 사용 중인 이름입니다.');
            setInputError([ false, false, false, false, true, false, false, false ]);
            return false;
        }

        if (!department) {
            showSnackbar('학과를 입력하여야 합니다.');
            setInputError([ false, false, false, false, false, true, false, false ]);
            return false;
        }

        if (!studentNumber) {
            showSnackbar('학번을 입력하여야 합니다.');
            setInputError([ false, false, false, false, false, false, true, false ]);
            return false;
        }

        if (!phoneNumber) {
            showSnackbar('휴대폰 번호를 입력하여야 합니다.');
            setInputError([ false, false, false, false, false, false, false, true ]);
            return false;
        }
    
        if (!ruleAgree) {
            showSnackbar('서비스를 이용하려면, 이용약관 및 개인정보 처리방침에 동의하여야 합니다.');
            setInputError([ false, false, false, false, false, false, false, false ]);
            return false;
        }
    
        setInputError([ false, false, false, false, false, false, false, false ]);
        handleSignup();
    }

    async function handleSignup() {
        const result = await postUser({
            username,
            password,
            email,
            nickname,
            department,
            studentNumber,
            phoneNumber
        });
    
        if (result) {
            showSnackbar(result);
        } else {
            router.push({ pathname: '/login', query: { u: 'n' } });
        }
    }

    return (
        <>
        <Head>
        <title>TUX - 회원가입</title>
        </Head>
        <main className='row'>
            <form className={styles.loginForm}>
                <div className={styles.logo}>
                    <svg stroke="#111" fill="#111" strokeWidth="0" viewBox="0 0 512 512" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
                        <path d="M426.3 396c-6.7-4-13.2-11-12-18.8 2.3-15.3 2.5-21.5-.2-25.8-1.9-3.2-5.5-5-8.6-5.8 2-2.5 3.1-5.4 3.8-10.9 1.3-10-4.7-41-12.7-65.7s-29.9-50-44.7-68c-26-31.8-22.8-39.2-26.3-99.7C323.4 62.8 306.3 32 256 32s-67 32-67 59c0 28.7 2 51 2 51 1.3 33.4 1 39.4-8 55.3-4.9 8.7-27 30-35.7 44.7s-7.6 29.5-24.6 52.8c-12.4 17-13.8 28.4-9.7 44-7 8.2-3.6 19.9-5 24.9-2.6 8.7-13.7 10.3-22.3 11s-15.3 0-18.7 5.3.7 16 4.3 30-7.3 15-7.3 31 30 16 59.7 22.7 40.7 16.3 56 16.3 26.8-10.2 38-19.3c7.2-5.9 29-3.7 42.3-3.7s34.3-.6 45.7 2.4S317 480 345 480s34.7-20.7 61-34.3 42-20 42-29.7-15-16-21.7-20zm-226.5 55.5c-1.3 13-12.6 17.1-24.1 16.1-13-1.1-29-7.6-44.1-12.1s-35.5-7.5-49-9.9c-15.3-2.7 0-13.6-.2-34.2-.1-8-7.1-19.4-4.2-24.7s17.3-2.4 22.3-3.8 12.7-5.7 15.3-11.9c1.4-3.4 1.8-17.7 2.9-22.8 1.1-4.9 7.9-7.2 22.2.1s28.9 38.1 42.3 59.8 17.9 30.4 16.6 43.4zm118.5-65.8c2 10.3 3.2 24.5.7 36.3s-7 15.5-10.7 23c-2.2-6.8 5.3-13.8 4.4-30.8-.5-9.5-.8-7.8-11.5 1.8-12.2 10.8-27.6 20.1-53 22.5-21 2-32.5-8.3-32.5-8.3 5 16-4.3 24.7-4.3 24.7.3-3.7.8-14.3-2.5-21.6-4-9-9.3-18.7-9.3-18.7s8.6-2.7 11.6-10 2-17.3-8.7-27.7-52.5-37.6-55.9-42.1c-4.9-6.5-6.7-10.2-7-23.2s5.4-24.8 4.3-20.3c-.8 3.2.1 6.8.1 19.8s7.6 23.3 13.9 25c9.5 2.6 2-26.1 8-53.1s11.7-32.8 19.2-43.8 19.2-20.5 17-43.1-.1-20.1 5.1-11.8c4 6.5 13.3 24 24.7 22 19.4-3.3 43.9-24.6 47.6-28.2 3.7-3.6.7-7.1-2.3-5.8-15.5 6.7-44.3 21.5-51.5 18.2s-18.1-20.6-16.8-19.5c15.4 13.6 19.9 11.1 26.4 9 8.4-2.8 12.8-4.3 28.5-11.3s20.7-5.3 22.3-8.7-.4-6.7-4.7-5.7c-6.4 1.5-3.4 5.1-22.7 12.3-25.3 9.5-33.3 10.3-44 3-8.6-5.9-15-12.7-15-16.7s8.3-8.3 12.3-11.3 12.3-10.9 12.3-10.9 1-7.2-.6-12.7c-1.9-6.5-7.8-9.3-11.9-8.1-4.1 1.1-8 5.5-6.8 14.8 1 8.3 7 11 7 11s-2.7 3.5-5.2 4.7c0 0-.8-.3-3.5-6.3s-6.6-19.5-.3-31.1 19.6-5.2 23.8 3.8c3.9 8.3 2.4 22.7 2.4 22.7 6-2.2 13-2 21 3.5-7.1-29.8 9.5-41.1 22-41.1s22.3 9.6 22.3 25c0 12-3.5 18.2-6.9 22-4.1-.5-8.2-1.5-6.3-3.4 1.3-1.4 4.4-5.7 4.4-13.2s-5.9-13.7-13.7-13.7c-9.2 0-12.6 8.3-13.7 13s-.4 8.6-.2 10.4c.6 5 10.9 9.6 23.9 12.9s11.3 9 8.3 25.3 6.3 18.3 14.3 33.8 5.7 21.8 15.9 35.2 19 47.8 16.4 76.8c-.9 10.5-3.9 10.2 7.3 6.7 5.6-1.7 12-2.7 12-2.7 3.1-6.3 3.4-16.3 3.5-22.3.2-13.5.7-41.5-26.7-71.5 0 0 29.5 21.7 34 62 2.5 22.3-2 32.4-2 32.4 5.3 1.3 9.8 7.3 12.6 11.8 3.7 6.1-3.9-5.8-20-5.8-8.5 0-15.3 3.9-18.5 7.9s-3.1 7.6-3.2 11.7c-7.1-1.2-12.4 0-16.8 4.9-5.6 7-2.8 24.2-.8 34.6zm90.1 47.2c-24.1 10.4-32.7 23.5-47.7 31.5s-27.7 2.3-33.7-8 10.4-28.2 4.7-59.6c-4.4-24.2-6.3-31-4.9-36.8 1.4-5.5 9.4-4.4 11.5-3.9 1.3 5.4 6.7 19.5 27 19.5 0 0 23.2 2.6 32.7-21.2 0 0 5.7-.2 7.2 3.5 2.3 5.8-2.9 16.5-2.8 21.3.3 15.7 11.7 21.1 28.4 32 8.2 5.6 2.1 11.1-22.4 21.7z"></path>
                    </svg>
                    <div>
                        <div className='text-4xl font-black'>TUX</div>
                        <div className="text-sm">Linux & OSS Club</div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute top-[12px] inset-x-auto w-full h-[1px] bg-gray-300 -z-10"></div>
                    <div className="w-20 mx-auto text-center" style={{ backgroundColor: 'var(--background-color)' }}>
                        <span className="box-border">회원가입</span>
                    </div>
                </div>
                <div className="mt-8 mb-4">
                    <input type="text" id="id" className={ inputError[0] ?
                        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" :
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                        placeholder="아이디" value={username} onChange={(e) => { setUsername(e.target.value) }}/>
                </div>
                <div className="mb-4">
                    <input type="password" id="password" className={ inputError[1] ?
                        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" :
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                        placeholder="비밀번호" value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
                </div>
                <div className="mb-4">
                    <input type="password" id="repassword" className={ inputError[2] ?
                        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" :
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                        placeholder="비밀번호 재확인" value={rePassword} onChange={(e) => { setRePassword(e.target.value) }} required/>
                </div>
                <div className="mb-8">
                    <input type="email" id="email" className={ inputError[3] ?
                        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" :
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                        placeholder="이메일" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                </div>
                <div className="mb-4">
                    <input type="text" id="nickname" className={ inputError[4] ?
                        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" :
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                        placeholder="이름 (18학번 홍길동)" value={nickname} onChange={(e) => { setNickname(e.target.value) }}/>
                </div>
                <div className="mb-4">
                    <input type="text" id="department" className={ inputError[5] ?
                        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" :
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                        placeholder="학과 (소프트웨어학부)" value={department} onChange={(e) => { setDepartment(e.target.value) }}/>
                </div>
                <div className="mb-4">
                    <input type="text" id="studentNumber" className={ inputError[6] ?
                        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" :
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                        placeholder="학번 (20XXXXXXXX)" value={studentNumber} onChange={(e) => { setStudentNumber(e.target.value) }}/>
                </div>
                <div className="mb-4">
                    <input type="tel" id="phoneNumber" className={ inputError[7] ?
                        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" :
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                        placeholder="휴대폰 번호 (010-XXXX-XXXX)" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }}/>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        value={ruleAgree} onChange={(e) => { setRuleAgree(e.target.checked) }} required/>
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900"><a href="/privacy" target='_blank' className="text-blue-600 hover:underline">개인정보 처리방침</a>에 동의합니다.</label>
                </div>
                <button onClick={validate} type="button" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    회원가입
                </button>
                <div className='text-right'>
                    <Link href="/login" className="mt-4 mb-12 inline-block font-medium text-blue-600 hover:underline">이미 계정이 있으신가요?</Link>
                </div>
            </form>
        </main>
        </>
    )
}
