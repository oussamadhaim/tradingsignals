import homeStyles from '../page.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';

export const metadata = {
  title: 'Risk Management | TradingSignals',
  description: 'Risk is an inherent component of any market activity and cannot be eliminated. The approach is structured around managing risk through predefined rules, model design, and operational discipline.',
};

export default function RiskManagement() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={homeStyles.hero} style={{ minHeight: '60vh', padding: '120px 24px 60px' }}>
        <div 
          className={homeStyles.heroBg} 
          style={{ backgroundImage: "url('/risk-management-bg.webp')", opacity: 0.1 }}
        ></div>
        <div className={homeStyles.heroContent}>
          <p className={homeStyles.heroLabel} style={{ opacity: 1, animation: 'none' }}>Risk Management</p>
          <h1 className={homeStyles.heroTitle} style={{ fontSize: '42px', fontWeight: 500, lineHeight: 1.2, margin: '0 0 24px 0', opacity: 1, animation: 'none' }}>
            Risk Management
          </h1>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto 24px', opacity: 1, animation: 'none' }}>
            Risk is an inherent component of any market activity and cannot be eliminated.
          </p>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto', opacity: 1, animation: 'none' }}>
            The approach is therefore structured around managing risk through 
            predefined rules, model design, and operational discipline.
          </p>
        </div>
      </section>

      {/* ========== EMBEDDED RISK STRUCTURE ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Embedded Risk Structure</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Each strategy incorporates internal risk parameters, including 
                exposure control, position sizing logic, and operational constraints.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                These elements are defined at the model level and applied 
                consistently through automated execution.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== DIVERSIFICATION ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Diversification Across Strategies</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Risk is managed not only at the single strategy level, but also 
                through the use of multiple models operating across different 
                instruments and conditions.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                This contributes to reducing concentration and improving overall 
                structural balance.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== SYSTEMATIC DISCIPLINE ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Systematic Discipline</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                The absence of discretionary intervention ensures that strategies 
                operate within their defined parameters.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                This avoids deviations driven by emotional or subjective decision-making.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== LEVERAGE CONSIDERATIONS ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Leverage Considerations</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Where applicable, financial leverage may be used as part of the operational environment.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                Leverage is treated as a technical component and not as an objective, 
                and its impact depends on the user's account configuration.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== MONITORING ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Monitoring and Adaptation</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Strategies are subject to ongoing observation and review to ensure 
                alignment with their intended design.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                Adjustments, where necessary, are applied within the structured 
                framework of the models.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== USER CONTROL ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>User Control</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                All strategies are executed directly on the user's account.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 16px 0' }}>The user retains full control over:</p>
              <ul className={homeStyles.overviewList} style={{ gap: '12px', width: '100%' }}>
                <li>capital allocation</li>
                <li>activation or deactivation of strategies</li>
                <li>overall exposure</li>
              </ul>
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
                The priority is not the maximization of short-term results, but 
                the preservation of consistency and structural coherence over time.
              </h2>
              <div style={{ marginTop: '20px' }}>
                <Button href="/who-its-for">Who This Is For</Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
