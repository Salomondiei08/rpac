import privacyContent from "@/content/privacy.json";

const Privacy = () => {
  const sections = privacyContent.sections ?? [];

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 pb-20 md:pt-28">
        <div className="mx-auto max-w-5xl px-6 space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{privacyContent.heroTitle}</h1>
          <p className="mx-auto max-w-2xl text-white/90">{privacyContent.heroDescription}</p>
        </div>
      </section>

      <section className="py-24">
        <article className="mx-auto max-w-4xl space-y-8 px-6 text-sm leading-relaxed text-muted-foreground">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-lg font-semibold text-primary">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </article>
      </section>
    </div>
  );
};

export default Privacy;
