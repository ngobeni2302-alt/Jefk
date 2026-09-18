import { useState, useRef, useEffect } from 'react'
import {
  Music,
  Mail,
  MessageSquare,
  Phone,
  ExternalLink,
  Play,
  Pause,
  Disc,
  Send,
  User,
  Globe,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Share2,
  ChevronLeft,
  ChevronRight,
  X,
  Volume2,
  Sun,
  Moon
} from 'lucide-react'
import './App.css'

// Vector Brand Icons

function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001l-1.416 5.166 5.289-1.385c1.472.802 3.13 1.224 4.78 1.225h.005c5.505 0 9.988-4.478 9.989-9.985 0-2.667-1.037-5.176-2.925-7.065A9.916 9.916 0 0 0 12.012 2zm.005 16.347h-.004a8.283 8.283 0 0 1-4.225-1.16l-.303-.18-3.14.821.838-3.056-.197-.314a8.261 8.261 0 0 1-1.266-4.474c0-4.569 3.719-8.288 8.29-8.288 2.213 0 4.293.862 5.858 2.428a8.23 8.23 0 0 1 2.424 5.86c0 4.57-3.718 8.288-8.289 8.288zm4.542-6.208c-.249-.124-1.472-.726-1.701-.809-.228-.083-.394-.124-.56.124-.166.249-.643.809-.788.975-.145.166-.29.186-.539.062-.249-.124-1.052-.387-2.004-1.236-.741-.661-1.241-1.477-1.386-1.726-.145-.249-.015-.383.109-.507.112-.112.249-.29.373-.435.124-.145.166-.249.249-.415.083-.166.042-.311-.021-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.871.85-.871 2.073 0 1.223.891 2.405 1.015 2.571.124.166 1.752 2.675 4.246 3.753.593.256 1.056.409 1.417.524.596.19 1.138.163 1.566.099.478-.071 1.472-.601 1.68-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.477-.29z" />
    </svg>
  )
}

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}

function YoutubeIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function SpotifyIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.899 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.019zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.841c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-1.2-.42-.18-.6.42-1.2 1.02-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z"/>
    </svg>
  )
}

function XIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function TikTokIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.83.12V9.38a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.64a6.34 6.34 0 0 0 10.74 4.5 6.3 6.3 0 0 0 2.05-4.57V8.5a8.27 8.27 0 0 0 4.8 1.53V6.58a4.85 4.85 0 0 1-1-.11z"/>
    </svg>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('about')
  const [isFading, setIsFading] = useState(false)

  // Theme State (Light vs Dark Mode)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const tabsListRef = useRef(null)
  const tabRefs = useRef({})
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  // Audio Snippet & Platform Modal States
  const [playingTrackId, setPlayingTrackId] = useState(null)
  const [snippetProgress, setSnippetProgress] = useState(0)
  const [platformModalTrack, setPlatformModalTrack] = useState(null)
  const snippetTimerRef = useRef(null)

  const tabs = [
    { id: 'about', label: '1. About Jeffrey Kay', icon: User },
    { id: 'socials', label: '2. Social Media Hub', icon: Share2 },
    { id: 'works', label: '3. Gospel Music & Snippets', icon: Disc },
    { id: 'contact', label: '4. WhatsApp & Email Contact', icon: Mail }
  ]

  const updateIndicator = (tabId) => {
    const currentTabEl = tabRefs.current[tabId]
    const containerEl = tabsListRef.current
    if (currentTabEl && containerEl) {
      const tabRect = currentTabEl.getBoundingClientRect()
      const containerRect = containerEl.getBoundingClientRect()
      setIndicatorStyle({
        left: tabRect.left - containerRect.left + containerEl.scrollLeft,
        width: tabRect.width
      })
    }
  }

  const handleTabChange = (newTabId) => {
    if (newTabId === activeTab) return
    updateIndicator(newTabId)
    setIsFading(true)

    setTimeout(() => {
      setActiveTab(newTabId)
      setTimeout(() => {
        setIsFading(false)
      }, 80)
    }, 80)
  }

  useEffect(() => {
    updateIndicator(activeTab)
    const handleResize = () => updateIndicator(activeTab)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeTab])

  // Handle 30-Second Snippet Playback Simulation
  const toggleSnippet = (trackId) => {
    if (playingTrackId === trackId) {
      setPlayingTrackId(null)
      clearInterval(snippetTimerRef.current)
      setSnippetProgress(0)
    } else {
      setPlayingTrackId(trackId)
      setSnippetProgress(0)
      clearInterval(snippetTimerRef.current)

      let elapsed = 0
      snippetTimerRef.current = setInterval(() => {
        elapsed += 1
        setSnippetProgress((elapsed / 30) * 100)
        if (elapsed >= 30) {
          clearInterval(snippetTimerRef.current)
          setPlayingTrackId(null)
          setSnippetProgress(0)
        }
      }, 1000)
    }
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab)
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const nextIndex = (currentIndex + 1) % tabs.length
      handleTabChange(tabs[nextIndex].id)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length
      handleTabChange(tabs[prevIndex].id)
    } else if (e.key === 'Home') {
      e.preventDefault()
      handleTabChange(tabs[0].id)
    } else if (e.key === 'End') {
      e.preventDefault()
      handleTabChange(tabs[tabs.length - 1].id)
    }
  }

  const scrollTabs = (direction) => {
    if (tabsListRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      tabsListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Gospel Booking Inquiry',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: 'Gospel Booking Inquiry', message: '' })
    }, 5000)
  }

  const socials = [
    {
      platform: 'Spotify',
      handle: 'Jeffrey Kay',
      url: 'https://spotify.com',
      icon: SpotifyIcon,
      desc: 'Stream gospel tracks & latest worship releases'
    },
    {
      platform: 'Instagram',
      handle: '@jeffreykay_music',
      url: 'https://instagram.com',
      icon: InstagramIcon,
      desc: 'Live worship sessions & inspirational updates'
    },
    {
      platform: 'YouTube Music',
      handle: 'Jeffrey Kay Gospel',
      url: 'https://music.youtube.com/watch?v=Ufq9mRs5pmw&si=9Hjf8dZpbU1v9krn',
      icon: YoutubeIcon,
      desc: 'Official gospel music videos & live ministry'
    },
    {
      platform: 'WhatsApp',
      handle: '+27 [Your Phone Number]',
      url: 'https://wa.me/27000000000',
      icon: WhatsAppIcon,
      desc: 'Direct messaging for ministry & event bookings'
    },
    {
      platform: 'X (Twitter)',
      handle: '@jeffreykay_sa',
      url: 'https://x.com',
      icon: XIcon,
      desc: 'Daily scripture inspiration & music news'
    },
    {
      platform: 'Apple Music',
      handle: 'Jeffrey Kay',
      url: 'https://music.apple.com',
      icon: Disc,
      desc: 'Listen to gospel albums in high fidelity'
    },
    {
      platform: 'SoundCloud',
      handle: 'Jeffrey Kay Gospel',
      url: 'https://soundcloud.com',
      icon: Share2,
      desc: 'Acoustic worship sessions & live recordings'
    },
    {
      platform: 'TikTok',
      handle: '@jeffreykay_gospel',
      url: 'https://tiktok.com',
      icon: TikTokIcon,
      desc: 'Short worship clips & inspirational messages'
    }
  ]

  const works = [
    {
      id: 'track-1',
      title: 'Ngipha\'Mandla',
      category: 'Official Gospel Single',
      desc: 'A powerful South African gospel worship song by Jeffrey Kay asking for divine strength and grace.',
      year: '2026',
      youtubeUrl: 'https://music.youtube.com/watch?v=Ufq9mRs5pmw&si=9Hjf8dZpbU1v9krn',
      youtubeEmbedId: 'Ufq9mRs5pmw',
      coverImg: '/jeffrey_kay.jpg',
      spotifyUrl: 'https://open.spotify.com/search/Jeffrey%20Kay%20Ngipha%27Mandla',
      appleUrl: 'https://music.apple.com/search?term=Jeffrey%20Kay%20Ngipha%27Mandla'
    },
    {
      id: 'track-2',
      title: 'Jeffrey Kay - Gospel Worship Live',
      category: 'Live Ministry Performance',
      desc: 'Spirit-filled live worship performance bringing inspirational gospel praise to audiences everywhere.',
      year: '2026',
      youtubeUrl: 'https://music.youtube.com/watch?v=_TxYhEzLCXs&si=HVsFiPYsUngqra2n',
      youtubeEmbedId: '_TxYhEzLCXs',
      coverImg: '/jeffrey_kay.jpg',
      spotifyUrl: 'https://open.spotify.com/search/Jeffrey%20Kay',
      appleUrl: 'https://music.apple.com/search?term=Jeffrey%20Kay'
    }
  ]

  return (
    <div className="app-container">
      {/* Platform Selection Modal */}
      {platformModalTrack && (
        <div className="modal-overlay" onClick={() => setPlatformModalTrack(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div className="modal-tag">Select Platform</div>
                <h3 className="modal-title">Where would you like to listen to &quot;{platformModalTrack.title}&quot;?</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setPlatformModalTrack(null)} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            <p className="modal-description">
              Choose your preferred music streaming service below to open <strong>{platformModalTrack.title}</strong> by Jeffrey Kay:
            </p>

            <div className="platform-options-grid">
              <a
                href={platformModalTrack.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-option-btn platform-youtube"
              >
                <div className="platform-btn-left">
                  <YoutubeIcon size={24} />
                  <div>
                    <div className="platform-name">YouTube Music</div>
                    <div className="platform-sub">Watch &amp; Stream Official Track</div>
                  </div>
                </div>
                <ExternalLink size={16} />
              </a>

              <a
                href={platformModalTrack.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-option-btn platform-spotify"
              >
                <div className="platform-btn-left">
                  <SpotifyIcon size={24} />
                  <div>
                    <div className="platform-name">Spotify</div>
                    <div className="platform-sub">Listen on Spotify</div>
                  </div>
                </div>
                <ExternalLink size={16} />
              </a>

              <a
                href={platformModalTrack.appleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-option-btn platform-apple"
              >
                <div className="platform-btn-left">
                  <Disc size={24} />
                  <div>
                    <div className="platform-name">Apple Music</div>
                    <div className="platform-sub">Stream High Quality Audio</div>
                  </div>
                </div>
                <ExternalLink size={16} />
              </a>

              <a
                href={`https://wa.me/27000000000?text=Hi%20Jeffrey%20Kay%2C%20I'm%20listening%20to%20${encodeURIComponent(platformModalTrack.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-option-btn platform-whatsapp-modal"
              >
                <div className="platform-btn-left">
                  <WhatsAppIcon size={24} />
                  <div>
                    <div className="platform-name">WhatsApp Direct</div>
                    <div className="platform-sub">Request Track / Connect with Artist</div>
                  </div>
                </div>
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="modal-footer">
              <button className="btn btn-outline-dusty" style={{ width: '100%' }} onClick={() => setPlatformModalTrack(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-brand">
          <div className="brand-icon">JK</div>
          <span className="brand-name">Jeffrey Kay</span>
        </div>

        <div className="nav-actions">
          {/* Physical Sliding ON / OFF Theme Switch */}
          <div className="theme-switch-control">
            <Sun size={15} className={`theme-switch-icon ${theme === 'light' ? 'active' : ''}`} />
            <button
              type="button"
              role="switch"
              aria-checked={theme === 'dark'}
              onClick={toggleTheme}
              className={`toggle-switch-track ${theme === 'dark' ? 'is-on' : 'is-off'}`}
              title={`Switch to ${theme === 'light' ? 'Dark Mode (ON)' : 'Light Mode (OFF)'}`}
              aria-label="Dark Mode Toggle Switch"
            >
              <span className="toggle-switch-thumb"></span>
            </button>
            <Moon size={15} className={`theme-switch-icon ${theme === 'dark' ? 'active' : ''}`} />
            <span className="theme-switch-label">{theme === 'dark' ? 'Dark ON' : 'Dark OFF'}</span>
          </div>

          <button onClick={() => handleTabChange('contact')} className="btn btn-whatsapp">
            <WhatsAppIcon size={18} />
            <span className="btn-label">WhatsApp</span>
          </button>
          <button onClick={() => handleTabChange('contact')} className="btn btn-black">
            <Mail size={16} />
            <span className="btn-label">Email Me</span>
          </button>
        </div>
      </header>

      {/* System Tabs Bar */}
      <div className="tabs-system-bar">
        <div className="container">
          <div className="tabs-system-wrapper">
            <button className="chevron-btn chevron-left" onClick={() => scrollTabs('left')} aria-label="Scroll left">
              <ChevronLeft size={18} />
            </button>

            <div
              className="tabs-scroll-container"
              ref={tabsListRef}
              role="tablist"
              aria-label="Artist Sections"
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {tabs.map((tab) => {
                const IconComp = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    ref={(el) => (tabRefs.current[tab.id] = el)}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    className={`system-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <IconComp size={16} className="tab-icon" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}

              <div
                className="tab-sliding-indicator"
                style={{
                  transform: `translateX(${indicatorStyle.left}px)`,
                  width: `${indicatorStyle.width}px`
                }}
              />
            </div>

            <button className="chevron-btn chevron-right" onClick={() => scrollTabs('right')} aria-label="Scroll right">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Main Content Container */}
      <main className={`content-transition-area ${isFading ? 'fading' : ''}`}>
        {/* TAB 1: ABOUT JEFFREY KAY */}
        {activeTab === 'about' && (
          <section id="about" className="section">
            <div className="container">
              <div className="hero-grid">
                <div className="hero-content">
                  <div className="artist-title-badge">
                    <Sparkles size={16} />
                    <span>Gospel Artist &amp; Worship Leader</span>
                  </div>

                  <h1 className="hero-heading">
                    Hello, I am <br />
                    <span>Jeffrey Kay</span>
                  </h1>

                  <p className="hero-bio">
                    Welcome to my official portfolio! I am <strong>Jeffrey Kay</strong>, a passionate Gospel singer, songwriter, and worship leader based in <strong>South Africa</strong>. Creator of the inspirational single <em>&quot;Ngipha&apos;Mandla&quot;</em>.
                  </p>

                  <div className="hero-stats">
                    <div className="stat-card">
                      <div className="stat-label">Origin</div>
                      <div className="stat-value">South Africa</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-label">Genre</div>
                      <div className="stat-value">Gospel Music</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-label">Latest Single</div>
                      <div className="stat-value">Ngipha&apos;Mandla</div>
                    </div>
                  </div>

                  <div className="hero-actions">
                    <button onClick={() => handleTabChange('works')} className="btn btn-black">
                      <Music size={16} />
                      Listen to Ngipha&apos;Mandla
                      <ArrowRight size={16} />
                    </button>
                    <button onClick={() => handleTabChange('contact')} className="btn btn-outline-dusty">
                      <Phone size={16} />
                      Book / Contact Artist
                    </button>
                  </div>
                </div>

                {/* Updated Real Photo of Jeffrey Kay */}
                <div className="hero-image-container">
                  <div className="hero-image-card">
                    <img
                      src="/jeffrey_kay.jpg"
                      alt="Jeffrey Kay - Ngipha'Mandla Cover"
                      className="hero-artist-img"
                    />
                    <div className="hero-image-caption" style={{ marginTop: '12px' }}>
                      Jeffrey Kay — Ngipha&apos;Mandla
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: SOCIAL MEDIA HUB */}
        {activeTab === 'socials' && (
          <section id="socials" className="section section-bg-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Connect &amp; Follow</span>
                <h2 className="section-title">Jeffrey Kay Social Hub</h2>
                <p className="section-description">
                  Explore official music channels, stream worship songs, and connect across all platforms.
                </p>
              </div>

              <div className="socials-grid">
                {socials.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <div key={index} className="social-card">
                      <div>
                        <div className="social-card-header">
                          <div className="social-icon-wrapper">
                            <IconComponent size={22} />
                          </div>
                          <span className="template-badge">Official Link</span>
                        </div>
                        <h3 className="social-handle">{social.handle}</h3>
                        <div className="social-platform">{social.platform}</div>
                        <p className="work-desc">{social.desc}</p>
                      </div>

                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dusty"
                        style={{ marginTop: '16px', width: '100%' }}
                      >
                        <span>Visit {social.platform}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: DISCOGRAPHY & WORKS WITH 30-SEC SNIPPET PLAYER */}
        {activeTab === 'works' && (
          <section id="works" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Gospel Discography</span>
                <h2 className="section-title">Featured Gospel Music &amp; Snippets</h2>
                <p className="section-description">
                  Listen to 30-second audio snippets right on the site or select your favorite streaming platform to listen in full.
                </p>
              </div>

              <div className="works-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                {works.map((work) => {
                  const isPlaying = playingTrackId === work.id
                  return (
                    <div key={work.id} className="work-card">
                      <div className="work-cover-container">
                        <img src={work.coverImg} alt={work.title} className="work-cover-img" />
                        <div className="work-cover-overlay">
                          <button
                            onClick={() => toggleSnippet(work.id)}
                            className={`snippet-play-btn ${isPlaying ? 'playing' : ''}`}
                            aria-label={isPlaying ? 'Pause snippet' : 'Play 30 second snippet'}
                          >
                            {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '4px' }} />}
                          </button>
                        </div>
                      </div>

                      <div className="work-body">
                        <div className="work-category">{work.category} • {work.year}</div>
                        <h3 className="work-title">{work.title}</h3>
                        <p className="work-desc">{work.desc}</p>

                        {/* Interactive 30-Second Snippet Control Bar */}
                        <div className="snippet-player-box">
                          <div className="snippet-player-header">
                            <span className="snippet-label">
                              <Volume2 size={14} />
                              {isPlaying ? 'Playing 30s Preview...' : '30-Second Audio Snippet'}
                            </span>
                            <span className="snippet-time">{isPlaying ? `${Math.round((snippetProgress / 100) * 30)}s / 30s` : '0:30'}</span>
                          </div>

                          <div className="snippet-progress-bar">
                            <div className="snippet-progress-fill" style={{ width: `${isPlaying ? snippetProgress : 0}%` }} />
                          </div>

                          <div className="snippet-action-row">
                            <button
                              onClick={() => toggleSnippet(work.id)}
                              className="btn btn-outline-dusty snippet-btn"
                            >
                              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                              <span>{isPlaying ? 'Pause Snippet' : 'Play 30s Preview'}</span>
                            </button>

                            <button
                              onClick={() => setPlatformModalTrack(work)}
                              className="btn btn-black snippet-btn"
                            >
                              <ExternalLink size={14} />
                              <span>Listen Full Track</span>
                            </button>
                          </div>
                        </div>

                        {/* Embedded YouTube Player Preview Box */}
                        <div className="youtube-preview-container" style={{ marginTop: '16px' }}>
                          <iframe
                            width="100%"
                            height="180"
                            src={`https://www.youtube.com/embed/${work.youtubeEmbedId}`}
                            title={work.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: 'var(--radius-sm)' }}
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: WHATSAPP & EMAIL CONTACT */}
        {activeTab === 'contact' && (
          <section id="contact" className="section section-bg-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Get in Touch</span>
                <h2 className="section-title">Contact &amp; Gospel Ministry Bookings</h2>
                <p className="section-description">
                  Connect with Jeffrey Kay for church events, gospel concerts, collaborations, or WhatsApp messaging.
                </p>
              </div>

              <div className="contact-grid">
                {/* Option A: WhatsApp Direct Connection */}
                <div id="whatsapp-section" className="contact-card contact-card-highlight">
                  <div className="contact-icon-badge contact-icon-whatsapp">
                    <WhatsAppIcon size={32} />
                  </div>
                  <h3 className="contact-card-title">Chat on WhatsApp</h3>
                  <p className="contact-card-desc">
                    Connect directly via WhatsApp for quick booking inquiries, ministry invitations, and instant communication.
                  </p>

                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <Phone size={18} color="#25D366" />
                      <span>WhatsApp: +27 [Your Phone Number]</span>
                    </div>
                    <div className="contact-info-item">
                      <MessageSquare size={18} color="#5C7C8D" />
                      <span>Location: South Africa</span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/27000000000?text=Hello%20Jeffrey%20Kay%2C%20I%20am%20reaching%20out%20regarding%20a%20gospel%20booking!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', padding: '14px', fontSize: '16px' }}
                  >
                    <WhatsAppIcon size={22} />
                    Open WhatsApp Chat
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Option B: Direct Email Form */}
                <div id="contact-form-section" className="contact-card">
                  <div className="contact-icon-badge contact-icon-email">
                    <Mail size={28} />
                  </div>
                  <h3 className="contact-card-title">Send an Email</h3>
                  <p className="contact-card-desc">
                    Send an official message to Jeffrey Kay&apos;s management team for bookings and media inquiries.
                  </p>

                  {submitted && (
                    <div className="alert-success">
                      <CheckCircle size={18} />
                      <span>Thank you! Your message was sent successfully to Jeffrey Kay&apos;s team.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Pastor / Event Organizer Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Email Address</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="e.g. organizer@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Inquiry Subject</label>
                      <select
                        className="form-select"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="Gospel Booking Inquiry">Gospel Booking Inquiry</option>
                        <option value="Church Worship Invitation">Church Worship Invitation</option>
                        <option value="Music Collaboration">Music Collaboration</option>
                        <option value="Press / Media">Press / Media</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Message</label>
                      <textarea
                        className="form-textarea"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-black" style={{ width: '100%', padding: '12px' }}>
                      <Send size={16} />
                      Send Email Message
                    </button>
                  </form>

                  <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    <a
                      href="mailto:artist@example.com?subject=Jeffrey%20Kay%20Gospel%20Inquiry"
                      className="company-email"
                      style={{ color: 'var(--dusty-blue-dark)', fontSize: '13px' }}
                    >
                      <Mail size={14} /> Or click here to open mail app directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Artist Brand */}
            <div>
              <div className="footer-brand-title">Jeffrey Kay</div>
              <p className="footer-brand-desc">
                Official website of South African Gospel artist Jeffrey Kay. Bringing inspirational praise, worship music, and gospel events to audiences worldwide.
              </p>

              {/* Developer & Company Credits */}
              <div className="company-branding-box">
                <div className="company-name">
                  <Sparkles size={16} color="#5C7C8D" />
                  Website Developed by valambyaT3ch
                </div>
                <a href="mailto:valambyat3ch@gmail.com" className="company-email">
                  <Mail size={14} />
                  valambyat3ch@gmail.com
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <div className="footer-column-title">Navigation</div>
              <ul className="footer-links">
                <li><button onClick={() => handleTabChange('about')} className="footer-link-btn">About Jeffrey Kay</button></li>
                <li><button onClick={() => handleTabChange('socials')} className="footer-link-btn">Social Media Hub</button></li>
                <li><button onClick={() => handleTabChange('works')} className="footer-link-btn">Gospel Music &amp; Snippets</button></li>
                <li><button onClick={() => handleTabChange('contact')} className="footer-link-btn">WhatsApp &amp; Email Contact</button></li>
              </ul>
            </div>

            {/* Column 3: Contact Info Recap */}
            <div>
              <div className="footer-column-title">Direct Contact</div>
              <ul className="footer-links">
                <li>
                  <button onClick={() => handleTabChange('contact')} className="footer-link-btn" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <WhatsAppIcon size={16} /> WhatsApp Chat
                  </button>
                </li>
                <li>
                  <button onClick={() => handleTabChange('contact')} className="footer-link-btn" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Mail size={16} /> Send Email
                  </button>
                </li>
                <li>
                  <a href="mailto:valambyat3ch@gmail.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Globe size={16} /> Tech Partner: valambyaT3ch
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} Jeffrey Kay. All rights reserved. Website Template by <strong>valambyaT3ch</strong>.
            </div>
            <div>
              Contact Developer: <a href="mailto:valambyat3ch@gmail.com" style={{ color: 'var(--dusty-blue-light)', textDecoration: 'none' }}>valambyat3ch@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
