import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className={styles.footer + ' row'}>
        <div>
            <div style={{ textAlign: 'right' }}>
                <Link href='/privacy'>개인정보 처리방침</Link>
                <Link href='/contact'>게시 중단 요청</Link>
            </div>
            <p>© CBNU TUX</p>
            <p>충북 청주시 서원구 충대로 1, 충북대학교</p>
            <p>전자정보대학 소프트웨어학부 S4-1동(전자정보 3관) 108호</p>
        </div>
      </footer>
    )
  }
  