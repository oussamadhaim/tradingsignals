'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Button from './components/Button';
import SectionReveal from './components/SectionReveal';
import Assessment from './components/Assessment';

export default function Home() {
  const [showAssessment, setShowAssessment] = useState(false);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Quantitative strategies for portfolio diversification</p>
          <h1 className={styles.heroTitle}>
            Quantitative Strategies<br />
            for Portfolio<br />
            <em>Diversification.</em>
          </h1>
          <p className={styles.heroSub}>
            Mathematical-statistical models and automated systems applied to futures, 
            designed for sophisticated investors and applicable, where appropriate, 
            within a controlled use of financial leverage.
          </p>
          <div className={styles.heroCta}>
            <button className={styles.heroBtn} onClick={() => setShowAssessment(true)}>
              <span>Request a Preliminary Assessment</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine}></div>
          <span className={styles.scrollText}>Discover</span>
        </div>
      </section>

      {/* ========== OVERVIEW ========== */}
      <section className={`section ${styles.overview}`}>
        <div className={styles.overviewInner}>
          <SectionReveal>
            <div className={styles.overviewText}>
              <ul className={styles.overviewList}>
                <li>The access model is structured to align with the effective use of the strategies.</li>
                <li>No upfront fees are required.</li>
                <li>The economic framework reflects actual utilization.</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== WHAT WE DO NOT DO ========== */}
      <section className={`section ${styles.notDoSection}`}>
        <div className={styles.overviewInner}>
          <SectionReveal>
            <div className={styles.overviewText}>
              <ul className={styles.overviewList}>
                <li>We do not engage in discretionary trading.</li>
                <li>We do not sell trading signals.</li>
                <li>We do not provide unrestricted access to the markets.</li>
                <li>We develop and implement proprietary quantitative strategies based on mathematical modeling, statistical analysis, and artificial intelligence, within a structured and systematic diversification framework.</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== APPROACH ========== */}
      <section className={`section ${styles.approach}`}>
        <div className={styles.overviewInner}>
          <SectionReveal>
            <div className={styles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ marginBottom: '48px', fontSize: 'clamp(28px, 3vw, 42px)' }}>Where Mathematics Meets Market Structure</h2>
              
              <div className={styles.approachList}>
                <div className={styles.approachItem}>
                  <h3>Quantitative models</h3>
                  <p>
                    Strategies are built on structured mathematical models designed to 
                    identify specific market conditions, validated through statistical 
                    analysis and historical data.
                  </p>
                </div>
                
                <div className={styles.approachItem}>
                  <h3>Systematic execution</h3>
                  <p>
                    Execution is rule-based and automated, ensuring consistency and 
                    eliminating discretionary intervention.
                  </p>
                </div>
                
                <div className={styles.approachItem}>
                  <h3>Risk control</h3>
                  <p>
                    Each strategy operates within predefined parameters, continuously 
                    monitored to maintain consistency over time.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== WHY QUANTITATIVE ========== */}
      <section className={`section ${styles.philosophy}`} style={{ paddingBottom: '60px' }}>
        <div className={styles.overviewInner}>
          <SectionReveal>
            <div className={styles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ marginBottom: '32px' }}>A Structured, Disciplined Approach</h2>
              <div style={{ marginBottom: '120px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ margin: 0 }}>
                  Financial markets have become increasingly complex and interconnected.
                </p>
                <p style={{ margin: 0 }}>
                  A structured quantitative approach enables consistent, repeatable execution, 
                  avoiding decisions driven by subjective interpretation.
                </p>
                <p style={{ margin: 0 }}>
                  The objective is not to predict markets, but to operate within defined 
                  conditions when statistically relevant scenarios arise.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className={styles.fullWidth} delay={1}>
            <div className={styles.overviewVisual} style={{ marginBottom: '140px' }}>
              <div className={styles.structuredImage}></div>
            </div>
          </SectionReveal>

          <SectionReveal delay={2}>
            <div className={styles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <div style={{ marginBottom: '50px', width: '100%' }}>
                <p style={{ color: 'var(--ivory)', fontSize: '16px' }}>
                  This approach is designed as a complementary component within a broader portfolio.
                </p>
                <p style={{ color: 'var(--ivory)', fontSize: '16px' }}>
                  It enables structured exposure across multiple instruments and markets, 
                  which would be difficult to manage manually.
                </p>
              </div>

              <div className="divider" style={{ margin: '0 0 50px 0' }}></div>

              <h3 style={{ fontSize: '20px', color: 'var(--ivory)', marginBottom: '16px' }}>Leverage and Derivatives</h3>
              <p style={{ color: 'var(--ivory)', fontSize: '16px', marginBottom: 0 }}>
                In this context, the use of derivatives and, where applicable, financial leverage, 
                represents an operational component, applied within a controlled and structured framework.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== RISK ========== */}
      <section className={`section ${styles.risk}`} style={{ paddingTop: '60px' }}>
        <div className={styles.overviewInner}>
          <SectionReveal>
            <div className={styles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ marginBottom: '24px', fontSize: 'clamp(28px, 3vw, 40px)' }}>Risk is not eliminated. It is managed.</h2>
              <p style={{ marginTop: 0, marginBottom: '32px' }}>
                Each strategy operates within defined limits through:
              </p>
              
              <ul className={styles.overviewList} style={{ gap: '12px', marginBottom: '24px' }}>
                <li>exposure control</li>
                <li>diversification across models</li>
                <li>continuous monitoring of operating conditions</li>
              </ul>
              
              <p style={{ color: 'var(--ivory)', fontSize: '16px', margin: 0 }}>
                The priority is maintaining consistency and structural coherence over time, 
                rather than maximizing short-term outcomes.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== METHODOLOGY ========== */}
      <section className={`section ${styles.philosophy}`} style={{ padding: '120px 0' }}>
        <div className={styles.overviewInner}>
          <SectionReveal>
            <div className={styles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <p style={{ marginTop: 0, marginBottom: '24px' }}>
                The entire process is based on:
              </p>
              
              <ul className={styles.overviewList} style={{ gap: '12px', marginBottom: '24px' }}>
                <li>applied mathematics</li>
                <li>statistical analysis</li>
                <li>data-driven research</li>
                <li>systematic execution</li>
              </ul>
              
              <p style={{ color: 'var(--ivory)', fontSize: '16px', margin: 0 }}>
                Artificial intelligence is used as a support tool for data analysis and 
                model refinement, without replacing the underlying methodological framework.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== ACCESS ========== */}
      <section className={`section ${styles.approach}`} style={{ paddingBottom: '140px' }}>
        <div className={styles.overviewInner}>
          <SectionReveal>
            <div className={styles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <p style={{ marginTop: 0, marginBottom: '24px' }}>
                Access to the strategies is subject to a preliminary assessment.
              </p>
              <p style={{ marginBottom: '32px' }}>
                The process includes:
              </p>
              
              <ul className={styles.overviewList} style={{ gap: '12px', marginBottom: '24px' }}>
                <li>profile evaluation</li>
                <li>compatibility assessment</li>
                <li>introductory discussion (where applicable)</li>
                <li>potential phased activation</li>
              </ul>
              
              <p style={{ color: 'var(--ivory)', fontSize: '16px', margin: 0, paddingLeft: '16px' }}>
                Not all profiles are admitted.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== CLOSING ========== */}
      <section className={styles.closing} style={{ paddingTop: '140px', paddingBottom: '120px' }}>
        <SectionReveal>
          <div className={styles.closingInner}>
            <div className={styles.closingDivider}></div>
            <h2>Assess whether this approach aligns with your portfolio structure and investment objectives.</h2>
            <div style={{ marginTop: '20px' }}>
              <Button onClick={() => setShowAssessment(true)}>
                Request a Preliminary Assessment
              </Button>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Assessment Modal */}
      {showAssessment && (
        <Assessment onClose={() => setShowAssessment(false)} />
      )}
    </>
  );
}
