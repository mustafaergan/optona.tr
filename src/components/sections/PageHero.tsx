type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-indigo-700 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{description}</p>
      </div>
    </section>
  );
}
