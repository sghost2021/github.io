import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-6 px-4">
      <div className="max-w-md mx-auto text-center">
        <p className="text-sm text-muted-foreground/80 backdrop-blur-sm">
          © 2026. Built with{' '}
          <Heart className="inline w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />{' '}
          by{' '}
          <a
            href="https://SGmultimediaGroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:text-primary transition-colors duration-200 underline decoration-primary/30 hover:decoration-primary"
          >
            SGmultimediaGroup.com
          </a>
        </p>
      </div>
    </footer>
  );
}
