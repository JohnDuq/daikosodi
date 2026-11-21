const content={
  "en": {
    "services": [
      [
        "Income tax returns for foreign nationals",
        "Review of your individual situation, income and documents to assess your Colombian filing obligations. Preparation and submission of your income tax return, with guidance on payment."
      ],
      [
        "Tax filing for foreign investors",
        "Review of the tax obligations associated with your investment in Colombia. Preparation and submission of the agreed tax returns, with follow-up on deadlines and payment steps."
      ],
      [
        "Employee payroll in Colombia",
        "Payroll processing for companies based in Colombia: employee changes, payroll calculations and support with social security contributions and employment benefits, within the agreed scope."
      ]
    ],
    "steps": [
      [
        "Tell us what you need",
        "We review your situation and identify the service and documents required."
      ],
      [
        "Agree on the next steps",
        "You receive a proposal with scope, fees, responsibilities and an agreed work schedule."
      ]
    ],
    "faq": [
      [
        "Can I arrange everything from abroad?",
        "Yes. Consultations can be 100% online, in fluent English or native Spanish. In-person consultations are also available in the Medellín metropolitan area."
      ],
      [
        "What documents should I prepare?",
        "The documents depend on your personal situation, investment or company payroll. We will confirm the information needed after the initial review."
      ],
      [
        "How are fees agreed?",
        "We quote based on your situation, filing obligations or payroll scope. Professional fees, services included and responsibilities are agreed before work begins."
      ]
    ]
  },
  "es": {
    "services": [
      [
        "Declaración de renta para extranjeros",
        "Revisamos tu situación particular, ingresos y documentos para evaluar tus obligaciones en Colombia. Preparamos y presentamos tu declaración de renta y te orientamos en el proceso de pago."
      ],
      [
        "Presentación de impuestos para inversionistas extranjeros",
        "Revisamos las obligaciones tributarias asociadas a tu inversión en Colombia. Preparamos y presentamos las declaraciones acordadas, con seguimiento a los vencimientos y orientación para el pago."
      ],
      [
        "Nómina de empleados para empresas radicadas en Colombia",
        "Gestionamos novedades y liquidación de nómina. Te acompañamos en los aportes a seguridad social y las prestaciones de tus empleados, según el alcance acordado."
      ]
    ],
    "steps": [
      [
        "Cuéntanos qué necesitas",
        "Revisamos tu situación e identificamos el servicio y los documentos requeridos."
      ],
      [
        "Acordamos los siguientes pasos",
        "Recibes una propuesta con alcance, honorarios, responsabilidades y un calendario de trabajo."
      ]
    ],
    "faq": [
      [
        "¿Puedo hacer todo desde el exterior?",
        "Sí. Las asesorías pueden ser 100 % online, en inglés fluido o español nativo. También ofrecemos atención presencial en el área metropolitana de Medellín."
      ],
      [
        "¿Qué documentos debo preparar?",
        "Los documentos dependen de tu situación personal, inversión o nómina empresarial. Después de la revisión inicial te indicamos la información necesaria."
      ],
      [
        "¿Cómo se definen los honorarios?",
        "Cotizamos según tu situación, obligaciones de declaración o alcance de la nómina. Antes de empezar acordamos los honorarios, servicios incluidos y responsabilidades."
      ]
    ]
  }
};

function setLanguage(lang) {
 const c=content[lang];
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[lang]);
 document.querySelectorAll('.languages button').forEach(b=>b.setAttribute('aria-pressed',String(b.id===lang)));
 document.getElementById('service-grid').innerHTML=c.services.map(service=>{
  const message=(lang==='en'?'Hello DAIKO SODI, I would like information about ':'Hola DAIKO SODI, quisiera información sobre ')+service[0]+'.';
  return `<article class="service"><h3>${service[0]}</h3><p>${service[1]}</p><a class="service-link" href="https://wa.me/573016776691?text=${encodeURIComponent(message)}" target="_blank" rel="noopener">${lang==='en'?'Ask about this service':'Consultar este servicio'}</a></article>`;
 }).join('');
 document.getElementById('steps').innerHTML=c.steps.map(step=>`<article><div><h3>${step[0]}</h3><p>${step[1]}</p></div></article>`).join('');
 document.getElementById('questions').innerHTML=c.faq.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('');
 try{localStorage.setItem('language',lang)}catch{}
 document.title=lang==='en'?'DAIKO SODI | Tax & Payroll · Colombia':'DAIKO SODI | Impuestos y nómina · Colombia';
 document.dispatchEvent(new Event('site:language'));
}
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
const logoSlide=document.querySelector('.hero-logo-slide');
const slideshowToggle=document.getElementById('slideshow-toggle');
let slideIndex=0;
const slideStates=['is-logo','is-accounting','is-dian','is-map'];
const slides=[logoSlide,document.querySelector('.hero-accounting'),document.querySelector('.hero-dian'),mapImage];
const captions=[null,
 ['PAYROLL FOR COLOMBIAN COMPANIES','NÓMINA PARA EMPRESAS EN COLOMBIA','Your team.<br>An organized payroll.','Tu equipo.<br>Una nómina organizada.'],
 ['TAX SUPPORT FOR FOREIGN NATIONALS','IMPUESTOS PARA EXTRANJEROS','Your obligations.<br>Personal guidance.','Tus obligaciones.<br>Atención personal.'],
 ['MEDELLÍN · COLOMBIA','MEDELLÍN · COLOMBIA','Local expertise.<br>Wherever you are.','Conocimiento local.<br>Donde estés.']];
function showSlide(index){
 slideIndex=index;
 slideStates.forEach((state,i)=>visual.classList.toggle(state,i===index));
 slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===index);slide.setAttribute('aria-hidden',String(i!==index));});
 visual.classList.toggle('is-sector',!['is-logo','is-map'].includes(slideStates[index]));
 const text=captions[index]||['','','',''];
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
