import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white">

            <span className="badge badge-success badge-lg mb-5">
              Welcome to FlexNest
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Transform Your Body,
              <br />
              Elevate Your Life
            </h1>

             <p className="mt-6 text-lg opacity-90">
              Discover world-class fitness classes, connect with professional
              trainers, and build a healthier lifestyle with FlexNest.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <Link href="/classes" className="btn btn-neutral">
                Explore Classes
              </Link>

              <Link href="/register" className="btn btn-outline text-white border-white hover:bg-white hover:text-green-600">
                Join Now
              </Link>

            </div>

          </div>

            {/* Right Image */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900"
              alt="Fitness"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;