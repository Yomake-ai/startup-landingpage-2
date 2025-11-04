import { type ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export default function Link({ href, children, className, ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle anchor links (starting with #)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Get the header height to offset the scroll position
        const header = document.getElementById('sticky-menu');
        const headerHeight = header ? header.offsetHeight : 80; // Default to 80px if header not found

        // Calculate the position to scroll to
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        // Smooth scroll to the calculated position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        window.history.pushState(null, '', href);
      }
    }

    // Call any existing onClick handler
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a href={href} className={className} {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
