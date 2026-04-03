import React from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { DollarSign, FileText, Landmark, Moon, Plane, Send, Smartphone, Sun } from 'lucide-react';

function clsx(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ThemeContext = React.createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch {}

    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.body.style.backgroundColor = theme === 'dark' ? '#030712' : '#f8fafc';
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

const baseUrl =
  typeof import.meta !== 'undefined' &&
  import.meta &&
  import.meta.env &&
  typeof import.meta.env.BASE_URL === 'string'
    ? import.meta.env.BASE_URL
    : '/';

function withBase(path) {
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

const images = {
  visa: withBase('visa-services.png'),
  passport: withBase('passport-renewal.png'),
  traffic: withBase('traffic-ticket.png'),
  property: withBase('property-tax.png'),
  registration: withBase('registration.png'),
  consultation: withBase('consultation.png'),
  hero: withBase('main-hero.png'),
  logo: withBase('logo.png'),
  ncb: withBase('NCB.png'),
  scotia: withBase('SCOTIABANK.png'),
  jmmb: withBase('JMMB_Bank.png'),
  lynk: withBase('LYNK.png'),
  westernUnion: withBase('WESTERN_UNION.png'),
  moneygram: withBase('moneygram.png'),
};

const contact = {
  phoneDisplay: '(658) 217-7952',
  whatsappBase: 'https://wa.me/16582177952',
};

const businessHours = [
  ['Sunday', '8:00 AM - 4:00 PM'],
  ['Monday - Thursday', '8:00 AM - 6:00 PM'],
  ['Friday', '8:00 AM - 4:00 PM'],
  ['Saturday', 'Closed'],
];

function getCurrentBusinessStatus() {
  const now = new Date();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  const ranges = {
    Sunday: [8 * 60, 16 * 60],
    Monday: [8 * 60, 18 * 60],
    Tuesday: [8 * 60, 18 * 60],
    Wednesday: [8 * 60, 18 * 60],
    Thursday: [8 * 60, 18 * 60],
    Friday: [8 * 60, 16 * 60],
  };

  const range = ranges[day];
  if (!range) {
    return { isOpen: false, today: day };
  }

  const [openMinutes, closeMinutes] = range;
  return {
    isOpen: minutesNow >= openMinutes && minutesNow < closeMinutes,
    today: day,
  };
}

const paymentPages = [
  {
    path: '/payments/bank-transfer',
    title: 'Bank Transfer',
    subtitle: 'Direct bank payment option',
    icon: Landmark,
    description:
      'Choose one of the bank accounts below, then send your proof of payment on WhatsApp so we can confirm receipt quickly.',
    details: [
      'Use the exact account details shown below',
      'Double-check the amount and account number before sending',
      'Send your proof of payment after transfer',
    ],
    steps: [
      'Choose the bank account you want to use',
      'Complete the transfer using your banking app or at branch',
      'Send your payment confirmation on WhatsApp',
    ],
    accounts: [
      {
        heading: 'National Commercial Bank',
        fields: [
          ['Bank Name', 'National Commercial Bank'],
          ['Bank Branch', 'Constant Spring'],
          ['Account Type', 'JMD Savings'],
          ['Account Holder', 'Shinel Lattibeaudiere-Henry'],
          ['Account Number', '334546551'],
        ],
      },
      {
        heading: 'Scotiabank',
        fields: [
          ['Bank Name', 'Scotiabank'],
          ['Bank Branch', 'Constant Spring 21725'],
          ['Account Type', 'JMD Chequing'],
          ['Account Holder', 'Shinel Lattibeaudiere-Henry'],
          ['Account Number', '000008073'],
        ],
      },
      {
        heading: 'JMMB',
        fields: [
          ['Bank Name', 'JMMB'],
          ['Bank Branch', 'Knutsford Boulevard'],
          ['Account Type', 'JMD Savings'],
          ['Account Holder', 'Shinel Lattibeaudiere-Henry'],
          ['Account Number', '000300231752'],
        ],
      },
    ],
  },
  {
    path: '/payments/western-union',
    title: 'Western Union',
    subtitle: 'Send funds through Western Union',
    icon: Send,
    description:
      'Use the receiver details below when sending by Western Union, then share your receipt and transfer reference with us.',
    details: [
      'Use the exact receiver name shown below',
      'Keep your transfer receipt and reference number',
      'Send confirmation after payment is completed',
    ],
    steps: [
      'Use the receiver details below when making payment',
      'Make the payment at a Western Union location or online',
      'Share the transfer number and receipt with us',
    ],
    accounts: [
      {
        heading: 'Receiver Details',
        fields: [
          ['Name', 'Shinel Lattibeaudiere Henry'],
          ['Mobile', '658-217-7952'],
          ['Address', 'Twenty-Nine Auburn Avenue'],
        ],
      },
    ],
  },
  {
    path: '/payments/moneygram',
    title: 'MoneyGram',
    subtitle: 'Quick transfer with reference tracking',
    icon: DollarSign,
    description:
      'Use the receiver details below for MoneyGram payments, then send the receipt and reference number to us for confirmation.',
    details: [
      'Use the exact receiver details shown below',
      'Hold on to your MoneyGram reference number',
      'Send proof of payment for faster confirmation',
    ],
    steps: [
      'Use the receiver details below when sending funds',
      'Send the payment through MoneyGram',
      'WhatsApp the reference number and receipt to us',
    ],
    accounts: [
      {
        heading: 'Receiver Details',
        fields: [
          ['Name', 'Shinel Lattibeaudiere Henry'],
          ['Mobile', '658-217-7952'],
          ['Address', 'Twenty-Nine Auburn Avenue'],
        ],
      },
    ],
  },
  {
    path: '/payments/lynk',
    title: 'LYNK',
    subtitle: 'Fast digital wallet payment',
    icon: Smartphone,
    description:
      'Use the LYNK handle below to send your payment, then share a screenshot of the completed transfer on WhatsApp.',
    details: [
      'Confirm the amount before sending',
      'Use the exact LYNK handle shown below',
      'Send your screenshot after transfer',
    ],
    steps: [
      'Open the LYNK app and enter the handle below',
      'Complete the transfer with the correct amount',
      'Send the payment screenshot on WhatsApp',
    ],
    accounts: [
      {
        heading: 'LYNK Details',
        fields: [['Handle', '@shinel-henry']],
      },
    ],
  },
];

const services = {
  travel: [
    {
      title: 'Visa Services',
      subtitle: 'Application & Renewal Help',
      path: '/visa-services',
      image: images.visa,
      description:
        'Support for visa applications, renewals, and Jamaican passport renewal with a smooth guided process.',
      countries: [
        { title: 'USA Visa', path: '/visa-services/usa', flag: '🇺🇸' },
        { title: 'Canada Visa', path: '/visa-services/canada', flag: '🇨🇦' },
        { title: 'UK Visa', path: '/visa-services/uk', flag: '🇬🇧' },
        { title: 'Schengen Visa', path: '/visa-services/schengen', flag: '🇪🇺' },
      ],
    },
    {
      title: 'Passport Renewal',
      subtitle: 'Jamaican Passport Support',
      path: '/passport-renewal',
      image: images.passport,
      description:
        'Guidance on the renewal process and the details needed before you submit your passport request.',
    },
  ],
  admin: [
    {
      title: 'Traffic Ticket Payment',
      subtitle: 'Avoid the stress of a court date',
      path: '/traffic-ticket-payment',
      image: images.traffic,
      description:
        'Lost your ticket? We can help find the details for you and assist with payment once the due date has not passed.',
    },
    {
      title: 'Property Tax Payment',
      subtitle: 'Easy Payment Support',
      path: '/property-tax-payment',
      image: images.property,
      description:
        'We assist with property tax payment requests and provide support with the details needed to complete the process properly.',
    },
    {
      title: 'Motor Vehicle Registration',
      subtitle: 'Simple Registration Guidance',
      path: '/motor-vehicle-registration',
      image: images.registration,
      description:
        'Support with understanding the information and steps needed before moving ahead with your registration process.',
    },
    {
      title: 'Consultation',
      subtitle: 'Speak With Us First',
      path: '/consultation',
      image: images.consultation,
      description:
        'Book a consultation if you need help choosing the right service or understanding what is required before getting started.',
    },
  ],
};

const serviceFaqs = {
  visaServices: [
    {
      question: 'What does your visa assistance service include?',
      answer:
        'We guide you through the entire process—application form completion, document review, appointment booking, and submission support to improve your chances of approval.',
    },
    {
      question: 'Which visa page should I choose?',
      answer:
        'Choose the country page that matches your destination so you can see the correct fees, forms, and next steps.',
    },
    {
      question: 'Do you guarantee visa approval?',
      answer:
        'No. Visa decisions are made by the embassy. However, we ensure your application is accurate, complete, and professionally prepared to maximize your chances.',
    },
    {
      question: 'Do I need to complete a form before contacting you?',
      answer:
        'The form is the fastest way to get started, but you can also message us on WhatsApp if you need guidance first.',
    },
    {
      question: 'Do you have a physical location?',
      answer:
        'No, we operate fully online for your convenience. All documents are securely handled through our digital process.',
    },
    {
      question: 'What documents will I need?',
      answer:
        'Requirements vary by country, but generally include valid passport, bank statements, employment letter, and travel itinerary. Each visa page will have the supporting documents needed for that visa type.',
    },
    {
      question: 'Are visa fees included in the prices shown?',
      answer:
        'Yes. The page pricing will guide you on the expected cost structure for that service. Contact us if you want confirmation before proceeding.',
    },
    {
      question: 'When should I start my application?',
      answer:
        'We recommend starting at least 2 to 3 months before your intended travel date to allow enough time for processing.',
    },
    {
      question: 'What happens after I submit my documents?',
      answer:
        'We review everything, prepare your application, and guide you through the next steps including appointment booking and submission.',
    },
    {
      question: 'Do you offer refunds if my visa is denied?',
      answer:
        'Service fees are non-refundable once work has started, as they cover time and expertise, not the visa decision.',
    },
    {
      question: 'What is your service turnaround time (SLA)?',
      answer:
        'Our standard turnaround time is 2 to 3 business days after receiving all required documents. Urgent requests may be accommodated at an additional cost of JMD$5,000.',
    },
    {
      question: 'Can I contact you during the process?',
      answer:
        'Yes, we remain available throughout the process and provide updates to ensure you are informed every step of the way.',
    },
  ],
  passportRenewal: [
    {
      question: 'Who qualifies for our passport renewal service?',
      answer:
        'You qualify if your passport number begins with “A”, you have not legally changed your name, your signature remains the same, your passport was issued on or after September 3, 2001, and you are in possession of your current passport.',
    },
    {
      question: 'What if I don’t meet these requirements?',
      answer: 'Unfortunately your renewal has to be done by visiting a PICA location.',
    },
    {
      question: 'How do I begin?',
      answer: 'Use the Passport Renewal form on the page and we will guide you through the next steps.',
    },
    {
      question: 'What happens after I submit my documents?',
      answer:
        'Once your documents are submitted, we review everything, prepare your application, and guide you through the next steps including submission.',
    },
    {
      question: 'Do you offer delivery services?',
      answer:
        'Yes, we can assist with delivery options to ensure your passport is returned to you safely and conveniently.',
    },
    {
      question: 'What is your service turnaround time (SLA)?',
      answer:
        'Our standard turnaround time is 2 to 3 business days after receiving all required documents. Urgent requests may be accommodated at an additional cost of JMD$5,000.',
    },
    {
      question: 'Can I contact you during the process?',
      answer:
        'Yes, we remain available throughout the process and provide updates to ensure you are informed every step of the way.',
    },
  ],
  trafficTicket: [
    {
      question: 'Can you help if I lost my ticket?',
      answer: 'Yes, we can assist with lookup support once the due date has not already passed.',
    },
    {
      question: 'Can overdue tickets still be handled?',
      answer:
        'Support depends on the ticket status, so message us first if the due date has already passed.',
    },
    {
      question: 'How do I start?',
      answer: 'Contact us with the relevant details so we can advise on the next step.',
    },
    {
      question: 'What is your service turnaround time (SLA)?',
      answer: 'Our standard turnaround time is 24 to 48 hours after receiving all required details.',
    },
    {
      question: 'Can I contact you during the process?',
      answer:
        'Yes, we remain available throughout the process and provide updates to ensure you are informed every step of the way.',
    },
  ],
  propertyTax: [
    {
      question: 'How do I start a property tax payment request?',
      answer: 'Complete the Property Tax form on the page so we can review the details and guide you.',
    },
    {
      question: 'Can I contact you before filling out the form?',
      answer:
        'Yes. You can message us first if you need help understanding what information is required.',
    },
    {
      question: 'Will I receive confirmation after payment?',
      answer: 'Yes, we will guide you on confirmation and next steps once your request is processed.',
    },
    {
      question: 'What is your service turnaround time (SLA)?',
      answer: 'Our standard turnaround time is 24 to 48 hours after receiving all required details.',
    },
    {
      question: 'Can I contact you during the process?',
      answer:
        'Yes, we remain available throughout the process and provide updates to ensure you are informed every step of the way.',
    },
  ],
  vehicleRegistration: [
    {
      question: 'What does your service include?',
      answer:
        'Our service includes preparing and submitting your registration documents, paying the required fee, and delivering your Electronic Motor Vehicle Registration Certificate (eMVRC) to you.',
    },
    {
      question: 'Can I reach out before proceeding?',
      answer: 'Yes, message us if you want to understand the process before moving ahead.',
    },
    {
      question: 'What documents are required to register my vehicle?',
      answer:
        'You will need a valid driver’s license, fitness, insurance, and a picture of your most recent registration certificate. We will guide you if anything is missing.',
    },
    {
      question: 'What is your service turnaround time (SLA)?',
      answer: 'Our standard turnaround time is 24 to 48 hours after receiving all required details.',
    },
    {
      question: 'Can I contact you during the process?',
      answer:
        'Yes, we remain available throughout the process and provide updates to ensure you are informed every step of the way.',
    },
  ],
  consultation: [
    {
      question: 'When should I book a consultation?',
      answer:
        'Book a consultation if you are unsure which service you need or want to ask questions before getting started.',
    },
    {
      question: 'Can the consultation help me choose the right service?',
      answer: 'Yes, that is one of the main reasons for booking a consultation.',
    },
    {
      question: 'How do I get started?',
      answer: 'Send us a message on WhatsApp and we will guide you on the best next step.',
    },
  ],
};

const visaCountryPages = [
  {
    path: '/visa-services/usa',
    title: 'USA Visa',
    subtitle: 'Application & Renewal Help',
    image: images.visa,
    description:
      'Use this page for USA visa support, whether it is a first-time application or a renewal.',
    prices: [
      { label: 'First Time Applicant', price: 'J$39,000' },
      { label: 'Renewal', price: 'J$41,000' },
    ],
    formButtons: [
      { label: 'USA Visa First Time Applicant', href: 'https://forms.gle/Z1Y7xnGtJyDhGXx5A' },
      { label: 'USA Visa Renewal', href: 'https://forms.gle/Wobbo4sFAWc7LcKW9' },
    ],
  },
  {
    path: '/visa-services/canada',
    title: 'Canada Visa',
    subtitle: 'Application & Renewal Help',
    image: images.visa,
    description:
      'Use this page for Canada visa inquiries so you can understand the support available before filling out a form.',
    prices: [
      { label: 'First Time Applicant', price: 'J$33,000' },
      { label: 'Renewal', price: 'J$34,000' },
    ],
    formButtons: [
      { label: 'CA Visa First Time Applicant', href: 'https://forms.gle/4GcBMwTbwgjQPPbA7' },
      { label: 'CA Visa Renewal', href: 'https://forms.gle/hgfjxr6fsSLprgpCA' },
      { label: 'CA Visa (Minor)', href: 'https://forms.gle/DiRfoUQ1CxS5Q6ry6' },
    ],
  },
  {
    path: '/visa-services/uk',
    title: 'UK Visa',
    subtitle: 'Application & Renewal Help',
    image: images.visa,
    description:
      'Use this page for UK visa support so you can review the fees expected and prepare the right information.',
    prices: [
      { label: 'Mandatory Form', price: 'J$1,500' },
      { label: 'Processing Fee', price: 'J$10,000' },
      { label: '6 Months Visa Fee', price: 'J$25,000' },
      { label: '2 Years Visa Fee', price: 'J$91,117' },
      { label: '5 Years Visa Fee', price: 'J$162,631' },
      { label: '10 Years Visa Fee', price: 'J$203,093' },
    ],
    formButtons: [{ label: 'UK Visa Form', href: 'https://forms.gle/R9sqxTgWsKGEsmEb6' }],
  },
  {
    path: '/visa-services/schengen',
    title: 'Schengen Visa',
    subtitle: 'Application & Renewal Help',
    image: images.visa,
    description:
      'Use this page for Schengen visa support so you can review the process and get ready before submitting a request.',
    prices: [{ label: 'Schengen Visa', price: 'Prices Coming Soon' }],
    formButtons: [{ label: 'Coming Soon', href: '#' }],
  },
];

function buildWhatsAppLink(message) {
  return `${contact.whatsappBase}?text=${encodeURIComponent(message)}`;
}

function paymentPathForMethod(method) {
  const pathMap = {
    'Bank Transfer': '/payments/bank-transfer',
    'Western Union': '/payments/western-union',
    MoneyGram: '/payments/moneygram',
    LYNK: '/payments/lynk',
  };
  return pathMap[method] || '/payments';
}

function getPaymentLogo(title) {
  const logoMap = {
    'Bank Transfer': images.ncb,
    'Western Union': images.westernUnion,
    MoneyGram: images.moneygram,
    LYNK: images.lynk,
  };
  return logoMap[title] || null;
}

function getAccountLogo(heading) {
  const logoMap = {
    'National Commercial Bank': images.ncb,
    Scotiabank: images.scotia,
    JMMB: images.jmmb,
    'LYNK Details': images.lynk,
    'Receiver Details': null,
  };
  return logoMap[heading] || null;
}

function getRouteFaqs(pathname) {
  const faqMap = {
    '/visa-services': serviceFaqs.visaServices,
    '/passport-renewal': serviceFaqs.passportRenewal,
    '/traffic-ticket-payment': serviceFaqs.trafficTicket,
    '/property-tax-payment': serviceFaqs.propertyTax,
    '/motor-vehicle-registration': serviceFaqs.vehicleRegistration,
    '/consultation': serviceFaqs.consultation,
  };
  return faqMap[pathname] || null;
}

function sectionCardClasses(isDark) {
  return clsx(
    'rounded-3xl border shadow-xl transition-colors duration-300',
    isDark ? 'border-white/10 bg-white/5 shadow-black/20' : 'border-slate-200 bg-white shadow-slate-200/70'
  );
}

function subtlePanelClasses(isDark) {
  return clsx(
    'rounded-2xl border transition-colors duration-300',
    isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'
  );
}

function runDevTests() {
  if (typeof import.meta === 'undefined' || !import.meta.env || !import.meta.env.DEV) return;

  console.assert(paymentPathForMethod('LYNK') === '/payments/lynk', 'LYNK route should resolve');
  console.assert(paymentPathForMethod('Other') === '/payments', 'Unknown payment methods should fall back');
  console.assert(buildWhatsAppLink('hello world').includes('hello%20world'), 'WhatsApp link should encode spaces');
  console.assert(withBase('logo.png').includes('logo.png'), 'withBase should preserve file name');
  console.assert(getPaymentLogo('LYNK')?.includes('LYNK.png'), 'LYNK logo should resolve');
  console.assert(getAccountLogo('JMMB')?.includes('JMMB_Bank.png'), 'JMMB logo should resolve');
  console.assert(typeof Plane === 'function', 'Plane icon should be available');
  console.assert(typeof FileText === 'function', 'FileText icon should be available');
  console.assert(Array.isArray(getRouteFaqs('/passport-renewal')), 'Route FAQs should resolve');
}

runDevTests();

function PaymentButtons() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const options = [
    { label: 'Bank Transfer', icon: Landmark },
    { label: 'Western Union', icon: Send },
    { label: 'MoneyGram', icon: DollarSign },
    { label: 'LYNK', icon: Smartphone },
  ];

  return (
    <div
      className={clsx(
        'mt-4 rounded-3xl border p-4 shadow-xl transition-colors duration-300',
        isDark
          ? 'border-emerald-400/10 bg-gradient-to-br from-emerald-500/5 via-slate-900 to-slate-900 shadow-black/20'
          : 'border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 shadow-slate-200/70'
      )}
    >
      <div className={clsx('text-sm uppercase tracking-widest', isDark ? 'text-emerald-300' : 'text-emerald-700')}>
        How You Can Pay
      </div>
      <div className="mt-1 text-lg font-bold">Flexible Payment Options</div>
      <p className={clsx('mt-2 max-w-xl text-sm leading-6', isDark ? 'text-slate-300' : 'text-slate-600')}>
        Choose your preferred method to view payment details.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map(({ label, icon: Icon }) => (
          <Link
            key={label}
            to={paymentPathForMethod(label)}
            className={clsx(
              'flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition',
              isDark
                ? 'border-white/10 bg-white/5 text-slate-100 hover:bg-white/10'
                : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
            )}
            aria-label={`View ${label} payment details`}
          >
            <Icon className={clsx('h-5 w-5', isDark ? 'text-emerald-300' : 'text-emerald-600')} />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FaqSection({ faqs = [] }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!faqs.length) return null;

  return (
    <div className={clsx(sectionCardClasses(isDark), 'p-5')}>
      <div className={clsx('text-sm font-semibold uppercase tracking-widest', isDark ? 'text-emerald-300' : 'text-emerald-700')}>
        FAQs
      </div>
      <div className="mt-2 text-2xl font-bold">Frequently Asked Questions</div>
      <div className="mt-4 grid gap-3">
        {faqs.map((item) => (
          <div
            key={item.question}
            className={clsx(
              'rounded-2xl border px-4 py-4 transition-colors duration-300',
              isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'
            )}
          >
            <div className="text-base font-bold">{item.question}</div>
            <p className={clsx('mt-2 text-sm leading-6', isDark ? 'text-slate-300' : 'text-slate-600')}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Layout({ children }) {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const showHomeButton = pathname !== '/';
  const isPaymentMethodPage = paymentPages.some((page) => page.path === pathname);
  const isDark = theme === 'dark';
  const faqs = getRouteFaqs(pathname);

  return (
    <div
      className={clsx(
        'min-h-screen transition-colors duration-300',
        isDark ? 'bg-[#030712] text-white' : 'bg-slate-50 text-slate-900'
      )}
    >
      <header
        className={clsx(
          'relative overflow-hidden transition-colors duration-300',
          isDark
            ? 'bg-[linear-gradient(135deg,#020617_0%,#0f172a_60%,#3b0764_100%)]'
            : 'bg-[linear-gradient(135deg,#ffffff_0%,#e0f2fe_55%,#fae8ff_100%)]'
        )}
      >
        <div className="relative mx-auto max-w-7xl px-5 py-6 md:px-10 lg:px-12">
          <nav
            className={clsx(
              'mb-6 flex flex-col gap-4 rounded-3xl border px-5 py-4 shadow-2xl transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between sm:px-6',
              isDark
                ? 'border-sky-400/15 bg-slate-900/80 shadow-fuchsia-950/20'
                : 'border-slate-200 bg-white/90 shadow-slate-300/40'
            )}
          >
            <Link to="/" className="flex min-w-0 items-center gap-3 sm:gap-4" aria-label="Go to home page">
              <img
                src={images.logo}
                alt="Go Via Logo"
                className="h-16 w-16 flex-none object-contain drop-shadow-lg sm:h-22 sm:w-22"
              />
              <div className="min-w-0">
                <div className="text-xl font-black leading-none tracking-tight sm:text-4xl">
                  <span className="text-sky-400">Go Via</span>{' '}
                  <span className="text-fuchsia-400">Travel Services</span>{' '}
                  <span className="text-fuchsia-400">+</span>
                </div>
                <div
                  className={clsx(
                    'mt-1 text-sm italic leading-relaxed sm:text-base',
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  )}
                >
                  One Service. Every Step Covered.
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                onClick={toggleTheme}
                className={clsx(
                  'inline-flex items-center justify-center rounded-2xl border px-4 py-2.5 text-sm font-semibold transition',
                  isDark
                    ? 'border-white/15 bg-white/5 text-yellow-300 hover:bg-white/10'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                )}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                type="button"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {showHomeButton ? (
                <Link
                  to="/"
                  className={clsx(
                    'inline-flex items-center justify-center rounded-2xl border px-5 py-2.5 text-sm font-semibold transition',
                    isDark
                      ? 'border-white/15 bg-white/5 text-slate-100 hover:bg-white/10'
                      : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                  )}
                >
                  Home
                </Link>
              ) : null}
            </div>
          </nav>

          {children}

          {pathname !== '/' && !isPaymentMethodPage ? (
            <div className="mt-6 space-y-6">
              <PaymentButtons />
              {faqs ? <FaqSection faqs={faqs} /> : null}
            </div>
          ) : null}
        </div>
      </header>

      <footer
        className={clsx(
          'border-t transition-colors duration-300',
          isDark ? 'border-white/10 bg-slate-900/60' : 'border-slate-200 bg-white'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div
                className={clsx(
                  'text-sm font-semibold uppercase tracking-widest',
                  isDark ? 'text-sky-300' : 'text-sky-700'
                )}
              >
                Ready to get started?
              </div>
              <h3 className="mt-2 text-3xl font-black md:text-4xl">Book a Consultation Today</h3>
             
            </div>

            <div
              className={clsx(
                'rounded-3xl border p-5 text-center shadow-2xl transition-colors duration-300',
                isDark
                  ? 'border-fuchsia-400/15 bg-gradient-to-b from-slate-900 to-slate-950 shadow-fuchsia-950/20'
                  : 'border-fuchsia-200 bg-gradient-to-b from-white to-fuchsia-50 shadow-slate-300/40'
              )}
            >
              <div className={clsx('text-sm uppercase tracking-wider', isDark ? 'text-fuchsia-300' : 'text-fuchsia-700')}>
                <span>Call or WhatsApp</span>
              </div>
              <div className="mt-2 text-3xl font-black tracking-tight">{contact.phoneDisplay}</div>
              <div
                className={clsx(
                  'mt-4 rounded-2xl border px-4 py-4 text-left',
                  isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white/80'
                )}
              >
                {(() => {
                  const { isOpen, today } = getCurrentBusinessStatus();
                  return (
                    <>
                      <div className="flex items-center justify-between gap-3">
                        <div className={clsx('text-xs font-semibold uppercase tracking-widest', isDark ? 'text-slate-300' : 'text-slate-600')}>
                          Business Hours
                        </div>
                        <div
                          className={clsx(
                            'rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider',
                            isOpen
                              ? 'bg-green-500/15 text-green-500'
                              : 'bg-red-500/15 text-red-500'
                          )}
                        >
                          {isOpen ? 'Open Now' : 'Closed Now'}
                        </div>
                      </div>
                      <div className="mt-3 space-y-2">
                        {businessHours.map(([day, hours]) => {
                          const isToday =
                            (day === today) ||
                            (day === 'Monday - Thursday' && ['Monday', 'Tuesday', 'Wednesday', 'Thursday'].includes(today));

                          return (
                            <div key={day} className="flex items-center justify-between gap-4 text-sm">
                              <span
                                className={clsx(
                                  isDark ? 'text-slate-300' : 'text-slate-600',
                                  isToday && 'font-bold'
                                )}
                              >
                                {day}
                              </span>
                              <span
                                className={clsx(
                                  'font-semibold',
                                  hours === 'Closed' && 'text-red-500',
                                  isToday && 'font-bold'
                                )}
                              >
                                {hours}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })()}
              </div>
              <a
                href={contact.whatsappBase}
                className="mt-4 inline-block rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white shadow-xl shadow-green-500/30 transition hover:scale-[1.02]"
              >
                Message Now
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ service }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={clsx(sectionCardClasses(isDark), 'overflow-hidden transition hover:-translate-y-1')}>
      <img src={service.image} alt={service.title} loading="lazy" className="h-32 w-full object-cover" />
      <div className="p-4">
        <div className="text-lg font-bold">{service.title}</div>
        <div className={clsx('mt-1 text-sm', isDark ? 'text-sky-300' : 'text-sky-700')}>
          {service.subtitle}
        </div>
        <p className={clsx('mt-2 line-clamp-4 text-sm leading-6', isDark ? 'text-slate-300' : 'text-slate-600')}>
          {service.description}
        </p>
        <Link
          to={service.path}
          className={clsx(
            'mt-3 inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition',
            isDark ? 'bg-sky-500/20 text-sky-300 hover:bg-sky-500/30' : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
          )}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

function ProcessStrip() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const steps = [
    ['1', 'Choose Service', 'Select the service page that matches your need.'],
    ['2', 'Submit Form', 'Complete the form or contact us on WhatsApp.'],
    ['3', 'Get Assistance', 'We guide you through the next steps clearly.'],
  ];

  return (
    <section className="mt-5 grid gap-3 md:grid-cols-3">
      {steps.map(([number, title, text]) => (
        <div key={title} className={clsx(subtlePanelClasses(isDark), 'p-4 shadow-lg')}>
          <div
            className={clsx(
              'mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold',
              isDark ? 'bg-sky-400/20 text-sky-300' : 'bg-sky-100 text-sky-700'
            )}
          >
            {number}
          </div>
          <div className="text-base font-bold">{title}</div>
          <p className={clsx('mt-1 text-sm leading-6', isDark ? 'text-slate-300' : 'text-slate-600')}>
            {text}
          </p>
        </div>
      ))}
    </section>
  );
}

function ServicesSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="services" className="mx-auto max-w-7xl px-1 py-8 md:px-0">
      <div className="mb-7 text-center">
        <div className={clsx('text-sm font-semibold uppercase tracking-widest', isDark ? 'text-fuchsia-300' : 'text-fuchsia-700')}>
          Our Services
        </div>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Everything You Need, Handled in One Place</h2>
        <p className={clsx('mx-auto mt-3 max-w-3xl', isDark ? 'text-slate-300' : 'text-slate-600')}>
          Browse each service page for details, pricing, payment methods, and next steps.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div
          className={clsx(
            'rounded-3xl border p-5 shadow-2xl transition-colors duration-300',
            isDark
              ? 'border-sky-400/20 bg-gradient-to-b from-sky-500/15 to-slate-900/50 shadow-sky-950/10'
              : 'border-sky-200 bg-gradient-to-b from-sky-50 to-white shadow-slate-200/70'
          )}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className={clsx('flex h-12 w-12 items-center justify-center rounded-2xl', isDark ? 'bg-sky-400/20' : 'bg-sky-100')}>
              <Plane className={clsx('h-6 w-6', isDark ? 'text-sky-300' : 'text-sky-700')} />
            </div>
            <div>
              <div className={clsx('text-sm uppercase tracking-wider', isDark ? 'text-sky-200' : 'text-sky-700')}>
                Travel Services
              </div>
              <div className="text-2xl font-bold">Visa, Passport & Travel Support</div>
            </div>
          </div>

          <div className="grid gap-3">
            {services.travel.map((item) => (
              <ServiceCard key={item.path} service={item} />
            ))}
          </div>
        </div>

        <div
          className={clsx(
            'rounded-3xl border p-5 shadow-2xl transition-colors duration-300',
            isDark
              ? 'border-fuchsia-400/20 bg-gradient-to-b from-fuchsia-500/15 to-slate-900/50 shadow-fuchsia-950/10'
              : 'border-fuchsia-200 bg-gradient-to-b from-fuchsia-50 to-white shadow-slate-200/70'
          )}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className={clsx('flex h-12 w-12 items-center justify-center rounded-2xl', isDark ? 'bg-fuchsia-400/20' : 'bg-fuchsia-100')}>
              <FileText className={clsx('h-6 w-6', isDark ? 'text-fuchsia-300' : 'text-fuchsia-700')} />
            </div>
            <div>
              <div className={clsx('text-sm uppercase tracking-wider', isDark ? 'text-fuchsia-200' : 'text-fuchsia-700')}>
                Admin Services
              </div>
              <div className="text-2xl font-bold">Payments & Practical Support</div>
            </div>
          </div>

          <div className="grid gap-3">
            {services.admin.map((item) => (
              <ServiceCard key={item.path} service={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <section className="mx-auto max-w-7xl px-1 md:px-0">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={images.hero}
            alt="Tropical vacation destination"
            fetchPriority="high"
            className="h-[22rem] w-full object-cover sm:h-[26rem] md:h-[30rem] lg:h-[34rem]"
          />
          <div
            className={clsx(
              'pointer-events-none absolute inset-0',
              isDark
                ? 'bg-gradient-to-b from-black/40 via-black/30 to-black/70'
                : 'bg-gradient-to-b from-black/20 via-black/10 to-black/60'
            )}
          />

          <div className="absolute inset-x-0 bottom-0 px-4 pb-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                Reliable <span className="text-sky-400">Travel</span> and{' '}
                <span className="text-fuchsia-400">Admin</span> Services.
              </h1>

              <p className="mx-auto mt-2 max-w-2xl text-xs text-white/90 sm:text-sm md:text-base">
                From visa support and passport renewal to traffic ticket payment and property tax assistance,
                Go Via Travel Services + helps you handle important tasks quickly and confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="mx-auto max-w-7xl px-1 pt-2 md:px-0">
        <ProcessStrip />
        <PaymentButtons />

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ['Fast Response', 'Quick support when you need help'],
            ['Secure Process', 'Guided, simple and professional'],
            ['Trusted Service', 'Serving clients with care'],
          ].map(([title, text]) => (
            <div
              key={title}
              className={clsx(
                'rounded-2xl border p-4 shadow-xl transition-colors duration-300',
                isDark
                  ? 'border-white/10 bg-gradient-to-b from-white/10 to-slate-900/40 shadow-black/20'
                  : 'border-slate-200 bg-gradient-to-b from-white to-slate-100 shadow-slate-200/70'
              )}
            >
              <div className="text-base font-bold">{title}</div>
              <div className={clsx('mt-1 text-sm', isDark ? 'text-slate-300' : 'text-slate-600')}>
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ServicePage({ disclaimer, title, subtitle, image, description, prices, formButtons, showFormSection = true, children }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr] xl:gap-6">
      <div className="grid gap-4">
        <div className={clsx(sectionCardClasses(isDark), 'overflow-hidden shadow-2xl')}>
          <img src={image} alt={title} loading="lazy" className="h-56 w-full object-cover lg:h-[19rem]" />
        </div>

        <div className={clsx(sectionCardClasses(isDark), 'p-5')}>
          <div className={clsx('text-sm font-semibold uppercase tracking-widest', isDark ? 'text-sky-300' : 'text-sky-700')}>
            Service Details
          </div>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h1>
          <p className={clsx('mt-2 text-lg font-semibold', isDark ? 'text-fuchsia-300' : 'text-fuchsia-700')}>
            {subtitle}
          </p>
          <p className={clsx('mt-4 max-w-3xl text-base leading-7', isDark ? 'text-slate-300' : 'text-slate-600')}>
            {description}
          </p>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>

      <div className="grid gap-4">
        {prices?.length ? (
          <div
            className={clsx(
              'rounded-3xl border p-5 shadow-2xl transition-colors duration-300',
              isDark
                ? 'border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/15 via-slate-900 to-slate-900 shadow-black/30'
                : 'border-fuchsia-200 bg-gradient-to-br from-white via-fuchsia-50 to-white shadow-slate-200/70'
            )}
          >
            <div className={clsx('text-sm uppercase tracking-widest', isDark ? 'text-fuchsia-300' : 'text-fuchsia-700')}>
              Pricing
            </div>
            {disclaimer ? (
              <div className={clsx('mt-2 text-xs italic', isDark ? 'text-slate-400' : 'text-slate-500')}>
                {disclaimer}
              </div>
            ) : null}
            <div className="mt-2 text-2xl font-bold">Service Fees</div>
            <div className="mt-4 grid gap-3">
              {prices.map((item) => (
                <div
                  key={item.label}
                  className={clsx(
                    'flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 transition-colors duration-300',
                    isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'
                  )}
                >
                  <div className={clsx('text-sm font-medium', isDark ? 'text-slate-200' : 'text-slate-700')}>
                    {item.label}
                  </div>
                  <div className={clsx('text-lg font-black sm:text-xl', isDark ? 'text-white' : 'text-slate-900')}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {showFormSection ? (
          <div
            className={clsx(
              'rounded-3xl border p-5 shadow-2xl transition-colors duration-300',
              isDark
                ? 'border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-black/30'
                : 'border-sky-200 bg-gradient-to-br from-white via-sky-50 to-white shadow-slate-200/70'
            )}
          >
            <div className={clsx('text-sm uppercase tracking-widest', isDark ? 'text-sky-300' : 'text-sky-700')}>
              Google Forms
            </div>
            <div className="mt-2 text-2xl font-bold">Apply Here</div>
            <p className={clsx('mt-3 leading-7', isDark ? 'text-slate-300' : 'text-slate-600')}>
              Select the matching form below to get started.
            </p>
            <div className="mt-4 grid gap-3">
              {formButtons?.length ? (
                formButtons.map((button) => (
                  <a
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-5 py-3 text-center font-semibold text-white shadow-xl shadow-green-500/20 transition hover:scale-[1.01]"
                  >
                    {button.label}
                  </a>
                ))
              ) : (
                <div
                  className={clsx(
                    'rounded-2xl border border-dashed px-4 py-4 text-sm',
                    isDark ? 'border-white/15 bg-white/5 text-slate-300' : 'border-slate-300 bg-slate-50 text-slate-600'
                  )}
                >
                  Form link coming soon.
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PaymentMethodPage({ title, subtitle, icon: Icon, description, details, steps, accounts }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const logoMap = {
    'Bank Transfer': [images.ncb, images.scotia, images.jmmb],
    LYNK: [images.lynk],
    'Western Union': [images.westernUnion],
    MoneyGram: [images.moneygram],
  };
  const logos = logoMap[title] || [];

  return (
    <section className="grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr] xl:gap-6">
      <div className="grid gap-4">
        <div className={clsx(sectionCardClasses(isDark), 'p-5')}>
          <div className={clsx('inline-flex h-12 w-12 items-center justify-center rounded-2xl', isDark ? 'bg-emerald-500/15' : 'bg-emerald-100')}>
            <Icon className={clsx('h-6 w-6', isDark ? 'text-emerald-300' : 'text-emerald-700')} />
          </div>
          <div className={clsx('mt-4 text-sm font-semibold uppercase tracking-widest', isDark ? 'text-emerald-300' : 'text-emerald-700')}>
            Payment Method
          </div>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h1>
          {logos.length ? (
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {logos.map((src, i) => (
                <img key={i} src={src} alt={`${title} logo ${i + 1}`} className="h-12 w-auto object-contain" />
              ))}
            </div>
          ) : null}
          <p className={clsx('mt-2 text-lg font-semibold', isDark ? 'text-fuchsia-300' : 'text-fuchsia-700')}>
            {subtitle}
          </p>
          <p className={clsx('mt-4 max-w-3xl text-base leading-7', isDark ? 'text-slate-300' : 'text-slate-600')}>
            {description}
          </p>
        </div>

        <div className={clsx(sectionCardClasses(isDark), 'p-5')}>
          <div className="text-xl font-bold">Important details</div>
          <div className="mt-4 grid gap-3">
            {details.map((item) => (
              <div
                key={item}
                className={clsx('rounded-2xl px-4 py-3 text-sm', isDark ? 'bg-slate-950/40 text-slate-200' : 'bg-slate-50 text-slate-700')}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {accounts.map((account) => {
            const accountLogo = getAccountLogo(account.heading);
            return (
              <div key={account.heading} className={clsx(sectionCardClasses(isDark), 'p-5')}>
                {accountLogo ? (
                  <div className={clsx('flex items-center justify-start rounded-2xl px-4 py-4', isDark ? 'bg-slate-950/40' : 'bg-slate-50')}>
                    <img src={accountLogo} alt={account.heading} className="h-10 w-auto object-contain sm:h-12" />
                  </div>
                ) : (
                  <div className={clsx('text-lg font-bold', isDark ? 'text-white' : 'text-slate-900')}>
                    {account.heading}
                  </div>
                )}

                <div className="mt-4 grid gap-3">
                  {account.fields.map(([label, value]) => (
                    <div
                      key={`${account.heading}-${label}`}
                      className={clsx(
                        'flex flex-col gap-1 rounded-2xl px-4 py-3 sm:flex-row sm:items-center sm:justify-between',
                        isDark ? 'bg-slate-950/40' : 'bg-slate-50'
                      )}
                    >
                      <div className={clsx('text-xs font-semibold uppercase tracking-widest', isDark ? 'text-slate-400' : 'text-slate-500')}>
                        {label}
                      </div>
                      <div className={clsx('break-all text-sm font-medium sm:max-w-[60%] sm:text-right', isDark ? 'text-slate-100' : 'text-slate-800')}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4">
        <div
          className={clsx(
            'rounded-3xl border p-5 shadow-2xl transition-colors duration-300',
            isDark
              ? 'border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-black/30'
              : 'border-sky-200 bg-gradient-to-br from-white via-sky-50 to-white shadow-slate-200/70'
          )}
        >
          <div className={clsx('text-sm uppercase tracking-widest', isDark ? 'text-sky-300' : 'text-sky-700')}>
            How it works
          </div>
          <div className="mt-2 text-2xl font-bold">Payment Steps</div>
          <div className="mt-4 grid gap-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className={clsx(
                  'flex gap-3 rounded-2xl border p-4',
                  isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'
                )}
              >
                <div
                  className={clsx(
                    'inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold',
                    isDark ? 'bg-sky-400/20 text-sky-300' : 'bg-sky-100 text-sky-700'
                  )}
                >
                  {index + 1}
                </div>
                <div className={clsx('text-sm leading-6', isDark ? 'text-slate-200' : 'text-slate-700')}>
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            'rounded-3xl border p-5 shadow-2xl transition-colors duration-300',
            isDark
              ? 'border-emerald-400/15 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-900 shadow-black/30'
              : 'border-emerald-200 bg-gradient-to-br from-white via-emerald-50 to-white shadow-slate-200/70'
          )}
        >
          <div className={clsx('text-sm uppercase tracking-widest', isDark ? 'text-emerald-300' : 'text-emerald-700')}>
            After Payment
          </div>
          <div className="mt-2 text-2xl font-bold">Send Confirmation</div>
          <p className={clsx('mt-3 leading-7', isDark ? 'text-slate-300' : 'text-slate-600')}>
            After making your payment, send your screenshot, receipt, or reference number on WhatsApp so we can confirm receipt.
          </p>
          <a
            href={buildWhatsAppLink(`Hi, I have completed my payment via ${title}`)}
            className="mt-4 inline-flex items-center justify-center rounded-2xl bg-green-500 px-5 py-3 text-center font-semibold text-white shadow-xl shadow-green-500/20 transition hover:scale-[1.01]"
          >
            Send Payment Confirmation
          </a>
        </div>
      </div>
    </section>
  );
}

function PaymentsOverviewPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="mx-auto max-w-6xl py-4">
      <div className="mb-8 max-w-3xl">
        <div className={clsx('text-sm uppercase tracking-widest', isDark ? 'text-emerald-300' : 'text-emerald-700')}>
          Payment Options
        </div>
        <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Choose a payment method</h1>
        <p className={clsx('mt-3 text-base leading-7', isDark ? 'text-slate-300' : 'text-slate-600')}>
          Select a payment option below to view the payment details and next steps.
        </p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {paymentPages.map(({ title, icon: Icon, path }) => {
          const paymentLogo = getPaymentLogo(title);
          return (
            <Link
              key={path}
              to={path}
              className={clsx(
                'group flex min-h-[110px] items-center justify-center rounded-3xl border px-5 py-5 transition hover:-translate-y-0.5',
                isDark ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-slate-200 bg-white hover:bg-slate-50'
              )}
              aria-label={`View ${title} payment details`}
            >
              {paymentLogo ? (
                <img src={paymentLogo} alt={title} className="max-h-12 w-auto object-contain sm:max-h-14" />
              ) : (
                <div className={clsx('flex items-center gap-3 text-sm font-semibold', isDark ? 'text-slate-100' : 'text-slate-800')}>
                  <Icon className={clsx('h-5 w-5', isDark ? 'text-emerald-300' : 'text-emerald-700')} />
                  {title}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function VisaServicesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ServicePage
      showFormSection={false}
      title="Visa Services"
      subtitle="Application & Renewal Help"
      image={images.visa}
      description="Choose the visa page that matches your destination so you can get country-specific information before submitting a request."
    >
      <div
        className={clsx(
          'rounded-3xl border p-5 shadow-xl transition-colors duration-300',
          isDark
            ? 'border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-black/20'
            : 'border-sky-200 bg-gradient-to-br from-white via-sky-50 to-white shadow-slate-200/70'
        )}
      >
        <div className={clsx('text-sm font-semibold uppercase tracking-widest', isDark ? 'text-sky-300' : 'text-sky-700')}>
          Choose a visa page
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {services.travel[0].countries.map((country) => (
            <Link
              key={country.path}
              to={country.path}
              className={clsx(
                'rounded-2xl border p-3 transition',
                isDark ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-slate-200 bg-white hover:bg-slate-50'
              )}
            >
              <div className="text-2xl">{country.flag}</div>
              <div className={clsx('mt-2 text-lg font-bold', isDark ? 'text-white' : 'text-slate-900')}>
                {country.title}
              </div>
              <div className="mt-2">
                <span
                  className={clsx(
                    'inline-flex items-center justify-center rounded-2xl px-3 py-1.5 text-xs font-semibold',
                    isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-800'
                  )}
                >
                  View details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ServicePage>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          <Route
            path="/payments"
            element={
              <Layout>
                <PaymentsOverviewPage />
              </Layout>
            }
          />

          {paymentPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <Layout>
                  <PaymentMethodPage {...page} />
                </Layout>
              }
            />
          ))}

          <Route
            path="/visa-services"
            element={
              <Layout>
                <VisaServicesPage />
              </Layout>
            }
          />

          {visaCountryPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <Layout>
                  <ServicePage
                    title={page.title}
                    subtitle={page.subtitle}
                    image={page.image}
                    description={page.description}
                    prices={page.prices}
                    formButtons={page.formButtons}
                    disclaimer={
                      page.title === 'USA Visa' || page.title === 'Canada Visa'
                        ? '*Fees listed include our service fee unless otherwise stated.'
                        : undefined
                    }
                  />
                </Layout>
              }
            />
          ))}

          <Route
            path="/passport-renewal"
            element={
              <Layout>
                <ServicePage
                  disclaimer="*Fees listed include our service fee unless otherwise stated."
                  title="Passport Renewal"
                  subtitle="Jamaican Passport Support"
                  image={images.passport}
                  description="Use this page to explain passport renewal support, what clients should have ready, and how they can request assistance."
                  prices={[
                    { label: 'Standard Renewal (7 Days)', price: 'J$11,500' },
                    { label: 'Standard Renewal with Delivery (7 Days)', price: 'J$13,850' },
                    { label: 'Overseas Renewal (Shipping Included)', price: 'J$33,880' },
                    { label: '3-Days Renewal (Delivery)', price: 'J$16,850' },
                    { label: '3-Days Renewal (Pickup)', price: 'J$14,500' },
                  ]}
                  formButtons={[
                    {
                      label: 'Passport Renewal Form',
                      href: 'https://forms.gle/GS3us1hDmaj8ydTY9',
                    },
                  ]}
                />
              </Layout>
            }
          />

          <Route
            path="/traffic-ticket-payment"
            element={
              <Layout>
                <ServicePage
                  showFormSection={false}
                  title="Traffic Ticket Payment"
                  subtitle="Avoid the Stress of a Court Date"
                  image={images.traffic}
                  description="This page is designed for clients who need traffic ticket payment support, including lost ticket lookups where the due date has not passed."
                  prices={[{ label: 'Traffic Ticket Payment', price: 'J$2,500' }]}
                />
              </Layout>
            }
          />

          <Route
            path="/property-tax-payment"
            element={
              <Layout>
                <ServicePage
                  title="Property Tax Payment"
                  subtitle="Easy Payment Support"
                  image={images.property}
                  description="This is where you submit the form needed to start the process for us to pay your property taxes on your behalf"
                  prices={[{ label: 'Property Tax Payment', price: 'J$2,500' }]}
                  formButtons={[
                    { label: 'Property Tax Payment Form', href: 'https://forms.gle/PXYanNZ263Dtn7mu9' },
                  ]}
                />
              </Layout>
            }
          />

          <Route
            path="/motor-vehicle-registration"
            element={
              <Layout>
                <ServicePage
                  showFormSection={false}
                  title="Motor Vehicle Registration"
                  subtitle="Simple Registration Guidance"
                  image={images.registration}
                  description="Use this page if you need guidance on what to prepare before moving ahead with motor vehicle registration support."
                  prices={[{ label: 'Motor Vehicle Registration', price: 'J$3,500' }]}
                />
              </Layout>
            }
          />

          <Route
            path="/consultation"
            element={
              <Layout>
                <ServicePage
                  showFormSection={false}
                  title="Consultation"
                  subtitle="Speak With Us First"
                  image={images.consultation}
                  description="This page is for clients who want to ask questions first or need help identifying the right service before proceeding."
                />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
