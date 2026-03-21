type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

export default function FeatureCard({ icon, title, description, items }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
      <ul className="mt-4 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-blue-600">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
