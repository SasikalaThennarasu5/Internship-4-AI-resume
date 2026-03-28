import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#6C3BFF] to-[#7b5cff] text-white px-12 py-14 mt-16">

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO + DESC */}
        <div>
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-50 h-50 object-contain"
          />
          <p className="text-sm text-white/80 leading-relaxed">
            Create professional resumes with AI-powered suggestions in minutes.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Product</h3>
          <ul className="space-y-2 text-sm text-white/80">

            <li>
              <NavLink to="/builder" className="hover:text-white">
                Resume Builder
              </NavLink>
            </li>

            <li>
              <NavLink to="/templates" className="hover:text-white">
                Resume Templates
              </NavLink>
            </li>

            <li>
              <NavLink to="/builder" className="hover:text-white">
                AI Content Suggestions
              </NavLink>
            </li>

            <li>
              <NavLink to="/pricing" className="hover:text-white">
                Pricing
              </NavLink>
            </li>

          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Support</h3>
          <ul className="space-y-2 text-sm text-white/80">

            <li>
              <NavLink to="/help" className="hover:text-white">
                Help Center
              </NavLink>
            </li>

            <li>
              <NavLink to="/privacy" className="hover:text-white">
                Privacy Policy
              </NavLink>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>
          <div className="space-y-3 text-sm text-white/80">
            <p>📞 +91-1234567890</p>
            <p>✉ smartcv@gmail.com</p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center mt-12 text-sm text-white/70">
        © 2026 AI Resume Builder. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;