// Vercel fix: ensure correct export
export default function App() {
  const services = {
    travel: [
      'Visa Application Assistance',
      'Visa Renewal',
      'Jamaican Passport Renewal',
      'Airline Ticket Booking',
      'Hotel Booking',
      'Custom Travel Itinerary',
    ],
    admin: [
      'Traffic Ticket Payment',
      'Motor Vehicle Registration',
      'Property Tax Payment',
      'General Consultation',
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

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_60%,#3b0764_100%)]">
        <div className="relative mx-auto max-w-7xl px-5 py-8 md:px-10 lg:px-12">
          <nav className="mb-12 flex flex-col gap-5 rounded-3xl border border-sky-400/15 bg-slate-900/80 px-5 py-5 shadow-2xl shadow-fuchsia-950/20  sm:mb-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <img
                src="/logo.png"
                alt="Go Via Logo"
                className="h-16 w-16 flex-none object-contain drop-shadow-lg sm:h-24 sm:w-24"
              />
              <div className="min-w-0">
                <div className="text-xl font-black leading-none tracking-tight sm:text-4xl">
                  <span className="text-sky-400">Go Via</span>{" "}
                  <span className="text-fuchsia-400">Travel Services</span>{" "}
                  <span className="text-fuchsia-400">+</span>
                </div>
                <div className="mt-2 text-sm italic leading-relaxed text-slate-300 sm:text-lg">
                  One Service. Every Step Covered.
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/16582177952"
              className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-green-500/30 transition hover:scale-[1.03] sm:w-auto"
            >
              WhatsApp Us
            </a>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:gap-10">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl xl:text-[5.2rem]">
                Reliable <span className="text-sky-400">Travel</span> and <span className="text-fuchsia-400">Admin</span> Services, All in One Place.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                From visa support and passport renewal to traffic ticket payment and property tax assistance, Go Via Travel Services + helps you handle important tasks quickly and confidently.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="https://wa.me/16582177952"
                  className="rounded-2xl bg-fuchsia-500 px-6 py-3 text-center font-semibold shadow-xl shadow-green-500/30 transition hover:scale-[1.02]"
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
                  <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-slate-900/40 p-5 shadow-xl shadow-black/20 ">
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
                  alt="Jamaican travel support"
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
                  <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-xs font-semibold text-yellow-300">Popular</div>
                </div>
                <p className="text-slate-300">
                  Lost your ticket? Don’t worry. We can help find the details for you and assist with payment once the due date has not passed.
                </p>
                <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-100">
                  Avoid the stress of a court date by taking action early.
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 shadow-xl shadow-black/20">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80"
                    alt="Property tax support for homes"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-7">
                    <div className="text-sm uppercase tracking-wider text-fuchsia-300">Property Tax</div>
                    <div className="mt-2 text-2xl font-bold">Easy Payment Support</div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      We assist with property tax payment requests and provide support with the details needed to complete the process properly.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 shadow-xl shadow-black/20">
                  <img
                    src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&w=900&q=80"
                    alt="Visa services with destination flags"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-7">
                    <div className="text-sm uppercase tracking-wider text-sky-300">Visa Services</div>
                    <div className="mt-2 text-2xl font-bold">USA, Canada, UK & Schengen Support</div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Support for visa applications, renewals, and Jamaican passport renewal with a smooth guided process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300">Our Services</div>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Everything You Need, Handled in One Place</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            Whether you need help with travel arrangements or important local payments, our service options are designed to save you time and reduce hassle.
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
            <div className="grid gap-3">
              {services.travel.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950/30 px-4 py-3 text-slate-100">
                  <span className="mt-0.5">✔️</span>
                  <span>{item}</span>
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
            <div className="grid gap-3">
              {services.admin.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950/30 px-4 py-3 text-slate-100">
                  <span className="mt-0.5">✔️</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <div className="text-2xl font-bold">{item.title}</div>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/60">
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
      </section>
    </div>
  );
}
