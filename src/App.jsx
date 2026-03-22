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
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.25),transparent_30%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <nav className="mb-16 flex items-center justify-between rounded-[30px] border border-sky-400/15 bg-gradient-to-r from-white/8 via-slate-900/80 to-fuchsia-500/10 px-6 py-5 shadow-2xl shadow-fuchsia-950/20 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Go Via Logo"
                className="h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(56,189,248,0.25)]"
              />
              <div>
                <div className="text-[1.7rem] font-black tracking-wide leading-none md:text-[2rem]">
                  <span className="bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">Go Via</span>{" "}
                  <span className="text-white">Travel Services</span>{" "}
                  <span className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.35)]">+</span>
                </div>
                <div className="mt-2 text-base italic text-slate-300 md:text-lg">
                  One Service. Every Step Covered.
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/16582177952"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(217,70,239,0.35)] transition hover:scale-[1.03]"
            >
              WhatsApp Us
            </a>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-sky-400/30 bg-gradient-to-r from-sky-400/10 to-fuchsia-400/10 px-5 py-2.5 text-sm font-medium text-sky-100 shadow-lg shadow-sky-950/20">
                Travel & Admin Solutions for Jamaicans Locally and Abroad
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Reliable <span className="text-sky-400">Travel</span> and <span className="text-fuchsia-400">Admin</span> Services, All in One Place.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                From visa support and passport renewal to traffic ticket payment and property tax assistance, Go Via Travel Services + helps you handle important tasks quickly and confidently.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/16582177952"
                  className="rounded-2xl bg-fuchsia-500 px-6 py-3 font-semibold shadow-xl shadow-fuchsia-500/30 transition hover:scale-[1.02]"
                >
                  Book a Consultation
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  View Services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['Fast Response', 'Quick support when you need help'],
                  ['Secure Process', 'Guided, simple and professional'],
                  ['Trusted Service', 'Serving clients with care'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-5 shadow-xl shadow-black/15 backdrop-blur">
                    <div className="text-base font-bold">{title}</div>
                    <div className="mt-1 text-sm text-slate-300">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[32px] border border-sky-400/15 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-7 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-sky-300">Featured Service</div>
                    <div className="mt-1 text-2xl font-bold">Traffic Ticket Payment</div>
                  </div>
                  <div className="rounded-2xl bg-yellow-400 px-3 py-2 text-sm font-bold text-slate-950">Popular</div>
                </div>
                <p className="text-slate-300">
                  Lost your ticket? Don’t worry. We can help find the details for you and assist with payment once the due date has not passed.
                </p>
                <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-100">
                  Avoid the stress of a court date by taking action early.
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[30px] border border-white/10 bg-gradient-to-b from-white/7 to-white/[0.03] p-7 shadow-xl shadow-black/20">
                  <div className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">Property Tax</div>
                  <div className="mt-2 text-2xl font-bold">Easy Payment Support</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    We assist with property tax payment requests and provide support with the details needed to complete the process properly.
                  </p>
                </div>
                <div className="rounded-[30px] border border-white/10 bg-gradient-to-b from-white/7 to-white/[0.03] p-7 shadow-xl shadow-black/20">
                  <div className="text-sm uppercase tracking-[0.2em] text-sky-300">Visa Services</div>
                  <div className="mt-2 text-2xl font-bold">Application & Renewal Help</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Support for visa applications, renewals, and Jamaican passport renewal with a smooth guided process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">Our Services</div>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Everything You Need, Handled in One Place</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            Whether you need help with travel arrangements or important local payments, our service options are designed to save you time and reduce hassle.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[34px] border border-sky-400/20 bg-gradient-to-b from-sky-400/12 to-slate-900/40 p-8 shadow-2xl shadow-sky-950/10">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/20 text-2xl">🌍</div>
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-sky-200">Travel Services</div>
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

          <div className="rounded-[34px] border border-fuchsia-400/20 bg-gradient-to-b from-fuchsia-400/12 to-slate-900/40 p-8 shadow-2xl shadow-fuchsia-950/10">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/20 text-2xl">🗂️</div>
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-fuchsia-200">Admin Services</div>
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

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <div className="text-2xl font-bold">{item.title}</div>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-r from-white/6 to-fuchsia-500/[0.04]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Ready to get started?</div>
              <h3 className="mt-3 text-4xl font-black md:text-5xl">Book a Consultation Today</h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Reach out for assistance with traffic ticket payment, property tax support, visa services, passport renewal, and more.
              </p>
            </div>
            <div className="rounded-[34px] border border-fuchsia-400/15 bg-gradient-to-b from-slate-950/70 to-slate-900/60 p-7 text-center shadow-2xl shadow-fuchsia-950/20">
              <div className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">Call or WhatsApp</div>
              <div className="mt-3 text-4xl font-black tracking-tight">(658) 217-7952</div>
              <a
                href="https://wa.me/16582177952"
                className="mt-5 inline-block rounded-2xl bg-fuchsia-500 px-6 py-3 font-semibold shadow-xl shadow-fuchsia-500/30 transition hover:scale-[1.02]"
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
