import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            We value every customer and strive to provide quality wellness products with excellent service.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}