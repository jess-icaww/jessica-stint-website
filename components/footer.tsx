import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 font-serif text-xl font-medium">Sarah Mitchell</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Called to share the hope of Jesus with university students in Japan. 
              Thank you for partnering with me in this mission.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#mission" className="hover:text-primary-foreground transition-colors">
                  About My Mission
                </a>
              </li>
              <li>
                <a href="#updates" className="hover:text-primary-foreground transition-colors">
                  Latest Updates
                </a>
              </li>
              <li>
                <a href="#prayer" className="hover:text-primary-foreground transition-colors">
                  Prayer Requests
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Give Now
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="mailto:sarah@example.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              sarah@example.com
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© 2026 Sarah Mitchell. All rights reserved.</p>
          <p className="mt-2">
            Giving is tax-deductible through partner organization.
          </p>
        </div>
      </div>
    </footer>
  )
}
