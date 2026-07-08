import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import { footerLinks } from "./footer.data";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <FooterBrand />

          {footerLinks.map((section) => (
            <FooterLinks
              key={section.title}
              section={section}
            />
          ))}
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}