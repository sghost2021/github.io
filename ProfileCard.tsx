import { SiInstagram, SiYoutube, SiFacebook, SiTiktok } from 'react-icons/si';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface LinkButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function LinkButton({ href, icon, label }: LinkButtonProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="w-full h-14 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
      variant="default"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative flex items-center justify-center gap-3">
        {icon}
        {label}
      </span>
    </Button>
  );
}

export default function ProfileCard() {
  return (
    <Card className="w-full max-w-md backdrop-blur-xl bg-card/80 border-2 shadow-2xl p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="w-32 h-32 border-4 border-primary shadow-xl ring-4 ring-primary/20 transition-transform duration-300 hover:scale-105">
          <AvatarImage src="/assets/Sergio Guillen.jfif" alt="Sergio 'The Nurse'" />
          <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            SG
          </AvatarFallback>
        </Avatar>
        
        <div className="text-center space-y-3 relative">
          {/* Semi-transparent dark overlay for readability */}
          <div className="absolute inset-0 -inset-x-8 -inset-y-4 bg-black/30 dark:bg-black/50 rounded-2xl blur-xl -z-10" />
          
          {/* Name with enhanced gradient, glow, and animation */}
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-slide-up drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] dark:drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]">
            Sergio 'The Nurse'
          </h1>
          
          {/* Bio text with improved contrast and animation */}
          <div className="text-foreground/95 dark:text-foreground text-base md:text-lg font-semibold space-y-1.5 animate-fade-slide-up animation-delay-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            <p className="leading-relaxed">Proud to be a nurse. Strong enough to care.</p>
            <p className="leading-relaxed">Haz que las cosas Sucedan. Si se Puede</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <LinkButton
          href="https://stan.store/innovationonline"
          icon={<ShoppingBag className="w-5 h-5" />}
          label="Buy my eBooks"
        />
        
        <LinkButton
          href="https://www.instagram.com/nursingaitutor"
          icon={<SiInstagram className="w-5 h-5" />}
          label="Instagram"
        />
        
        <LinkButton
          href="https://www.youtube.com/@Sergio_FFF"
          icon={<SiYoutube className="w-5 h-5" />}
          label="YouTube"
        />
        
        <LinkButton
          href="https://www.facebook.com/nursingaitutor/"
          icon={<SiFacebook className="w-5 h-5" />}
          label="Facebook"
        />
        
        <LinkButton
          href="https://www.tiktok.com/@sergio1gg"
          icon={<SiTiktok className="w-5 h-5" />}
          label="TikTok"
        />
      </div>
    </Card>
  );
}
