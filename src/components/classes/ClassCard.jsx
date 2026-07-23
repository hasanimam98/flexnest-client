import Image from "next/image";
import Link from "next/link";

const ClassCard = ({ item }) => {
  return (
    <div className="card bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
      <figure className="relative h-60 overflow-hidden rounded-t-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </figure>

      <div className="card-body space-y-2">
        <h2 className="card-title text-xl">{item.name}</h2>

        <p>👨‍🏫 <span className="font-semibold">Trainer:</span> {item.trainer}</p>
        <p>🏋️ <span className="font-semibold">Category:</span> {item.category}</p>
        <p>⏱️ <span className="font-semibold">Duration:</span> {item.duration}</p>
        <p>👥 <span className="font-semibold">Bookings:</span> {item.bookings}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-green-600">
            ${item.price}
          </span>

          <Link
            href={`/classes/${item.id}`}
            className="btn btn-success btn-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;