import React from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Landmark, Send, DollarSign, Smartphone } from 'lucide-react';

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

const highlights = [
  {
    title: 'Traffic Ticket Payment',
    text: 'Lost your ticket? We can help find the details and assist with payment once the due date has not passed.',
  },
  {
    title: 'Property Tax Payment',
    text: 'Fast and convenient assistance with property tax lookup, payment support, and digital payment receipt guidance.',
  },
  {
    title: 'Visa & Travel Support',
    text: 'Support for visa applications, renewals, passport renewal, and travel planning from start to finish.',
  },
];

const visaCountryPages = [
  {
    path: '/visa-services/usa',
    title: 'USA Visa',
    subtitle: 'Application & Renewal Help',
    image: images.visa,
    description:
      'Use this page for clients interested in USA visa support, whether it is a first-time application or a renewal.',
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
      'Use this page for Canada visa inquiries so clients can understand the support available before filling out a form.',
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
      'Use this page for UK visa support so clients can review the general process and prepare the right information.',
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
      'Use this page for Schengen visa support so clients can review the process and get ready before submitting a request.',
    prices: [{ label: 'Schengen Visa', price: 'Prices Coming Soon' }],
    formButtons: [{ label: 'Schengen Visa Form', href: '#' }],
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

function PaymentButtons() {
  const options = [
    { label: 'Bank Transfer', icon: Landmark },
    { label: 'Western Union', icon: Send },
    { label: 'MoneyGram', icon: DollarSign },
    { label: 'LYNK', icon: Smartphone },
  ];

  return (
    <div className="mt-4 rounded-3xl border border-emerald-400/10 bg-gradient-to-br from-emerald-500/5 via-slate-900 to-slate-900 p-4 shadow-xl shadow-black/20">
      <div className="text-sm uppercase tracking-widest text-emerald-300">How You Can Pay</div>
      <div className="mt-1 text-lg font-bold">Flexible Payment Options</div>
      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
        Choose your preferred method to view payment details.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map(({ label, icon: Icon }) => (
          <Link
            key={label}
            to={paymentPathForMethod(label)}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            aria-label={`View ${label} payment details`}
          >
            <Icon className="h-5 w-5 text-emerald-300" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Layout({ children }) {
  const { pathname } = useLocation();
  const showHomeButton = pathname !== '/';
  const isPaymentMethodPage = paymentPages.some((page) => page.path === pathname);

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <header className="relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_60%,#3b0764_100%)]">
        <div className="relative mx-auto max-w-7xl px-5 py-6 md:px-10 lg:px-12">
          <nav className="mb-6 flex flex-col gap-4 rounded-3xl border border-sky-400/15 bg-slate-900/80 px-5 py-4 shadow-2xl shadow-fuchsia-950/20 sm:flex-row sm:items-center sm:justify-between sm:px-6">
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
                <div className="mt-1 text-sm italic leading-relaxed text-slate-300 sm:text-base">
                  One Service. Every Step Covered.
                </div>
              </div>
            </Link>

            {showHomeButton ? (
              <Link
                to="/"
                className="inline-flex items-center justify-center self-start rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10 sm:self-auto"
              >
                Home
              </Link>
            ) : null}
          </nav>

          {children}

          {pathname !== '/' && !isPaymentMethodPage ? (
            <div className="mt-6">
              <PaymentButtons />
            </div>
          ) : null}
        </div>
      </header>

      <footer className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-sky-300">
                Ready to get started?
              </div>
              <h3 className="mt-2 text-3xl font-black md:text-4xl">Book a Consultation Today</h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Reach out for assistance with traffic ticket payment, property tax support, visa services,
                passport renewal, and more.
              </p>
            </div>

            <div className="rounded-3xl border border-fuchsia-400/15 bg-gradient-to-b from-slate-900 to-slate-950 p-5 text-center shadow-2xl shadow-fuchsia-950/20">
              <div className="text-sm uppercase tracking-wider text-fuchsia-300">Call or WhatsApp</div>
              <div className="mt-2 text-3xl font-black tracking-tight">{contact.phoneDisplay}</div>
              <a
                href={contact.whatsappBase}
                className="mt-4 inline-block rounded-2xl bg-green-500 px-6 py-3 font-semibold shadow-xl shadow-green-500/30 transition hover:scale-[1.02]"
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
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 transition hover:-translate-y-1">
      <img src={service.image} alt={service.title} loading="lazy" className="h-32 w-full object-cover" />
      <div className="p-4">
        <div className="text-lg font-bold">{service.title}</div>
        <div className="mt-1 text-sm text-sky-300">{service.subtitle}</div>
        <p className="mt-2 line-clamp-4 text-sm leading-6 text-slate-300">{service.description}</p>
        <Link
          to={service.path}
          className="mt-3 inline-flex items-center justify-center rounded-2xl bg-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-500/30"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

function ProcessStrip() {
  const steps = [
    ['1', 'Choose Service', 'Select the service page that matches your need.'],
    ['2', 'Submit Form', 'Complete the form or contact us on WhatsApp.'],
    ['3', 'Get Assistance', 'We guide you through the next steps clearly.'],
  ];

  return (
    <section className="mt-5 grid gap-3 md:grid-cols-3">
      {steps.map(([number, title, text]) => (
        <div
          key={title}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20"
        >
          <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400/20 text-sm font-bold text-sky-300">
            {number}
          </div>
          <div className="text-base font-bold">{title}</div>
          <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
        </div>
      ))}
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="grid items-start gap-4 lg:grid-cols-[0.97fr_1.03fr] xl:gap-6">
        <div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-[4.5rem]">
            Reliable <span className="text-sky-400">Travel</span> and{' '}
            <span className="text-fuchsia-400">Admin</span> Services.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            From visa support and passport renewal to traffic ticket payment and property tax assistance,
            Go Via Travel Services + helps you handle important tasks quickly and confidently.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={contact.whatsappBase}
              className="rounded-2xl bg-green-500 px-6 py-3 text-center font-semibold shadow-xl shadow-green-500/30 transition hover:scale-[1.02]"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-slate-100 transition hover:bg-white/10"
            >
              View Services
            </a>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ['Fast Response', 'Quick support when you need help'],
              ['Secure Process', 'Guided, simple and professional'],
              ['Trusted Service', 'Serving clients with care'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-slate-900/40 p-4 shadow-xl shadow-black/20"
              >
                <div className="text-base font-bold">{title}</div>
                <div className="mt-1 text-sm text-slate-300">{text}</div>
              </div>
            ))}
          </div>

          <PaymentButtons />
        </div>

        <div className="grid gap-3">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
            <img
              src={images.hero}
              alt="Tropical vacation destination"
              fetchPriority="high"
              className="h-64 w-full object-cover lg:h-[18rem]"
            />

            <div className="grid gap-3 p-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="text-sm uppercase tracking-wider text-sky-300">Travel Services</div>
                <div className="mt-2 text-lg font-bold">Visa applications, renewals and travel support</div>
                <Link
                  to="/visa-services"
                  className="mt-3 inline-flex items-center justify-center rounded-2xl bg-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-500/30"
                >
                  Learn More
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="text-sm uppercase tracking-wider text-fuchsia-300">Admin Services</div>
                <div className="mt-2 text-lg font-bold">Property tax, traffic tickets and registrations</div>
                <a
                  href="#services"
                  className="mt-3 inline-flex items-center justify-center rounded-2xl bg-fuchsia-500/20 px-4 py-2 text-sm font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500/30"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-4 shadow-2xl shadow-black/30">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-widest text-sky-300">Featured Service</div>
                <div className="mt-1 text-lg font-bold">Traffic Ticket Payment</div>
              </div>
              <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-xs font-semibold text-yellow-300">
                Popular
              </div>
            </div>

            <p className="text-sm leading-6 text-slate-300">
              Lost your ticket? We can help find the details and assist with payment before the due date passes.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-3 text-sm text-yellow-100">
                Avoid the stress of a court date by taking action early.
              </div>
              <Link
                to="/traffic-ticket-payment"
                className="rounded-2xl bg-white/10 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <ServiceCard service={services.admin[1]} />
            <ServiceCard service={services.travel[0]} />
          </div>
        </div>
      </section>

      <ProcessStrip />

      <section id="services" className="mx-auto max-w-7xl px-1 py-12 md:px-0">
        <div className="mb-7 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300">Our Services</div>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Everything You Need, Handled in One Place</h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-300">
            Browse each service page for details, pricing, payment methods, and next steps.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-sky-400/20 bg-gradient-to-b from-sky-500/15 to-slate-900/50 p-5 shadow-2xl shadow-sky-950/10">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/20 text-2xl">🌍</div>
              <div>
                <div className="text-sm uppercase tracking-wider text-sky-200">Travel Services</div>
                <div className="text-2xl font-bold">Visa, Passport & Travel Support</div>
              </div>
            </div>

            <div className="grid gap-3">
              {services.travel.map((item) => (
                <div key={item.path} className="rounded-2xl bg-slate-950/30 p-4">
                  <div className="font-semibold text-slate-100">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-300">{item.subtitle}</div>
                  <Link
                    to={item.path}
                    className="mt-3 inline-flex items-center justify-center rounded-2xl bg-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-500/30"
                  >
                    View Page
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-fuchsia-400/20 bg-gradient-to-b from-fuchsia-500/15 to-slate-900/50 p-5 shadow-2xl shadow-fuchsia-950/10">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/20 text-2xl">🗂️</div>
              <div>
                <div className="text-sm uppercase tracking-wider text-fuchsia-200">Admin Services</div>
                <div className="text-2xl font-bold">Payments & Practical Support</div>
              </div>
            </div>

            <div className="grid gap-3">
              {services.admin.map((item) => (
                <div key={item.path} className="rounded-2xl bg-slate-950/30 p-4">
                  <div className="font-semibold text-slate-100">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-300">{item.subtitle}</div>
                  <Link
                    to={item.path}
                    className="mt-3 inline-flex items-center justify-center rounded-2xl bg-fuchsia-500/20 px-4 py-2 text-sm font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500/30"
                  >
                    View Page
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-1 pb-10 md:px-0">
        <div className="grid gap-4 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20"
            >
              <div className="text-xl font-bold">{item.title}</div>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ServicePage({
  title,
  subtitle,
  image,
  description,
  prices,
  formButtons,
  showFormSection = true,
  children,
}) {
  return (
    <section className="grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr] xl:gap-6">
      <div className="grid gap-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
          <img src={image} alt={title} loading="lazy" className="h-56 w-full object-cover lg:h-[19rem]" />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20">
          <div className="text-sm font-semibold uppercase tracking-widest text-sky-300">Service Details</div>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-2 text-lg font-semibold text-fuchsia-300">{subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{description}</p>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>

      <div className="grid gap-4">
        {prices?.length ? (
          <div className="rounded-3xl border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/15 via-slate-900 to-slate-900 p-5 shadow-2xl shadow-black/30">
            <div className="text-sm uppercase tracking-widest text-fuchsia-300">Pricing</div>
            <div className="mt-2 text-2xl font-bold">Service Fees</div>
            <div className="mt-4 grid gap-3">
              {prices.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="text-sm font-medium text-slate-200">{item.label}</div>
                  <div className="text-lg font-black text-white sm:text-xl">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {showFormSection ? (
          <div className="rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-2xl shadow-black/30">
            <div className="text-sm uppercase tracking-widest text-sky-300">Google Forms</div>
            <div className="mt-2 text-2xl font-bold">Apply Here</div>
            <p className="mt-3 leading-7 text-slate-300">Select the matching form below to get started.</p>
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
                <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-4 text-sm text-slate-300">
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
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
            <Icon className="h-6 w-6 text-emerald-300" />
          </div>
          <div className="mt-4 text-sm font-semibold uppercase tracking-widest text-emerald-300">Payment Method</div>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h1>
          {logos.length ? (
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {logos.map((src, i) => (
                <img key={i} src={src} alt={`${title} logo ${i + 1}`} className="h-12 w-auto object-contain" />
              ))}
            </div>
          ) : null}
          <p className="mt-2 text-lg font-semibold text-fuchsia-300">{subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{description}</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20">
          <div className="text-xl font-bold">Important details</div>
          <div className="mt-4 grid gap-3">
            {details.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {accounts.map((account) => {
            const accountLogo = getAccountLogo(account.heading);

            return (
              <div
                key={account.heading}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20"
              >
                {accountLogo ? (
                  <div className="flex items-center justify-start rounded-2xl bg-slate-950/40 px-4 py-4">
                    <img src={accountLogo} alt={account.heading} className="h-10 w-auto object-contain sm:h-12" />
                  </div>
                ) : (
                  <div className="text-lg font-bold text-white">{account.heading}</div>
                )}

                <div className="mt-4 grid gap-3">
                  {account.fields.map(([label, value]) => (
                    <div
                      key={`${account.heading}-${label}`}
                      className="flex flex-col gap-1 rounded-2xl bg-slate-950/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">{label}</div>
                      <div className="break-all text-sm font-medium text-slate-100 sm:max-w-[60%] sm:text-right">
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
        <div className="rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-2xl shadow-black/30">
          <div className="text-sm uppercase tracking-widest text-sky-300">How it works</div>
          <div className="mt-2 text-2xl font-bold">Payment Steps</div>
          <div className="mt-4 grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400/20 text-sm font-bold text-sky-300">
                  {index + 1}
                </div>
                <div className="text-sm leading-6 text-slate-200">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-900 p-5 shadow-2xl shadow-black/30">
          <div className="text-sm uppercase tracking-widest text-emerald-300">After Payment</div>
          <div className="mt-2 text-2xl font-bold">Send Confirmation</div>
          <p className="mt-3 leading-7 text-slate-300">
            After making your payment, send your screenshot, receipt, or reference number on WhatsApp so we can confirm receipt.
          </p>
          <a
            href={buildWhatsAppLink(`Hi, I have completed my payment for ${title}`)}
            className="mt-4 inline-flex items-center justify-center rounded-2xl bg-green-500 px-5 py-3 text-center font-semibold text-white shadow-xl shadow-green-500/20 transition hover:scale-[1.01]"
          >
            Send Payment Confirmation
          </a>
        </div>
      </div>
    </section>
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
              <section className="mx-auto max-w-6xl py-4">
                <div className="mb-8 max-w-3xl">
                  <div className="text-sm uppercase tracking-widest text-emerald-300">Payment Options</div>
                  <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Choose a payment method</h1>
                  <p className="mt-3 text-base leading-7 text-slate-300">
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
                        className="group flex min-h-[110px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-5 py-5 transition hover:-translate-y-0.5 hover:bg-white/10"
                        aria-label={`View ${title} payment details`}
                      >
                        {paymentLogo ? (
                          <img src={paymentLogo} alt={title} className="max-h-12 w-auto object-contain sm:max-h-14" />
                        ) : (
                          <div className="flex items-center gap-3 text-sm font-semibold text-slate-100">
                            <Icon className="h-5 w-5 text-emerald-300" />
                            {title}
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </section>
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
              <ServicePage
                showFormSection={false}
                title="Visa Services"
                subtitle="Application & Renewal Help"
                image={images.visa}
                description="Choose the visa page that matches your destination so clients can get country-specific information before submitting a request."
              >
                <div className="rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-xl shadow-black/20">
                  <div className="text-sm font-semibold uppercase tracking-widest text-sky-300">Choose a visa page</div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {services.travel[0].countries.map((country) => (
                      <Link
                        key={country.path}
                        to={country.path}
                        className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                      >
                        <div className="text-2xl">{country.flag}</div>
                        <div className="mt-2 text-lg font-bold text-white">{country.title}</div>
                        <div className="mt-2">
                          <span className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                            View details
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ServicePage>
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
                title="Passport Renewal"
                subtitle="Jamaican Passport Support"
                image={images.passport}
                description="Use this page to explain passport renewal support, what clients should have ready, and how they can request assistance."
                prices={[{ label: 'Passport Renewal', price: 'J$5,000' }]}
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
                description="This page can walk clients through the information needed for property tax payment support before they submit a request."
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
                description="Use this page for clients who need guidance on what to prepare before moving ahead with motor vehicle registration support."
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
  );
}
