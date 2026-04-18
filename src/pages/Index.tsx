import React, { useState, useEffect } from 'react';

// ============================================================================
// DATA
// ============================================================================

const adminData = [
  {
    id: 1,
    name: "Anonim",
    role: "Admin of Design",
    tiktokLink: "https://tiktok.com/@username",
    tiktokHandle: "@username",
  },
];

const mediaData = [
  { id: 1, name: "Academy Uma Sovereign", image: "https://i.imgur.com/ZcYxqKj.png" },
  { id: 2, name: "Umaganize", image: "https://i.imgur.com/SUcv7Xd.png" },
];

const partnershipData = [
  { id: 1, name: "Umazing Trainer Association", image: "https://i.imgur.com/uNhaBnF.png" },
  { id: 2, name: "Nanime Creator Aogiri", image: "https://i.imgur.com/aG2M75K.jpeg" },
  { id: 3, name: "Academy Uma Family", image: "https://i.imgur.com/82wvMvu.jpeg" },
];

const operationalData = [
  { id: 1, name: "Origami County", image: "https://i.imgur.com/qkD6GPj.png" },
];

// ============================================================================
// ICONS
// ============================================================================

const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ============================================================================
// NAVBAR
// ============================================================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#admin", label: "Para Admin" },
    { href: "#partnership", label: "Partnership & Media" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-red-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#beranda" className="flex-shrink-0 flex items-center gap-3 group">
            <img
              src="https://i.imgur.com/ZcYxqKj.png"
              alt="A'ues Logo"
              className="h-12 w-auto drop-shadow-md group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-black text-slate-800 tracking-tight hidden sm:inline">
              Uma Sovereign
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-700 hover:text-red-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://chat.whatsapp.com/EidQqBTQz143yoAmkaYb5y?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 transform hover:scale-105 shadow-md shadow-red-200"
            >
              Bergabung!!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-white/95 backdrop-blur-md border-t border-slate-100 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-slate-700 font-bold hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://chat.whatsapp.com/EidQqBTQz143yoAmkaYb5y?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-red-900 transition-all mt-3"
          >
            Bergabung!!
          </a>
        </div>
      </div>
    </nav>
  );
};

// ============================================================================
// HERO & ABOUT
// ============================================================================

const HeroAbout = () => (
  <section id="beranda" className="pt-20 overflow-hidden">
    {/* Banner Image — 12:5 aspect ratio */}
    <div className="w-full relative" style={{ aspectRatio: '12 / 5' }}>
      <img
        src="https://i.imgur.com/JXYIDVk.png"
        alt="Academy Uma Sovereign Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
    </div>

    {/* Content Below Banner */}
    <div className="bg-gradient-to-br from-slate-50 via-white to-red-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-yellow-100 text-yellow-700 font-bold px-4 py-1.5 rounded-full mb-5 text-sm border border-yellow-300 animate-bounce-slow">
            ✨ Komunitas TikTok & Instagram
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
            Selamat Datang di{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
              Academy Uma Sovereign
            </span>
          </h1>
          <div id="about" className="text-base md:text-lg text-slate-700 mb-8 leading-relaxed bg-white/60 p-6 rounded-2xl border border-red-100 shadow-sm backdrop-blur-sm text-left">
            <p>
              <strong>Academy Uma Sovereign</strong> adalah suatu komunitas{' '}
              <strong>A'ues</strong> yang berfokus kepada para fans Uma Musume & Anime.
            </p>
            <p className="mt-3">
              Di sini tidak hanya untuk fans Uma saja, melainkan non-Uma juga bisa bergabung.
              Kami hadir sebagai wadah interaktif untuk share berbagai informasi terkait Uma Musume,
              memperluas relasi, dan membangun kreativitas bersama!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://chat.whatsapp.com/EidQqBTQz143yoAmkaYb5y?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-200 text-center"
            >
              🎉 Ayo Bergabung!!
            </a>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://www.tiktok.com/@academyumasovereign_ofc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white p-3 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110 shadow-md"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.instagram.com/academyumasovereign"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-3 rounded-full hover:from-yellow-500 hover:to-red-500 transition-all duration-300 transform hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Aesthetic Image under Tentang Kami — 640:393 */}
          <div className="mt-10 w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg border-2 border-red-100">
            <div className="w-full relative" style={{ aspectRatio: '640 / 393' }}>
              <img
                src="https://i.imgur.com/r5hxxm1.jpeg"
                alt="Uma Musume Aesthetic"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// ADMIN SECTION
// ============================================================================

const AdminSection = () => (
  <section id="admin" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Para Admin</h2>
      <p className="text-slate-500 mb-12 text-lg">
        Kenalan dengan tim di balik Academy Uma Sovereign
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {adminData.map((admin) => (
          <div
            key={admin.id}
            className="p-6 rounded-3xl bg-gradient-to-b from-slate-50 to-white border-2 border-slate-100 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-center shadow-sm hover:shadow-xl"
          >
            {/* TikTok Icon */}
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white mb-4 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <TikTokIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">{admin.name}</h3>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
              {admin.role}
            </span>
            <a
              href={admin.tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-red-600 font-medium transition-colors"
            >
              {admin.tiktokHandle}
            </a>
          </div>
        ))}
      </div>

      {/* Aesthetic Image under Para Admin — 320:167 */}
      <div className="mt-12 w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg border-2 border-slate-100">
        <div className="w-full relative" style={{ aspectRatio: '320 / 167' }}>
          <img
            src="https://i.imgur.com/Pen0C4L.jpeg"
            alt="Uma Musume Community"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// PARTNERSHIP SECTION
// ============================================================================

interface PartnerItem {
  id: number;
  name: string;
  image: string;
}

const PartnershipCard = ({ item }: { item: PartnerItem }) => (
  <div className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-full aspect-video flex items-center justify-center overflow-hidden rounded-xl mb-3 bg-slate-50 p-3 border border-slate-100">
      <img
        src={item.image}
        alt={item.name}
        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h4 className="font-bold text-slate-700 text-sm text-center">{item.name}</h4>
  </div>
);

const CategoryDivider = ({
  title,
  color,
}: {
  title: string;
  color: 'red' | 'yellow' | 'slate';
}) => {
  const colorMap = {
    red: { line: 'bg-red-200', text: 'text-red-600' },
    yellow: { line: 'bg-yellow-300', text: 'text-yellow-600' },
    slate: { line: 'bg-slate-300', text: 'text-slate-600' },
  };
  const c = colorMap[color];

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className={`h-0.5 flex-grow ${c.line} rounded-full`} />
      <h3 className={`text-xl md:text-2xl font-bold ${c.text} whitespace-nowrap`}>{title}</h3>
      <div className={`h-0.5 flex-grow ${c.line} rounded-full`} />
    </div>
  );
};

const PartnershipSection = () => (
  <section id="partnership" className="py-20 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16">
        Partnership & Media
      </h2>

      {/* Media */}
      <div className="mb-14">
        <CategoryDivider title="Media" color="red" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mediaData.map((item) => (
            <PartnershipCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Partnership */}
      <div className="mb-14">
        <CategoryDivider title="Partnership" color="yellow" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partnershipData.map((item) => (
            <PartnershipCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Operational */}
      <div>
        <CategoryDivider title="Operational" color="slate" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {operationalData.map((item) => (
            <PartnershipCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// FOOTER
// ============================================================================

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 border-t-4 border-yellow-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <img
              src="https://i.imgur.com/ZcYxqKj.png"
              alt="Logo"
              className="h-10 brightness-0 invert opacity-80"
            />
            <span className="text-2xl font-black text-white tracking-tight">
              A'ues<span className="text-red-500">.</span>
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            Academy Uma Sovereign — Ekosistem interaktif bagi para penggemar Uma Musume & Anime
            di TikTok dan Instagram.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-white font-bold mb-4">Kunjungi Sosial Media Kami</h4>
          <div className="flex gap-3">
            <a
              href="https://www.tiktok.com/@academyumasovereign_ofc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.instagram.com/academyumasovereign"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Academy Uma Sovereign (A'ues). All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// ============================================================================
// MAIN PAGE
// ============================================================================

const Index = () => {
  return (
    <div className="font-sans antialiased text-slate-900">
      <Navbar />
      <HeroAbout />
      <AdminSection />
      <PartnershipSection />
      <Footer />
    </div>
  );
};

export default Index;