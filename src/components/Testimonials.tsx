import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Grâce à Mienssa Energy, nous avons réduit nos factures d'électricité de 70%. Un investissement qui en vaut vraiment la peine !",
      name: 'Rodrigue Séry',
      role: 'Propriétaire de maison',
      image: 'https://media.istockphoto.com/id/517302398/fr/photo/nig%C3%A9rian-portrait-de-lhomme-%C3%A0-la-barbe-regardant-cam%C3%A9ra.jpg?s=612x612&w=0&k=20&c=7vEQ6ubQF3uiO5BHMNWU9cV7GR1XEXkmDfrD-v_AtKM=',
    },
    {
      text: "Le professionnalisme de l'équipe et la qualité de l'installation m'ont vraiment impressionné. Je recommande vivement !",
      name: 'Marie Koné',
      role: 'Gérante de boutique',
      image: 'https://static.vecteezy.com/ti/photos-gratuite/t2/36032730-ai-genere-africain-femme-souriant-et-portant-colore-robe-avec-generatif-ai-photo.jpeg',
    },
    {
      text: "Une équipe à l'écoute qui a su répondre parfaitement à nos besoins. Notre boutique est maintenant autonome en énergie !",
      name: 'Franck Kouassi',
      role: 'Entrepreneur',
      image: 'https://img.freepik.com/photos-premium/beau-jeune-homme-africain-exterieur_219728-564.jpg?w=360',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les expériences de ceux qui nous font confiance pour leur transition énergétique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 relative overflow-hidden"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
