"use client";

export default function FooterLinks({ section }) {
  const handleClick = (e, href) => {
    if (!href.startsWith("#") || href === "#") {
      return;
    }

    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <h3 className="mb-5 font-semibold">{section.title}</h3>

      <ul className="space-y-3">
        {section.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="cursor-pointer rounded-md text-sm font-medium text-muted-foreground outline-none transition-colors duration-200 hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
