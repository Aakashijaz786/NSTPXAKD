import { scrollToSection } from '../../utils/scrollTo';

const footerLinks = [
  { label: 'Who should apply', id: 'who-should-apply' },
  { label: 'What you get', id: 'what-you-get' },
  { label: 'How it works', id: 'how-it-works' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Apply', id: 'apply' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#C5D9A0] py-10" style={{ backgroundColor: '#E8EFD8' }}>
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-bold text-text-primary text-lg mb-2">
              NSTP × AKD GROUP
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              National Science and Technology Park (NSTP) — NUST, in partnership with AKD Group
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 items-start" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-card-border text-center">
          <p className="text-xs text-text-muted">
            © 2024 NSTP–NUST × AKD Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
