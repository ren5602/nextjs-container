const footerItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <nav className="flex flex-wrap gap-6 text-sm text-neutral-500">
          {footerItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          <a
            href="https://github.com/ren5602"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 transition-colors hover:text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.88-.02-1.73-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.08 1.56 1.08.9 1.6 2.36 1.13 2.94.86.09-.68.35-1.13.63-1.39-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.78 1.06a9.37 9.37 0 0 1 2.53-.35c.86 0 1.73.12 2.53.35 1.93-1.34 2.78-1.06 2.78-1.06.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          {/* <a
            href="https://behance.net/username"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            className="text-neutral-500 transition-colors hover:text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M8.64 12.3c1.34-.4 2.02-1.3 2.02-2.58 0-1.98-1.43-3.15-3.94-3.15H2v12.07h4.9c2.7 0 4.4-1.37 4.4-3.65 0-1.64-.84-2.84-2.66-2.69zM4.83 8.44h1.63c1.17 0 1.76.45 1.76 1.35 0 .93-.6 1.39-1.74 1.39H4.83V8.44zm1.83 8.38H4.83v-3.18h1.92c1.38 0 2.1.56 2.1 1.6 0 1.08-.73 1.58-2.02 1.58zM19.17 10.3c-2.44 0-3.93 1.58-3.93 4.15 0 2.61 1.48 4.16 3.96 4.16 1.89 0 3.16-.93 3.65-2.5h-1.87c-.27.55-.88.84-1.77.84-1.19 0-1.85-.6-1.92-1.72h5.68c.04-.22.05-.48.05-.72 0-2.44-1.42-4.2-3.85-4.2zm-1.84 3.27c.17-1.02.81-1.6 1.83-1.6 1.07 0 1.7.57 1.78 1.6h-3.6zM16.3 7.4h5.77V5.9H16.3v1.5z" />
            </svg>
          </a> */}
          <a
            href="https://www.linkedin.com/in/muhammad-nur-aziz-06a3a4257/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 transition-colors hover:text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 8.98h3.96V21H3V8.98zM9.5 8.98H13v1.64h.05c.48-.9 1.66-1.84 3.42-1.84 3.66 0 4.34 2.42 4.34 5.56V21h-3.96v-5.66c0-1.35-.02-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3V21H9.5V8.98z" />
            </svg>
          </a>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Muhammad Nur Aziz. All rights reserved.
      </p>
    </footer>
  );
}
