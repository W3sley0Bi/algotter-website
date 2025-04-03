import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn, FaDiscord } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="m500:text-sm dark:bg-secondaryBlack bg-white px-5 py-6 text-center font-base text-black dark:text-darkText border-t-2 border-border dark:border-darkBorder">
      <div className="mx-auto w-full max-w-container flex flex-col gap-4 items-center justify-between lg:flex-row">
        {/* Left: Brand / Copyright */}
        <div>
          © {new Date().getFullYear()} <strong>Algotter</strong>. All rights reserved.
        </div>

        {/* Center: Nav links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            target="_blank"
            href="https://github.com/neobrutalism-templates/saas"
            className="underline font-heading hover:no-underline"
          >
            GitHub
          </a>
          <a
            href="/privacy"
            className="underline font-heading hover:no-underline"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="underline font-heading hover:no-underline"
          >
            Terms
          </a>
          <a
            href="mailto:hello@algotter.com"
            className="underline font-heading hover:no-underline"
          >
            Contact
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://x.com/algotter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-main transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://linkedin.com/company/algotter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-main transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://discord.gg/algotter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="hover:text-main transition"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  )
}
