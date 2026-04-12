import homeStyles from '../page.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';

export const metadata = {
  title: 'Quantitative Approach | TradingSignals',
  description: 'The approach is based on the development and application of systematic strategies built on mathematical modeling, statistical analysis, and data-driven research.',
};

export default function QuantitativeApproach() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={homeStyles.hero} style={{ minHeight: '60vh', padding: '120px 24px 60px' }}>
        <div className={homeStyles.heroBg} style={{ backgroundImage: "url('/quantitative-approach-bg.png')", opacity: 0.1 }}></div>
        <div className={homeStyles.heroContent}>
          <p className={homeStyles.heroLabel} style={{ opacity: 1, animation: 'none' }}>Quantitative Approach</p>
          <h1 className={homeStyles.heroTitle} style={{ fontSize: '42px', fontWeight: 500, lineHeight: 1.2, margin: '0 0 24px 0', opacity: 1, animation: 'none' }}>
            Quantitative Approach
          </h1>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto 24px', opacity: 1, animation: 'none' }}>
            The approach is based on the development and application of systematic 
            strategies built on mathematical modeling, statistical analysis, and 
            data-driven research.
          </p>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto', opacity: 1, animation: 'none' }}>
            Rather than relying on interpretation or discretionary decision-making, 
            the process is designed to operate under defined, repeatable, and 
            measurable conditions.
          </p>
        </div>
      </section>

      {/* ========== MODEL DESIGN ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Model Design</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Each strategy is developed through structured modeling processes 
                aimed at identifying specific market configurations.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                These models are not intended to predict market direction, but to 
                operate when predefined statistical conditions are met.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== DATA AND VALIDATION ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Data and Validation</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                All strategies are analyzed using historical data and simulation 
                techniques to assess their behavior across different market environments.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                The focus is placed on consistency, robustness, and stability over 
                time, rather than isolated outcomes.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== SYSTEMATIC EXECUTION ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Systematic Execution</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Execution follows predefined rules embedded within the strategy logic.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                This allows for a consistent and disciplined operational framework, 
                independent of subjective interpretation.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== MULTI-MARKET ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Multi-Market and Multi-Instrument Capability</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                The approach enables simultaneous operation across multiple 
                instruments and markets.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                This structure would be difficult to manage manually and requires 
                automation to ensure consistency and scalability.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== ROLE OF TECHNOLOGY ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Role of Technology</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Automation is a central component of the approach.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                Strategies are designed to be executed directly on the user's 
                account through dedicated connection systems, ensuring operational continuity.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== ARTIFICIAL INTELLIGENCE ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Artificial Intelligence</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Artificial intelligence is used as a supporting tool for data analysis 
                and model refinement.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                It does not replace the underlying methodological framework, which remains 
                grounded in structured quantitative processes.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== KEY PRINCIPLE ========== */}
      <section className={`section ${homeStyles.ctaBand}`} style={{ paddingBottom: '120px', paddingTop: '50px' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 20px 0' }}>
                The objective is not to forecast markets, but to operate within a 
                controlled framework when statistically relevant conditions arise.
              </h2>
              <div style={{ marginTop: '20px' }}>
                <Button href="/risk-management">View Risk Management</Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
