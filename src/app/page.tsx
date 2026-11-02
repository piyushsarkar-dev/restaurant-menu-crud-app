import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Restaurant Menu CRUD App | Food Management",
  description:
    "A Restaurant Menu Management App to manage food items, categories, food images, pricing, and availability with a clean dashboard.",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      Hello Home Page
    </section>
  );
};

export default page;
