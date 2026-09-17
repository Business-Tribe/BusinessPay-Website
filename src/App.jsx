import React, { useState, useEffect } from 'react';
import FounderConnectModal from './FounderConnectModal';

const fmt$ = (n) => `$${Math.round(n).toLocaleString()}`;
const fieldStyle = { width:'100%', padding:'10px', background:'var(--input-bg)', border:'1px solid var(--input-border)', borderRadius:8, fontSize:13, color:'var(--text-primary)', boxSizing:'border-box' };

function Field({ label, children }) {
  return <div style={{ marginBottom:14 }}><label style={{ fontSize:12, color:'var(--text-secondary)', display:'block', marginBottom:6, fontWeight:600 }}>{label}</label>{children}</div>;
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const [arVal, setArVal] = useState(2500000);
  const [dsoVal, setDsoVal] = useState(55);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showFounderModal, setShowFounderModal] = useState(false);
  const [modalIntent, setModalIntent] = useState('demo');
  const [demoForm, setDemoForm] = useState({ company_name: '', work_email: '', phone: '', estimated_ar: '$1M - $5M', erp_system: 'QuickBooks Online' });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const isShowcase = typeof window !== 'undefined' && (
    window.location.hostname.includes('github.io') ||
    window.location.search.includes('mode=showcase')
  );

  const triggerAction = (e, intent = 'demo') => {
    if (e && isShowcase) e.preventDefault();
    if (isShowcase) {
      setModalIntent(intent);
      setShowFounderModal(true);
    } else {
      if (intent === 'signin' || intent === 'admin') {
        return; // normal link behavior
      }
      setShowDemoModal(true);
    }
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  const daysSaved = Math.round(dsoVal * 0.35);
  const acceleratedCash = arVal * (daysSaved / 365);

  async function handleDemoSubmit(e) {
    e.preventDefault();
    setDemoSubmitted(true);
  }

  return (
    <div style={{ background:'var(--bg-main)', color:'var(--text-primary)', minHeight:'100vh', overflowY:'auto' }}>
      {/* Marketing Header */}
      <header style={{
        padding:'18px 40px', display:'flex', justifyContent:'space-between', alignItems:'center',
        borderBottom:'1px solid var(--border-color)', background:'var(--header-bg)', backdropFilter:'blur(16px)',
        position:'sticky', top:0, zIndex:100
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <div style={{
            width:36, height:36, borderRadius:10,
            background:'linear-gradient(135deg, #6366F1, #A855F7)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:18, fontWeight:900, color:'#fff', boxShadow:'0 0 20px rgba(99,102,241,0.5)'
          }}>B</div>
          <span style={{ fontSize:20, fontWeight:800, letterSpacing:'-0.02em', color:'var(--text-primary)' }}>BusinessPay</span>
        </div>
        <div style={{ display:'flex', gap:20, alignItems:'center', fontSize:14, fontWeight:500, color:'var(--text-secondary)' }}>
          <a href="#features" style={{ color:'var(--text-secondary)', textDecoration:'none' }}>Features</a>
          <a href="#calculator" style={{ color:'var(--text-secondary)', textDecoration:'none' }}>ROI Calculator</a>
          <a href="#pricing" style={{ color:'var(--text-secondary)', textDecoration:'none' }}>Pricing Tiers</a>
          
          {/* Theme Switcher */}
          <button 
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            style={{
              padding:'6px 12px', background:'var(--bg-card)', border:'1px solid var(--border-color)',
              borderRadius:8, color:'var(--text-primary)', cursor:'pointer', fontSize:13, fontWeight:600,
              display:'flex', alignItems:'center', gap:6
            }}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>

          <button onClick={(e) => triggerAction(e, 'demo')} style={{ padding:'8px 16px', background:'var(--bg-card)', border:'1px solid var(--border-color)', borderRadius:8, color:'var(--text-primary)', cursor:'pointer', fontWeight:600 }}>Book Demo</button>
          <a href="https://app.businesspay.io" onClick={(e) => isShowcase && triggerAction(e, 'signin')} style={{ textDecoration:'none', padding:'8px 20px', background:'linear-gradient(135deg, #6366F1, #4F46E5)', borderRadius:8, color:'#fff', fontWeight:700, boxShadow:'0 4px 14px rgba(99,102,241,0.4)' }}>B2B Client Sign In →</a>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding:'80px 40px 60px', textAlign:'center', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'inline-block', padding:'6px 16px', borderRadius:9999, background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.25)', color:'#6366F1', fontSize:13, fontWeight:700, marginBottom:20 }}>
          🚀 Next-Gen B2B AR &amp; Early Payment Liquidity Accelerator
        </div>
        <h1 style={{
          fontSize: 52,
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: 24,
          color: 'var(--text-primary)'
        }}>
          Accelerate B2B Cash Flow with{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6366F1, #A855F7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Automated AR Collections
          </span>{' '}
          &amp; Smart Liquidity Offers
        </h1>
        <p style={{ fontSize:18, color:'var(--text-secondary)', maxWidth:780, margin:'0 auto 36px', lineHeight:1.6 }}>
          BusinessPay connects directly to your ERP (QuickBooks, NetSuite, Xero, SAP) to rank overdue invoices by risk, automate dunning streams, and offer buyers self-serve early payment discounts.
        </p>
        <div style={{ display:'flex', gap:16, justifyContent:'center' }}>
          <button onClick={(e) => triggerAction(e, 'demo')} style={{ padding:'14px 32px', background:'linear-gradient(135deg, #6366F1, #A855F7)', border:'none', borderRadius:12, color:'#fff', fontSize:16, fontWeight:700, cursor:'pointer', boxShadow:'0 8px 25px rgba(99,102,241,0.4)' }}>
            Schedule Live Demo
          </button>
          <a href="https://app.businesspay.io" onClick={(e) => isShowcase && triggerAction(e, 'signin')} style={{ textDecoration:'none', padding:'14px 28px', background:'var(--bg-card)', border:'1px solid var(--border-color)', borderRadius:12, color:'var(--text-primary)', fontSize:16, fontWeight:600 }}>
            Client AR Sign In →
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" style={{ padding:'60px 40px', maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
          {[
            { icon:'🎯', title:'AI Priority Workqueue', desc:'Rank open invoices P1 through P6 automatically based on customer payment history, dispute status, and past promises.' },
            { icon:'💸', title:'Smart Discount Engine', desc:'Offer targeted early payment discounts only to reliable buyers — accelerating liquidity without giving away unnecessary margin.' },
            { icon:'🛒', title:'Self-Serve Buyer Portal', desc:'Empower buyers to clear vendor invoices early with 1-click payment confirmation and instant early payment discount savings.' },
            { icon:'📨', title:'Automated Dunning Sequences', desc:'Smart outreach streams that pause automatically when promises to pay or disputes are logged, preventing customer friction.' },
            { icon:'📊', title:'Controller Dashboard', desc:'Real-time visibility into committed cash flow, AR aging buckets, DSO performance trends, and risk-weighted cash forecasts.' },
            { icon:'🔌', title:'Open ERP Integration APIs', desc:'Seamless developer REST APIs to stream invoices and customer master data continuously from any accounting software.' },
          ].map(f => (
            <div key={f.title} className="glass-card" style={{ padding:28, borderRadius:20, border:'1px solid var(--border-color)', background:'var(--bg-card)' }}>
              <div style={{ fontSize:32, marginBottom:14 }}>{f.icon}</div>
              <h3 style={{ fontSize:18, fontWeight:700, color:'var(--text-primary)', marginBottom:8 }}>{f.title}</h3>
              <p style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI & Cash Acceleration Calculator */}
      <section id="calculator" style={{ padding:'60px 40px', maxWidth:1100, margin:'0 auto' }}>
        <div className="glass-card" style={{ borderRadius:24, padding:36, border:'1px solid rgba(99,102,241,0.3)', background: theme === 'dark' ? 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(15,23,42,0.8))' : 'linear-gradient(135deg, rgba(99,102,241,0.06), #FFFFFF)' }}>
          <h2 style={{ fontSize:28, fontWeight:800, marginBottom:8, textAlign:'center', color:'var(--text-primary)' }}>Interactive AR Acceleration &amp; ROI Calculator</h2>
          <p style={{ fontSize:14, color:'var(--text-secondary)', textAlign:'center', marginBottom:32 }}>Estimate how much cash flow BusinessPay can accelerate for your business</p>
          
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'center' }}>
            <div>
              <div style={{ marginBottom:24 }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                  <label style={{ fontSize:13, color:'var(--text-primary)', fontWeight:600 }}>Monthly AR Invoice Volume</label>
                  <span style={{ fontSize:16, fontWeight:700, color:'#6366F1' }}>{fmt$(arVal)}</span>
                </div>
                <input type="range" min={500000} max={10000000} step={250000} value={arVal} onChange={e => setArVal(parseFloat(e.target.value))} style={{ width:'100%', accentColor:'#6366F1' }} />
              </div>
              <div>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                  <label style={{ fontSize:13, color:'var(--text-primary)', fontWeight:600 }}>Current Days Sales Outstanding (DSO)</label>
                  <span style={{ fontSize:16, fontWeight:700, color:'#D97706' }}>{dsoVal} Days</span>
                </div>
                <input type="range" min={30} max={90} step={1} value={dsoVal} onChange={e => setDsoVal(parseInt(e.target.value))} style={{ width:'100%', accentColor:'#D97706' }} />
              </div>
            </div>

            <div style={{ background:'var(--bg-card)', borderRadius:16, padding:24, border:'1px solid var(--border-color)', textAlign:'center', boxShadow:'0 4px 20px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize:12, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:700 }}>Projected Accelerated Cash Flow</div>
              <div style={{ fontSize:38, fontWeight:900, color:'#059669', margin:'8px 0 4px', letterSpacing:'-0.02em' }}>{fmt$(acceleratedCash)}</div>
              <div style={{ fontSize:13, color:'#10B981', fontWeight:600, marginBottom:16 }}>~{daysSaved} Days DSO Reduction</div>
              <button onClick={(e) => triggerAction(e, 'demo')} style={{ width:'100%', padding:'12px', background:'linear-gradient(135deg, #10B981, #059669)', border:'none', borderRadius:10, color:'#fff', fontWeight:700, cursor:'pointer' }}>Unlock This Cash Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Pricing Tiers */}
      <section id="pricing" style={{ padding:'60px 40px 80px', maxWidth:1200, margin:'0 auto' }}>
        <h2 style={{ fontSize:32, fontWeight:800, textAlign:'center', marginBottom:8, color:'var(--text-primary)' }}>Transparent Subscription Plans</h2>
        <p style={{ fontSize:15, color:'var(--text-secondary)', textAlign:'center', marginBottom:40 }}>Choose the right platform architecture for your company's AR volume</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
          {[
            { plan:'Growth', price:'$499', period:'/month', ar:'Up to $1M Monthly AR', erp:'1 ERP Connection (QuickBooks/Xero)', feat:['Automated Workqueue Priority','Standard Dunning Sequences','Basic Customer Intelligence','Email Support'] },
            { plan:'Pro', price:'$1,299', period:'/month', popular:true, ar:'Up to $10M Monthly AR', erp:'3 ERP Connections (NetSuite/QuickBooks/Xero)', feat:['Smart Liquidity AI Engine','Buyer Portal Custom Branding','Controller Cash Forecasting','Developer Open Integration APIs','Priority 24/7 Support'] },
            { plan:'Enterprise', price:'$2,499', period:'/month', ar:'Unlimited AR Processing', erp:'Custom ERP & SAP Connectors', feat:['Unlimited ERP Sync Pipelines','Dedicated Solutions Architect','Custom SLA & Security Compliance','Custom Webhook Automations','SSO & Multi-Org Governance'] },
          ].map(p => (
            <div key={p.plan} className="glass-card" style={{
              borderRadius:20, padding:32, display:'flex', flexDirection:'column', justifyContent:'space-between',
              border: p.popular ? '2px solid #6366F1' : '1px solid var(--border-color)',
              background: p.popular 
                ? (theme === 'dark' ? 'linear-gradient(180deg, rgba(99,102,241,0.15), rgba(15,23,42,0.85))' : 'linear-gradient(180deg, rgba(99,102,241,0.06), #FFFFFF)')
                : 'var(--bg-card)',
              position:'relative'
            }}>
              {p.popular && (
                <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)', background:'linear-gradient(135deg, #6366F1, #A855F7)', padding:'4px 14px', borderRadius:9999, fontSize:11, fontWeight:800, color:'#fff' }}>
                  MOST POPULAR FOR B2B
                </div>
              )}
              <div>
                <h3 style={{ fontSize:22, fontWeight:800, color:'var(--text-primary)', marginBottom:4 }}>{p.plan}</h3>
                <div style={{ fontSize:13, color:'var(--text-secondary)', marginBottom:16 }}>{p.ar}</div>
                <div style={{ display:'flex', alignItems:'baseline', gap:4, marginBottom:20 }}>
                  <span style={{ fontSize:40, fontWeight:900, color:'var(--text-primary)' }}>{p.price}</span>
                  <span style={{ fontSize:14, color:'var(--text-secondary)' }}>{p.period}</span>
                </div>
                <div style={{ fontSize:12, fontWeight:700, color:'#6366F1', marginBottom:16, borderBottom:'1px solid var(--border-color)', paddingBottom:12 }}>{p.erp}</div>
                <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10, fontSize:13, color:'var(--text-secondary)' }}>
                  {p.feat.map(f => <li key={f} style={{ display:'flex', gap:8, alignItems:'center' }}><span style={{ color:'#10B981', fontWeight:700 }}>✓</span><span>{f}</span></li>)}
                </ul>
              </div>
              <button onClick={(e) => triggerAction(e, 'demo')} style={{
                marginTop:28, width:'100%', padding:'12px', borderRadius:10, fontSize:14, fontWeight:700, cursor:'pointer',
                background: p.popular ? 'linear-gradient(135deg, #6366F1, #4F46E5)' : 'var(--bg-main)',
                color: p.popular ? '#fff' : 'var(--text-primary)', border: p.popular ? 'none' : '1px solid var(--border-color)'
              }}>Get Started with {p.plan}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding:'30px 40px', borderTop:'1px solid var(--border-color)', background:'var(--header-bg)', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12, color:'var(--text-muted)' }}>
        <div>© 2026 BusinessPay, Inc. All rights reserved. B2B Accounts Receivable Automation Platform.</div>
        <div style={{ display:'flex', gap:20, alignItems:'center' }}>
          <a href="https://app.businesspay.io/admin" onClick={(e) => isShowcase && triggerAction(e, 'admin')} style={{ color:'#6366F1', textDecoration:'none', fontWeight:600 }}>
            🔒 Corporate Admin Console (/admin)
          </a>
        </div>
      </footer>

      {/* Book a Demo Modal */}
      {showDemoModal && (
        <div onClick={e => e.target === e.currentTarget && setShowDemoModal(false)}
          style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(8px)', zIndex:300, display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}>
          <div className="glass-card" style={{ width:480, borderRadius:20, padding:32, border:'1px solid var(--border-color)', background:'var(--bg-card)', position:'relative', boxShadow:'0 20px 40px rgba(0,0,0,0.2)' }}>
            <button onClick={() => setShowDemoModal(false)} style={{ position:'absolute', top:20, right:20, background:'none', border:'none', color:'var(--text-secondary)', fontSize:16, cursor:'pointer' }}>✕</button>
            
            {demoSubmitted ? (
              <div style={{ textAlign:'center', padding:'20px 0' }}>
                <div style={{ fontSize:48, marginBottom:16 }}>🎉</div>
                <h3 style={{ fontSize:22, fontWeight:800, color:'var(--text-primary)', marginBottom:8 }}>Demo Request Submitted!</h3>
                <p style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:1.5 }}>Our B2B Solutions Architect will reach out to <strong>{demoForm.work_email}</strong> within 2 business hours.</p>
                <button onClick={() => { setShowDemoModal(false); setDemoSubmitted(false); }} style={{ marginTop:20, padding:'10px 24px', background:'linear-gradient(135deg, #6366F1, #4F46E5)', color:'#fff', border:'none', borderRadius:8, fontWeight:600, cursor:'pointer' }}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit}>
                <h3 style={{ fontSize:22, fontWeight:800, color:'var(--text-primary)', marginBottom:4 }}>Book a Live Product Demo</h3>
                <p style={{ fontSize:13, color:'var(--text-secondary)', marginBottom:20 }}>See how BusinessPay automates AR collections &amp; early payments for your ERP</p>
                <Field label="Company Name">
                  <input type="text" required value={demoForm.company_name} onChange={e => setDemoForm(p=>({...p, company_name: e.target.value}))} style={fieldStyle} placeholder="e.g. Horizon Logistics" />
                </Field>
                <Field label="Work Email">
                  <input type="email" required value={demoForm.work_email} onChange={e => setDemoForm(p=>({...p, work_email: e.target.value}))} style={fieldStyle} placeholder="cfo@company.com" />
                </Field>
                <Field label="Estimated Annual AR Volume">
                  <select value={demoForm.estimated_ar} onChange={e => setDemoForm(p=>({...p, estimated_ar: e.target.value}))} style={fieldStyle}>
                    {['Under $1M', '$1M - $5M', '$5M - $20M', '$20M+'].map(v => <option key={v}>{v}</option>)}
                  </select>
                </Field>
                <Field label="Primary ERP / Accounting System">
                  <select value={demoForm.erp_system} onChange={e => setDemoForm(p=>({...p, erp_system: e.target.value}))} style={fieldStyle}>
                    {['QuickBooks Online', 'NetSuite', 'Xero', 'SAP S/4HANA', 'Custom API', 'Other'].map(e => <option key={e}>{e}</option>)}
                  </select>
                </Field>
                <button type="submit" style={{ width:'100%', padding:12, background:'linear-gradient(135deg, #6366F1, #4F46E5)', color:'#fff', border:'none', borderRadius:10, fontSize:14, fontWeight:700, cursor:'pointer', marginTop:10 }}>Confirm Demo Request</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Founder Connect Modal for Public Showcase */}
      <FounderConnectModal
        isOpen={showFounderModal}
        onClose={() => setShowFounderModal(false)}
        intent={modalIntent}
      />
    </div>
  );
}
