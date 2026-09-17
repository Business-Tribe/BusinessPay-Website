import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Calendar, 
  Mail, 
  Check, 
  Copy, 
  ExternalLink, 
  Github, 
  Linkedin, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Building2,
  Lock
} from 'lucide-react';

export default function FounderConnectModal({ isOpen, onClose, intent = 'demo' }) {
  const [copied, setCopied] = useState(false);
  const founderName = 'Harshit Agarwal';
  const founderRole = 'AI Product Manager & 0-to-1 Systems Builder';
  const founderEmail = 'agarwal.harshit97@gmail.com';
  const githubUser = 'https://github.com/1997agarwal';
  const githubRepo = 'https://github.com/Business-Tribe/BusinessPay';
  const linkedinUrl = 'https://www.linkedin.com/in/1997agarwal';
  const xUrl = 'https://x.com/1997agarwal';

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(founderEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSubject = () => {
    if (intent === 'admin') {
      return '[BusinessPay Demo] Corporate Admin Console & Risk Governance Walkthrough';
    }
    if (intent === 'signin') {
      return '[BusinessPay Access] Enterprise AR Collector & Buyer Portal Access Request';
    }
    return '[BusinessPay Demo] Enterprise AR Walkthrough Request';
  };

  const getHeading = () => {
    if (intent === 'admin') {
      return 'Corporate Admin & Risk Console';
    }
    if (intent === 'signin') {
      return 'Enterprise AR Workqueue Preview';
    }
    return 'Book Enterprise AR & Cash Acceleration Walkthrough';
  };

  const mailtoSubject = encodeURIComponent(getSubject());
  const mailtoBody = encodeURIComponent(
    `Hi Harshit,\n\nI was exploring the BusinessPay platform showcase and would love to schedule a 1-on-1 walkthrough to discuss our B2B AR collections, cash acceleration, and ERP integration opportunities.\n\nBest,\n`
  );

  const mailtoLink = `mailto:${founderEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease-out'
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      />

      {/* Modal Card */}
      <div 
        className="glass-card"
        style={{
          position: 'relative',
          background: 'var(--bg-card)',
          borderRadius: 24,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          border: '1px solid var(--border-color)',
          width: '100%',
          maxWidth: 580,
          maxHeight: '90vh',
          overflowY: 'auto',
          zIndex: 10,
          padding: '28px 32px',
          boxSizing: 'border-box'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 18 }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 12px',
              borderRadius: 9999,
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              fontSize: 11,
              fontWeight: 800,
              color: '#6366F1',
              marginBottom: 10
            }}>
              <Sparkles style={{ width: 13, height: 13 }} />
              <span>Public Showcase • Private Enterprise Engine</span>
            </div>
            <h2 style={{
              fontSize: 22,
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.25
            }}>
              {getHeading()}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: 8,
              borderRadius: 10,
              background: 'transparent',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Close modal"
          >
            <X style={{ width: 18, height: 18 }} />
          </button>
        </div>

        {/* Narrative */}
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
          You are viewing the public interactive showcase for <strong>BusinessPay</strong>. Live ERP pipelines (QuickBooks, NetSuite, SAP), customer risk scoring engines, and SQLite AR workqueues operate inside private enterprise boundaries. Schedule a direct 1-on-1 walkthrough with the founder to test live dunning flows and dynamic liquidity discounts.
        </p>

        {/* Primary Action Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          
          {/* Option 1: Book / Mail Walkthrough */}
          <div style={{
            padding: 16,
            borderRadius: 16,
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.06))',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)'
              }}>
                <Calendar style={{ width: 16, height: 16 }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)' }}>
                1. Schedule Enterprise AR &amp; Cash Flow Walkthrough
              </span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0, paddingLeft: 42 }}>
              Explore AI invoice prioritization, DSO reduction curves, automated multi-tier dunning streams, and buyer early-payment discount portals live.
            </p>
            <div style={{ paddingLeft: 42, paddingTop: 4 }}>
              <a
                href={mailtoLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '10px 18px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)',
                  cursor: 'pointer'
                }}
              >
                <Mail style={{ width: 14, height: 14 }} />
                <span>Request Enterprise Walkthrough</span>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </a>
            </div>
          </div>

          {/* Option 2: Direct Contact / Copy Email */}
          <div style={{
            padding: 16,
            borderRadius: 16,
            background: 'var(--bg-main)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #1E293B, #0F172A)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                  fontWeight: 900
                }}>
                  HA
                </div>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)', display: 'block' }}>
                    {founderName}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 500, display: 'block' }}>
                    {founderRole}
                  </span>
                </div>
              </div>
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#059669',
                background: 'rgba(5, 150, 105, 0.1)',
                border: '1px solid rgba(5, 150, 105, 0.25)',
                padding: '3px 10px',
                borderRadius: 9999
              }}>
                Active &amp; Rapid Response
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
              background: 'var(--bg-card)',
              padding: '8px 12px',
              borderRadius: 10,
              border: '1px solid var(--border-color)'
            }}>
              <span style={{
                fontSize: 12,
                fontFamily: 'monospace',
                fontWeight: 600,
                color: 'var(--text-primary)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                userSelect: 'all'
              }}>
                {founderEmail}
              </span>
              <button
                onClick={handleCopyEmail}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 700,
                  color: copied ? '#059669' : 'var(--text-primary)',
                  background: copied ? 'rgba(5, 150, 105, 0.12)' : 'transparent',
                  border: '1px solid var(--border-color)',
                  padding: '6px 12px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                {copied ? (
                  <>
                    <Check style={{ width: 14, height: 14, color: '#059669' }} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy style={{ width: 14, height: 14 }} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Option 3: Verified Founder Profiles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 4 }}>
            <span style={{
              fontSize: 10,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-muted)'
            }}>
              Verified Founder &amp; Monorepo Profiles
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  padding: '9px 10px',
                  borderRadius: 10,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <Linkedin style={{ width: 14, height: 14, color: '#0A66C2' }} />
                <span>LinkedIn</span>
                <ExternalLink style={{ width: 11, height: 11, color: 'var(--text-muted)' }} />
              </a>

              <a
                href={githubUser}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  padding: '9px 10px',
                  borderRadius: 10,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <Github style={{ width: 14, height: 14 }} />
                <span>GitHub</span>
                <ExternalLink style={{ width: 11, height: 11, color: 'var(--text-muted)' }} />
              </a>

              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  padding: '9px 10px',
                  borderRadius: 10,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 900 }}>𝕏</span>
                <span>Twitter</span>
                <ExternalLink style={{ width: 11, height: 11, color: 'var(--text-muted)' }} />
              </a>
            </div>
          </div>

        </div>

        {/* Security & Architecture Guarantee Notice */}
        <div style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 10,
          fontSize: 11,
          color: 'var(--text-muted)',
          lineHeight: 1.5
        }}>
          <ShieldCheck style={{ width: 16, height: 16, color: '#6366F1', flexShrink: 0, marginTop: 2 }} />
          <span>
            <strong>Architectural Guarantee:</strong> BusinessPay enforces the <em>Universal Parent Monorepo &amp; Satellite Architecture Standard</em> under <code>Business-Tribe</code>. Core billing ledgers, SQLite persistence, and credit evaluation models remain strictly isolated from this public client showcase.
          </span>
        </div>

      </div>
    </div>
  );
}
