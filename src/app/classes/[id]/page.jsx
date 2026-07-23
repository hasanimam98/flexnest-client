import Image from "next/image";
import Link from "next/link";
import featuredClasses from "@/data/classes";
import { notFound } from "next/navigation";

const ClassDetailsPage = async ({ params }) => {
  const { id } = await params;

  const item = featuredClasses.find(
    (cls) => cls.id === Number(id)
  );

  if (!item) {
    notFound();
  }
 return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative h-[450px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>


           {/* Content */}
        <div>
          <span className="badge badge-success mb-4">
            {item.category}
          </span>

          <h1 className="text-5xl font-bold mb-6">
            {item.name}
          </h1>

          <p className="text-gray-600 mb-6">
            {item.description}
          </p>

          <div className="space-y-3 text-lg">
            <p>
              👨‍🏫 <strong>Trainer:</strong> {item.trainer}
            </p>

            <p>
              ⏱️ <strong>Duration:</strong> {item.duration}
            </p>

            <p>
              👥 <strong>Total Bookings:</strong> {item.bookings}
            </p>


  <p className="text-3xl font-bold text-green-600 mt-5">
              ${item.price}
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="btn btn-success">
              Book Now
            </button>

            <Link
              href="/classes"
              className="btn btn-outline"
            >
              Back to Classes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassDetailsPage;
