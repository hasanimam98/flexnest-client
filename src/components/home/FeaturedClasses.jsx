import Image from "next/image";
import Link from "next/link";
import featuredClasses from "@/data/classes";

const FeaturedClasses = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Featured Classes
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            Discover our most popular fitness programs designed to help you
            achieve your health and fitness goals with expert trainers.
          </p>
        </div>


 {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredClasses.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="card bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <figure className="relative h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </figure>

              {/* Content */}
              <div className="card-body">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  {item.name}
                </h3>

                <div className="space-y-2 text-gray-600">
                  <p>
                    👨‍🏫 <span className="font-semibold">Trainer:</span>{" "}
                    {item.trainer}
                  </p>

                   <p>
                    🏋️ <span className="font-semibold">Category:</span>{" "}
                    {item.category}
                  </p>

                  <p>
                    ⏱️ <span className="font-semibold">Duration:</span>{" "}
                    {item.duration}
                  </p>

                  <p>
                    👥 <span className="font-semibold">Bookings:</span>{" "}
                    {item.bookings}
                  </p>
                </div>

                <div className="border-t mt-5 pt-5 flex justify-between items-center">
                  <span className="text-3xl font-bold text-green-600">
                    ${item.price}
                  </span>

                  <Link
                    href={`/classes/${item.id}`}
                    className="btn btn-success rounded-full px-6"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>


          {/* View All Button */}
        <div className="text-center mt-14">
          <p className="text-gray-600 mb-5 text-lg">
            Want to explore more fitness programs?
          </p>

          <Link
            href="/classes"
            className="btn btn-success rounded-full px-8"
          >
            View All Classes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClasses;