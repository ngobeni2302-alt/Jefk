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
  AlertCircle,
  Camera,
  Maximize2,
  Film
} from 'lucide-react'
import './App.css'

// Vector Brand Icons

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}

function FacebookIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M15.8 12.05h-2.5v9.55h-3.95v-9.55H7.5V8.8h1.85V6.44c0-2.43 1.48-3.76 3.65-3.76 1.04 0 2.14.19 2.14.19v2.35h-1.21c-1.2 0-1.58.75-1.58 1.51V8.8h2.65l-.42 3.25z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

function YoutubeIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        fill="#FF0000"
      />
      <polygon points="9.6,15.5 15.8,12 9.6,8.5" fill="#FFFFFF" />
    </svg>
  )
}

function SpotifyIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#1DB954" />
      <path
        d="M17.5 17.1c-.2.3-.6.4-1 .2-2.7-1.6-6.1-2-10.1-1.1-.4.1-.7-.2-.8-.5-.1-.4.2-.7.5-.8 4.4-1 8.1-.6 11.2 1.3.4.1.5.6.2.9zm1.4-3.1c-.3.4-.8.5-1.2.3-3.1-1.9-7.8-2.5-11.5-1.3-.4.1-1-.1-1.1-.6-.1-.5.1-1 .6-1.1 4.2-1.3 9.4-.6 13 1.6.4.1.5.7.2 1.1zm.1-3.3c-3.7-2.2-9.8-2.4-13.4-1.3-.6.2-1.2-.2-1.4-.7-.2-.6.2-1.2.7-1.4 4.1-1.2 10.9-1 15.2 1.6.5.3.7 1 .4 1.5-.3.4-1 .6-1.5.3z"
        fill="#000000"
      />
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#000000" />
      <g transform="translate(2, 2) scale(0.833)">
        <path
          d="M17.84 6.13a4.7 4.7 0 0 1-3.66-4.13V2h-3.35v13.27a2.8 2.8 0 0 1-5.05 1.69 2.8 2.8 0 0 1 2.24-4.5c.28 0 .54.04.8.12V9.15a6.15 6.15 0 0 0-.97-.08A6.16 6.16 0 0 0 1.7 15.23a6.16 6.16 0 0 0 10.43 4.37 6.12 6.12 0 0 0 1.99-4.44V8.04a8.03 8.03 0 0 0 4.66 1.48V6.24c-.31 0-.62-.04-.94-.11z"
          fill="#00F2FE"
          transform="translate(-0.8, -0.6)"
        />
        <path
          d="M17.84 6.13a4.7 4.7 0 0 1-3.66-4.13V2h-3.35v13.27a2.8 2.8 0 0 1-5.05 1.69 2.8 2.8 0 0 1 2.24-4.5c.28 0 .54.04.8.12V9.15a6.15 6.15 0 0 0-.97-.08A6.16 6.16 0 0 0 1.7 15.23a6.16 6.16 0 0 0 10.43 4.37 6.12 6.12 0 0 0 1.99-4.44V8.04a8.03 8.03 0 0 0 4.66 1.48V6.24c-.31 0-.62-.04-.94-.11z"
          fill="#FE2C55"
          transform="translate(0.8, 0.6)"
        />
        <path
          d="M17.84 6.13a4.7 4.7 0 0 1-3.66-4.13V2h-3.35v13.27a2.8 2.8 0 0 1-5.05 1.69 2.8 2.8 0 0 1 2.24-4.5c.28 0 .54.04.8.12V9.15a6.15 6.15 0 0 0-.97-.08A6.16 6.16 0 0 0 1.7 15.23a6.16 6.16 0 0 0 10.43 4.37 6.12 6.12 0 0 0 1.99-4.44V8.04a8.03 8.03 0 0 0 4.66 1.48V6.24c-.31 0-.62-.04-.94-.11z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  )
}

function AppleMusicIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="appleMusicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FA2D48" />
          <stop offset="50%" stopColor="#FB3C56" />
          <stop offset="100%" stopColor="#D8183B" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5.5" fill="url(#appleMusicGrad)" />
      <path
        d="M17.4 4.9c-.2-.1-.5-.1-.7 0l-7.3 1.9c-.4.1-.7.5-.7.9v8.4c-.5-.3-1.1-.5-1.7-.5-1.7 0-3 1.1-3 2.5s1.3 2.5 3 2.5c1.6 0 2.9-1 3-2.3v-7.5l6-1.6v5.3c-.5-.3-1.1-.5-1.7-.5-1.7 0-3 1.1-3 2.5s1.3 2.5 3 2.5c1.6 0 2.9-1 3-2.3V5.6c0-.4-.3-.7-.6-.7z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('about')
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Ensure clean default light theme
    document.documentElement.removeAttribute('data-theme')
    localStorage.removeItem('theme')
  }, [])

  const tabsListRef = useRef(null)

  const tabs = [
    { id: 'about', label: '1. About Jeffery Kay', icon: User },
    { id: 'works', label: '2. Gospel Music & Snippets', icon: Disc },
    { id: 'contact', label: '3. Email Contact', icon: Mail }
  ]

  const handleTabChange = (newTabId) => {
    if (newTabId === activeTab) return
    setIsFading(true)

    setTimeout(() => {
      setActiveTab(newTabId)
      setTimeout(() => {
        setIsFading(false)
      }, 80)
    }, 80)
  }

  // Lightbox & Streaming Modal States
  const [photoModalOpen, setPhotoModalOpen] = useState(null)
  const [platformModalTrack, setPlatformModalTrack] = useState(null)

  // Pause other videos when one starts playing
  const handleVideoPlay = (e) => {
    const allVideos = document.querySelectorAll('.snippet-video-player')
    allVideos.forEach((vid) => {
      if (vid !== e.target) {
        vid.pause()
      }
    })
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
    subject: '',
    message: ''
  })
  const [formError, setFormError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFormError('Please fill in all required spaces marked with * before sending.')
      return
    }
    setFormError('')
    // Open user's mail client prefilled to the artist email
    const to = 'jeffreykhumalo@gmail.com'
    const subject = encodeURIComponent(`${formData.subject} - ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`)
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`
    window.location.href = mailto
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 5000)
  }

  const socials = [
    {
      platform: 'Spotify',
      handle: 'Jeffery Kay',
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
      handle: 'Jeffery Kay Gospel',
      url: 'https://music.youtube.com/watch?v=Ufq9mRs5pmw&si=9Hjf8dZpbU1v9krn',
      icon: YoutubeIcon,
      desc: 'Official gospel music videos & live ministry'
    },    {
      platform: 'X (Twitter)',
      handle: '@jeffreykay_sa',
      url: 'https://x.com',
      icon: XIcon,
      desc: 'Daily scripture inspiration & music news'
    },
    {
      platform: 'Apple Music',
      handle: 'Jeffery Kay',
      url: 'https://music.apple.com/us/artist/jeffrey-kay/1843324363',
      icon: AppleMusicIcon,
      desc: 'Listen to gospel albums in high fidelity'
    },
    {
      platform: 'SoundCloud',
      handle: 'Jeffery Kay Gospel',
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

  const mediaItems = [
    {
      id: 'media-video-1',
      type: 'video',
      title: 'Jeffrey Kay - Isikhali',
      category: '30-Sec Gospel Snippet',
      duration: '0:30',
      src: '/media/InShot_20260923_072509435.mp4',
      desc: '30-second official gospel snippet showcasing vocal worship and spiritual devotion.'
    },
    {
      id: 'media-video-2',
      type: 'video',
      title: 'Jeffrey Kay - Ngiphamandla',
      category: '30-Sec Gospel Snippet',
      duration: '0:30',
      src: '/media/InShot_20260923_073418783.mp4',
      desc: 'Uplifting gospel ministry snippet highlighting the journey back to God.'
    },
    {
      id: 'media-video-3',
      type: 'video',
      title: 'Jeffrey Kay - Praise And Worship Session',
      category: '35-Sec Gospel Snippet',
      duration: '0:35',
      src: '/media/InShot_20260923_074214149.mp4',
      desc: 'Passionate praise and worship session from Jeffery Kay.'
    },
    {
      id: 'media-video-4',
      type: 'video',
      title: 'Live Ministry Session — Worship Recording',
      category: 'Live Ministry Video',
      duration: '1:25',
      src: '/media/808cb8ed654945c8a81ac237effd3de7.mp4',
      desc: 'Praise and Worship at Oak Of Glory Ministries, come join him every Sunday from 9am to 12pm at Oak Of Glory Ministries'
    },
    {
      id: 'media-video-5',
      type: 'video',
      title: 'Jeffrey Kay - Mzansi Khyalami',
      category: '31-Sec Gospel Snippet',
      duration: '0:31',
      src: '/media/jeffrey_kay_mzansi_khyalami.mp4',
      desc: 'Jeffrey Kay performing live at a theatre part of the Mzansi Khyalami group with the likes of Sipho Mnyakeni in tribute to the Legendary Chris Hani.'
    },
    {
      id: 'media-photo-1',
      type: 'photo',
      title: 'Jeffery Kay — Live Stage Ministry',
      category: 'Live Stage Photography',
      duration: 'High-Res Photo',
      src: '/media/jeffrey_kay_stage_performance.jpg',
      desc: 'Jeffrey Kay live on stage showcasing his talent alongside with his passion.'
    }
  ]

  return (
    <div className="app-container">
      {/* Photo Lightbox Modal */}
      {photoModalOpen && (
        <div className="modal-overlay" onClick={() => setPhotoModalOpen(null)}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="photo-modal-header">
              <div>
                <div className="modal-tag">Live Ministry Photography</div>
                <h3 className="modal-title">Jeffery Kay — Live Stage Ministry</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setPhotoModalOpen(null)} aria-label="Close photo view">
                <X size={20} />
              </button>
            </div>
            <div className="photo-modal-body">
              <img src={photoModalOpen} alt="Jeffery Kay Live on Stage" className="photo-modal-img" />
            </div>
            <div className="photo-modal-footer">
              <p>Jeffery Kay ministering live on stage • Reborn to Worship • Springs, South Africa</p>
            </div>
          </div>
        </div>
      )}

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
              Choose your preferred music streaming service below to open <strong>{platformModalTrack.title}</strong> by Jeffery Kay:
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
                  <AppleMusicIcon size={24} />
                  <div>
                    <div className="platform-name">Apple Music</div>
                    <div className="platform-sub">Stream High Quality Audio</div>
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
          <span className="brand-name">Jeffery Kay</span>
        </div>

        <div className="nav-actions">
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
            </div>

            <button className="chevron-btn chevron-right" onClick={() => scrollTabs('right')} aria-label="Scroll right">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Main Content Container */}
      <main className={`content-transition-area ${isFading ? 'fading' : ''}`}>
        {/* TAB 1: ABOUT JEFFERY KAY */}
        {activeTab === 'about' && (
          <section id="about" className="section">
            <div className="container">
              <div className="home-centered-wrapper">
                {/* 1. First comes the title */}
                <div className="home-title-section">
                  <span className="section-tag">South African Gospel Artist</span>
                  <h1 className="hero-heading">Jeffery Kay</h1>
                </div>

                {/* 2. Then comes the photo */}
                <div className="hero-image-container">
                  <div className="hero-image-card">
                    <img
                      src="/jeffrey_kay.jpg"
                      alt="Jeffery Kay - Ngipha'Mandla Cover"
                      className="hero-artist-img"
                    />
                    <div className="hero-image-caption" style={{ marginTop: '12px' }}>
                      Jeffery Kay — Ngipha&apos;Mandla
                    </div>
                  </div>
                </div>

                {/* 3. Then comes the bio */}
                <div className="hero-bio-section">
                  <p className="hero-bio">
                    Jeffery Sakhile Khumalo, known as <strong>Jeffery Kay</strong>, is a gospel artist from <strong>Kwa-Thema, Springs</strong>. Raised in a church family and shaped by theatre alongside Sipho Mnyakeni, with whom he once performed in a group called Mzansi Khayalami, his journey through trials led him back to God. Choosing gospel as a calling, his music is a testimony of faith and rebirth. <strong>Jeffery Kay – Reborn to Worship.</strong>
                  </p>

                  <div className="hero-stats">
                    <div className="stat-card">
                      <div className="stat-label">Origin</div>
                      <div className="stat-value">Kwa-Thema, Springs</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-label">Genre</div>
                      <div className="stat-value">Gospel Music</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-label">Mission</div>
                      <div className="stat-value">Reborn to Worship</div>
                    </div>
                  </div>

                  <div className="hero-actions">
                    <button onClick={() => handleTabChange('works')} className="btn btn-black">
                      <Music size={16} />
                      Watch Gospel Snippets &amp; Videos
                      <ArrowRight size={16} />
                    </button>
                    <button onClick={() => handleTabChange('contact')} className="btn btn-outline-dusty">
                      <Phone size={16} />
                      Book / Contact Artist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: GOSPEL MUSIC & SNIPPETS */}
        {activeTab === 'works' && (
          <section id="works" className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Official Media &amp; Ministry</span>
                <h2 className="section-title">Gospel Music &amp; Snippets</h2>
                <p className="section-description">
                  Watch official video snippets, live praise sessions, and stage photography from Jeffery Kay.
                </p>
              </div>

              <div className="works-centered-wrapper">
                <div className="media-grid">
                  {mediaItems.map((item) => {
                    if (item.type === 'video') {
                      return (
                        <div key={item.id} className="media-card media-video-card">
                          <div className="media-player-container">
                            <video
                              src={`${item.src}#t=0.001`}
                              controls
                              preload="metadata"
                              playsInline
                              className="snippet-video-player"
                              onPlay={handleVideoPlay}
                            />
                            <div className="media-badge-top-left">
                              <span className="media-pill-tag">
                                <Film size={12} /> {item.category}
                              </span>
                            </div>
                            <div className="media-badge-top-right">
                              <span className="media-duration-tag">{item.duration}</span>
                            </div>
                          </div>

                          <div className="media-card-body">
                            <div className="media-meta-row">
                              <span className="media-type-indicator">Video Snippet</span>
                            </div>
                            <h3 className="media-card-title">{item.title}</h3>
                            <p className="media-card-desc">{item.desc}</p>

                            <div className="media-card-actions">
                              <button
                                onClick={() => setPlatformModalTrack({
                                  title: item.title,
                                  spotifyUrl: 'https://open.spotify.com/artist/7o5XdRDLZALMIFKZxvqDGD?si=Ts6Q6xoZTWqLx_9b-F4PMQ',
                                  appleUrl: 'https://music.apple.com/us/artist/jeffrey-kay/1843324363',
                                  youtubeUrl: 'https://music.youtube.com/channel/UCTg28WaabFV6ai3bLQ6JO5Q?si=7mRSZrz6EnCELdBr'
                                })}
                                className="btn btn-black snippet-action-btn"
                              >
                                <ExternalLink size={14} />
                                <span>Stream on Platforms</span>
                              </button>

                              <button
                                onClick={() => handleTabChange('contact')}
                                className="btn btn-outline-dusty snippet-action-btn"
                              >
                                <Phone size={14} />
                                <span>Book Jeffery Kay</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    }

                    return (
                      <div key={item.id} className="media-card media-photo-card">
                        <div className="media-photo-container" onClick={() => setPhotoModalOpen(item.src)}>
                          <img
                            src={item.src}
                            alt={item.title}
                            className="media-photo-img"
                          />
                          <div className="media-photo-overlay">
                            <div className="photo-zoom-btn">
                              <Maximize2 size={16} />
                              <span>View Full Photo</span>
                            </div>
                          </div>
                          <div className="media-badge-top-left">
                            <span className="media-pill-tag photo-pill">
                              <Camera size={12} /> {item.category}
                            </span>
                          </div>
                        </div>

                        <div className="media-card-body">
                          <div className="media-meta-row">
                            <span className="media-type-indicator">Live Stage Photography</span>
                          </div>
                          <h3 className="media-card-title">{item.title}</h3>
                          <p className="media-card-desc">{item.desc}</p>

                          <div className="media-card-actions">
                            <button
                              onClick={() => setPhotoModalOpen(item.src)}
                              className="btn btn-black snippet-action-btn"
                            >
                              <Maximize2 size={14} />
                              <span>Enlarge Stage Photo</span>
                            </button>

                            <button
                              onClick={() => handleTabChange('contact')}
                              className="btn btn-outline-dusty snippet-action-btn"
                            >
                              <Phone size={14} />
                              <span>Book for Events</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: EMAIL CONTACT */}
        {activeTab === 'contact' && (
          <section id="contact" className="section section-bg-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Get in Touch</span>
                <h2 className="section-title">Contact &amp; Gospel Ministry Bookings</h2>
                <p className="section-description">
                  Connect with Jeffery Kay for church events, gospel concerts, and collaborations.
                </p>
              </div>

              <div className="contact-grid">
                <div id="contact-form-section" className="contact-card">
                  <div className="contact-icon-badge contact-icon-email">
                    <Mail size={28} />
                  </div>
                  <h3 className="contact-card-title">Send an Email</h3>
                  <p className="contact-card-desc">
                    Send an official message to Jeffery Kay&apos;s management team for bookings and media inquiries.
                  </p>

                  <p className="form-required-hint">
                    Fields marked with <span className="required-star">*</span> are mandatory. All spaces must be completed to send.
                  </p>

                  {formError && (
                    <div className="alert-error">
                      <AlertCircle size={18} />
                      <span>{formError}</span>
                    </div>
                  )}

                  {submitted && (
                    <div className="alert-success">
                      <CheckCircle size={18} />
                      <span>Thank you! Your message was sent successfully to Jeffery Kay&apos;s team.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">
                        Your Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Pastor / Event Organizer Name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value })
                          if (formError) setFormError('')
                        }}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Your Email Address <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="e.g. organizer@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value })
                          if (formError) setFormError('')
                        }}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Inquiry Subject <span className="required-star">*</span>
                      </label>
                      <select
                        className="form-select"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value })
                          if (formError) setFormError('')
                        }}
                        required
                      >
                        <option value="">-- Please select an inquiry subject * --</option>
                        <option value="Gospel Booking Inquiry">Gospel Booking Inquiry</option>
                        <option value="Church Worship Invitation">Church Worship Invitation</option>
                        <option value="Music Collaboration">Music Collaboration</option>
                        <option value="Press / Media">Press / Media</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Your Message <span className="required-star">*</span>
                      </label>
                      <textarea
                        className="form-textarea"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value })
                          if (formError) setFormError('')
                        }}
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
                      href="mailto:jeffreykhumalo@gmail.com?subject=Jeffery%20Kay%20Gospel%20Inquiry"
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
          <div className="footer-centered-wrapper">
            <div className="footer-brand-title">Jeffery Kay</div>
            <p className="footer-brand-desc">
              Official website of South African Gospel artist Jeffery Kay. Bringing inspirational praise, worship music, and gospel events to audiences worldwide.
            </p>

            <div className="footer-socials">
              <div className="footer-column-title">Follow Jeffery Kay</div>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61589357584986"
                  className="footer-social-link footer-social-facebook"
                  aria-label="Follow Jeffery Kay on Facebook"
                  title="Follow Jeffery Kay on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon size={28} />
                </a>
                <a
                  href="https://www.tiktok.com/@jeffreykay81"
                  className="footer-social-link footer-social-tiktok"
                  aria-label="Follow Jeffery Kay on TikTok"
                  title="Follow Jeffery Kay on TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokIcon size={28} />
                </a>
                <a
                  href="https://open.spotify.com/artist/7o5XdRDLZALMIFKZxvqDGD?si=Ts6Q6xoZTWqLx_9b-F4PMQ"
                  className="footer-social-link footer-social-spotify"
                  aria-label="Stream Jeffery Kay on Spotify"
                  title="Stream Jeffery Kay on Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SpotifyIcon size={28} />
                </a>
                <a
                  href="https://music.youtube.com/channel/UCTg28WaabFV6ai3bLQ6JO5Q?si=7mRSZrz6EnCELdBr"
                  className="footer-social-link footer-social-youtube"
                  aria-label="Listen to Jeffery Kay on YouTube Music"
                  title="Listen to Jeffery Kay on YouTube Music"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon size={28} />
                </a>
                <a
                  href="https://music.apple.com/us/artist/jeffrey-kay/1843324363"
                  className="footer-social-link footer-social-applemusic"
                  aria-label="Stream Jeffery Kay on Apple Music"
                  title="Stream Jeffery Kay on Apple Music"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppleMusicIcon size={28} />
                </a>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copy">
                &copy; {new Date().getFullYear()} Jeffery Kay. All rights reserved.
              </div>
              <div className="footer-developer-credit">
                <div>Developed &amp; Maintained by: <strong>ValambyaT3ch</strong></div>
                <div>
                  Email:{' '}
                  <a
                    href="mailto:valambyat3ch@gmail.com?subject=Inquiry%20regarding%20Jeffery%20Kay%20Website"
                    onClick={(e) => {
                      try {
                        window.open(
                          'https://mail.google.com/mail/?view=cm&fs=1&to=valambyat3ch@gmail.com&su=Inquiry%20regarding%20Jeffery%20Kay%20Website',
                          '_blank',
                          'noopener,noreferrer'
                        )
                      } catch (err) {
                        // fallback to default mailto
                      }
                    }}
                    className="footer-dev-link"
                    title="Click to compose an email to ValambyaT3ch"
                  >
                    valambyat3ch@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
