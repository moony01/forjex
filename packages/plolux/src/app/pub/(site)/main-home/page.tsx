import styles from './page.module.scss';

export default function MainHomePage() {
  return (
    <main className={styles.mainPage}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>PLORUX</div>
        <nav className={styles.nav}>
          <div className={styles.navItem}>서비스 특징</div>
          <div className={styles.navItem}>포트폴리오</div>
          <div className={styles.navItem}>프로세스</div>
          <button className={styles.contactButton}>문의하기</button>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>PLORUX가 만듭니다</h1>
        <p className={styles.heroSubtitle}>Total Solution Web Agency</p>
        
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>150+</span>
            <span className={styles.statLabel}>완료 프로젝트</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>고객 만족도</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>4.9/5</span>
            <span className={styles.statLabel}>평균 평점</span>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <div className={styles.trustHeader}>
          <div className={styles.trustBadge}>TRUST</div>
          <h2 className={styles.trustTitle}>1,200개 이상의 기업이 신뢰합니다</h2>
          <p className={styles.trustDesc}>스타트업부터 대기업까지, 다양한 클라이언트와 함께합니다</p>
        </div>

        <div className={styles.logoGrid}>
          {/* Placeholder logos */}
          <div className={styles.logoItem}>Samsung</div>
          <div className={styles.logoItem}>LG Electronics</div>
          <div className={styles.logoItem}>SK Telecom</div>
          <div className={styles.logoItem}>Hyundai Motor</div>
          <div className={styles.logoItem}>Naver</div>
          <div className={styles.logoItem}>Kakao</div>
          <div className={styles.logoItem}>Coupang</div>
          <div className={styles.logoItem}>Woowa Bros</div>
        </div>
      </section>

      {/* Problem & Solution Section (Added per user request) */}
      <section className={styles.problemSolutionSection}>
        <div className={styles.container}>
          <div className={`${styles.column} ${styles.problem}`}>
            <span className={styles.badge}>PROBLEM</span>
            <h3 className={styles.title}>기존 에이전시의<br/>아쉬운 점</h3>
            <ul className={styles.list}>
              <li>비효율적인 소통 프로세스</li>
              <li>유지보수의 어려움</li>
              <li>트렌드에 뒤처지는 디자인</li>
              <li>투명하지 않은 견적 산정</li>
            </ul>
          </div>
          <div className={`${styles.column} ${styles.solution}`}>
            <span className={styles.badge}>SOLUTION</span>
            <h3 className={styles.title}>PLORUX가 제시하는<br/>새로운 기준</h3>
            <ul className={styles.list}>
              <li>전담 매니저의 1:1 밀착 케어</li>
              <li>체계적인 코드 기반의 쉬운 유지보수</li>
              <li>데이터 기반의 UX/UI 디자인</li>
              <li>정찰제 운영으로 투명한 비용</li>
            </ul>
          </div>
        </div>
      </section>


      {/* 
        MISSING SECTIONS (Placeholder)
        Based on "Backup" frame not containing middle content.
      */}
      <section className={styles.placeholderSection}>
        <h2>서비스 특징 (Service Features)</h2>
        <p>Design source truncated in Figma API. Needs manual merge.</p>
      </section>
      
      <section className={styles.placeholderSection}>
        <h2>포트폴리오 (Portfolio)</h2>
        <p>Pending Design Import</p>
      </section>

      <section className={styles.placeholderSection}>
        <h2>프로세스 (Process)</h2>
        <p>Pending Design Import</p>
      </section>


      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>PLORUX</div>
            <div className={styles.footerAddress}>
              서울시 강남구 테헤란로 123<br />
              사업자등록번호: 123-45-67890<br />
              대표: 홍길동
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <strong>Menu</strong>
              <span>Home</span>
              <span>About Us</span>
              <span>Portfolio</span>
            </div>
            <div className={styles.linkGroup}>
              <strong>Contact</strong>
              <span>contact@plolux.com</span>
              <span>02-1234-5678</span>
            </div>
             <div className={styles.linkGroup}>
              <strong>Social</strong>
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          © 2024 PLOLUX. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
