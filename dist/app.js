const content={en:{services:[['Initial consultation','Understand your starting point, discuss your investment plans and identify the accounting and tax questions to address before moving forward.'],['Business accounting setup','Support with accounting organization, documentation and a practical starting framework for your Colombian business.'],['Property & rental accounting','Organize rental income, platform payouts, expenses and reconciliations for short-term rentals and investment properties.'],['Hotel & hospitality bookkeeping','Keep a detailed view of operating income, supplier expenses and the numbers behind your hospitality business.'],['Tax preparation & payment support','Review applicable obligations, prepare agreed tax returns and receive guidance on deadlines and payment steps.'],['Monthly accounting & reporting','Ongoing bookkeeping, bank reconciliations and financial reports that help you understand your operation, in your language.']],steps:[['We understand your project','An initial conversation about your investment, business structure, current records and priorities.'],['You receive a tailored proposal','We define the scope, required documents, fees and responsibilities before work begins.'],['We keep your finances organized','An agreed rhythm for document delivery, accounting updates, reporting and tax follow-up.']],plans:[['ONE-TIME ENGAGEMENT','Initial advisory','Guidance for your next decision.',['Review of your situation','Investment and accounting questions','Priorities and suggested next steps'],'Discuss a consultation'],['ONGOING SUPPORT','Monthly accounting','A consistent rhythm for your finances.',['Bookkeeping and reconciliations','Monthly financial reporting','Tax calendar and agreed filing support','Communication in English or Spanish'],'Discuss monthly support'],['TAILORED ENGAGEMENT','Property & hospitality','Support shaped around your operation.',['Rental and platform payout tracking','Income and expense organization','Property or business reporting','Scope tailored to your portfolio'],'Discuss your operation']],faq:[['Can we work together entirely in English?','Yes. Consultations are available 100% online in fluent English or native Spanish, or in person in the Medellín metropolitan area.'],['Can you help if I am outside Colombia?','We can start the conversation remotely and review your project and available documents before you arrive.'],['Do all businesses have the same tax obligations?','No. Obligations depend on your circumstances and operation. The initial review helps identify what needs individual assessment.'],['How much does monthly support cost?','Fees are quoted after reviewing your business, transaction volume, records and services required. You receive a defined scope before starting.'],['Does accounting support include legal advice or property management?','The focus is accounting and tax support. Legal work, immigration, property management and other specialist services require a separate agreement with the appropriate professional.']]},es:{services:[['Asesoría inicial','Entiende tu punto de partida, conversa sobre tus planes de inversión e identifica las preguntas contables y tributarias que debes resolver antes de avanzar.'],['Organización contable del negocio','Acompañamiento en la organización contable, la documentación y las bases prácticas para empezar tu negocio en Colombia.'],['Contabilidad de propiedades y alquileres','Organiza ingresos por alquiler, desembolsos de plataformas, gastos y conciliaciones de propiedades de inversión y alojamientos de corta estancia.'],['Contabilidad para hoteles','Mantén una visión detallada de los ingresos operativos, los gastos de proveedores y los números de tu negocio de alojamiento.'],['Preparación de impuestos y apoyo en pagos','Revisión de obligaciones aplicables, preparación de las declaraciones acordadas y orientación sobre fechas y pasos para el pago.'],['Contabilidad e informes mensuales','Registro contable, conciliaciones bancarias e informes financieros para entender tu operación, en tu idioma.']],steps:[['Entendemos tu proyecto','Una conversación inicial sobre tu inversión, estructura del negocio, documentación y prioridades.'],['Recibes una propuesta a tu medida','Definimos alcance, documentos, honorarios y responsabilidades antes de empezar.'],['Mantenemos tus finanzas organizadas','Acordamos una dinámica de entrega de documentos, actualizaciones contables, informes y seguimiento tributario.']],plans:[['ASESORÍA PUNTUAL','Asesoría inicial','Orientación para tu próxima decisión.',['Revisión de tu situación','Preguntas de inversión y contabilidad','Prioridades y próximos pasos sugeridos'],'Consultar asesoría'],['ACOMPAÑAMIENTO CONTINUO','Contabilidad mensual','Una rutina organizada para tus finanzas.',['Registros contables y conciliaciones','Informes financieros mensuales','Calendario tributario y declaraciones acordadas','Comunicación en inglés o español'],'Consultar plan mensual'],['SERVICIO A LA MEDIDA','Propiedades y hoteles','Apoyo adaptado a tu operación.',['Seguimiento de alquileres y plataformas','Organización de ingresos y gastos','Informes por propiedad o negocio','Alcance adaptado a tu portafolio'],'Conversar sobre mi operación']],faq:[['¿Podemos trabajar completamente en inglés?','Sí. Las asesorías se pueden realizar 100 % online en inglés fluido o español nativo, o de forma presencial en el área metropolitana de Medellín.'],['¿Pueden ayudarme si estoy fuera de Colombia?','Podemos iniciar la conversación a distancia y revisar tu proyecto y documentación disponible antes de tu llegada.'],['¿Todos los negocios tienen las mismas obligaciones tributarias?','No. Las obligaciones dependen de tus circunstancias y operación. La revisión inicial permite identificar lo que requiere evaluación individual.'],['¿Cuánto cuesta el acompañamiento mensual?','Los honorarios se cotizan según tu negocio, volumen de operaciones, documentación y servicios requeridos. Recibes un alcance definido antes de empezar.'],['¿El servicio incluye asesoría legal o administración de propiedades?','El enfoque es el acompañamiento contable y tributario. Los servicios legales, migratorios, de administración de propiedades y otras especialidades requieren un acuerdo separado con el profesional correspondiente.']]}};
content.en.services.push(['Income tax returns for foreign nationals','Personalized support with your Colombian income tax return: review of tax residency, applicable filing obligations, income and supporting documents, preparation and filing, and guidance on payment steps. The scope is defined after assessing your individual circumstances.']);
content.es.services.push(['Declaración de renta para extranjeros','Acompañamiento personalizado en tu declaración de renta en Colombia: revisión de residencia fiscal, obligaciones de declaración aplicables, ingresos y soportes, preparación y presentación, y orientación sobre el pago. El alcance se define después de evaluar tu situación particular.']);
content.en.faq.push(['Can you help with my Colombian income tax return as a foreign national?','Yes. We review your individual circumstances, tax residency, income and supporting documents to assess your Colombian filing obligations. The service can include preparation, filing and payment guidance, with explanations in fluent English or native Spanish.']);
content.es.faq.push(['¿Me pueden ayudar con la declaración de renta en Colombia si soy extranjero?','Sí. Revisamos tu situación particular, residencia fiscal, ingresos y documentos de soporte para evaluar tus obligaciones de declaración en Colombia. El servicio puede incluir preparación, presentación y orientación para el pago, con explicaciones en inglés fluido o español nativo.']);
content.en.services.push(['RUT updates & DIAN electronic signature','Support with reviewing and updating your Colombian tax registration (RUT), organizing the required documents and guidance on the DIAN electronic signature process for your tax procedures.']);
content.es.services.push(['Actualización del RUT y firma electrónica DIAN','Acompañamiento en la revisión y actualización de tu Registro Único Tributario (RUT), organización de los documentos requeridos y orientación en el proceso de firma electrónica DIAN para tus trámites tributarios.']);
function setLanguage(lang){const c=content[lang];document.documentElement.lang=lang;document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[lang]);document.querySelectorAll('.languages button').forEach(b=>b.setAttribute('aria-pressed',b.id===lang));document.getElementById('service-grid').innerHTML=c.services.map((s,i)=>`<article class="service"><span class="number">0${i+1} ↗</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');document.getElementById('steps').innerHTML=c.steps.map((s,i)=>`<article><span>0${i+1}</span><div><h3>${s[0]}</h3><p>${s[1]}</p></div></article>`).join('');document.getElementById('plan-grid').innerHTML=c.plans.map((p,i)=>`<article class="plan ${i===1?'featured':''}"><div class="eyebrow">${p[0]}</div><h3>${p[1]}</h3><p>${p[2]}</p><ul>${p[3].map(x=>`<li>${x}</li>`).join('')}</ul><a href="https://wa.me/573016776691?text=${encodeURIComponent(lang==='en'?'Hello DAIKO SODI, I would like to discuss '+p[1]+'.':'Hola DAIKO SODI, quisiera consultar sobre '+p[1]+'.')}" target="_blank" rel="noopener">${p[4]} ↗</a></article>`).join('');document.getElementById('questions').innerHTML=c.faq.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('');try{localStorage.setItem('language',lang)}catch{}document.title=lang==='en'?'DAIKO SODI | Accounting & Tax · Medellín':'DAIKO SODI | Contabilidad e impuestos · Medellín';document.dispatchEvent(new Event('site:language'))}
let requestedLanguage = null;
let changingLanguage = false;
async function switchLanguage(lang) {
  requestedLanguage = lang;
  if (changingLanguage) return;
  changingLanguage = true;
  try {
    while (requestedLanguage) {
      const target = requestedLanguage;
      requestedLanguage = null;
      if (target === document.documentElement.lang) continue;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setLanguage(target);
        continue;
      }
      if (typeof document.startViewTransition === 'function') {
        try {
          const transition = document.startViewTransition(() => setLanguage(target));
          await transition.finished;
        } catch {
          if (document.documentElement.lang !== target) setLanguage(target);
        }
      } else {
        const content = document.querySelector('main');
        if (!content || typeof content.animate !== 'function') {
          setLanguage(target);
          continue;
        }
        // Gentle fallback for browsers without snapshot transitions.
        const fadeOut = content.animate([{ opacity: 1 }, { opacity: 0.65 }], {
          duration: 100, easing: 'ease-out', fill: 'forwards'
        });
        await fadeOut.finished.catch(() => {});
        setLanguage(target);
        const fadeIn = content.animate([{ opacity: 0.65 }, { opacity: 1 }], {
          duration: 200, easing: 'ease-out'
        });
        fadeOut.cancel();
        await fadeIn.finished.catch(() => {});
      }
    }
  } finally {
    changingLanguage = false;
  }
}

document.querySelectorAll('.languages button').forEach(b=>b.addEventListener('click',()=>switchLanguage(b.id)));let initial='en';try{initial=localStorage.getItem('language')==='es'?'es':'en'}catch{}setLanguage(initial);document.getElementById('year').textContent=new Date().getFullYear();

const visual=document.querySelector('.hero-visual');
const mapImage=document.querySelector('.hero-map');
const photoImage=document.querySelector('.hero-photo');
const logoSlide=document.querySelector('.hero-logo-slide');
const slideshowToggle=document.getElementById('slideshow-toggle');
let slideIndex=0;
const slideStates=['is-logo','is-accounting','is-dian','is-map','is-photo','is-hotel','is-penthouse','is-restaurant'];
const slides=[logoSlide,document.querySelector('.hero-accounting'),document.querySelector('.hero-dian'),mapImage,photoImage,document.querySelector('.hero-hotel'),document.querySelector('.hero-penthouse'),document.querySelector('.hero-restaurant')];
const captions=[null,
 ['ORGANIZED FINANCES','FINANZAS EN ORDEN','Your numbers.<br>Informed decisions.','Tus números.<br>Decisiones informadas.'],
 ['COLOMBIAN TAX SUPPORT','ACOMPAÑAMIENTO TRIBUTARIO','Your Colombian taxes.<br>Expert support.','Tus impuestos en Colombia.<br>Acompañamiento experto.'],
 ['MEDELLÍN & THE ABURRÁ VALLEY','MEDELLÍN Y EL VALLE DE ABURRÁ','Local insight.<br>A sense of direction.','Conocimiento local.<br>Un rumbo definido.'],
 ['INVEST IN MEDELLÍN','INVIERTE EN MEDELLÍN','New opportunities.<br>A local partner.','Nuevas oportunidades.<br>Una aliada local.'],
 ['HOSPITALITY ACCOUNTING','CONTABILIDAD HOTELERA','Your hotel.<br>Finances under control.','Tu hotel.<br>Finanzas bajo control.'],
 ['PROPERTY INVESTMENTS','INVERSIÓN EN PROPIEDADES','Your investment.<br>Every detail counts.','Tu inversión.<br>Cada detalle cuenta.'],
 ['ACCOUNTING FOR YOUR BUSINESS','CONTABILIDAD PARA TU NEGOCIO','Focus on your business.<br>Understand your finances.','Enfócate en tu negocio.<br>Entiende tus finanzas.']];
function showSlide(index){
 slideIndex=index;
 slideStates.forEach((state,i)=>visual.classList.toggle(state,i===index));
 slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===index);slide.setAttribute('aria-hidden',String(i!==index));});
 visual.classList.toggle('is-sector',!['is-logo','is-map','is-photo'].includes(slideStates[index]));
 const text=captions[index]||['LOCAL KNOWLEDGE. GLOBAL PERSPECTIVE.','CONOCIMIENTO LOCAL. VISIÓN GLOBAL.','Feel at home.<br>Stay in control.','Siéntete en casa.<br>Mantén el control.'];
 const label=document.querySelector('.image-caption>span');
 const title=document.querySelector('.image-caption h2');
 label.dataset.en=text[0];label.dataset.es=text[1];title.dataset.en=text[2];title.dataset.es=text[3];
 const lang=document.documentElement.lang;
 label.innerHTML=label.dataset[lang];title.innerHTML=title.dataset[lang];
}
showSlide(0);
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let slideshowPaused=motionPreference.matches;
let slideshowTimer;
function updateSlideshowButton(){
 slideshowToggle.dataset.en=slideshowPaused?'Play slideshow':'Pause slideshow';
 slideshowToggle.dataset.es=slideshowPaused?'Reanudar imágenes':'Pausar imágenes';
 slideshowToggle.textContent=slideshowToggle.dataset[document.documentElement.lang];
 slideshowToggle.setAttribute('aria-pressed',String(slideshowPaused));
}
function startSlideshow(){
 clearInterval(slideshowTimer);
 if(!slideshowPaused&&!document.hidden){slideshowTimer=setInterval(()=>{
  const next=(slideIndex+1)%slides.length;
  const image=next===0?null:slides[next];
  if(image&&(!image.complete||!image.naturalWidth))return;
  showSlide(next);
 },7000);}
 updateSlideshowButton();
}
slideshowToggle.addEventListener('click',()=>{slideshowPaused=!slideshowPaused;startSlideshow();});
document.addEventListener('visibilitychange',startSlideshow);
motionPreference.addEventListener('change',e=>{slideshowPaused=e.matches;startSlideshow();});
startSlideshow();
