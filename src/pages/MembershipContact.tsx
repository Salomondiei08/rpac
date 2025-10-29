import {
  Building,
  Mail,
  MapPin,
  Phone,
  Send,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";

const contactDetails = [
  {
    icon: Mail,
    label: "Courriel",
    value: "contact@partenariatsca.org",
    href: "mailto:contact@partenariatsca.org",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+1 (514) 555-9087",
    href: "tel:+15145559087",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Maison des Associations, 125 rue Sherbrooke Ouest, Montréal, QC",
    href: "https://maps.app.goo.gl/association",
  },
];

const MembershipContact = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground mt-[-80px] md:mt-[-96px] pt-24 md:pt-28 pb-24">
        <div className="container mx-auto px-4 space-y-6 text-center md:text-left">
          <Badge
            variant="secondary"
            className="bg-white/15 text-primary-foreground mx-auto md:mx-0"
          >
            Adhésion & contact
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight mx-auto md:mx-0">
            Rejoignez un réseau unique d’acteurs engagés pour des partenariats
            transformateurs entre le Canada et l’Afrique.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/90 mx-auto md:mx-0">
            Individus, entreprises, organisations publiques ou associatives : votre
            adhésion ouvre la porte à des programmes exclusifs, des rencontres
            stratégiques et un accompagnement personnalisé.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <Card className="border border-border/60 shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Formulaire d’adhésion
              </CardTitle>
              <CardDescription>
                Un membre de notre équipe prendra contact avec vous sous 5 jours ouvrables
                pour finaliser votre adhésion.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6 md:grid-cols-2" noValidate>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="organisation">Nom de l’organisation</Label>
                  <Input
                    id="organisation"
                    name="organisation"
                    placeholder="Nom complet de votre organisation"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Nom complet</Label>
                  <Input
                    id="contact-name"
                    name="contact-name"
                    placeholder="Votre nom et prénom"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Fonction</Label>
                  <Input
                    id="role"
                    name="role"
                    placeholder="Ex. Directrice des partenariats"
                    autoComplete="organization-title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse courriel</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@organisation.org"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 514 000 0000"
                    autoComplete="tel"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Type d’adhésion</Label>
                  <Select defaultValue="organisation">
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="organisation">Organisation</SelectItem>
                      <SelectItem value="entreprise">Entreprise</SelectItem>
                      <SelectItem value="institution">Institution publique</SelectItem>
                      <SelectItem value="individuel">Membre individuel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Zone d’intervention</Label>
                  <Select defaultValue="multi">
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multi">Multi-régional</SelectItem>
                      <SelectItem value="nord">Afrique du Nord</SelectItem>
                      <SelectItem value="ouest">Afrique de l’Ouest</SelectItem>
                      <SelectItem value="centre">Afrique centrale</SelectItem>
                      <SelectItem value="est">Afrique de l’Est</SelectItem>
                      <SelectItem value="sud">Afrique australe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>Motivations principales</Label>
                  <RadioGroup defaultValue="partenariats" className="grid gap-2 md:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                      <RadioGroupItem value="partenariats" id="partenariats" />
                      <Label htmlFor="partenariats" className="font-medium leading-tight">
                        Développer des partenariats stratégiques
                      </Label>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                      <RadioGroupItem value="influence" id="influence" />
                      <Label htmlFor="influence" className="font-medium leading-tight">
                        Participer à nos dialogues de haut niveau
                      </Label>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                      <RadioGroupItem value="programmes" id="programmes" />
                      <Label htmlFor="programmes" className="font-medium leading-tight">
                        Contribuer aux programmes et groupes d’experts
                      </Label>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                      <RadioGroupItem value="reseau" id="reseau" />
                      <Label htmlFor="reseau" className="font-medium leading-tight">
                        Accéder à notre réseau panafricain
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Message / besoins spécifiques</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Précisez vos projets, attentes ou besoins en accompagnement."
                    rows={6}
                  />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Soumettre ma candidature
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border border-border/60 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Avantages de l’adhésion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <Users className="w-4 h-4 mt-1 text-accent" />
                  Accès prioritaire à nos programmes, groupes d’experts et webinaires privés.
                </p>
                <p className="flex items-start gap-3">
                  <Wallet className="w-4 h-4 mt-1 text-accent" />
                  Opportunités d’investissement et de financement en partenariat avec nos membres.
                </p>
                <p className="flex items-start gap-3">
                  <Building className="w-4 h-4 mt-1 text-accent" />
                  Accompagnement personnalisé pour vos missions économiques ou institutionnelles.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/60 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Coordonnées
                </CardTitle>
                <CardDescription>
                  Notre équipe est disponible du lundi au vendredi de 9h à 17h (heure de Montréal).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-3 rounded-xl border border-border/40 p-4 hover:border-accent hover:text-accent transition-colors"
                  >
                    <item.icon className="w-5 h-5 mt-1 text-accent" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-primary">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border border-border/60 shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Contact rapide
            </CardTitle>
            <CardDescription>
              Posez-nous vos questions : nous vous répondons sous 48h.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6 md:grid-cols-2" noValidate>
              <div className="space-y-2">
                <Label htmlFor="quick-name">Nom complet</Label>
                <Input
                  id="quick-name"
                  name="quick-name"
                  placeholder="Votre nom"
                  autoComplete="name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quick-email">Adresse courriel</Label>
                <Input
                  id="quick-email"
                  name="quick-email"
                  type="email"
                  placeholder="vous@email.com"
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="quick-message">Message</Label>
                <Textarea
                  id="quick-message"
                  name="quick-message"
                  placeholder="Expliquez votre besoin en quelques lignes."
                  rows={4}
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-3 justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
                <Button type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer mon message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default MembershipContact;
