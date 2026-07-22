import Hero from "@/components/home/Hero";
import FeaturedClasses from "@/components/home/FeaturedClasses";
import LatestForumPosts from "@/components/home/LatestForumPosts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedClasses />
      <LatestForumPosts />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}