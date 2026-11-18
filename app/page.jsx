import { site } from "../lib/site";

const cross = <svg viewBox="0 0 48 48" aria-hidden="true" fill="currentColor"><path d="M18 4h12v14h14v12H30v14H18V30H4V18h14z"/></svg>;
const specialties = [
  ["✚", "Preventive Cardiology", "Management of cholesterol disorders, hypertension and diabetes to help reduce the risk of coronary artery disease."],
  ["↗", "TMT (Treadmill Test)", "Exercise stress testing to help evaluate chest pain in appropriately selected patients."],
  ["◉", "Holter Monitoring", "Ambulatory ECG monitoring to help investigate palpitations and unexplained fainting (syncope)."],
  ["♡", "Echocardiography (2D Echo)", "Ultrasound assessment of the heart's anatomy and function, useful in evaluating symptoms such as chest pain, breathlessness and palpitations when indicated."]
];
const mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(site.clinic + ", " + site.address);
const callUrl = site.contacts[0] ? "tel:" + site.contacts[0].phone : null;
const whatsappUrl = site.whatsapp ? "https://wa.me/" + site.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent("Hello, I would like to enquire about the Sunday cardiology OPD in Ara.") : null;
const structuredData = {
  "@context":"https://schema.org",
  "@type":"Physician",
  name:site.name,
  medicalSpecialty:"Cardiovascular",
  description:"MBBS, MD (Medicine), DM (Cardiology). Sunday cardiology OPD at Dr. Rungta Clinic in Ara, Bihar.",
  address:{"@type":"PostalAddress",streetAddress:"K.G. Road",addressLocality:"Ara",addressRegion:"Bihar",addressCountry:"IN"},
  ...(site.contacts.length ? {telephone:site.contacts.map(contact => contact.phone)}:{})
};
export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}}/>
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="notice"><div className="shell notice-inner"><span className="notice-title"><i className="pulse"/> Sunday Cardiology OPD · Ara, Bihar</span><span className="notice-extra">Appointments: {site.contacts.map((contact, index) => <span className="notice-contact" key={contact.phone}>{index > 0 && <span className="contact-divider"> · </span>}{contact.name}: <a href={"tel:" + contact.phone}>{contact.label}</a></span>)}</span></div></div>
    <header className="header" id="home"><div className="shell nav-wrap">
      <a className="brand" href="#home" aria-label="Dr. Sumit Sinha homepage"><span className="brand-icon">{cross}</span><span className="brand-words"><strong className="physician-brand">Dr. Sumit Sinha</strong><small>DM CARDIOLOGY</small></span></a>
      <nav className="nav" aria-label="Main navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#clinic">Clinic</a></nav>
      <a className="button nav-cta" href="#clinic">Consultation <span>↗</span></a>
      <details className="mobile-menu"><summary aria-label="Toggle navigation"><span/><span/><span/></summary><nav aria-label="Mobile navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#clinic">Sunday OPD</a></nav></details>
    </div></header>
    <main id="main">
      <section className="hero"><div className="shell hero-grid">
        <div className="portrait-side"><div className="halo"/><img src="/doctor-portrait.jpeg" alt="Dr. Sumit Sinha, cardiologist" className="portrait"/><div className="portrait-card"><span className="status-dot"/><p><strong>Dr. Sumit Sinha</strong><small>MBBS · MD (Medicine) · DM (Cardiology)</small></p></div><span className="portrait-cross" aria-hidden="true">{cross}</span></div>
        <div className="hero-copy">
          <p className="eyebrow"><span/> Interventional cardiologist · Ara</p>
          <h1>Expert heart care.<br/><em>Closer to home.</em></h1>
          <p className="lead">Specialist cardiology consultation with <strong>Dr. Sumit Sinha</strong>—bringing cardiovascular care to Ara, Bhojpur and nearby communities.</p>
          <div className="hero-actions"><a className="button" href="#clinic">Sunday Consultation <span>→</span></a><a className="text-link" href="#about">Meet the doctor <span>↓</span></a></div>
          <div className="availability"><span className="calendar-icon" aria-hidden="true">✚</span><p><strong>Every Sunday</strong><small>Dr. Rungta Clinic · K.G. Road, Ara</small></p></div>
        </div>
      </div>
      <div className="shell trust-strip">
        <div><span className="trust-icon">✚</span><p><strong>DM Cardiology</strong><small>Specialist qualification</small></p></div>
        <div><span className="trust-icon">05</span><p><strong>5+ years</strong><small>Cardiology experience</small></p></div>
        <div><span className="trust-icon">1K</span><p><strong>1,000+</strong><small>Coronary angioplasties</small></p></div>
        <div><span className="trust-icon">⌖</span><p><strong>Sunday OPD</strong><small>Ara, Bihar</small></p></div>
      </div></section>
      <section id="about" className="section about"><div className="shell about-grid">
        <div className="section-heading"><p className="eyebrow"><span/> About the doctor</p><h2>Clinical experience,<br/><em>patient-focused care.</em></h2></div>
        <div className="about-copy"><p className="intro">Dr. Sumit Sinha is an interventional cardiologist with experience in complex coronary procedures and cardiovascular care.</p><p>He completed MBBS and MD (Medicine) from <strong>Patna Medical College, Patna</strong>, and DM (Cardiology) from <strong>RNT Medical College, Government Medical College, Udaipur</strong>. He is currently associated with <strong>Heritage Institute of Medical Sciences, Varanasi</strong>.</p>
          <div className="credentials">
            <article><b>01</b><p><strong>MBBS &amp; MD (Medicine)</strong><small>Patna Medical College, Patna</small></p></article>
            <article><b>02</b><p><strong>DM (Cardiology)</strong><small>RNT Medical College, Udaipur</small></p></article>
            <article><b>03</b><p><strong>Current association</strong><small>Heritage Institute of Medical Sciences, Varanasi</small></p></article>
          </div></div>
      </div></section>
      <section id="services" className="section services"><div className="shell"><div className="center-heading"><p className="eyebrow"><span/> Available Services <span/></p><h2>Cardiac evaluation and<br/><em>preventive care.</em></h2><p>Focused services for cardiovascular assessment, diagnostic testing and management of risk factors.</p></div><div className="service-grid">{specialties.map(([icon,title,description],i)=><article className="service-card" key={title}><div className="service-icon" aria-hidden="true">{icon}</div><span className="service-number">{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section id="clinic" className="section clinic"><div className="shell">
        <div className="center-heading"><p className="eyebrow"><span/> Plan your visit <span/></p><h2>Sunday Cardiology OPD<br/><em>in Ara, Bihar.</em></h2></div>
        <div className="clinic-grid"><article className="clinic-card"><p className="mini">Consultation location</p><h3>Dr. Rungta Clinic</h3><p className="address">K.G. Road, Ara<br/>Bhojpur, Bihar</p><dl><div><dt>OPD day</dt><dd>Every Sunday</dd></div><div><dt>Consultant</dt><dd>Dr. Sumit Sinha, DM Cardiology</dd></div><div><dt>Timings</dt><dd>Please confirm with the clinic</dd></div></dl><div className="clinic-buttons"><a className="button" href={mapUrl} target="_blank" rel="noopener noreferrer">Open in Maps <span>↗</span></a>{site.contacts.map(contact => <a className="button button-muted" href={"tel:" + contact.phone} key={contact.phone}>Call {contact.name}: {contact.label}</a>)}{whatsappUrl && <a className="button button-muted" target="_blank" rel="noopener noreferrer" href={whatsappUrl}>WhatsApp clinic</a>}</div><small className="pending">Please confirm the Sunday OPD timing when calling.</small></article>
        <aside className="visit-card"><div className="bag-icon">✚</div><h3>Before your appointment</h3><p>Please bring previous prescriptions, ECG, echo or angiography reports, and a list of current medicines if available.</p><div className="emergency"><strong>Medical emergency?</strong><p>For severe or ongoing chest pain, sudden breathlessness or fainting, seek emergency medical care immediately. Do not wait for the Sunday OPD.</p></div></aside></div>
      </div></section>
    </main>
    <footer><div className="shell footer-main"><a className="brand footer-brand" href="#home"><span className="brand-icon">{cross}</span><span className="brand-words"><strong className="physician-brand">Dr. Sumit Sinha</strong><small>INTERVENTIONAL CARDIOLOGIST · ARA</small></span></a><nav aria-label="Footer navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#clinic">Clinic</a></nav></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Dr. Sumit Sinha. All rights reserved.</span><span>Information is educational and does not replace medical evaluation.</span></div></footer>
    <a className="mobile-book" href="#clinic">Consultation <span>→</span></a>
  </>;
}
