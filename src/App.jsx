import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  X,
} from 'lucide-react'

const email = 'lynnnnnnnn951@gmail.com'

const copy = {
  zh: {
    nav: ['首页', '经历', '作品', '能力', '联系'],
    role: 'UI 视觉设计师 · Web3 / 交易所 / 数字产品',
    heroLead: '把复杂的交易、资产与 Web3 信息，转化为清晰、稳定、有识别度的数字产品体验。',
    viewWork: '查看作品',
    aboutKicker: '// 关于我',
    aboutTitle: '视觉、系统与产品体验。',
    aboutText: '本科毕业于湖南城市学院，具备 UI 视觉、交互原型、品牌视觉与运营设计经验。擅长在交易、资产、KYC、DAPP 与数字藏品等复杂业务中梳理信息层级。',
    experience: '// 工作经历',
    workKicker: '// 精选作品',
    workTitle: 'Selected Work',
    workHint: '横向浏览项目',
    capabilities: '// 能力沉淀',
    capabilitiesTitle: '从产品理解到视觉落地。',
    contact: '// 联系',
    contactTitle: '一起打造更好的产品。',
    contactText: '期待参与 Web3、金融科技与复杂数字产品的设计工作。',
    copyEmail: '复制邮箱',
    copied: '已复制',
    close: '关闭案例',
    projectOverview: '项目概览',
  },
  en: {
    nav: ['Home', 'Experience', 'Work', 'Capabilities', 'Contact'],
    role: 'UI Visual Designer · Web3 / Exchange / Digital Product',
    heroLead: 'Turning complex trading, asset and Web3 information into clear, stable and distinctive digital experiences.',
    viewWork: 'View work',
    aboutKicker: '// About me',
    aboutTitle: 'Visuals, systems and product experience.',
    aboutText: 'A UI visual designer experienced in interaction prototypes, brand systems and campaign design. I bring clarity and consistency to complex trading, asset, KYC, DAPP and digital collectible products.',
    experience: '// Experience',
    workKicker: '// Selected work',
    workTitle: 'Selected Work',
    workHint: 'Browse horizontally',
    capabilities: '// Capabilities',
    capabilitiesTitle: 'From product thinking to visual delivery.',
    contact: '// Contact',
    contactTitle: 'Let’s build better products.',
    contactText: 'Open to Web3, fintech and complex digital product design opportunities.',
    copyEmail: 'Copy email',
    copied: 'Copied',
    close: 'Close case',
    projectOverview: 'Project overview',
  },
}

const experiences = [
  {
    time: '2025.08 - 2026.07',
    company: '利安達数字經濟有限公司',
    role: { zh: 'UI 设计师 · 交易所', en: 'UI Designer · Exchange' },
    text: {
      zh: '负责 Web3 数字资产、社区生态及相关产品的 UI 视觉设计，参与 0 到 1 的视觉体系搭建，并推动 Web、H5 与移动端落地。',
      en: 'Designed Web3 digital asset and community products, helped establish the visual system from zero to one, and delivered responsive Web, H5 and mobile experiences.',
    },
  },
  {
    time: '2023.04 - 2025.07',
    company: '北京柏链基石科技有限公司',
    role: { zh: 'UI / 运营设计师 · 交易所', en: 'UI / Campaign Designer · Exchange' },
    text: {
      zh: '负责交易所双端核心页面，包括个人中心、KYC、资产、充提、划转与订单，并完成 PC、移动端和 H5 多端适配。',
      en: 'Designed core exchange experiences across account, KYC, assets, deposits, withdrawals, transfers and orders for desktop, mobile and H5.',
    },
  },
  {
    time: '2022.07 - 2023.01',
    company: '武汉羽融科技有限公司',
    role: { zh: 'UI 设计师 · 数字藏品', en: 'UI Designer · Digital Collectibles' },
    text: {
      zh: '负责阿拉丁数字藏品 UI 设计，并支持专题页、H5、Banner 与社交媒体传播内容。',
      en: 'Designed the Aladdin digital collectible product and supported campaign pages, H5, banners and social content.',
    },
  },
]

const projects = [
  {
    id: 'goldbit',
    name: 'Goldbit',
    category: { zh: '双端交易体验', en: 'Web / App Trading' },
    description: {
      zh: '面向 Web3 用户的数字资产交易平台，覆盖网页端与移动端交易、行情和资产管理场景。',
      en: 'A digital asset exchange spanning Web and mobile trading, markets and asset management.',
    },
    tags: ['Product', 'Web / App', 'Exchange'],
    image: '/assets/projects/goldbit-main.png',
    phone: '/assets/projects/goldbit-phone.png',
    accent: '#f9a526',
    gallery: Array.from({ length: 14 }, (_, i) => `/assets/goldbit-case/goldbit-case-${String(i + 1).padStart(2, '0')}.jpg`),
  },
  {
    id: 'ucbitex',
    name: 'UcbitEX',
    category: { zh: '加密交易平台', en: 'Crypto Exchange' },
    description: {
      zh: '围绕品牌视觉规范、核心功能页面与响应式界面建立一致的交易产品体验。',
      en: 'A consistent trading experience built through brand rules, core product screens and responsive interfaces.',
    },
    tags: ['System', 'Trading', 'Responsive'],
    image: '/assets/projects/ucbitex-main.png',
    phone: '/assets/projects/ucbitex-phone.png',
    accent: '#50e878',
  },
  {
    id: 'bitview',
    name: 'Bitview',
    category: { zh: 'Web3 信息服务', en: 'Web3 Intelligence' },
    description: {
      zh: '通过铭文动态、热度趋势和数据可视化，帮助用户获取决策所需的关键信息。',
      en: 'Inscription trends and data visualization designed to support faster, clearer decisions.',
    },
    tags: ['Ordinals', 'Data', 'Web / H5'],
    image: '/assets/projects/bitview-main.png',
    phone: '/assets/projects/bitview-phone.png',
    accent: '#7ca8ff',
  },
  {
    id: 'socoin',
    name: 'Socoin',
    category: { zh: '区块链生态工具', en: 'Blockchain Toolkit' },
    description: {
      zh: '面向 Solana 生态的一站式区块链工具平台，整合多类功能与便捷操作路径。',
      en: 'An all-in-one Solana ecosystem toolkit combining practical features with efficient workflows.',
    },
    tags: ['Solana', 'Toolkit', 'Web / H5'],
    image: '/assets/projects/socoin-main.png',
    phone: '/assets/projects/socoin-phone.png',
    accent: '#e986ff',
  },
]

const capabilities = [
  ['01', '视觉系统', 'Visual systems', '色彩、版式、图形与品牌语言'],
  ['02', '产品 UI', 'Product UI', '交互原型、界面与组件规范'],
  ['03', '交易体验', 'Trading UX', '高密度信息与操作路径优化'],
  ['04', '多端适配', 'Multi-platform', 'PC、移动端与 H5 落地'],
  ['05', '运营视觉', 'Campaign design', '官网、活动与社区传播内容'],
  ['06', '设计协作', 'Design delivery', '产品、设计与开发协同推进'],
]

function App() {
  const [locale, setLocale] = useState('zh')
  const [activeProject, setActiveProject] = useState(null)
  const [copied, setCopied] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const carouselRef = useRef(null)
  const lastScroll = useRef(0)
  const t = copy[locale]

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setHeaderHidden(current > lastScroll.current && current > 120)
      lastScroll.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  const moveCarousel = (direction) => {
    carouselRef.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.72, 720), behavior: 'smooth' })
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main>
      <header className={`site-header ${headerHidden ? 'is-hidden' : ''}`}>
        <a className="brand-mark glass" href="#top" aria-label="Lynn portfolio home"><span>L</span></a>
        <nav className="main-nav glass" aria-label="Primary navigation">
          {['top', 'experience', 'work', 'capabilities', 'contact'].map((id, index) => (
            <a href={`#${id}`} key={id}>{t.nav[index]}</a>
          ))}
        </nav>
        <div className="locale-switch glass" aria-label="Language switcher">
          <button className={locale === 'zh' ? 'active' : ''} onClick={() => setLocale('zh')} type="button">中</button>
          <button className={locale === 'en' ? 'active' : ''} onClick={() => setLocale('en')} type="button">EN</button>
        </div>
      </header>

      <section className="hero" id="top">
        <video autoPlay muted loop playsInline aria-hidden="true"><source src="/assets/video/hero-bg.mp4" /></video>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p>{t.role}</p>
          <h1><span>Hi, I am</span>Lynn</h1>
          <div className="hero-bottom">
            <p>{t.heroLead}</p>
            <a className="hero-action" href="#work">{t.viewWork}<ArrowDown size={20} /></a>
          </div>
        </div>
        <div className="hero-index"><span>Portfolio</span><strong>2026</strong></div>
      </section>

      <section className="about-band" id="experience">
        <div className="about-layout">
          <div className="about-intro">
            <p className="eyebrow">{t.aboutKicker}</p>
            <h2>{t.aboutTitle}</h2>
            <p className="about-lead">{t.aboutText}</p>
            <div className="focus-tags"><span>UIUX</span><span>Web3</span><span>Visual Design</span><span>Design System</span></div>
          </div>
          <figure className="portrait-wrap"><img src="/assets/profile/lynn-portrait.png" alt="Lynn UI visual designer" /></figure>
        </div>
        <div className="experience-block">
          <p className="eyebrow">{t.experience}</p>
          <div className="timeline">
            {experiences.map((item) => (
              <article key={item.company}>
                <div className="timeline-meta"><span>{item.time}</span><h3>{item.company}</h3><em>{item.role[locale]}</em></div>
                <p>{item.text[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-head">
          <div><p className="eyebrow">{t.workKicker}</p><h2>{t.workTitle}</h2></div>
          <div className="carousel-tools"><span>{t.workHint}</span><button onClick={() => moveCarousel(-1)} aria-label="Previous projects" type="button"><ArrowLeft /></button><button onClick={() => moveCarousel(1)} aria-label="Next projects" type="button"><ArrowRight /></button></div>
        </div>
        <div className="project-carousel" ref={carouselRef}>
          {projects.map((project, index) => (
            <button className="project-card" style={{ '--accent': project.accent }} onClick={() => setActiveProject(project)} key={project.id} type="button">
              <div className="project-topline"><span>{String(index + 1).padStart(2, '0')}</span><div>{project.tags.map(tag => <i key={tag}>{tag}</i>)}</div></div>
              <div className="project-preview"><img src={project.image} alt={`${project.name} project preview`} /><img className="project-phone" src={project.phone} alt="" /></div>
              <div className="project-copy"><p>{project.category[locale]}</p><h3>{project.name}</h3><span>{project.description[locale]}</span></div>
              <ArrowUpRight className="project-arrow" />
            </button>
          ))}
        </div>
        <div className="carousel-line"><span /></div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="capabilities-head"><p className="eyebrow">{t.capabilities}</p><h2>{t.capabilitiesTitle}</h2></div>
        <div className="capability-list">
          {capabilities.map(([number, zh, en, desc]) => (
            <article key={number}><span>{number}</span><h3>{locale === 'zh' ? zh : en}</h3><p>{locale === 'zh' ? desc : en}</p><ArrowUpRight /></article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-top"><p className="eyebrow">{t.contact}</p><span>Lynn / Portfolio 2026</span></div>
        <div className="contact-layout">
          <div><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
          <div className="contact-actions">
            <a href={`mailto:${email}`}><Mail size={22} />{email}</a>
            <button onClick={copyEmail} type="button">{copied ? <Check size={22} /> : <Copy size={22} />}{copied ? t.copied : t.copyEmail}</button>
          </div>
        </div>
      </section>

      {activeProject && (
        <div className="project-dialog" role="dialog" aria-modal="true" aria-label={`${activeProject.name} ${t.projectOverview}`}>
          <div className="dialog-bar glass"><div><span>{activeProject.category[locale]}</span><strong>{activeProject.name}</strong></div><button onClick={() => setActiveProject(null)} aria-label={t.close} type="button"><X /></button></div>
          <div className="dialog-content">
            {activeProject.gallery ? activeProject.gallery.map((image, index) => <img src={image} alt={`${activeProject.name} case page ${index + 1}`} key={image} />) : <img src={activeProject.image} alt={`${activeProject.name} project overview`} />}
          </div>
        </div>
      )}
    </main>
  )
}

export default App
