const content={
  "en": {
    "services": [
      [
        "Initial consultation for foreign nationals",
        "An initial review of your situation and plans in Colombia. Identify the accounting and tax matters to address, the documents needed and the next steps before starting."
      ],
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
    ],
    "title": "DAIKO SODI | Tax & Payroll · Colombia",
    "ask": "Ask about this service",
    "messagePrefix": "Hello DAIKO SODI, I would like information about "
  },
  "es": {
    "services": [
      [
        "Asesoría inicial a extranjeros",
        "Una primera revisión de tu situación y tus planes en Colombia. Identificamos los temas contables y tributarios por atender, los documentos necesarios y los siguientes pasos antes de empezar."
      ],
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
    ],
    "title": "DAIKO SODI | Impuestos y nómina · Colombia",
    "ask": "Consultar este servicio",
    "messagePrefix": "Hola DAIKO SODI, quisiera información sobre "
  },
  "fr": {
    "services": [
      [
        "Consultation initiale pour les étrangers",
        "Un premier examen de votre situation et de vos projets en Colombie. Nous identifions les questions comptables et fiscales à traiter, les documents nécessaires et les prochaines étapes."
      ],
      [
        "Déclaration de revenus pour les étrangers",
        "Nous examinons votre situation personnelle, vos revenus et vos documents pour évaluer vos obligations en Colombie. Nous préparons et déposons votre déclaration de revenus et vous accompagnons dans les démarches de paiement."
      ],
      [
        "Déclarations fiscales pour les investisseurs étrangers",
        "Nous examinons les obligations fiscales liées à votre investissement en Colombie. Nous préparons et déposons les déclarations convenues, avec un suivi des échéances et des démarches de paiement."
      ],
      [
        "Gestion de la paie des entreprises établies en Colombie",
        "Nous traitons les changements concernant vos salariés et calculons la paie. Nous vous accompagnons pour les cotisations sociales et les prestations dues aux salariés, selon le périmètre convenu."
      ]
    ],
    "steps": [
      [
        "Présentez-nous vos besoins",
        "Nous examinons votre situation et identifions le service ainsi que les documents nécessaires."
      ],
      [
        "Convenons des prochaines étapes",
        "Vous recevez une proposition précisant le périmètre, les honoraires, les responsabilités et le calendrier de travail."
      ]
    ],
    "faq": [
      [
        "Puis-je tout organiser depuis l’étranger ?",
        "Oui. Les consultations peuvent se dérouler entièrement en ligne, en anglais courant ou en espagnol natif. Des rendez-vous en présentiel sont également proposés dans l’agglomération de Medellín."
      ],
      [
        "Quels documents dois-je préparer ?",
        "Les documents dépendent de votre situation personnelle, de votre investissement ou de la paie de votre entreprise. Après un premier examen, nous vous indiquons les informations nécessaires."
      ],
      [
        "Comment les honoraires sont-ils fixés ?",
        "Ils dépendent de votre situation, de vos obligations déclaratives ou du périmètre de la paie. Les honoraires, les prestations incluses et les responsabilités sont convenus avant le début de la mission."
      ]
    ],
    "title": "DAIKO SODI | Fiscalité et paie · Colombie",
    "ask": "Se renseigner sur ce service",
    "messagePrefix": "Bonjour DAIKO SODI, je souhaite des informations sur "
  }
};

function setLanguage(lang) {
 if(!Object.hasOwn(content,lang)) lang='en';
 const c=content[lang];
 document.documentElement.lang=lang;
 document.querySelector('.languages').setAttribute('aria-label',({en:'Language',es:'Idioma',fr:'Langue'})[lang]);
 document.querySelectorAll('[data-alt-en]').forEach(el=>el.alt=el.dataset['alt'+lang[0].toUpperCase()+lang.slice(1)]);
 document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[lang] ?? el.dataset.en);
 document.querySelectorAll('.languages button').forEach(b=>b.setAttribute('aria-pressed',String(b.id===lang)));
 document.getElementById('service-grid').innerHTML=c.services.map(service=>{
  const message=c.messagePrefix+service[0]+'.';
  return `<article class="service"><h3>${service[0]}</h3><p>${service[1]}</p><a class="service-link" href="https://wa.me/573016776691?text=${encodeURIComponent(message)}" target="_blank" rel="noopener">${c.ask}</a></article>`;
 }).join('');
 document.getElementById('steps').innerHTML=c.steps.map(step=>`<article><div><h3>${step[0]}</h3><p>${step[1]}</p></div></article>`).join('');
 document.getElementById('questions').innerHTML=c.faq.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('');
 try{localStorage.setItem('language',lang)}catch{}
 document.title=c.title;
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

document.querySelectorAll('.languages button').forEach(b=>b.addEventListener('click',()=>switchLanguage(b.id)));let initial='en';try{const saved=localStorage.getItem('language');initial=['en','es','fr'].includes(saved)?saved:'en'}catch{}setLanguage(initial);document.getElementById('year').textContent=new Date().getFullYear();

const visual=document.querySelector('.hero-visual');
const mapImage=document.querySelector('.hero-map');
const logoSlide=document.querySelector('.hero-logo-slide');
const slideshowToggle=document.getElementById('slideshow-toggle');
let slideIndex=0;
const slideStates=['is-logo','is-accounting','is-dian','is-map'];
const slides=[logoSlide,document.querySelector('.hero-accounting'),document.querySelector('.hero-dian'),mapImage];
const captions=[null,
 {en:['PAYROLL FOR COLOMBIAN COMPANIES','Your team.<br>An organized payroll.'],es:['NÓMINA PARA EMPRESAS EN COLOMBIA','Tu equipo.<br>Una nómina organizada.'],fr:['PAIE DES ENTREPRISES EN COLOMBIE','Votre équipe.<br>Une paie organisée.']},
 {en:['TAX SUPPORT FOR FOREIGN NATIONALS','Your obligations.<br>Personal guidance.'],es:['IMPUESTOS PARA EXTRANJEROS','Tus obligaciones.<br>Atención personal.'],fr:['FISCALITÉ POUR LES ÉTRANGERS','Vos obligations.<br>Un suivi personnalisé.']},
 {en:['MEDELLÍN · COLOMBIA','Local expertise.<br>Wherever you are.'],es:['MEDELLÍN · COLOMBIA','Conocimiento local.<br>Donde estés.'],fr:['MEDELLÍN · COLOMBIE','Une expertise locale.<br>Où que vous soyez.']}];
function showSlide(index){
 slideIndex=index;
 slideStates.forEach((state,i)=>visual.classList.toggle(state,i===index));
 slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===index);slide.setAttribute('aria-hidden',String(i!==index));});
 visual.classList.toggle('is-sector',!['is-logo','is-map'].includes(slideStates[index]));
 const label=document.querySelector('.image-caption>span');
 const title=document.querySelector('.image-caption h2');
 for(const lang of ['en','es','fr']){
  const text=captions[index]?.[lang]||['',''];
  label.dataset[lang]=text[0];title.dataset[lang]=text[1];
 }
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
 slideshowToggle.dataset.fr=slideshowPaused?'Reprendre le diaporama':'Mettre le diaporama en pause';
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
