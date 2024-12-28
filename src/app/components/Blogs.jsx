import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Courier Delivery App Development: Features, Costs, and Key Insights for 2024",
      description:
        "In today's fast-paced world, courier and delivery services are no longer just an option but an essential service....",
      image: "/blog-1.png", 
      link: "#",
    },
    {
      id: 2,
      title: "Mobile App Development: Trends to Watch in 2024",
      description:
        "The mobile app development landscape is constantly evolving, and 2024 promises to be a year full of exciting innovations....",
      image: "/blog-2.png",
      link: "#",
    },
    {
      id: 3,
      title: "E-commerce Business Growth: Key Strategies for Success",
      description:
        "With the rise of online shopping, e-commerce businesses need to adopt new strategies to stay ahead in the market....",
      image: "/blog-3.png",
      link: "#",
    },
  ];

  return (
    <div className="mx-6 md:mx-20 my-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold text-gray-800">
            We're here to share stories from the Latest <span className="text-[#cd4a01]">News</span>
          </h2>
        </div>

        <div>
          <button className="bg-[#cd4a01] mt-10 md:mt-0 hover:bg-[#df753b] text-white text-lg font-semibold px-6 py-2 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl">
            View All Blogs
          </button>
        </div>
      </div>

      <div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {blogs.map((blog) => (
      <div
        key={blog.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:translate-y-2"
      >
        <div className="relative">
          <Image
            src={blog.image} 
            alt="Blog image"
            width={500}
            height={300}
            className="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-600 mb-4">{blog.description}</p>
          <Link href={blog.link} className="text-[#cd4a01] hover:underline">
            Read more...
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Blogs;
