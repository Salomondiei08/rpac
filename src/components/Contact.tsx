import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@mienssa-energy.com',
      href: 'mailto:contact@mienssa-energy.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+225 07 08 40 80 84',
      href: 'tel:+225070840808',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Abidjan Cocody, Cote d\'Ivoire',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contactez-nous</h2>
          <p className="text-xl text-muted-foreground">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Envoyez-nous un message</CardTitle>
              <CardDescription>Remplissez le formulaire et nous vous répondrons rapidement</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" placeholder="+225 XX XX XX XX XX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Votre message..." rows={5} />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-none shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Nos coordonnées</CardTitle>
                <CardDescription>Contactez-nous directement par ces moyens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-1">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-[var(--shadow-card)] bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Horaires d'ouverture</h3>
                <div className="space-y-2 text-primary-foreground/90">
                  <p>Lundi - Vendredi: 8h00 - 18h00</p>
                  <p>Samedi: 9h00 - 14h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
