function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#6C3BFF] to-[#7b5cff] text-white px-12 py-14 mt-16">

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO + DESC */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            📄 <span>VetriSmartCV</span>
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Create professional resumes with AI-powered suggestions in minutes.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Product</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="hover:text-white cursor-pointer">Resume Builder</li>
            <li className="hover:text-white cursor-pointer">Resume Templates</li>
            <li className="hover:text-white cursor-pointer">AI Content Suggestions</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Support</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
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