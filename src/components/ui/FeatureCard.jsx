export default function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-blue-100 p-4 transition group-hover:bg-blue-600">
          <Icon
            size={40}
            className="text-blue-600 transition group-hover:text-white"
          />
        </div>
      </div>

      <h3 className="text-center text-xl font-bold">
        {feature.title}
      </h3>

      <p className="mt-4 text-center text-gray-600">
        {feature.description}
      </p>
    </div>
  );
}