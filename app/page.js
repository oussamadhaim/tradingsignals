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
              <span>Submit a Request for Preliminary Assessment</span>
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
              <span className="label">Overview</span>
              <p className={styles.overviewLead}>
                The access model is structured to align with the effective use of the strategies.
              </p>
              <div className={styles.overviewDesc}>
                <p>
                  No upfront fees are required, and the economic framework reflects actual utilization.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== WHAT WE DO NOT DO ========== */}
      <section className={`section ${styles.notDoSection}`}>
        <div className={styles.notDoInner}>
          <SectionReveal>
            <div className={styles.notDoGrid}>
              <div className={styles.notDoItem}>
                <div className={styles.notDoIcon}>✕</div>
                <p>We do not engage in discretionary trading.</p>
              </div>
              <div className={styles.notDoItem}>
                <div className={styles.notDoIcon}>✕</div>
                <p>We do not sell trading signals.</p>
              </div>
              <div className={styles.notDoItem}>
                <div className={styles.notDoIcon}>✕</div>
                <p>We do not provide unrestricted access to the markets.</p>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={1}>
            <p className={styles.notDoDesc}>
              We develop and implement proprietary quantitative strategies based on 
              mathematical modeling, statistical analysis, and artificial intelligence, 
              within a structured and systematic diversification framework.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ========== APPROACH / PILLARS ========== */}
      <section className={`section ${styles.approach}`}>
        <SectionReveal>
          <div className={styles.approachHeader}>
            <span className="label">Our Approach</span>
            <h2>Where Mathematics Meets Market Structure</h2>
          </div>
        </SectionReveal>
        <div className={styles.pillars}>
          <SectionReveal delay={1}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>Σ</div>
              <h3>Quantitative models</h3>
              <p>
                Strategies are built on structured mathematical models designed to 
                identify specific market conditions, validated through statistical 
                analysis and historical data.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={2}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>Δ</div>
              <h3>Systematic execution</h3>
              <p>
                Execution is rule-based and automated, ensuring consistency and 
                eliminating discretionary intervention.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={3}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>◊</div>
              <h3>Risk control</h3>
              <p>
                Each strategy operates within predefined parameters, continuously 
                monitored to maintain consistency over time.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== WHY QUANTITATIVE ========== */}
      <section className={`section ${styles.philosophy}`}>
        <div className={styles.splitLayout}>
          <SectionReveal className={styles.splitText}>
            <div className={styles.whyContent}>
              <span className="label">Why Quantitative</span>
              <h2>A Structured, Disciplined Approach</h2>
              <p>
                Financial markets have become increasingly complex and interconnected.
              </p>
              <p>
                A structured quantitative approach enables consistent, repeatable execution, 
                avoiding decisions driven by subjective interpretation.
              </p>
              <p>
                The objective is not to predict markets, but to operate within defined 
                conditions when statistically relevant scenarios arise.
              </p>
              <p className={styles.whyNote}>
                This approach is designed as a complementary component within a broader portfolio.
              </p>
              <p className={styles.whyNote}>
                It enables structured exposure across multiple instruments and markets, 
                which would be difficult to manage manually.
              </p>
              <p className={styles.whyNote} style={{ marginTop: '24px' }}>
                In this context, the use of derivatives and, where applicable, financial leverage, 
                represents an operational component, applied within a controlled and structured framework.
              </p>
              <div className="divider"></div>
            </div>
          </SectionReveal>
          <SectionReveal delay={2} className={styles.fullWidth}>
            <div className={styles.overviewVisual}>
              <div className={styles.structuredImage}></div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== RISK ========== */}
      <section className={`section ${styles.risk}`}>
        <div className={styles.riskInner}>
          <SectionReveal>
            <div className={styles.riskHeader}>
              <span className="label">Risk Management</span>
              <h2>Risk is not eliminated. It is managed.</h2>
              <p>
                Each strategy operates within defined limits through:
              </p>
            </div>
          </SectionReveal>
          <div className={styles.riskMetrics}>
            <SectionReveal delay={1}>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Exposure</span>
                <div className={styles.metricValue}>Controlled</div>
                <p className={styles.metricDesc}>
                  exposure control
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={2}>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Models</span>
                <div className={styles.metricValue}>Diversified</div>
                <p className={styles.metricDesc}>
                  diversification across models
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={3}>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Conditions</span>
                <div className={styles.metricValue}>Monitored</div>
                <p className={styles.metricDesc}>
                  continuous monitoring of operating conditions
                </p>
              </div>
            </SectionReveal>
          </div>
          <SectionReveal delay={4}>
            <p className={styles.riskNote}>
              The priority is maintaining consistency and structural coherence over time, 
              rather than maximizing short-term outcomes.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ========== METHODOLOGY ========== */}
      <section className={`section ${styles.philosophy}`}>
        <div className={styles.whyInner}>
          <SectionReveal>
            <div className={styles.whyContent}>
              <span className="label">Methodology</span>
              <h2>The Foundation</h2>
              <p>The entire process is based on:</p>
              <ul className={styles.methodList}>
                <li>applied mathematics</li>
                <li>statistical analysis</li>
                <li>data-driven research</li>
                <li>systematic execution</li>
              </ul>
              <p className={styles.whyNote}>
                Artificial intelligence is used as a support tool for data analysis and 
                model refinement, without replacing the underlying methodological framework.
              </p>
              <div className="divider"></div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== ACCESS ========== */}
      <section className={`section ${styles.approach}`}>
        <SectionReveal>
          <div className={styles.approachHeader}>
            <span className="label">Access</span>
            <h2>Access to the strategies is subject to a preliminary assessment.</h2>
            <p>The process includes:</p>
          </div>
        </SectionReveal>
        <div className={styles.accessSteps}>
          <SectionReveal delay={1}>
            <div className={styles.accessStep}>
              <div className={styles.accessStepNum}>1</div>
              <h3>profile evaluation</h3>
            </div>
          </SectionReveal>
          <SectionReveal delay={2}>
            <div className={styles.accessStep}>
              <div className={styles.accessStepNum}>2</div>
              <h3>compatibility assessment</h3>
            </div>
          </SectionReveal>
          <SectionReveal delay={3}>
            <div className={styles.accessStep}>
              <div className={styles.accessStepNum}>3</div>
              <h3>introductory discussion</h3>
              <p>(where applicable)</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={4}>
            <div className={styles.accessStep}>
              <div className={styles.accessStepNum}>4</div>
              <h3>potential phased activation</h3>
            </div>
          </SectionReveal>
        </div>
        <SectionReveal delay={5}>
          <div className={styles.accessNote}>
            <p>Not all profiles are admitted.</p>
          </div>
        </SectionReveal>
      </section>

      {/* ========== CLOSING ========== */}
      <section className={styles.closing}>
        <SectionReveal>
          <div className={styles.closingInner}>
            <div className={styles.closingDivider}></div>
            <h2>Assess whether this approach aligns with your portfolio structure and investment objectives.</h2>
            <div style={{ marginTop: '40px' }}>
              <Button onClick={() => setShowAssessment(true)}>
                Submit a Request for Preliminary Assessment
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
