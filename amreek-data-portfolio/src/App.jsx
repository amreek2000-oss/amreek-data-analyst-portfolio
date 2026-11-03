import React, { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness,
  Check, ChevronRight, Database, Download, Github, GraduationCap, Mail,
  MapPin, Menu, PieChart, Send, Sparkles, X, ChartNoAxesCombined,
  FileSpreadsheet, Code2, Layers3, Linkedin, ExternalLink
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, BarChart, Bar,
  PieChart as RePieChart, Pie, Cell
} from "recharts";

const profile = {
  name: "Amreek Singh",
  role: "Aspiring Data Analyst",
  location: "India",
  email: "samreek2000@gmail.com",
  github: "https://github.com/amreek2000-oss",
  linkedin: "https://linkedin.com/in/amreek-singh-767394272",
  // Add your hosted resume PDF path in public/ and update this value.
  resume: "/Amreek-Singh-Resume.pdf"
};

const salesData = [
  { month: "Jan", revenue: 38 }, { month: "Feb", revenue: 48 },
  { month: "Mar", revenue: 42 }, { month: "Apr", revenue: 62 },
  { month: "May", revenue: 55 }, { month: "Jun", revenue: 76 },
  { month: "Jul", revenue: 68 }, { month: "Aug", revenue: 88 }
];

const projectData = [
  {
    number: "01",
    title: "Customer Churn & Retention Analysis",
    category: "CUSTOMER ANALYTICS",
    description: "Explore customer churn patterns, compare customer segments, and turn retention metrics into clear business insights.",
    tools: ["Power BI", "Data Analysis", "Dashboard"],
    accent: "violet",
    visual: "churn",
    metric: "Retention insights",
    githubUrl: "",
    demoUrl: ""
  },
  {
    number: "02",
    title: "Retail & Sales Inventory Optimization",
    category: "RETAIL ANALYTICS",
    description: "Analyze sales and inventory trends to spot fast-moving products, slow-moving stock, and opportunities for better decisions.",
    tools: ["Excel", "Power BI", "Python"],
    accent: "cyan",
    visual: "retail",
    metric: "Sales & stock trends",
    githubUrl: "https://github.com/amreek2000-oss/Retail-Sales-Inventory-Optimization",
    demoUrl: ""
  },
  {
    number: "03",
    title: "Student Performance Analysis",
    category: "EDUCATION ANALYTICS",
    description: "Summarize academic performance and explore how study habits and student factors relate to subject-level outcomes.",
    tools: ["Excel", "Power BI", "Data Visualization"],
    accent: "orange",
    visual: "student",
    metric: "Performance patterns",
    githubUrl: "",
    demoUrl: ""
  }
];

const skills = [
  { name: "Power BI", level: "Dashboard design & reporting", icon: BarChart3 },
  { name: "Microsoft Excel", level: "PivotTables, lookups & analysis", icon: FileSpreadsheet },
  { name: "SQL / MySQL", level: "Querying and data retrieval", icon: Database },
  { name: "Python", level: "Pandas, NumPy & analysis basics", icon: Code2 },
  { name: "Power Query", level: "Data preparation & transformation", icon: Layers3 },
  { name: "Data Storytelling", level: "Insights, trends & communication", icon: ChartNoAxesCombined }
];

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return <div className={`section-heading ${dark ? "heading-dark" : ""}`}>
    <span className="eyebrow"><span />{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function DashboardVisual({ type }) {
  if (type === "churn") return <div className="mini-dashboard">
    <div className="mini-top"><span className="mini-dot purple" /><span>Customer overview</span><span className="mini-period">Last 12 months</span></div>
    <div className="mini-kpis">
      <div><small>Total customers</small><b>64.3K</b><em>Customer base</em></div>
      <div><small>Churn rate</small><b>12.8%</b><em className="negative">Needs attention</em></div>
    </div>
    <div className="mini-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={salesData}><defs><linearGradient id="churnFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a78bfa" stopOpacity={0.38}/><stop offset="100%" stopColor="#a78bfa" stopOpacity={0}/></linearGradient></defs><XAxis dataKey="month" hide/><Tooltip contentStyle={{background:"#151a2c",border:"1px solid #313850",borderRadius:8,color:"#fff"}}/><Area type="monotone" dataKey="revenue" stroke="#a78bfa" strokeWidth={2.5} fill="url(#churnFill)"/></AreaChart></ResponsiveContainer></div>
  </div>;
  if (type === "retail") return <div className="mini-dashboard">
    <div className="mini-top"><span className="mini-dot cyan" /><span>Retail performance</span><span className="mini-period">Monthly</span></div>
    <div className="retail-stats"><div><small>Sales trend</small><b>↗ Improving</b></div><div><small>Stock watch</small><b>12 items</b></div></div>
    <div className="mini-chart bars"><ResponsiveContainer width="100%" height="100%"><BarChart data={salesData}><XAxis dataKey="month" hide/><Tooltip contentStyle={{background:"#151a2c",border:"1px solid #313850",borderRadius:8,color:"#fff"}}/><Bar dataKey="revenue" fill="#4dd6d0" radius={[4,4,0,0]} /></BarChart></ResponsiveContainer></div>
    <div className="chart-legend"><span><i className="legend-cyan" />Monthly sales index</span><span>Illustrative preview</span></div>
  </div>;
  return <div className="mini-dashboard">
    <div className="mini-top"><span className="mini-dot orange" /><span>Student insights</span><span className="mini-period">By subject</span></div>
    <div className="student-visual">
      <div className="donut-wrap"><ResponsiveContainer width="100%" height="100%"><RePieChart><Pie data={[{name:"Strong",value:62},{name:"Support",value:38}]} dataKey="value" innerRadius={36} outerRadius={52} paddingAngle={4} stroke="none"><Cell fill="#ffb86b"/><Cell fill="#34394c"/></Pie></RePieChart></ResponsiveContainer><div className="donut-label"><b>62%</b><small>sample</small></div></div>
      <div className="subject-bars">{[["Math",72],["Reading",84],["Writing",66]].map(([n,v])=><div className="subject-row" key={n}><span>{n}</span><div><i style={{width:`${v}%`}} /></div><b>{v}</b></div>)}</div>
    </div>
    <div className="chart-legend"><span><i className="legend-orange" />Subject comparison</span><span>Illustrative preview</span></div>
  </div>;
}

function ProjectCard({ project }) {
  return <article className={`project-card ${project.accent}`}>
    <div className="project-visual"><DashboardVisual type={project.visual}/><span className="visual-badge"><Sparkles size={13}/> Dashboard concept</span></div>
    <div className="project-content">
      <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tool-tags">{project.tools.map(tool=><span key={tool}>{tool}</span>)}</div>
      <div className="project-actions">
        {project.githubUrl ? (
          <a className="project-action project-action-primary" href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github size={15}/> GitHub <ArrowUpRight size={14}/>
          </a>
        ) : (
          <span className="project-action project-action-disabled" aria-disabled="true">
            <Github size={15}/> GitHub coming soon
          </span>
        )}
        {project.demoUrl ? (
          <a className="project-action project-action-secondary" href={project.demoUrl} target="_blank" rel="noreferrer">
            View Demo <ExternalLink size={14}/>
          </a>
        ) : (
          <span className="project-action project-action-disabled" aria-disabled="true">
            View Demo coming soon
          </span>
        )}
      </div>
    </div>
  </article>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".section-heading, .about-copy, .about-note, .project-card, .skill-item, .timeline-item, .cert-list > div, .contact-form");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    elements.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 75}ms`);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="navbar">
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark brand-mark-animated">AS<span>.</span></span><span className="brand-caption">DATA ANALYST</span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {[["About","#about"],["Projects","#projects"],["Skills","#skills"],["Experience","#experience"]].map(([label,href])=><a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> OPEN TO DATA ANALYST OPPORTUNITIES</div>
          <h1>Turning raw data<br/>into <span>clear decisions.</span></h1>
          <p className="hero-intro">Hi, I'm <strong>Amreek Singh</strong> — an aspiring Data Analyst who enjoys transforming messy data into useful insights, clear dashboards, and better business decisions.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
            <a className="button button-secondary" href={profile.resume} download>Download resume <Download size={16}/></a>
          </div>
          <div className="hero-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a>
            <span><MapPin size={15}/> Based in India</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/>
          <div className="floating-label label-top"><span className="label-icon purple-bg"><BarChart3 size={17}/></span><div><b>Visual analytics</b><small>Find the signal in the noise</small></div></div>
          <div className="hero-dashboard">
            <div className="dashboard-head"><div><span className="window-dots"><i/><i/><i/></span><b>INSIGHT STUDIO</b></div><span className="live-indicator">● LIVE PREVIEW</span></div>
            <div className="dashboard-title"><div><small>PERFORMANCE SNAPSHOT</small><h3>Data at a glance</h3></div><span className="date-chip">Jan — Aug</span></div>
            <div className="dashboard-metrics"><div className="metric-card"><span>Revenue trend</span><b>↗ Growing</b><small>Illustrative data</small></div><div className="metric-card"><span>Data quality</span><b>✓ Validated</b><small>Clean → Analyze</small></div></div>
            <div className="hero-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={salesData}><defs><linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#66e3d8" stopOpacity={0.3}/><stop offset="100%" stopColor="#66e3d8" stopOpacity={0}/></linearGradient></defs><XAxis dataKey="month" stroke="#596078" tickLine={false} axisLine={false} tick={{fontSize:10}}/><Tooltip contentStyle={{background:"#151a2c",border:"1px solid #313850",borderRadius:8,color:"#fff"}}/><Area type="monotone" dataKey="revenue" stroke="#66e3d8" strokeWidth={2.5} fill="url(#heroFill)"/></AreaChart></ResponsiveContainer></div>
            <div className="dashboard-foot"><span><i className="legend-cyan"/> Trend visualization</span><span>Illustrative chart · sample values</span></div>
          </div>
          <div className="floating-label label-bottom"><span className="label-icon cyan-bg"><Database size={17}/></span><div><b>From data to insight</b><small>Clean · Explore · Communicate</small></div><Check size={17} className="check-icon"/></div>
          <div className="sparkle sparkle-one">✳</div><div className="sparkle sparkle-two">✦</div>
        </div>
        <a className="scroll-cue" href="#about"><span><ArrowDownRight size={15}/></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="trust-strip"><div><span className="strip-icon"><BriefcaseBusiness size={18}/></span><span><b>Hands-on experience</b><small>Analytics & GIS data work</small></span></div><div><span className="strip-icon"><PieChart size={18}/></span><span><b>Dashboard focused</b><small>Power BI & reporting</small></span></div><div><span className="strip-icon"><GraduationCap size={19}/></span><span><b>B.Tech CSE</b><small>Final year · pursuing</small></span></div><div><span className="strip-icon"><Sparkles size={18}/></span><span><b>Always learning</b><small>Practical, data-led thinking</small></span></div></section>

      <section className="section-wrap about-section" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious about data.<br/><span>Focused on what it means.</span></>} description="I bring an analytical mindset, attention to detail, and a practical approach to solving data problems."/>
        <div className="about-grid"><div className="about-copy"><p>I enjoy the process of taking information that feels scattered or difficult to understand and making it clear. My interests include data cleaning, exploratory analysis, dashboard building, and reporting that helps people make informed decisions.</p><p>My experience spans GIS data annotation and data analytics internships. I'm continuing to strengthen my toolkit across Excel, Power BI, SQL, and Python while building projects around real-world business questions.</p><a className="text-link" href="#experience">Explore my experience <ArrowRight size={16}/></a></div>
          <div className="about-note"><div className="note-symbol">“</div><p>Good analysis isn't just about showing numbers. It's about helping someone understand what to do next.</p><div className="note-line"><span/> MY APPROACH</div><div className="note-decoration"><span/><span/><span/><span/><span/><span/><span/></div></div>
        </div>
      </section>

      <section className="projects-section" id="projects"><div className="section-wrap">
        <SectionHeading eyebrow="SELECTED WORK" title={<>Projects built around<br/><span>real questions.</span></>} description="A selection of analytics projects exploring trends, performance, and customer behavior."/>
        <div className="project-grid">{projectData.map(p=><ProjectCard key={p.number} project={p}/>)}</div>
        <div className="projects-note"><Sparkles size={16}/><p>Dashboard previews on this page are illustrative UI concepts. Replace them with screenshots of your actual Power BI reports before sharing your portfolio with recruiters.</p></div>
      </div></section>

      <section className="section-wrap skills-section" id="skills">
        <SectionHeading eyebrow="MY TOOLKIT" title={<>Tools I use to make<br/><span>data more useful.</span></>} description="A practical toolkit for preparing data, analyzing patterns, and communicating findings."/>
        <div className="skills-layout"><div className="skills-intro"><div className="skills-big-icon"><ChartNoAxesCombined size={36}/></div><h3>Analytics, with clarity.</h3><p>My focus is on choosing the right tool for the question — and presenting the answer in a way that people can act on.</p><div className="skill-progress-label"><span>Learning mindset</span><span>Always improving ↗</span></div><div className="progress-track"><i/></div></div>
          <div className="skill-grid">{skills.map(({name,level,icon:Icon})=><div className="skill-item" key={name}><span className="skill-icon"><Icon size={20}/></span><div><h4>{name}</h4><p>{level}</p></div><ChevronRight size={16} className="skill-arrow"/></div>)}</div></div>
      </section>

      <section className="experience-section" id="experience"><div className="section-wrap">
        <SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Experience &amp; <span>learning.</span></>} description="A growing foundation in data, detail-oriented work, and analytical problem-solving."/>
        <div className="timeline">
          <div className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={17}/></div><div className="timeline-main"><div className="timeline-top"><div><h3>Data Analyst</h3><h4>Thiranex EduTech LLP · Remote</h4></div><span className="timeline-date">1 month</span></div><p>Worked in a remote data analytics internship environment and developed practical familiarity with analytical tasks and reporting workflows.</p><div className="timeline-tags"><span>Data Analysis</span><span>Remote Internship</span></div></div></div>
          <div className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={17}/></div><div className="timeline-main"><div className="timeline-top"><div><h3>Data Analytics Intern</h3><h4>Cognevance Technologies</h4></div><span className="timeline-date">6 months</span></div><p>Built practical experience through data analytics work, project tasks, and developing a stronger foundation in analysis and visualization.</p><div className="timeline-tags"><span>Analytics</span><span>Visualization</span></div></div></div>
          <div className="timeline-item"><div className="timeline-marker"><Layers3 size={17}/></div><div className="timeline-main"><div className="timeline-top"><div><h3>GIS Data Annotator</h3><h4>RMSI Pvt. Ltd.</h4></div><span className="timeline-date">6 months</span></div><p>Built experience in detail-focused GIS data annotation, following structured guidelines and maintaining attention to data quality.</p><div className="timeline-tags"><span>GIS Data</span><span>Quality & Accuracy</span></div></div></div>
          <div className="timeline-item"><div className="timeline-marker education"><GraduationCap size={17}/></div><div className="timeline-main"><div className="timeline-top"><div><h3>B.Tech — Computer Science Engineering</h3><h4>GRD IMT</h4></div><span className="timeline-date">In progress</span></div><p>Final-year undergraduate student building skills in analytics, reporting, and practical problem-solving.</p><div className="timeline-tags"><span>Education</span><span>Computer Science</span></div></div></div>
        </div>
      </div></section>

      <section className="cert-section"><div className="section-wrap cert-inner"><div><SectionHeading eyebrow="CONTINUOUS LEARNING" title={<>Learning by doing.</>} description="Job simulations and courses that support my ongoing development in analytics."/><div className="cert-list"><div><span className="cert-check"><Check size={15}/></span><p><b>Data Analytics Job Simulation</b><small>Deloitte · Forage</small></p></div><div><span className="cert-check"><Check size={15}/></span><p><b>GenAI Powered Data Analytics Job Simulation</b><small>Tata · Forage</small></p></div><div><span className="cert-check"><Check size={15}/></span><p><b>Data Analytics Job Simulation</b><small>Quantium · Forage</small></p></div><div><span className="cert-check"><Check size={15}/></span><p><b>Data Visualization Job Simulation</b><small>Tata · Forage</small></p></div></div></div><div className="cert-graphic"><div className="cert-ring ring-one"/><div className="cert-ring ring-two"/><div className="cert-center"><GraduationCap size={38}/><span>LEARN</span><b>BUILD</b><span>IMPROVE</span></div><div className="cert-chip chip-a">Power BI</div><div className="cert-chip chip-b">Data Analysis</div><div className="cert-chip chip-c">Forage</div></div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div className="contact-copy"><SectionHeading eyebrow="LET'S CONNECT" title={<>Have a role or project<br/><span>in mind?</span></>} description="I'm open to entry-level Data Analyst, Power BI, MIS, and Reporting opportunities. Let's connect."/><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18}/>{profile.email}<ArrowUpRight size={16}/></a><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div></div>
        <form className="contact-form" onSubmit={onSubmit}><div className="form-heading"><span>CONTACT FORM</span><span className="form-secure"><span/> QUICK MESSAGE</span></div><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Jane Smith"/></label><label>Email address<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="jane@company.com"/></label><label>How can I help?<textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me a little about the opportunity..."/></label><button className="button button-primary submit-button" type="submit">Send a message <Send size={16}/></button>{sent && <p className="form-hint">Your email app should open with the message prepared. If it doesn't, email me directly.</p>}</form>
      </div></section>
    </main>
    <footer className="footer"><a href="#home" className="footer-brand">AS<span>.</span></a><p>Designed with curiosity. Built around data.</p><span>© {new Date().getFullYear()} Amreek Singh</span><a className="back-top" href="#home">Back to top ↑</a></footer>
  </div>;
}

export default App;
