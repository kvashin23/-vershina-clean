/* Вершина — общие стили сайта */
<style>
  :root{
    --bg: #F2EFE4;
    --bg-soft: #EAE5D5;
    --ink: #192A24;
    --ink-70: rgba(25,42,36,.7);
    --ink-45: rgba(25,42,36,.45);
    --ink-15: rgba(25,42,36,.14);
    --paper: #FBFAF4;
    --gold: #C6862A;
    --gold-dim: #E8C286;
    --teal: #2E6E67;
    --teal-dim: #DCE9E6;
    --rust: #B15A42;
    --night: #10201B;
    --night-2: #17332B;
    --radius: 18px;
    --maxw: 1180px;
  }

  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background:var(--bg);
    color:var(--ink);
    font-family:'Manrope', sans-serif;
    font-size:16px;
    line-height:1.55;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3,.display{
    font-family:'Playfair Display', serif;
    font-weight:600;
    letter-spacing:-0.01em;
    margin:0;
  }
  .mono{
    font-family:'IBM Plex Mono', monospace;
  }
  a{color:inherit;text-decoration:none;}
  img{max-width:100%;display:block;}
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px;}
  .eyebrow{
    font-family:'IBM Plex Mono', monospace;
    font-size:12.5px;
    letter-spacing:.14em;
    text-transform:uppercase;
    color:var(--gold);
    display:flex;align-items:center;gap:10px;
    margin-bottom:14px;
  }
  .eyebrow::before{content:"";width:22px;height:1px;background:var(--gold);display:inline-block;}
  .btn{
    display:inline-flex;align-items:center;gap:8px;
    padding:14px 26px;
    border-radius:999px;
    font-family:'Manrope',sans-serif;
    font-weight:700;
    font-size:14.5px;
    cursor:pointer;
    border:1px solid transparent;
    transition:transform .25s ease, background .25s ease, box-shadow .25s ease;
  }
  .btn-primary{background:var(--ink);color:var(--paper);}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(25,42,36,.25);}
  .btn-ghost{background:transparent;color:var(--ink);border-color:var(--ink-15);}
  .btn-ghost:hover{border-color:var(--ink);}
  .btn-gold{background:var(--gold);color:var(--night);}
  .btn-gold:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(198,134,42,.35);}

  /* ---------- HEADER ---------- */
  header.site{
    position:sticky;top:0;z-index:50;
    background:rgba(242,239,228,.86);
    backdrop-filter:blur(10px);
    border-bottom:1px solid var(--ink-15);
  }
  .header-inner{
    display:flex;align-items:center;justify-content:space-between;
    padding:16px 28px;max-width:var(--maxw);margin:0 auto;
    gap:20px;
  }
  .logo{display:flex;align-items:center;gap:10px;font-family:'Playfair Display',serif;font-weight:700;font-size:21px;}
  .logo-mark{
    width:34px;height:34px;border-radius:50%;
    background:conic-gradient(from 200deg, var(--gold), var(--rust), var(--teal), var(--gold));
    display:flex;align-items:center;justify-content:center;
    color:var(--paper);font-size:15px;flex:none;
  }
  nav.main-nav{display:flex;gap:28px;font-size:14.5px;font-weight:600;}
  nav.main-nav a{opacity:.75;transition:opacity .2s;}
  nav.main-nav a:hover{opacity:1;}
  .header-right{display:flex;align-items:center;gap:18px;}
  .phone-link{font-weight:700;font-size:15px;white-space:nowrap;}
  .phone-link span{display:block;font-size:11px;font-weight:500;color:var(--ink-45);font-family:'IBM Plex Mono',monospace;letter-spacing:.05em;}
  @media (max-width:920px){ nav.main-nav{display:none;} }
  @media (max-width:600px){ .phone-link{display:none;} }

  /* ---------- HERO ---------- */
  .hero{
    position:relative;
    overflow:hidden;
    background:linear-gradient(180deg,#F6EFDD 0%, #F2E4C8 34%, #EFD9AE 58%, var(--bg) 100%);
    padding:88px 0 0;
  }
  .hero-inner{
    max-width:var(--maxw);margin:0 auto;padding:0 28px;
    display:grid;grid-template-columns:1.15fr .85fr;gap:40px;align-items:center;
    position:relative;z-index:3;
  }
  .hero h1{
    font-size:clamp(38px,5.4vw,64px);
    line-height:1.04;
    margin-bottom:22px;
  }
  .hero h1 em{font-style:italic;color:var(--rust);}
  .hero p.lead{
    font-size:18px;max-width:46ch;color:var(--ink-70);margin-bottom:30px;
  }
  .hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:34px;}
  .hero-days{
    display:flex;gap:8px;flex-wrap:wrap;align-items:center;
  }
  .hero-days .lbl{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--ink-45);margin-right:6px;letter-spacing:.06em;text-transform:uppercase;}
  .day-chip{
    padding:7px 13px;border-radius:999px;border:1px solid var(--ink-15);
    font-size:13px;font-weight:700;cursor:pointer;background:var(--paper);
    transition:all .2s ease;
  }
  .day-chip:hover{border-color:var(--ink);}
  .day-chip.active{background:var(--ink);color:var(--paper);border-color:var(--ink);}

  .hero-visual{
    position:relative;aspect-ratio:4/5;border-radius:24px;overflow:hidden;
    background:linear-gradient(160deg,#274B44,#0F211C 70%);
  }
  .hero-visual svg{position:absolute;inset:0;width:100%;height:100%;}
  .hero-visual .badge{
    position:absolute;left:20px;bottom:20px;right:20px;
    background:rgba(16,32,27,.55);backdrop-filter:blur(6px);
    border-radius:14px;padding:16px 18px;color:#F4EFE0;
  }
  .hero-visual .badge .num{font-family:'Playfair Display',serif;font-size:26px;}
  .hero-visual .badge .cap{font-size:12.5px;opacity:.75;margin-top:2px;}

  /* ---------- RIDGE STRIP (signature element) ---------- */
  .ridge-strip{
    background:var(--night);
    color:#F4EFE0;
    padding:64px 0 46px;
    position:relative;
  }
  .ridge-strip .wrap{position:relative;z-index:2;}
  .ridge-strip svg.line{
    position:absolute;left:0;right:0;bottom:0;width:100%;height:auto;opacity:.9;
  }
  .ridge-head{
    display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:14px;
    margin-bottom:46px;
  }
  .ridge-head h2{font-size:26px;color:#F4EFE0;max-width:34ch;}
  .ridge-head .eyebrow{color:var(--gold-dim);}
  .stat-row{
    display:grid;grid-template-columns:repeat(4,1fr);gap:20px;
    position:relative;z-index:2;
  }
  .stat{padding-bottom:26px;}
  .stat .num{font-family:'IBM Plex Mono',monospace;font-size:clamp(24px,3vw,34px);color:var(--gold-dim);}
  .stat .cap{font-size:13.5px;color:rgba(244,239,224,.65);margin-top:6px;max-width:20ch;}
  @media (max-width:820px){ .stat-row{grid-template-columns:repeat(2,1fr);} }

  /* ---------- ROUTES ---------- */
  .routes{padding:96px 0 40px;}
  .section-head{
    display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;
    margin-bottom:36px;
  }
  .section-head h2{font-size:clamp(28px,3.6vw,40px);max-width:22ch;}
  .filter-row{
    display:flex;gap:8px;flex-wrap:wrap;margin-bottom:34px;
  }
  .filter-row .day-chip.all{background:var(--teal-dim);border-color:var(--teal-dim);}

  .routes-grid{
    display:grid;grid-template-columns:repeat(4,1fr);gap:20px;
  }
  @media (max-width:1040px){ .routes-grid{grid-template-columns:repeat(2,1fr);} }
  @media (max-width:560px){ .routes-grid{grid-template-columns:1fr;} }

  .route-card{
    background:var(--paper);
    border-radius:var(--radius);
    padding:22px;
    border:1px solid var(--ink-15);
    display:flex;flex-direction:column;gap:14px;
    transition:transform .25s ease, box-shadow .25s ease;
    overflow:hidden;
  }
  .route-card:hover{transform:translateY(-4px);box-shadow:0 16px 34px rgba(25,42,36,.12);}
  .route-icon{
    width:46px;height:46px;border-radius:12px;
    display:flex;align-items:center;justify-content:center;
    background:var(--bg-soft);
  }
  .route-icon svg{width:24px;height:24px;stroke:var(--ink);}
  .route-card h3{font-size:18px;line-height:1.28;font-family:'Manrope',sans-serif;font-weight:800;}
  .route-days{display:flex;gap:6px;flex-wrap:wrap;margin-top:auto;}
  .route-days span{
    font-family:'IBM Plex Mono',monospace;font-size:11px;
    padding:4px 8px;border-radius:6px;background:var(--bg-soft);color:var(--ink-70);
  }
  .route-days span.muted{opacity:.55;}
  .route-card.hidden{display:none;}

  .routes-more{text-align:center;margin:44px 0 0;}

  /* ---------- WHY US ---------- */
  .why{background:var(--night-2);color:#F4EFE0;padding:96px 0;}
  .why .section-head h2{color:#F4EFE0;}
  .why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
  @media (max-width:900px){.why-grid{grid-template-columns:repeat(2,1fr);}}
  @media (max-width:560px){.why-grid{grid-template-columns:1fr;}}
  .why-card{
    background:rgba(244,239,224,.05);
    border:1px solid rgba(244,239,224,.12);
    border-radius:var(--radius);padding:24px;
  }
  .why-card .idx{font-family:'IBM Plex Mono',monospace;color:var(--gold-dim);font-size:13px;margin-bottom:14px;}
  .why-card h3{font-size:17px;color:#F4EFE0;margin-bottom:8px;font-family:'Manrope',sans-serif;font-weight:800;}
  .why-card p{font-size:14px;color:rgba(244,239,224,.68);margin:0;}

  /* ---------- CHARACTER / REGIONS ---------- */
  .regions{padding:96px 0;}
  .regions-list{display:flex;flex-direction:column;border-top:1px solid var(--ink-15);}
  .region-row{
    display:grid;grid-template-columns:120px 1fr 2fr;gap:20px;align-items:center;
    padding:22px 0;border-bottom:1px solid var(--ink-15);
  }
  .region-row .rnum{font-family:'IBM Plex Mono',monospace;color:var(--ink-45);font-size:13px;}
  .region-row h3{font-size:19px;font-family:'Playfair Display',serif;}
  .region-row p{margin:0;color:var(--ink-70);font-size:14.5px;}
  @media (max-width:760px){
    .region-row{grid-template-columns:1fr;gap:6px;padding:18px 0;}
  }

  /* ---------- REQUEST FORM ---------- */
  .request{padding:20px 0 96px;}
  .request-grid{
    display:grid;grid-template-columns:1fr 1.1fr;gap:48px;
    background:var(--paper);border:1px solid var(--ink-15);border-radius:28px;
    padding:52px;align-items:start;
  }
  .request-copy h2{font-size:clamp(24px,2.8vw,32px);margin:10px 0 14px;max-width:16ch;}
  .request-copy p{color:var(--ink-70);max-width:38ch;margin:0 0 18px;}
  .request-points{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;}
  .request-points li{
    font-size:14px;font-weight:600;color:var(--ink);
    padding-left:22px;position:relative;
  }
  .request-points li::before{
    content:"";position:absolute;left:0;top:7px;width:10px;height:10px;border-radius:50%;
    background:var(--teal);
  }
  .request-form{
    background:var(--bg);border-radius:20px;padding:28px;
    display:flex;flex-direction:column;gap:16px;position:relative;
  }
  .f-row{display:flex;flex-direction:column;}
  .f-row.two{flex-direction:row;gap:14px;}
  .f-row.two label{flex:1;}
  .request-form label{
    font-size:12.5px;font-weight:700;color:var(--ink-70);
    display:flex;flex-direction:column;gap:6px;
    text-transform:uppercase;letter-spacing:.05em;font-family:'IBM Plex Mono',monospace;
  }
  .request-form input, .request-form select, .request-form textarea{
    font-family:'Manrope',sans-serif;font-size:15px;font-weight:500;color:var(--ink);
    padding:12px 14px;border-radius:10px;border:1px solid var(--ink-15);
    background:var(--paper);resize:none;text-transform:none;letter-spacing:normal;
  }
  .request-form input:focus, .request-form select:focus, .request-form textarea:focus{
    outline:none;border-color:var(--teal);
  }
  .f-note{font-size:11.5px;color:var(--ink-45);margin:0;text-align:center;}
  .f-success{
    display:none;position:absolute;inset:0;background:var(--bg);border-radius:20px;
    flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:28px;
  }
  .f-success.show{display:flex;}
  .f-success-icon{
    width:52px;height:52px;border-radius:50%;background:var(--teal);color:#fff;
    display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:14px;
  }
  .f-success h3{font-family:'Playfair Display',serif;font-size:22px;margin-bottom:8px;}
  .f-success p{font-size:14px;color:var(--ink-70);max-width:32ch;}
  .f-error{
    display:none;background:#F3E3DE;border:1px solid var(--rust);color:var(--rust);
    border-radius:10px;padding:10px 14px;font-size:13px;text-align:center;
  }
  .f-error.show{display:block;}
  @media (max-width:860px){
    .request-grid{grid-template-columns:1fr;padding:32px 24px;}
  }

  /* ---------- CTA BANNER ---------- */
  .cta-banner{
    margin:0 28px 40px;max-width:calc(var(--maxw) - 56px);
    margin-left:auto;margin-right:auto;
    background:linear-gradient(120deg,var(--rust),var(--gold));
    border-radius:26px;padding:56px 48px;
    color:var(--night);
    display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;
  }
  .cta-banner h2{font-size:clamp(24px,3vw,32px);max-width:20ch;color:var(--night);}
  .cta-banner .btn-primary{background:var(--night);color:#F4EFE0;}
  @media (max-width:700px){ .cta-banner{padding:36px 26px;} }

  /* ---------- FOOTER ---------- */
  footer{background:var(--ink);color:rgba(244,239,224,.75);padding:56px 0 26px;}
  .footer-grid{
    display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:32px;padding-bottom:40px;
    border-bottom:1px solid rgba(244,239,224,.14);
  }
  .footer-grid h4{color:#F4EFE0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;font-family:'IBM Plex Mono',monospace;margin-bottom:14px;}
  .footer-grid p, .footer-grid a{font-size:14px;line-height:1.8;display:block;color:rgba(244,239,224,.75);}
  .footer-grid a:hover{color:#F4EFE0;}
  .footer-logo{display:flex;align-items:center;gap:10px;font-family:'Playfair Display',serif;font-size:20px;color:#F4EFE0;margin-bottom:14px;}
  .footer-bottom{
    display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;
    padding-top:22px;font-size:12.5px;color:rgba(244,239,224,.45);
  }
  @media (max-width:820px){ .footer-grid{grid-template-columns:1fr 1fr;} }
</style>

/* ---------- PAGE HERO (inner pages) ---------- */
.page-hero{
  background:linear-gradient(180deg,#F6EFDD 0%, #F2E4C8 40%, var(--bg) 100%);
  padding:64px 0 56px;
}
.page-hero .eyebrow{margin-bottom:16px;}
.page-hero h1{font-size:clamp(32px,4.6vw,52px);max-width:20ch;line-height:1.06;margin-bottom:16px;}
.page-hero p{font-size:17px;color:var(--ink-70);max-width:56ch;margin:0;}
.breadcrumb{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--ink-45);margin-bottom:18px;letter-spacing:.04em;}
.breadcrumb a{color:var(--ink-45);}
.breadcrumb a:hover{color:var(--ink);}

/* ---------- CATEGORY TABS (excursions page) ---------- */
.cat-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:26px;}
.cat-tab{
  padding:9px 16px;border-radius:999px;border:1px solid var(--ink-15);
  font-size:13.5px;font-weight:700;cursor:pointer;background:var(--paper);
  transition:all .2s ease;
}
.cat-tab:hover{border-color:var(--ink);}
.cat-tab.active{background:var(--teal);color:#fff;border-color:var(--teal);}

/* ---------- TIMELINE (about page) ---------- */
.timeline{padding:96px 0;background:var(--paper);}
.timeline-list{display:flex;flex-direction:column;gap:0;border-top:1px solid var(--ink-15);}
.timeline-row{
  display:grid;grid-template-columns:140px 1fr;gap:24px;
  padding:26px 0;border-bottom:1px solid var(--ink-15);align-items:baseline;
}
.timeline-row .tyear{font-family:'Playfair Display',serif;font-size:26px;color:var(--rust);}
.timeline-row p{margin:0;color:var(--ink-70);font-size:15px;max-width:60ch;}
@media (max-width:640px){ .timeline-row{grid-template-columns:1fr;gap:6px;} }

/* ---------- CONTACT CARDS ---------- */
.contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:56px;}
@media (max-width:860px){ .contact-grid{grid-template-columns:1fr;} }
.contact-card{
  background:var(--paper);border:1px solid var(--ink-15);border-radius:var(--radius);
  padding:26px;
}
.contact-card .cico{
  width:44px;height:44px;border-radius:12px;background:var(--bg-soft);
  display:flex;align-items:center;justify-content:center;margin-bottom:16px;
}
.contact-card .cico svg{width:22px;height:22px;stroke:var(--ink);fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;}
.contact-card h3{font-size:16px;font-family:'Manrope',sans-serif;font-weight:800;margin-bottom:8px;}
.contact-card p, .contact-card a{font-size:14.5px;color:var(--ink-70);display:block;line-height:1.6;}
.contact-card a:hover{color:var(--ink);}

.map-wrap{
  border-radius:var(--radius);overflow:hidden;border:1px solid var(--ink-15);
  margin-bottom:56px;background:var(--bg-soft);
}
.map-wrap iframe{width:100%;height:420px;border:0;display:block;}

.social-row{display:flex;gap:12px;flex-wrap:wrap;}
.social-pill{
  display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:999px;
  background:var(--paper);border:1px solid var(--ink-15);font-size:13.5px;font-weight:700;
}
.social-pill:hover{border-color:var(--ink);}
