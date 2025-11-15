import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

type ProfileCardLayout = "vertical" | "horizontal";

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  socials?: SocialLink[];
  className?: string;
  interactive?: boolean;
  layout?: ProfileCardLayout;
}

const ProfileCard = ({
  name,
  title,
  bio,
  image,
  socials = [],
  className,
  interactive = false,
  layout = "vertical",
}: ProfileCardProps) => {
  const isHorizontal = layout === "horizontal";
  return (
    <Card
      className={cn(
        "group h-full border border-border/40 bg-card/95 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-hover)]",
        interactive && "cursor-pointer hover:bg-primary",
        className,
      )}
    >
      <CardContent
        className={cn(
          "flex h-full flex-col items-center gap-5 px-6 py-8 text-center transition-colors duration-300",
          interactive && "group-hover:text-primary-foreground",
          isHorizontal && "md:flex-row md:items-center md:text-left md:gap-6",
        )}
      >
        <div
          className={cn(
            "relative",
            isHorizontal ? "md:flex-shrink-0 md:w-28" : "",
          )}
        >
          <span
            className={cn(
              "absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-primary/0 blur-xl transition-opacity duration-300",
              interactive && "group-hover:opacity-90",
            )}
            aria-hidden="true"
          />
          <img
            src={image}
            alt={`Portrait de ${name}`}
            className={cn(
              "relative h-32 w-32 rounded-full border-4 border-background object-cover shadow-lg transition-transform duration-300",
              interactive && "group-hover:scale-[1.05]",
              isHorizontal && "md:h-28 md:w-28",
            )}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className={cn(
            "flex flex-1 flex-col gap-4",
            isHorizontal ? "md:text-left md:items-start" : "items-center",
          )}
        >
          <div className="space-y-1">
                <h3
                  className={cn(
                    "text-xl font-semibold leading-tight transition-colors duration-300",
                    interactive ? "text-primary group-hover:text-primary-foreground" : "text-primary",
                  )}
                >
                  {name}
                </h3>
                <p
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80 transition-colors duration-300",
                    interactive && "group-hover:text-primary-foreground/80",
                  )}
                >
                  {title}
                </p>
              </div>
          <p
            className={cn(
              "text-sm leading-relaxed flex-1 transition-colors duration-300",
              interactive ? "text-muted-foreground group-hover:text-primary-foreground/80" : "text-muted-foreground",
            )}
          >
            {bio}
          </p>
          {socials.length > 0 && (
            <div
              className={cn(
                "flex items-center gap-3 pt-1",
                isHorizontal ? "md:justify-start" : "justify-center",
              )}
            >
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300",
                    interactive
                      ? "border-border/40 text-muted-foreground hover:border-primary-foreground/80 hover:text-primary-foreground group-hover:border-primary-foreground/70 group-hover:text-primary-foreground"
                      : "border-border/50 text-muted-foreground hover:border-secondary hover:text-secondary",
                  )}
                  aria-label={`${social.label} de ${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
