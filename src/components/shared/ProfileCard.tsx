import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  socials?: SocialLink[];
  className?: string;
  interactive?: boolean;
}

const ProfileCard = ({
  name,
  title,
  bio,
  image,
  socials = [],
  className,
  interactive = false,
}: ProfileCardProps) => {
  return (
    <Card
      className={cn(
        "group h-full border border-border/40 bg-card/95 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-hover)]",
        interactive && "cursor-pointer",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col items-center gap-5 px-8 py-10 text-center">
        <div className="relative">
          <span
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-primary/0 blur-xl transition-opacity duration-300 group-hover:opacity-80"
            aria-hidden="true"
          />
          <img
            src={image}
            alt={`Portrait de ${name}`}
            className="relative h-32 w-32 rounded-full border-4 border-background object-cover shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-primary leading-tight">{name}</h3>
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground/80">
            {title}
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {bio}
        </p>
        {socials.length > 0 && (
          <div className="flex items-center justify-center gap-3 pt-2">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground hover:border-secondary hover:text-secondary transition-colors"
                aria-label={`${social.label} de ${name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
