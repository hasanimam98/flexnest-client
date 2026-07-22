export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white px-6">

        <div className="text-center max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Body,
            <br />
            Elevate Your Life
          </h1>

          <p className="text-lg mb-8">
            FlexNest is your complete fitness and gym management platform.
            Discover classes, connect with trainers, and track your fitness journey.
          </p>

          <button className="btn btn-primary">
            Explore Classes
          </button>

        </div>

      </section>


      {/* Featured Classes */}
      <section className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Classes
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">

              <h3 className="card-title">
                Yoga Mastery
              </h3>

              <p>
                Improve flexibility and balance with expert trainers.
              </p>

            </div>
          </div>


          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">

              <h3 className="card-title">
                Strength Training
              </h3>

              <p>
                Build strength with professional workout plans.
              </p>

            </div>
          </div>


          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">

              <h3 className="card-title">
                Cardio Fitness
              </h3>

              <p>
                Boost your endurance with cardio sessions.
              </p>

            </div>
          </div>


        </div>

      </section>


    </main>
  );
}