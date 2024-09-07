import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import Newsletter from "@/Components/shared/Newsletter";

export default function page() {
  return (
    <>
      <Newsletter />
      <BlogList />

    </>
  );
}
