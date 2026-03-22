import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const services = {
  travel: [
    {
      title: 'Visa Services',
      subtitle: 'Application & Renewal Help',
      path: '/visa-services',
      image:
        'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&w=900&q=80',
      description:
        'Support for visa applications, renewals, and Jamaican passport renewal with a smooth guided process.',
      details: [
        'First-time and renewal guidance',
        'Document checklist support',
        'Travel planning assistance',
      ],
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
      image:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80',
      description:
        'Guidance on the renewal process and the details needed before you submit your passport request.',
      details: ['Required documents', 'Renewal guidance', 'General preparation support'],
    },
  ],
  admin: [
    {
      title: 'Traffic Ticket Payment',
      subtitle: 'Avoid the stress of a court date',
      path: '/traffic-ticket-payment',
      image:
        'https://images.unsplash.com/photo-1516908205727-40afad9449a0?auto=format&fit=crop&w=900&q=80',
      description:
        'Lost your ticket? We can help find the details for you and assist with payment once the due date has not passed.',
      details: ['Ticket lookup support', 'Payment guidance', 'Quick assistance before due date'],
    },
    {
      title: 'Property Tax Payment',
      subtitle: 'Easy Payment Support',
      path: '/property-tax-payment',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
      description:
        'We assist with property tax payment requests and provide support with the details needed to complete the process properly.',
      details: ['Valuation number guidance', 'Payment request preparation', 'Receipt support'],
    },
    {
      title: 'Motor Vehicle Registration',
      subtitle: 'Simple Registration Guidance',
      path: '/motor-vehicle-registration',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
      description:
        'Support with understanding the information and steps needed before moving ahead with your registration process.',
      details: ['Document guidance', 'Preparation support', 'Practical assistance'],
    },
    {
      title: 'Consultation',
      subtitle: 'Speak With Us First',
      path: '/consultation',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      description:
        'Book a consultation if you need help choosing the right service or understanding what is required before getting started.',
      details: ['Service selection help', 'General questions', 'Next-step guidance'],
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

const allPages = [...services.travel, ...services.admin];

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <header className="relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_60%,#3b0764_100%)]">
        <div className="relative mx-auto max-w-7xl px-5 py-8 md:px-10 lg:px-12">
          <nav className="mb-10 flex flex-col gap-5 rounded-3xl border border-sky-400/15 bg-slate-900/80 px-5 py-5 shadow-2xl shadow-fuchsia-950/20 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <Link to="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
              <img
                src="/logo.png"
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
                href="https://wa.me/16582177952"
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
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-sky-300">Ready to get started?</div>
              <h3 className="mt-3 text-4xl font-black md:text-5xl">Book a Consultation Today</h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Reach out for assistance with traffic ticket payment, property tax support, visa services, passport renewal, and more.
              </p>
            </div>
            <div className="rounded-3xl border border-fuchsia-400/15 bg-gradient-to-b from-slate-900 to-slate-950 p-7 text-center shadow-2xl shadow-fuchsia-950/20">
              <div className="text-sm uppercase tracking-wider text-fuchsia-300">Call or WhatsApp</div>
              <div className="mt-3 text-4xl font-black tracking-tight">(658) 217-7952</div>
              <a
                href="https://wa.me/16582177952"
                className="mt-5 inline-block rounded-2xl bg-green-500 px-6 py-3 font-semibold shadow-xl shadow-green-500/30 transition hover:scale-[1.02]"
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
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 shadow-xl shadow-black/20">
      <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
      <div className="p-7">
        <div className="text-sm uppercase tracking-wider text-sky-300">{service.title}</div>
        <div className="mt-2 text-2xl font-bold">{service.subtitle}</div>
        <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
        <Link
          to={service.path}
          className="mt-5 inline-block rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:gap-10">
        <div>
          <h1 className="max-w-4xl text-4xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl xl:text-[5.2rem]">
            Reliable <span className="text-sky-400">Travel</span> and{' '}
            <span className="text-fuchsia-400">Admin</span> Services, All in One Place.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            From visa support and passport renewal to traffic ticket payment and property tax assistance, Go Via Travel Services + helps you handle important tasks quickly and confidently.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.me/16582177952"
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

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Fast Response', 'Quick support when you need help'],
              ['Secure Process', 'Guided, simple and professional'],
              ['Trusted Service', 'Serving clients with care'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-slate-900/40 p-5 shadow-xl shadow-black/20"
              >
                <div className="text-base font-bold">{title}</div>
                <div className="mt-1 text-sm text-slate-300">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 xl:gap-5">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80"
              alt="Travel support"
              className="h-72 w-full object-cover lg:h-[22rem]"
            />
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="text-sm uppercase tracking-wider text-sky-300">Travel Services</div>
                <div className="mt-2 text-lg font-bold">Visa applications, renewals and travel support</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="text-sm uppercase tracking-wider text-fuchsia-300">Admin Services</div>
                <div className="mt-2 text-lg font-bold">Property tax, traffic tickets and registrations</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-7 shadow-2xl shadow-black/30 lg:-mt-2">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-widest text-sky-300">Featured Service</div>
                <div className="mt-1 text-xl font-bold sm:text-2xl">Traffic Ticket Payment</div>
              </div>
              <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-xs font-semibold text-yellow-300">
                Popular
              </div>
            </div>
            <p className="text-slate-300">
              Lost your ticket? Don’t worry. We can help find the details for you and assist with payment once the due date has not passed.
            </p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-100">
                Avoid the stress of a court date by taking action early.
              </div>
              <Link
                to="/traffic-ticket-payment"
                className="rounded-2xl bg-white/10 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/15"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard service={services.admin[1]} />
            <ServiceCard service={services.travel[0]} />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-1 py-24 md:px-0">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300">Our Services</div>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Everything You Need, Handled in One Place</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            Browse each service page for details, what you may need, and the next steps before we add your Google Forms.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-sky-400/20 bg-gradient-to-b from-sky-500/15 to-slate-900/50 p-8 shadow-2xl shadow-sky-950/10">
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
                  <Link to={item.path} className="mt-3 inline-block text-sm font-semibold text-sky-300">
                    View page →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-fuchsia-400/20 bg-gradient-to-b from-fuchsia-500/15 to-slate-900/50 p-8 shadow-2xl shadow-fuchsia-950/10">
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
                  <Link to={item.path} className="mt-3 inline-block text-sm font-semibold text-fuchsia-300">
                    View page →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-1 pb-20 md:px-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <div className="text-2xl font-bold">{item.title}</div>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ServicePage({ title, subtitle, image, description, details, checklist, children }) {
  return (
    <section className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] xl:gap-10">
      <div>
        <div className="text-sm font-semibold uppercase tracking-widest text-sky-300">Service Details</div>
        <h1 className="mt-3 text-4xl font-black leading-none tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-3 text-xl font-semibold text-fuchsia-300">{subtitle}</p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>

        {children}

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <div className="text-2xl font-bold">What this page will include</div>
          <div className="mt-5 grid gap-3">
            {details.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950/40 px-4 py-3 text-slate-100">
                <span>✔️</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
          <img src={image} alt={title} className="h-72 w-full object-cover lg:h-[24rem]" />
        </div>

        <div className="rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-7 shadow-2xl shadow-black/30">
          <div className="text-sm uppercase tracking-widest text-sky-300">Coming Next</div>
          <div className="mt-2 text-2xl font-bold">Google Form Integration</div>
          <p className="mt-3 leading-7 text-slate-300">
            This page is ready for a service-specific Google Form button. Once your form is created, we can place it here along with custom instructions.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
          <div className="text-xl font-bold">Suggested details for this page</div>
          <div className="mt-4 grid gap-3">
            {checklist.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <Link
            to="/"
            className="mt-5 inline-block rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
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
                title="Visa Services"
                subtitle="Application & Renewal Help"
                image={services.travel[0].image}
                description="Choose the visa page that matches your destination so clients can get country-specific information before submitting a request."
                details={[
                  'Separate pages for USA, Canada, UK and Schengen visas',
                  'Country-specific requirements and next steps',
                  'A clear place for your future Google Form button',
                ]}
                checklist={[
                  'Destination country',
                  'First-time or renewal request',
                  'Passport status',
                  'Travel date or intended timeline',
                ]}
              >
                <div className="mt-8 rounded-3xl border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-xl shadow-black/20">
                  <div className="text-sm font-semibold uppercase tracking-widest text-sky-300">Choose a visa page</div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {services.travel[0].countries.map((country) => (
                      <Link
                        key={country.path}
                        to={country.path}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                      >
                        <div className="text-2xl">{country.flag}</div>
                        <div className="mt-2 text-lg font-bold text-white">{country.title}</div>
                        <div className="mt-1 text-sm text-slate-300">View details →</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ServicePage>
            </Layout>
          }
        />
        <Route
          path="/visa-services/usa"
          element={
            <Layout>
              <ServicePage
                title="USA Visa"
                subtitle="Application & Renewal Help"
                image={services.travel[0].image}
                description="Use this page for clients interested in USA visa support, whether it is a first-time application or a renewal."
                details={[
                  'USA visa application overview',
                  'First-time and renewal guidance',
                  'Space for your future USA visa form button',
                ]}
                checklist={[
                  'First-time or renewal request',
                  'Current passport status',
                  'Intended travel timing',
                  'Basic contact details',
                ]}
              />
            </Layout>
          }
        />
        <Route
          path="/visa-services/canada"
          element={
            <Layout>
              <ServicePage
                title="Canada Visa"
                subtitle="Application & Renewal Help"
                image={services.travel[0].image}
                description="Use this page for Canada visa inquiries so clients can understand the support available before filling out a form."
                details={[
                  'Canada visa application overview',
                  'Guidance for preparing before submission',
                  'Space for your future Canada visa form button',
                ]}
                checklist={[
                  'Type of visa support needed',
                  'Passport status',
                  'Travel timeline',
                  'Contact details for follow-up',
                ]}
              />
            </Layout>
          }
        />
        <Route
          path="/visa-services/uk"
          element={
            <Layout>
              <ServicePage
                title="UK Visa"
                subtitle="Application & Renewal Help"
                image={services.travel[0].image}
                description="Use this page for UK visa support so clients can review the general process and prepare the right information."
                details={[
                  'UK visa support overview',
                  'Preparation guidance before submitting a request',
                  'Space for your future UK visa form button',
                ]}
                checklist={[
                  'First-time or renewal support',
                  'Passport status',
                  'Expected travel date',
                  'Contact details',
                ]}
              />
            </Layout>
          }
        />
        <Route
          path="/visa-services/schengen"
          element={
            <Layout>
              <ServicePage
                title="Schengen Visa"
                subtitle="Application & Renewal Help"
                image={services.travel[0].image}
                description="Use this page for Schengen visa support so clients can review the process and get ready before submitting a request."
                details={[
                  'Schengen visa support overview',
                  'Guidance on what to prepare',
                  'Space for your future Schengen visa form button',
                ]}
                checklist={[
                  'Country of main destination',
                  'Travel dates or intended timeline',
                  'Passport status',
                  'Best contact information',
                ]}
              />
            </Layout>
          }
        />
        <Route
          path="/passport-renewal"
          element={
            <Layout>
              <ServicePage
                title="Passport Renewal"
                subtitle="Jamaican Passport Support"
                image={services.travel[1].image}
                description="Use this page to explain passport renewal support, what clients should have ready, and how they can request assistance."
                details={[
                  'Renewal guidance and preparation support',
                  'What information clients should submit',
                  'Space for a future Google Form button',
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
                image={services.admin[0].image}
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
                image={services.admin[1].image}
                description="This page can walk clients through the information needed for property tax payment support before they submit a request."
                details={[
                  'Property tax payment overview',
                  'Details needed before processing',
                  'Future form placement for direct submissions',
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
                image={services.admin[2].image}
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
                image={services.admin[3].image}
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
