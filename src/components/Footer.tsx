import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* 자매 사이트 링크 */}
      <div className={styles.sisterSites}>
        <p className={styles.sisterTitle}>🔗 함께 사용하면 더 좋은 사이트</p>
        <div className={styles.sisterLinks}>
          <a href="https://reteck-calculator.pages.dev" target="_blank" rel="noopener noreferrer"
            className={styles.sisterBtn} style={{background:'#2563eb'}}>
            💰 재테크 계산기
          </a>
          <a href="https://jjantek-calculator.pages.dev" target="_blank" rel="noopener noreferrer"
            className={styles.sisterBtn} style={{background:'#d97706'}}>
            🪙 짠테크 계산기
          </a>
          <a href="https://budongsan-info.pages.dev" target="_blank" rel="noopener noreferrer"
            className={styles.sisterBtn} style={{background:'#7c3aed'}}>
            🏠 부동산 인포
          </a>
        </div>
      </div>

      <div className={styles.inner}>
        <Link href="/" className={styles.footerLogo}>핀인포</Link>
        <p className={styles.footerDesc}>청년·직장인을 위한 금융 & 지원금 정보</p>
        <div className={styles.footerLinks}>
          <Link href="/privacy" className={styles.footerLink}>개인정보처리방침</Link>
          <Link href="/about" className={styles.footerLink}>소개</Link>
        </div>
        <p className={styles.copyright}>
          © 2026 핀인포. 본 사이트의 정보는 참고용이며 실제 신청 전 공식 기관을 통해 확인하시기 바랍니다.
        </p>
      </div>
    </footer>
  )
}
