import { features } from "../../data/features";
import FeatureCard from "../ui/FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Why Choose CMD Cebu VjG WiseHealth?
          </h2>

          <p className="mt-5 mx-auto max-w-2xl text-gray-600">
            We are committed to providing trusted wellness products
            and excellent customer service to help you and your family
            live healthier every day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}