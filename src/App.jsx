import React from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Landmark, Send, DollarSign, Smartphone } from 'lucide-react';

const images = {
  visa: '/visa-services.png',
  passport: '/passport-renewal.png',
  traffic: '/traffic-ticket.png',
  property: '/property-tax.png',
  registration: '/registration.png',
  consultation: '/consultation.png',
  hero: '/main-hero.png',
  logo: '/logo.png',
};

const contact = {
  phoneDisplay: '(658) 217-7952',
  phoneRaw: '16582177952',
  whatsappBase: 'https://wa.me/16582177952',
};

const visaPaymentMethods = ['Bank Transfer', 'Western Union', 'MoneyGram', 'LYNK'];

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
    details: [
      'USA visa application overview',
      'First-time and renewal guidance',
      'Direct form buttons for each USA visa option',
    ],
    prices: [
      { label: 'First Time Applicant', price: 'J$39,000' },
      { label: 'Renewal', price: 'J$41,000' },
    ],
    formButtons: [
      { label: 'USA Visa First Time Applicant', href: 'https://forms.gle/Z1Y7xnGtJyDhGXx5A' },
      { label: 'USA Visa Renewal', href: 'https://forms.gle/Wobbo4sFAWc7LcKW9' },
    ],
    checklist: [
      'First-time or renewal request',
      'Current passport status',
      'Intended travel timing',
      'Basic contact details',
    ],
  },
  {
    path: '/visa-services/canada',
    title: 'Canada Visa',
    subtitle: 'Application & Renewal Help',
    image: images.visa,
    description:
      'Use this page for Canada visa inquiries so clients can understand the support available before filling out a form.',
    details: [
      'Canada visa application overview',
      'Guidance for preparing before submission',
      'Direct form buttons for each Canada visa option',
    ],
    prices: [
      { label: 'First Time Applicant', price: 'J$33,000' },
      { label: 'Renewal', price: 'J$34,000' },
    ],
    formButtons: [
      { label: 'CA Visa First Time Applicant', href: 'https://forms.gle/4GcBMwTbwgjQPPbA7' },
      { label: 'CA Visa Renewal', href: 'https://forms.gle/hgfjxr6fsSLprgpCA' },
      { label: 'CA Visa (Minor)', href: 'https://forms.gle/DiRfoUQ1CxS5Q6ry6' },
    ],
    checklist: [
      'Type of visa support needed',
      'Passport status',
      'Travel timeline',
      'Contact details for follow-up',
    ],
  },
  {
    path: '/visa-services/uk',
    title: 'UK Visa',
    subtitle: 'Application & Renewal Help',
    image: images.visa,
    description:
      'Use this page for UK visa support so clients can review the general process and prepare the right information.',
    details: [
      'UK visa support overview',
      'Preparation guidance before submitting a request',
      'Full fee breakdown transparency',
    ],
    prices: [
      { label: 'Mandatory Form', price: 'J$1,500' },
      { label: 'Processing Fee', price: 'J$10,000' },
      { label: '6 Months Visa Fee', price: 'J$25,000' },
      { label: '2 Years Visa Fee', price: 'J$91,117' },
      { label: '5 Years Visa Fee', price: 'J$162,631' },
      { label: '10 Years Visa Fee', price: 'J$203,093' },
    ],
    formButtons: [{ label: 'UK Visa Form', href: 'https://forms.gle/R9sqxTgWsKGEsmEb6' }],
    checklist: [
      'First-time or renewal support',
      'Passport status',
      'Expected travel date',
      'Contact details',
    ],
  },
  {
    path: '/visa-services/schengen',
    title: 'Schengen Visa',
    subtitle: 'Application & Renewal Help',
    image: images.visa,
    description:
      'Use this page for Schengen visa support so clients can review the process and get ready before submitting a request.',
    details: [
      'Schengen visa support overview',
      'Guidance on what to prepare',
      'Dedicated Schengen visa form button area',
    ],
    prices: [{ label: 'Schengen Visa', price: 'Prices Coming Soon' }],
    formButtons: [{ label: 'Schengen Visa Form', href: '#' }],
    checklist: [
      'Country of main destination',
      'Travel dates or intended timeline',
      'Passport status',
      'Best contact information',
    ],
  },
];

function buildWhatsAppLink(message) {
  return `${contact.whatsappBase}?text=${encodeURIComponent(message)}`;
}

function PaymentButtons() {
  const options = [
    { label: 'Bank Transfer', icon: Landmark },
    { label: 'Western Union', icon: Send },
    { label: 'MoneyGram', icon: DollarSign },
    { label: 'LYNK', icon: Smartphone },
  ];

  return (
    <div className="mt-4 rounded-3xl border border-emerald-400/10 bg-gradient-to-br from-emerald-500/5 via-slate-900 to-slate-900 p-5 shadow-xl shadow-black/20">
      <div className="text-sm uppercase tracking-widest text-emerald-300">How You Can Pay</div>
      <div className="mt-2 text-xl font-bold">Flexible Payment Options</div>
      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
        Choose your preferred method and message us to get started.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map(({ label, icon: Icon }) => (
          <a
            key={label}
            href={buildWhatsAppLink(`Hi, I would like to pay using ${label}`)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:scale-[1.02] hover:bg-white/10"
            aria-label={`Pay using ${label}`}
          >
            <Icon className="h-5 w-5 text-emerald-300" />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <header className="relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_60%,#3b0764_100%)]">
        <div className="relative mx-auto max-w-7xl px-5 py-8 md:px-10 lg:px-12">
          <nav className="mb-8 flex flex-col gap-4 rounded-3xl border border-sky-400/15 bg-slate-900/80 px-5 py-4 shadow-2xl shadow-fuchsia-950/20 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <Link to="/" className="flex min-w-0 items-center gap-3 sm:gap-4" aria-label="Go to home page">
              <img
                src={images.logo}
                alt="Go Via Logo"
                className="h-16 w-16 flex-none object-contain drop-shadow-lg sm:h-24 sm:w-24"
              />
              <div className="min-w-0">
                <div className="text-xl font-black leading-none tracking-tight sm:text-4xl">
                  <span className="text-sky-400">Go Via</span>{' '}
                  <span className="text-fuchsia-400">Travel Services</span>{' '}
                  <span className="text-fuchsia-400">+</span>
                </div>
                <div className="mt-2 text-sm italic leading-relaxed text-slate-300 sm:text-lg">
                  One Service. Every Step Covered.
                </div>
              </div>
            </Link>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-medium text-slate-100 transition hover:bg-white/10"
              >
                Home
              </Link>
              <a
                href={contact.whatsappBase}
                className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-green-500/30 transition hover:scale-[1.03] sm:w-auto"
              >
                WhatsApp Us
              </a>
            </div>
          </nav>

          {children}
        </div>
      </header>

      <footer className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
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
            <div className="rounded-3xl border border-fuchsia-400/15 bg-gradient-to-b from-slate-900 to-slate-950 p-6 text-center shadow-2xl shadow-fuchsia-950/20">
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
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 shadow-xl shadow-black/20 transition hover:-translate-y-1">
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="h-36 w-full object-cover"
      />
      <div className="p-5">
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
    <section className="mt-6 grid gap-3 md:grid-cols-3">
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
      <section className="grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr] xl:gap-8">
        <div>
          <h1 className="max-w-4xl text-4xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl xl:text-[5.2rem]">
            Reliable <span className="text-sky-400">Travel</span> and{' '}
            <span className="text-fuchsia-400">Admin</span> Services.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            From visa support and passport renewal to traffic ticket payment and property tax assistance,
            Go Via Travel Services + helps you handle important tasks quickly and confidently.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
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

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
            <img
              src={images.hero}
              alt="Tropical vacation destination"
              fetchPriority="high"
              className="h-52 w-full object-cover lg:h-[15rem]"
            />
            <div className="grid gap-3 p-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                <div className="text-sm uppercase tracking-wider text-sky-300">Travel Services</div>
                <div className="mt-2 text-lg font-bold">Visa applications, renewals and travel support</div>
                <Link
                  to="/visa-services"
                  className="mt-3 inline-flex items-center justify-center rounded-2xl bg-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-500/30"
                >
                  Learn More
                </Link>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
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

          <div className="rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 shadow-2xl shadow-black/30">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-widest text-sky-300">Featured Service</div>
                <div className="mt-1 text-lg font-bold sm:text-xl">Traffic Ticket Payment</div>
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

      <section id="services" className="mx-auto max-w-7xl px-1 py-16 md:px-0">
        <div className="mb-8 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300">Our Services</div>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Everything You Need, Handled in One Place</h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-300">
            Browse each service page for details, pricing, payment methods, and next steps.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-sky-400/20 bg-gradient-to-b from-sky-500/15 to-slate-900/50 p-6 shadow-2xl shadow-sky-950/10">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/20 text-2xl">🌍</div>
              <div>
                <div className="text-sm uppercase tracking-wider text-sky-200">Travel Services</div>
                <div className="text-2xl font-bold">Visa, Passport & Travel Support</div>
              </div>
            </div>
            <div className="grid gap-4">
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

          <div className="rounded-3xl border border-fuchsia-400/20 bg-gradient-to-b from-fuchsia-500/15 to-slate-900/50 p-6 shadow-2xl shadow-fuchsia-950/10">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/20 text-2xl">🗂️</div>
              <div>
                <div className="text-sm uppercase tracking-wider text-fuchsia-200">Admin Services</div>
                <div className="text-2xl font-bold">Payments & Practical Support</div>
              </div>
            </div>
            <div className="grid gap-4">
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

      <section className="mx-auto max-w-7xl px-1 pb-14 md:px-0">
        <div className="grid gap-4 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20"
            >
              <div className="text-2xl font-bold">{item.title}</div>
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
  details,
  checklist,
  prices,
  formButtons,
  showFormSection = true,
  paymentMethods,
  children,
}) {
  return (
    <section className="grid items-start gap-6 lg:grid-cols-[1.08fr_0.92fr] xl:gap-8">
      <div className="grid gap-5">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-56 w-full object-cover lg:h-[20rem]"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <div className="text-sm font-semibold uppercase tracking-widest text-sky-300">Service Details</div>
          <h1 className="mt-3 text-4xl font-black leading-none tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-3 text-xl font-semibold text-fuchsia-300">{subtitle}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
          {children}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <div className="text-2xl font-bold">What this page includes</div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {details.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-slate-950/40 px-4 py-3 text-slate-100"
              >
                <span>✔️</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20">
          <div className="text-xl font-bold">Suggested details</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5">
        {prices?.length ? (
          <div className="rounded-3xl border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/15 via-slate-900 to-slate-900 p-6 shadow-2xl shadow-black/30">
            <div className="text-sm uppercase tracking-widest text-fuchsia-300">Pricing</div>
            <div className="mt-2 text-2xl font-bold">Service Fees</div>
            <div className="mt-5 grid gap-3">
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
          <div className="rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-7 shadow-2xl shadow-black/30">
            <div className="text-sm uppercase tracking-widest text-sky-300">Google Forms</div>
            <div className="mt-2 text-2xl font-bold">Apply Here</div>
            <p className="mt-3 leading-7 text-slate-300">Select the matching form below to get started.</p>
            <div className="mt-5 grid gap-3">
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

        {paymentMethods?.length ? (
          <div className="rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-900 p-7 shadow-2xl shadow-black/30">
            <div className="text-sm uppercase tracking-widest text-emerald-300">Accepted Payment Methods</div>
            <div className="mt-2 text-2xl font-bold">How You Can Pay</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {paymentMethods.map((method) => {
                const iconMap = {
                  'Bank Transfer': Landmark,
                  'Western Union': Send,
                  MoneyGram: DollarSign,
                  LYNK: Smartphone,
                };
                const Icon = iconMap[method] || Landmark;

                return (
                  <a
                    key={method}
                    href={buildWhatsAppLink(`Hi, I would like to pay using ${method}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:scale-[1.02] hover:bg-white/10"
                  >
                    <Icon className="h-5 w-5 text-emerald-300" />
                    {method}
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
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
          path="/visa-services"
          element={
            <Layout>
              <ServicePage
                showFormSection={false}
                paymentMethods={visaPaymentMethods}
                title="Visa Services"
                subtitle="Application & Renewal Help"
                image={images.visa}
                description="Choose the visa page that matches your destination so clients can get country-specific information before submitting a request."
                details={[
                  'Separate pages for USA, Canada, UK and Schengen visas',
                  'Country-specific requirements and next steps',
                  'Quick access to each visa option',
                ]}
                checklist={[
                  'Destination country',
                  'First-time or renewal request',
                  'Passport status',
                  'Travel date or intended timeline',
                ]}
              >
                <div className="mt-8 rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-xl shadow-black/20">
                  <div className="text-sm font-semibold uppercase tracking-widest text-sky-300">
                    Choose a visa page
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {services.travel[0].countries.map((country) => (
                      <Link
                        key={country.path}
                        to={country.path}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
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
                  paymentMethods={visaPaymentMethods}
                  title={page.title}
                  subtitle={page.subtitle}
                  image={page.image}
                  description={page.description}
                  details={page.details}
                  prices={page.prices}
                  formButtons={page.formButtons}
                  checklist={page.checklist}
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
        details={[
          'Renewal guidance and preparation support',
          'What information clients should submit',
          'Direct form submission for faster processing',
        ]}
        formButtons={[
          {
            label: 'Passport Renewal Form',
            href: 'https://forms.gle/GS3us1hDmaj8ydTY9',
          },
        ]}
        checklist={[
          'Current passport status',
          'Full name and contact details',
          'Timeline for renewal',
          'Any special concerns or questions',
        ]}
      />
    </Layout>
  }
/><Route
  path="/passport-renewal"
  element={
    <Layout>
      <ServicePage
        title="Passport Renewal"
        subtitle="Jamaican Passport Support"
        image={images.passport}
        description="Use this page to explain passport renewal support, what clients should have ready, and how they can request assistance."
        details={[
          'Renewal guidance and preparation support',
          'What information clients should submit',
          'Direct form submission for faster processing',
        ]}
        formButtons={[
          {
            label: 'Passport Renewal Form',
            href: 'https://forms.gle/GS3us1hDmaj8ydTY9',
          },
        ]}
        checklist={[
          'Current passport status',
          'Full name and contact details',
          'Timeline for renewal',
          'Any special concerns or questions',
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
                title="Traffic Ticket Payment"
                subtitle="Avoid the Stress of a Court Date"
                image={images.traffic}
                description="This page is designed for clients who need traffic ticket payment support, including lost ticket lookups where the due date has not passed."
                details={[
                  'Clear explanation of how the service works',
                  'Lost ticket support messaging',
                  'Future form area for ticket submission',
                ]}
                checklist={[
                  'Ticket number if available',
                  'Plate number or identifying details',
                  'Due date',
                  'Contact number for follow-up',
                ]}
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
                details={[
                  'Property tax payment overview',
                  'Details needed before processing',
                  'Direct form submission for faster processing',
                ]}
                formButtons={[
                  { label: 'Property Tax Payment Form', href: 'https://forms.gle/PXYanNZ263Dtn7mu9' },
                ]}
                checklist={[
                  'Valuation number',
                  'Strata lot number if applicable',
                  'Fiscal year to be paid',
                  'Payer name and contact info',
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
                title="Motor Vehicle Registration"
                subtitle="Simple Registration Guidance"
                image={images.registration}
                description="Use this page for clients who need guidance on what to prepare before moving ahead with motor vehicle registration support."
                details={[
                  'A brief explanation of the registration support offered',
                  'Preparation guidance before starting',
                  'Future Google Form CTA area',
                ]}
                checklist={[
                  'Vehicle details',
                  'Registration-related documents',
                  'Owner contact information',
                  'Questions or special notes',
                ]}
              />
            </Layout>
          }
        />

        <Route
          path="/consultation"
          element={
            <Layout>
              <ServicePage
                title="Consultation"
                subtitle="Speak With Us First"
                image={images.consultation}
                description="This page is for clients who want to ask questions first or need help identifying the right service before proceeding."
                details={[
                  'A simple consultation overview',
                  'Space for clients to explain what they need',
                  'Future consultation request form button',
                ]}
                checklist={[
                  'Service of interest',
                  'Preferred contact method',
                  'Summary of what help is needed',
                  'Best time to follow up',
                ]}
              />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}