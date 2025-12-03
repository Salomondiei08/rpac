import { useState, type ChangeEvent, type FormEvent } from "react";
import { Building, Send, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";

type MembershipFormData = {
  organisation: string;
  contactName: string;
  role: string;
  email: string;
  phone: string;
  membershipType: string;
  region: string;
  motivation: string;
  message: string;
};

const defaultFormData: MembershipFormData = {
  organisation: "",
  contactName: "",
  role: "",
  email: "",
  phone: "",
  membershipType: "organisation",
  region: "multi",
  motivation: "partenariats",
  message: "",
};

const MembershipContact = () => {
  const [formData, setFormData] = useState<MembershipFormData>(() => ({
    ...defaultFormData,
  }));
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateField = (name: keyof MembershipFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback(null);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      const response = await fetch("https://formspree.io/f/xrbnkrna", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Impossible de soumettre le formulaire");
      }

      setStatus("success");
      setFeedback({
        type: "success",
        message: "Merci pour votre intérêt. Le RPAC vous remercie",
      });
      setFormData({ ...defaultFormData });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback({
        type: "error",
        message:
          "Un problème est survenu. Merci de réessayer dans quelques instants.",
      });
    }
  };

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 md:pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Adhésion et contacts
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <Card className="border border-border/60 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Formulaire d’adhésion
                </CardTitle>
                <CardDescription>
                  Un membre de notre équipe prendra contact avec vous sous 5
                  jours ouvrables pour finaliser votre adhésion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="grid gap-6 md:grid-cols-2"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="organisation">Nom de l’organisation</Label>
                    <Input
                      id="organisation"
                      name="organisation"
                      placeholder="Nom complet de votre organisation"
                      autoComplete="organization"
                      required
                      value={formData.organisation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Nom complet</Label>
                    <Input
                      id="contact-name"
                      name="contactName"
                      placeholder="Votre nom et prénom"
                      autoComplete="name"
                      required
                      value={formData.contactName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Fonction</Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="Ex. Directrice des partenariats"
                      autoComplete="organization-title"
                      value={formData.role}
                      onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 819 446-0661"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Type d’adhésion</Label>
                    <Select
                      value={formData.membershipType}
                      onValueChange={(value) =>
                        updateField("membershipType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="organisation">
                          Organisation
                        </SelectItem>
                        <SelectItem value="entreprise">Entreprise</SelectItem>
                        <SelectItem value="institution">
                          Institution publique
                        </SelectItem>
                        <SelectItem value="individuel">
                          Membre individuel
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Zone d’intervention</Label>
                    <Select
                      value={formData.region}
                      onValueChange={(value) => updateField("region", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="multi">Multi-régional</SelectItem>
                        <SelectItem value="nord">Afrique du Nord</SelectItem>
                        <SelectItem value="ouest">
                          Afrique de l’Ouest
                        </SelectItem>
                        <SelectItem value="centre">Afrique centrale</SelectItem>
                        <SelectItem value="est">Afrique de l’Est</SelectItem>
                        <SelectItem value="sud">Afrique australe</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Motivations principales</Label>
                    <RadioGroup
                      name="motivation"
                      value={formData.motivation}
                      onValueChange={(value) =>
                        updateField("motivation", value)
                      }
                      className="grid gap-2 md:grid-cols-2"
                    >
                      <div className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                        <RadioGroupItem
                          value="partenariats"
                          id="partenariats"
                        />
                        <Label
                          htmlFor="partenariats"
                          className="font-medium leading-tight"
                        >
                          Développer des partenariats stratégiques
                        </Label>
                      </div>
                      <div className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                        <RadioGroupItem value="influence" id="influence" />
                        <Label
                          htmlFor="influence"
                          className="font-medium leading-tight"
                        >
                          Participer à nos dialogues de haut niveau
                        </Label>
                      </div>
                      <div className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                        <RadioGroupItem value="programmes" id="programmes" />
                        <Label
                          htmlFor="programmes"
                          className="font-medium leading-tight"
                        >
                          Contribuer aux programmes et groupes
                        </Label>
                      </div>
                      <div className="flex items-start gap-3 rounded-xl border border-border/60 p-4">
                        <RadioGroupItem value="reseau" id="reseau" />
                        <Label
                          htmlFor="reseau"
                          className="font-medium leading-tight"
                        >
                          Accéder à notre réseau
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">
                      Message / besoins spécifiques
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Précisez vos projets, attentes ou besoins en accompagnement."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button
                      type="submit"
                      className="w-full md:w-auto"
                      disabled={status === "submitting"}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {status === "submitting"
                        ? "Envoi en cours..."
                        : "Soumettre ma candidature"}
                    </Button>
                    {feedback && (
                      <div className="mt-4">
                        <Badge
                          variant={
                            feedback.type === "success"
                              ? "secondary"
                              : "destructive"
                          }
                          className="text-sm"
                        >
                          {feedback.message}
                        </Badge>
                      </div>
                    )}
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
                    <Users className="w-4 h-4 mt-1 text-secondary" />
                    Accès prioritaire à nos programmes, groupes d’experts et
                    webinaires privés.
                  </p>
                  <p className="flex items-start gap-3">
                    <Wallet className="w-4 h-4 mt-1 text-secondary" />
                    Opportunités d’investissement et de financement en
                    partenariat avec nos membres.
                  </p>
                  <p className="flex items-start gap-3">
                    <Building className="w-4 h-4 mt-1 text-secondary" />
                    Accompagnement personnalisé pour vos missions économiques ou
                    institutionnelles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipContact;
