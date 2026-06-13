import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-zinc-700 px-16 pt-12 pb-7 font-sans flex items-center justify-center">
      <div className="max-w-6xl mx-auto">

        {/* Top section */}
        <div className="grid grid-cols-3 gap-12 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold text-amber-100">pawClinic🐾</span>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-5">
              Caring for your pets with love and expertise. Book appointments, track visits, and keep your furry friends healthy.
            </p>
            <div className="flex gap-3">
              {["f", "in", "tw"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-zinc-600 flex items-center justify-center text-amber-200 text-sm hover:bg-zinc-500 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-amber-100 text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
            <div className="flex flex-col gap-2">
              <span className="text-zinc-300 text-sm">📍 123 Pet Lane, Bengaluru</span>
              <span className="text-zinc-300 text-sm">📞 +91 98765 43210</span>
              <span className="text-zinc-300 text-sm">✉️ hello@pawclinic.in</span>
              <span className="text-zinc-300 text-sm">🕐 Mon–Sat, 9am–7pm</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-600 pt-5 flex justify-between items-center">
          <p className="text-zinc-500 text-xs">© 2026 PawClinic. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">Privacy policy</a>
            <a href="#" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">Terms of use</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer