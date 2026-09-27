const services = [
  'Construction',
  'Remodeling',
  'Handyman',
  'Computer repairs',
  'OS upgrades',
  'eBay reseller',
]

const linkedInSearchUrl =
  'https://www.linkedin.com/search/results/people/?keywords=michael%20sea'

export function CallingCard() {
  return (
    <article className="w-full max-w-md overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
      <header className="bg-blue-700 px-8 py-10 text-white">
        <h1 className="text-balance text-3xl font-semibold tracking-tight">
          michaelbirdservices
        </h1>
        <p className="mt-2 text-lg text-blue-100">A little of everything</p>
      </header>

      <section className="px-8 py-8" aria-labelledby="services-heading">
        <h2
          id="services-heading"
          className="text-sm font-medium uppercase tracking-wider text-blue-700"
        >
          A little more
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {services.map((service) => (
            <li
              key={service}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-900"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-blue-100 px-8 py-6">
        <h2 className="text-sm font-medium uppercase tracking-wider text-blue-700">
          How to reach me
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          <li>
            <a
              href={linkedInSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              LinkedIn: Michael Sea
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href="tel:+18018997408"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-700 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Phone: (801) 899-7408
            </a>
          </li>
        </ul>
      </footer>
    </article>
  )
}
