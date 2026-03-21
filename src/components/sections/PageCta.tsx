import Link from "next/link";

type PageCtaProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
};

export default function PageCta({
  title,
  description,
  buttonLabel,
  href = "/contact",
}: PageCtaProps) {
  return (
    <section className="bg-blue-700 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <h2 className="text-3xl font-extrabold">{title}</h2>
        <p className="mt-4 text-lg text-blue-100">{description}</p>
        <Link
          href={href}
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-lg font-bold text-blue-700 shadow-lg transition-colors hover:bg-blue-50"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

