import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-4 flex">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="italic text-gray-600">
        "{testimonial.comment}"
      </p>

      <div className="mt-6">
        <h4 className="font-bold">
          {testimonial.name}
        </h4>

        <p className="text-sm text-gray-500">
          {testimonial.location}
        </p>
      </div>
    </div>
  );
}