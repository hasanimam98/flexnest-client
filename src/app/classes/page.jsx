import featuredClasses from "@/data/classes";
import ClassCard from "@/components/classes/ClassCard";
import ClassesBanner from "@/components/classes/ClassesBanner";
import SearchFilter from "@/components/classes/SearchFilter";

const ClassesPage = () => {
  return (
    <>
      <ClassesBanner />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <SearchFilter />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredClasses.map((item) => (
            <ClassCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </section>
    </>
  );
};

export default ClassesPage;