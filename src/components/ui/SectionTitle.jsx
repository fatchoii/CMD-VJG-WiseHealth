export default function SectionTitle({
  badge,
  title,
  description,
}) {
  return (
    <div className="text-center">
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl font-bold">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-gray-600">
        {description}
      </p>
    </div>
  );
}