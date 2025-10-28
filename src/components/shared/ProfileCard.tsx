import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
}

const ProfileCard = ({
  name,
  title,
  bio,
  image,
  socials = [],
}: ProfileCardProps) => {
  return (
    <Card className="h-full border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={`Portrait de ${name}`}
            className="w-20 h-20 rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
          <div>
            <h3 className="text-lg font-semibold text-primary">{name}</h3>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {bio}
        </p>
        {socials.length > 0 && (
          <div className="flex items-center gap-3 pt-2">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/60 text-muted-foreground hover:text-accent hover:border-accent transition-colors"
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
