import { site } from "../lib/site";

const services = [
  { number: "01", title: "Cardiology Consultation", description: "Assessment of chest discomfort, breathlessness, palpitations and other cardiovascular symptoms." },
  { number: "02", title: "Coronary Artery Disease", description: "Evaluation and individualized management of established or suspected coronary artery disease." },
  { number: "03", title: "2D Echocardiography", description: "Ultrasound assessment of heart structure and function when medically indicated." },
  { number: "04", title: "Hypertension & Prevention", description: "Cardiovascular risk assessment, blood pressure, cholesterol and diabetes-related heart health." },
  { number: "05", title: "Complex Coronary Interventions", description: "Experience in complex angioplasty including chronic total occlusion (CTO) and bifurcation PCI." },
  { number: "06", title: "Left Main Coronary Disease", description: "Specialist assessment and interventional experience in left main coronary artery disease." }
];
const faqs = [
  ["Where does Dr. Sumit consult in Ara?", "Sunday cardiology consultation takes place at Dr. Rungta Clinic, K.G. Road, Ara, Bhojpur, Bihar."],
  ["Which day is the cardiology OPD available?", "The Ara OPD is held on Sundays. Contact the clinic to confirm the current hours and appointment availability."],
  ["Is echocardiography available?", "2D echocardiography is offered as part of cardiac evaluation when clinically appropriate. Confirm availability when booking."],
  ["Does an appointment replace emergency care?", "No. For severe or ongoing chest pain, sudden breathlessness, fainting or other urgent symptoms, seek emergency medical attention immediately."],
];
const iconPlus = <svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M26 8h12v18h18v12H38v18H26V38H8V26h18V8Z" fill="currentColor"/></svg>;
const phoneHref = site.phone ? "tel:" + site.phone.replace(/[^+0-9]/g, "") : null;
const whatsappHref = site.whatsapp ? "https://wa.me/" + site.whatsapp.replace(/\D/g,"") + "?text=" + encodeURIComponent("Hello, I would like to enquire about the Sunday cardiology OPD in Ara.") : null;
const mapHref = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(site.clinic + ", " + site.address);
const schema = { "@context": "https://schema.org", "@type": "Physician", name: site.name, description: "MBBS, MD Medicine, DM Cardiology. Sunday OPD at Dr. Rungta Clinic, Ara.", medicalSpecialty: "Cardiovascular", areaServed: [{ "@type": "City", name: "Ara" }, { "@type": "AdministrativeArea", name: "Bhojpur" }], address: { "@type": "PostalAddress", streetAddress: "K.G. Road", addressLocality: "Ara", addressRegion: "Bihar", addressCountry: "IN" }, ...(site.phone ? { telephone: site.phone } : {}) };

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className="topbar"><div className="container topbar-inner"><span><span className="pulse-dot" /> Sunday Cardiology OPD · Ara, Bihar</span><span className="topbar-note">For appointments, contact the clinic</span></div></div>
    <header className="site-header"><div className="container nav">
      <a className="brand" href="#home" aria-label="Dr Sumit Sinha home"><span className="brand-mark">{iconPlus}</span><span><strong className="doctor-name">Dr. Sumit Sinha</strong><small>DM CARDIOLOGY</small></span></a>
      <nav aria-label="Main navigation" className="nav-links"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#services">Services</a><a href="#clinic">Clinic & OPD</a></nav>
      <a className="btn btn-small" href="#clinic">Consultation <span aria-hidden="true">↗</span></a>
    </div></header>
    <main>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow"><span className="line" /> INTERVENTIONAL CARDIOLOGIST · ARA</div>
            <h1>Advanced <em>Heart Care.</em></h1>
            <p className="hero-lead">Advanced cardiology consultation with <strong>Dr. Sumit Sinha</strong>, MBBS, MD (Medicine), DM (Cardiology). Bringing specialist heart care to patients in Ara and Bhojpur.</p>
            <div className="hero-actions"><a className="btn" href="#clinic">View Sunday OPD <span aria-hidden="true">↗</span></a><a className="btn btn-outline" href="#about">Meet the Doctor <span aria-hidden="true">↓</span></a></div>
            <div className="hero-note"><span className="note-symbol">✦</span><span>Consultations every Sunday at Dr. Rungta Clinic, K.G. Road, Ara</span></div>
          </div>
          <div className="hero-art hero-doctor" aria-label="Dr. Sumit Sinha profile">
            <div className="doctor-photo-wrap"><img className="doctor-photo" src="/doctor-portrait.svg" alt="Portrait of Dr. Sumit Sinha, cardiologist" /></div>
            <div className="hero-doctor-info"><h2>Dr. Sumit Sinha</h2><p>MBBS · MD (Medicine) · DM (Cardiology)</p><span>Interventional Cardiologist</span></div>
          </div>
        </div>
      </section>
      <section className="metric-section" aria-label="Experience at a glance"><div className="container metric-grid">
        <div><strong>5<span>+</span></strong><small>Years in cardiology</small></div><div><strong>1,000<span>+</span></strong><small>Coronary angioplasties</small></div><div><strong>5,000<span>+</span></strong><small>Coronary angiographies</small></div><div><strong>Sunday</strong><small>Specialist OPD in Ara</small></div>
      </div></section>
      <section id="about" className="section"><div className="container about-grid">

        <div><div className="eyebrow"><span className="line"/> ABOUT THE DOCTOR</div><h2>A foundation in medicine.<br/><em>A focus on your heart.</em></h2><p>Dr. Sumit Sinha completed his MBBS and MD (Medicine) at <strong>Patna Medical College, Patna</strong>, followed by DM (Cardiology) at <strong>RNT Medical College, Government Medical College, Udaipur</strong>.</p><p>With over five years of experience in cardiology, he is currently associated with <strong>Heritage Institute of Medical Sciences, Varanasi</strong>. His interventional experience includes complex coronary angioplasty involving CTO, bifurcation and left main disease.</p>
          <div className="qualification-list"><div><span>01</span><p><strong>MBBS & MD (Medicine)</strong><small>Patna Medical College, Patna</small></p></div><div><span>02</span><p><strong>DM (Cardiology)</strong><small>RNT Medical College, Udaipur</small></p></div><div><span>03</span><p><strong>Current Association</strong><small>Heritage Institute of Medical Sciences, Varanasi</small></p></div></div>
        </div>
      </div></section>
      <section id="expertise" className="expertise-section section"><div className="container"><div className="split-head"><div><div className="eyebrow"><span className="line" /> SPECIALIST EXPERIENCE</div><h2>Advanced coronary<br/><em>intervention experience.</em></h2></div><p>Experience with complex coronary anatomy and interventional procedures. Every treatment decision requires a personalized clinical assessment.</p></div><div className="expertise-grid"><article><span>01 / CTO</span><h3>Chronic Total Occlusion</h3><p>Experience with angioplasty for chronically blocked coronary arteries.</p></article><article><span>02 / BIFURCATION</span><h3>Bifurcation PCI</h3><p>Interventional experience involving coronary artery branch points.</p></article><article><span>03 / LEFT MAIN</span><h3>Left Main Disease</h3><p>Specialist experience in interventions for left main coronary artery disease.</p></article></div></div></section>
      <section id="services" className="section services-section"><div className="container"><div className="eyebrow"><span className="line"/> HOW WE CAN HELP</div><div className="split-head"><h2>Comprehensive<br/><em>cardiology services.</em></h2><p>From preventive care to specialist cardiovascular assessment, with investigations and treatment planning based on clinical need.</p></div><div className="services-grid">{services.map(service=><article className="service" key={service.number}><span className="service-num">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-plus" aria-hidden="true">↗</span></article>)}</div></div></section>
      <section className="care-banner"><div className="container care-banner-inner"><div><span className="mini-label">आपके दिल की सेहत, हमारी प्राथमिकता</span><h2>Specialist heart care,<br/>closer to home.</h2><p>Sunday consultations in Ara for patients from Ara, Bhojpur and surrounding communities.</p></div><a className="btn btn-light" href="#clinic">Clinic Location <span aria-hidden="true">↗</span></a></div></section>
      <section id="clinic" className="section clinic-section"><div className="container"><div className="eyebrow"><span className="line"/> PLAN YOUR VISIT</div><h2>Sunday Cardiology OPD<br/><em>in Ara, Bihar.</em></h2><div className="clinic-grid"><div className="clinic-card"><span className="mini-label">CONSULTATION LOCATION</span><h3>Dr. Rungta Clinic</h3><p>K.G. Road, Ara<br/>Bhojpur, Bihar</p><div className="clinic-info"><div><span>OPD DAY</span><strong>Every Sunday</strong></div><div><span>CONSULTANT</span><strong>Dr. Sumit Sinha, DM Cardiology</strong></div><div><span>TIMINGS</span><strong>Please confirm with the clinic</strong></div></div><div className="clinic-actions"><a className="btn" href={mapHref} target="_blank" rel="noopener noreferrer">Find on Google Maps ↗</a>{phoneHref && <a className="btn btn-outline" href={phoneHref}>Call for appointment</a>}{whatsappHref && <a className="btn btn-outline" href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a>}</div>{!phoneHref && <p className="contact-pending">Appointment phone number will be updated shortly. Please confirm before visiting.</p>}</div><div className="visit-help"><div className="visit-graphic"><span className="visit-cross">✚</span><div className="visit-heart">{iconPlus}</div></div><h3>Before your appointment</h3><p>Bring your past prescriptions, ECG, echo or angiography reports and a list of current medications, if available.</p><div className="emergency"><strong>Medical emergency?</strong><p>For severe or ongoing chest pain, sudden breathlessness or fainting, seek emergency medical care immediately. Do not wait for Sunday OPD.</p></div></div></div></div></section>
      <section className="section faq-section"><div className="container faq-grid"><div><div className="eyebrow"><span className="line"/> USEFUL INFORMATION</div><h2>Frequently asked<br/><em>questions.</em></h2></div><div className="faq-list">{faqs.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main"><div><div className="footer-brand">{iconPlus}<strong className="doctor-name">Dr. Sumit Sinha</strong></div><p>MBBS · MD (Medicine) · DM (Cardiology)</p><p>Sunday OPD · Dr. Rungta Clinic, K.G. Road, Ara</p></div><div className="footer-nav"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#services">Services</a><a href="#clinic">Visit Clinic</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dr. Sumit Sinha. All rights reserved.</span><span>Information is educational and does not replace medical evaluation.</span></div></div></footer>
  </>;
}
