import Image from "next/image";
import Link from "next/link";
import featuredClasses from "@/data/classes";

const FeaturedClasses = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Featured Classes
          </h2>

          <p className="mt-4 text-gray-500">
            Discover our most popular fitness programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuredClasses.map((item) => (

            <div
              key={item.id}
              className="card bg-white shadow-xl"
            >

              <figure className="relative h-60">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

              </figure>

              <div className="card-body">

                <h3 className="card-title">
                  {item.name}
                </h3>

                <p>
                  Trainer: {item.trainer}
                </p>

                <p>
                  Category: {item.category}
                </p>

                <p>
                  Duration: {item.duration}
                </p>

                <p>
                  Bookings: {item.bookings}
                </p>

                <div className="card-actions justify-between items-center mt-3">

                  <span className="text-xl font-bold text-green-600">
                    ${item.price}
                  </span>

                  <Link
                    href={`/classes/${item.id}`}
                    className="btn btn-success"
                  >
                    Details
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedClasses;