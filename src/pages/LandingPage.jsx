import React, { useState, useEffect } from 'react';

const LandingPage = ({ onEnter }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const personas = [
        {
            id: 'supervisor',
            emoji: '👤',
            name: '박소장',
            role: '현장 소장 / 관리책임자',
            pain: '"점검은 했는데 증명이 안 되는" 상황이 반복됩니다',
            value: '법정 점검표의 표준화·전자화로 감사·점검 시 즉시 제출 가능한 증빙 체계 확보'
        },
        {
            id: 'manager',
            emoji: '📋',
            name: '김대리',
            role: '안전/점검 실무 담당자',
            pain: '사진·서류·엑셀·메신저가 뒤섞여 관리가 어렵습니다',
            value: '체크리스트 자동 취합 및 상태 관리, "내 할 일" 기반 업무 우선순위 정리'
        },
        {
            id: 'executive',
            emoji: '🛡️',
            name: '이팀장',
            role: '안전팀장 / 리스크 책임자',
            pain: '사고 발생 시 책임소재·관리 여부 입증이 부담됩니다',
            value: 'AI 위험도 기반 고위험 작업 상시 가시화, 조치 이력 타임라인으로 책임 추적'
        }
    ];

    const features = [
        {
            icon: '📝',
            title: '법정 기준 체크리스트 전산화',
            description: '사다리 / 고소작업대 / 밀폐공간 법정 자율점검표를 표준 템플릿으로 시스템화',
            keywords: ['법정 점검표 기반', '모바일 안전 체크리스트', '자동 취합']
        },
        {
            icon: '🔄',
            title: '역할 기반 워크플로우 자동화',
            description: '기술인 → 관리감독자 → 안전관리자 간 점검·승인·조치 흐름을 자동 기록',
            keywords: ['승인·반려 워크플로우', '역할 기반 관리', '이력 자동 기록']
        },
        {
            icon: '🤖',
            title: 'AI 기반 사진 위험도 분석',
            description: '작업 사진 업로드 시 AI가 위험도(안전/주의/위험) 자동 판별, 고위험 건 상위 노출',
            keywords: ['AI 위험도 분석', '작업사진 위험 판별', '고위험 작업 자동 감지']
        },
        {
            icon: '✅',
            title: '"내 할 일" 중심 실무 UX',
            description: '알림 과부하 없이 각 역할별 지금 당장 해야 할 일만 노출',
            keywords: ['업무 우선순위', '즉시 인지', '효율적 관리']
        }
    ];

    const stats = [
        { number: '100%', label: '법정 점검표 기반', desc: '사다리·고소·밀폐공간' },
        { number: '3단계', label: '워크플로우 자동화', desc: '점검→승인→조치' },
        { number: '실시간', label: 'AI 위험도 분석', desc: '고위험 건 자동 감지' }
    ];

    const agents = [
        {
            icon: '📋',
            name: '점검 에이전트',
            desc: '작업자는 체크하고,\n점검 에이전트는 누락을 허용하지 않습니다.',
            color: '#60a5fa'
        },
        {
            icon: '🔍',
            name: '감독 에이전트',
            desc: '위험한 항목만 자동으로 골라\n감독자에게 보여줍니다.',
            color: '#a78bfa'
        },
        {
            icon: '👁️',
            name: 'AI 시각 에이전트',
            desc: '사진을 보는 눈,\n사람이 아니라 AI에게 맡기세요.',
            color: '#34d399'
        },
        {
            icon: '📝',
            name: '기록·증빙 에이전트',
            desc: '기억하지 않아도 됩니다.\nAI는 모든 과정을 증거로 남깁니다.',
            color: '#fbbf24'
        }
    ];

    return (
        <div className="landing-page" style={{
            minHeight: '100vh',
            background: '#0f172a',
            color: 'white',
            overflowX: 'hidden'
        }}>
            {/* Multi-Agent Hero Section - 패러다임 선언 */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center',
                position: 'relative',
                background: 'linear-gradient(180deg, #0f172a 0%, #1a1a2e 50%, #0f172a 100%)'
            }}>
                {/* 배경 파티클 효과 */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }} />

                {/* 플로팅 AI 아이콘 */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    fontSize: '2rem',
                    opacity: 0.3,
                    animation: 'float 4s ease-in-out infinite'
                }}>🤖</div>
                <div style={{
                    position: 'absolute',
                    top: '25%',
                    right: '15%',
                    fontSize: '1.8rem',
                    opacity: 0.25,
                    animation: 'float 5s ease-in-out infinite 1s'
                }}>🧠</div>
                <div style={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '15%',
                    fontSize: '1.5rem',
                    opacity: 0.2,
                    animation: 'float 4.5s ease-in-out infinite 0.5s'
                }}>⚡</div>
                <div style={{
                    position: 'absolute',
                    bottom: '30%',
                    right: '10%',
                    fontSize: '1.8rem',
                    opacity: 0.25,
                    animation: 'float 5.5s ease-in-out infinite 1.5s'
                }}>🛡️</div>

                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out',
                    maxWidth: '1000px'
                }}>
                    {/* 뱃지 */}
                    <div style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(167, 139, 250, 0.2) 100%)',
                        border: '1px solid rgba(96, 165, 250, 0.4)',
                        borderRadius: '50px',
                        padding: '0.5rem 1.5rem',
                        fontSize: '0.9rem',
                        color: '#a5b4fc',
                        marginBottom: '2rem'
                    }}>
                        🤖 Multi-Agent AI 안전관리 플랫폼
                    </div>

                    {/* 메인 헤드라인 */}
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        lineHeight: 1.3,
                        marginBottom: '1.5rem'
                    }}>
                        <span style={{ color: '#94a3b8' }}>안전관리,</span><br />
                        <span style={{
                            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #34d399 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>이제 혼자 하지 마세요.</span><br />
                        <span style={{ color: 'white' }}>AI들이 팀이 됩니다.</span>
                    </h1>

                    {/* 서브 헤드라인 */}
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                        color: '#94a3b8',
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.7
                    }}>
                        <span style={{ color: '#60a5fa' }}>점검하는 AI</span>, <span style={{ color: '#a78bfa' }}>판단하는 AI</span>, <span style={{ color: '#34d399' }}>기억하는 AI</span>.<br />
                        당신을 대신해 일하는 <strong style={{ color: 'white' }}>안전관리 팀</strong>
                    </p>

                    {/* 4개 에이전트 카드 */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1rem',
                        marginBottom: '3rem',
                        maxWidth: '950px',
                        margin: '0 auto 3rem'
                    }}>
                        {agents.map((agent, index) => (
                            <div key={index} style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: `1px solid ${agent.color}33`,
                                borderRadius: '16px',
                                padding: '1.5rem',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = `${agent.color}15`;
                                    e.currentTarget.style.borderColor = `${agent.color}66`;
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                    e.currentTarget.style.borderColor = `${agent.color}33`;
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{agent.icon}</div>
                                <div style={{
                                    color: agent.color,
                                    fontWeight: '700',
                                    fontSize: '1rem',
                                    marginBottom: '0.5rem'
                                }}>
                                    {agent.name}
                                </div>
                                <p style={{
                                    color: '#94a3b8',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.5,
                                    whiteSpace: 'pre-line',
                                    margin: 0
                                }}>
                                    {agent.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* 히어로 비디오 */}
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto 2.5rem',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(96, 165, 250, 0.2)'
                    }}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block'
                            }}
                        >
                            <source src="/assets/B_B_SaaS_Hero_Video_Generation.mp4" type="video/mp4" />
                            브라우저가 비디오를 지원하지 않습니다.
                        </video>
                    </div>

                    {/* 차별화 메시지 */}
                    <div style={{
                        background: 'rgba(96, 165, 250, 0.08)',
                        border: '1px solid rgba(96, 165, 250, 0.2)',
                        borderRadius: '12px',
                        padding: '1.25rem 2rem',
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem'
                    }}>
                        <p style={{
                            color: '#e2e8f0',
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            margin: 0
                        }}>
                            ❌ 우리는 AI 기능을 붙이지 않았습니다.<br />
                            ✅ <strong style={{ color: '#60a5fa' }}>AI가 일을 하도록 구조를 바꿨습니다.</strong>
                        </p>
                    </div>

                    {/* CTA 버튼 */}
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                            onClick={onEnter}
                            style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                boxShadow: '0 8px 30px rgba(96, 165, 250, 0.4)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 12px 40px rgba(96, 165, 250, 0.5)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 8px 30px rgba(96, 165, 250, 0.4)';
                            }}
                        >
                            🤖 AI 안전관리 팀 만나보기
                        </button>
                        <button
                            style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                background: 'transparent',
                                color: '#94a3b8',
                                border: '1px solid #475569',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.borderColor = '#60a5fa';
                                e.target.style.color = '#60a5fa';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.borderColor = '#475569';
                                e.target.style.color = '#94a3b8';
                            }}
                        >
                            멀티에이전트 데모 보기
                        </button>
                    </div>
                </div>

                {/* 스크롤 힌트 */}
                <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite'
                }}>
                    <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                        스크롤하여 더 알아보기
                    </div>
                    <div style={{ fontSize: '1.5rem', color: '#64748b' }}>↓</div>
                </div>
            </section>

            {/* Hero Section 2 - 중대재해 대응 핵심 메시지 */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center',
                position: 'relative',
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
            }}>
                {/* 배경 그래디언트 효과 */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />

                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease-out',
                    maxWidth: '900px'
                }}>
                    {/* 뱃지 */}
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(239, 68, 68, 0.2)',
                        border: '1px solid rgba(239, 68, 68, 0.5)',
                        borderRadius: '50px',
                        padding: '0.5rem 1.5rem',
                        fontSize: '0.9rem',
                        color: '#fca5a5',
                        marginBottom: '1.5rem'
                    }}>
                        ⚠️ 중대재해처벌법 대응 솔루션
                    </div>

                    {/* 헤드라인 */}
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        lineHeight: 1.2,
                        marginBottom: '1.5rem'
                    }}>
                        <span style={{ color: '#60a5fa' }}>점검은 했는데,</span><br />
                        <span style={{ color: 'white' }}>증명이 안 되는 문제를 끝내다</span>
                    </h1>

                    {/* 서브헤드라인 */}
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        color: '#94a3b8',
                        maxWidth: '700px',
                        margin: '0 auto 2rem',
                        lineHeight: 1.7
                    }}>
                        법정 자율점검표를 기반으로 한 <strong style={{ color: '#60a5fa' }}>AI 안전관리 솔루션</strong><br />
                        점검 → 승인 → 조치의 전 과정을 자동 기록하여<br />
                        <strong style={{ color: 'white' }}>사고 예방과 법적 리스크를 동시에 줄입니다</strong>
                    </p>

                    {/* CTA 버튼 */}
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                            onClick={onEnter}
                            style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 12px 40px rgba(59, 130, 246, 0.5)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
                            }}
                        >
                            무료로 시작하기
                        </button>
                        <button
                            style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                background: 'transparent',
                                color: '#94a3b8',
                                border: '1px solid #475569',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.borderColor = '#60a5fa';
                                e.target.style.color = '#60a5fa';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.borderColor = '#475569';
                                e.target.style.color = '#94a3b8';
                            }}
                        >
                            데모 영상 보기
                        </button>
                    </div>

                    {/* 신뢰 지표 */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginTop: '3rem',
                        flexWrap: 'wrap'
                    }}>
                        {stats.map((stat, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '800',
                                    color: '#60a5fa'
                                }}>{stat.number}</div>
                                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{stat.label}</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 스크롤 힌트 */}
                <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite'
                }}>
                    <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                        더 알아보기
                    </div>
                    <div style={{ fontSize: '1.5rem', color: '#64748b' }}>↓</div>
                </div>
            </section>

            {/* Problem Section - 문제 인식 */}
            <section style={{
                padding: '6rem 2rem',
                background: '#1e293b',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '50px',
                        padding: '0.5rem 1.5rem',
                        fontSize: '0.85rem',
                        color: '#fca5a5',
                        marginBottom: '1.5rem'
                    }}>
                        현장의 구조적 문제
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'white'
                    }}>
                        안전관리는 하고 있으나,<br />
                        <span style={{ color: '#f87171' }}>증명·추적·예방이 구조적으로 어렵습니다</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        marginTop: '3rem'
                    }}>
                        {[
                            {
                                icon: '📄',
                                title: '수기·분산 관리',
                                desc: '법정 자율점검·안전서류가 누락, 중복, 사후 보완 반복'
                            },
                            {
                                icon: '🔗',
                                title: '워크플로우 단절',
                                desc: '작업자-감독자-안전관리자 간 점검·승인·조치 흐름이 끊어짐'
                            },
                            {
                                icon: '📷',
                                title: '주관적 판단',
                                desc: '사진은 있지만 객관적 위험 기준 없이 사후 판단에 의존'
                            },
                            {
                                icon: '👁️',
                                title: '가시성 부족',
                                desc: '실시간 위험 현황을 한눈에 볼 수 없어 감(感)에 의존'
                            },
                            {
                                icon: '⚖️',
                                title: '책임 추적 부담',
                                desc: '"점검했는가/승인했는가/조치했는가" 입증이 어려움'
                            },
                            {
                                icon: '📊',
                                title: '법적 리스크',
                                desc: '보고·점검·조치 이력이 흩어져 중대재해법 대응 곤란'
                            }
                        ].map((item, index) => (
                            <div key={index} style={{
                                background: 'rgba(239, 68, 68, 0.05)',
                                border: '1px solid rgba(239, 68, 68, 0.15)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                textAlign: 'left'
                            }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                                <h4 style={{ color: '#fca5a5', marginBottom: '0.5rem', fontWeight: '600' }}>
                                    {item.title}
                                </h4>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section - 해결 방안 */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                        borderRadius: '50px',
                        padding: '0.5rem 1.5rem',
                        fontSize: '0.85rem',
                        color: '#86efac',
                        marginBottom: '1.5rem'
                    }}>
                        안전의 길 솔루션
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'white'
                    }}>
                        <span style={{ color: '#86efac' }}>증빙 자동화</span>로<br />
                        사고 예방과 법적 리스크를 동시에 해결
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem',
                        marginTop: '3rem'
                    }}>
                        {features.map((feature, index) => (
                            <div key={index} style={{
                                background: 'rgba(34, 197, 94, 0.05)',
                                border: '1px solid rgba(34, 197, 94, 0.15)',
                                borderRadius: '16px',
                                padding: '2rem',
                                textAlign: 'left',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(34, 197, 94, 0.15)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    marginBottom: '0.75rem'
                                }}>
                                    {feature.title}
                                </h3>
                                <p style={{
                                    color: '#94a3b8',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.6,
                                    marginBottom: '1rem'
                                }}>
                                    {feature.description}
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {feature.keywords.map((keyword, i) => (
                                        <span key={i} style={{
                                            background: 'rgba(34, 197, 94, 0.1)',
                                            color: '#86efac',
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '50px'
                                        }}>
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Visualization */}
            <section style={{
                padding: '6rem 2rem',
                background: '#1e293b',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: '700',
                        marginBottom: '3rem',
                        color: 'white'
                    }}>
                        모든 흐름이 <span style={{ color: '#60a5fa' }}>자동으로 기록</span>됩니다
                    </h2>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { role: '기술인', action: '체크리스트 작성', icon: '👷' },
                            { role: '관리감독자', action: '검토 및 승인', icon: '👔' },
                            { role: '안전관리자', action: '조치 기록', icon: '🛡️' }
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div style={{
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    border: '2px solid rgba(59, 130, 246, 0.3)',
                                    borderRadius: '16px',
                                    padding: '1.5rem 2rem',
                                    minWidth: '180px'
                                }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{step.icon}</div>
                                    <div style={{ color: '#60a5fa', fontWeight: '700', marginBottom: '0.25rem' }}>
                                        {step.role}
                                    </div>
                                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{step.action}</div>
                                </div>
                                {index < 2 && (
                                    <div style={{
                                        color: '#60a5fa',
                                        fontSize: '1.5rem',
                                        animation: 'pulse 1.5s infinite'
                                    }}>→</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '2rem',
                        padding: '1rem 2rem',
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                        borderRadius: '12px',
                        display: 'inline-block'
                    }}>
                        <span style={{ color: '#86efac', fontWeight: '600' }}>✓ 모든 단계가 자동 기록</span>
                        <span style={{ color: '#94a3b8' }}> → 감사·사고·분쟁 시 객관적 근거 확보</span>
                    </div>
                </div>
            </section>

            {/* Persona Section - 고객별 가치 */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'white'
                    }}>
                        <span style={{ color: '#a78bfa' }}>역할별</span> 핵심 가치
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>
                        현장 실무자부터 경영진까지, 모두에게 필요한 솔루션
                    </p>

                    {/* 탭 버튼 */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginBottom: '2rem',
                        flexWrap: 'wrap'
                    }}>
                        {personas.map((persona, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    background: activeTab === index
                                        ? 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)'
                                        : 'rgba(124, 58, 237, 0.1)',
                                    border: activeTab === index
                                        ? 'none'
                                        : '1px solid rgba(124, 58, 237, 0.3)',
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {persona.emoji} {persona.name}
                            </button>
                        ))}
                    </div>

                    {/* 페르소나 카드 */}
                    <div style={{
                        background: 'rgba(124, 58, 237, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        borderRadius: '20px',
                        padding: '2.5rem',
                        textAlign: 'left'
                    }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.75rem'
                            }}>
                                {personas[activeTab].emoji}
                            </div>
                            <div>
                                <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '700' }}>
                                    {personas[activeTab].name}
                                </h3>
                                <p style={{ color: '#a78bfa', fontSize: '0.9rem' }}>
                                    {personas[activeTab].role}
                                </p>
                            </div>
                        </div>

                        <div style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            borderRadius: '12px',
                            padding: '1rem 1.5rem',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{ color: '#fca5a5', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                😫 현재 Pain
                            </div>
                            <p style={{ color: '#f1f5f9', fontSize: '1rem', fontStyle: 'italic', margin: 0 }}>
                                {personas[activeTab].pain}
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(34, 197, 94, 0.1)',
                            border: '1px solid rgba(34, 197, 94, 0.2)',
                            borderRadius: '12px',
                            padding: '1rem 1.5rem'
                        }}>
                            <div style={{ color: '#86efac', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                ✅ 안전의 길로 얻는 가치
                            </div>
                            <p style={{ color: '#f1f5f9', fontSize: '1rem', margin: 0 }}>
                                {personas[activeTab].value}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Highlight Section */}
            <section style={{
                padding: '6rem 2rem',
                background: '#1e293b',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '50px',
                        padding: '0.5rem 1.5rem',
                        fontSize: '0.85rem',
                        color: '#60a5fa',
                        marginBottom: '1.5rem'
                    }}>
                        🤖 AI 기반 차별화
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'white'
                    }}>
                        <span style={{ color: '#60a5fa' }}>감(感)이 아닌,</span><br />
                        기준 있는 안전관리
                    </h2>

                    <p style={{ color: '#94a3b8', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        작업사진 AI 분석으로 고위험 작업을 사전에 감지하고<br />
                        데이터 기반의 예방 중심 안전관리를 실현합니다
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {[
                            { level: '안전', color: '#22c55e', icon: '✅', desc: '기준 충족' },
                            { level: '주의', color: '#f59e0b', icon: '⚠️', desc: '확인 필요' },
                            { level: '위험', color: '#ef4444', icon: '🚨', desc: '즉시 조치' }
                        ].map((item, index) => (
                            <div key={index} style={{
                                background: `rgba(${item.level === '안전' ? '34, 197, 94' : item.level === '주의' ? '245, 158, 11' : '239, 68, 68'}, 0.1)`,
                                border: `2px solid ${item.color}`,
                                borderRadius: '16px',
                                padding: '2rem'
                            }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                                <div style={{ color: item.color, fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                                    {item.level}
                                </div>
                                <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                            🏷️ 보호구 미착용 / 추락 위험 / 난간 없음 등 <strong style={{ color: '#60a5fa' }}>위험 태그 자동 제공</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Section - 경영진 설득 */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'white'
                    }}>
                        <span style={{ color: '#fbbf24' }}>경영진</span>을 위한 핵심 가치
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>
                        "우리는 이렇게 관리했다"는 객관적 근거 확보
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {[
                            {
                                icon: '📋',
                                title: '안전관리 책임 추적',
                                desc: '모든 점검·승인·조치가 타임스탬프와 함께 기록'
                            },
                            {
                                icon: '⚖️',
                                title: '법적 리스크 최소화',
                                desc: '중대재해처벌법 대응을 위한 증빙 체계 확보'
                            },
                            {
                                icon: '🔍',
                                title: '감사 대응 안전관리',
                                desc: '감사·점검 시 즉시 제출 가능한 데이터'
                            }
                        ].map((item, index) => (
                            <div key={index} style={{
                                background: 'rgba(251, 191, 36, 0.05)',
                                border: '1px solid rgba(251, 191, 36, 0.2)',
                                borderRadius: '16px',
                                padding: '2rem'
                            }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                                <h3 style={{ color: '#fbbf24', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'white'
                    }}>
                        중대재해를 막는 안전관리,<br />
                        이제 '증명'까지 자동으로
                    </h2>
                    <p style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '1.1rem',
                        marginBottom: '2rem'
                    }}>
                        법정 자율점검표를 기반으로 한 AI 안전관리 솔루션<br />
                        지금 바로 시작하세요
                    </p>
                    <button
                        onClick={onEnter}
                        style={{
                            padding: '1.25rem 3rem',
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            background: 'white',
                            color: '#1e40af',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-3px) scale(1.02)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                        }}
                    >
                        무료로 시작하기
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                padding: '2rem',
                background: '#0f172a',
                color: '#64748b',
                textAlign: 'center',
                fontSize: '0.85rem',
                borderTop: '1px solid #1e293b'
            }}>
                <p style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#94a3b8' }}>안전의 길</strong> | 중대재해처벌법 대응 현장 안전관리 시스템
                </p>
                <p>© 2024 Safety Quest. All rights reserved.</p>
            </footer>

            {/* 플로팅 CTA */}
            <button
                onClick={onEnter}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    padding: '1rem 1.5rem',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
                🛡️ 무료 체험
            </button>

            <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50% { transform: translateX(-50%) translateY(10px); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
            `}</style>
        </div>
    );
};

export default LandingPage;
