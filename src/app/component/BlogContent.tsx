// components/BlogContent.jsx
import Image from 'next/image';

const BlogContent = () => {
  const blogs = [
    {
      id: 1,
      title: "Mindfulness Matters: Harnessing the Present Moment for Mental Well-being",
      date: "April 17, 2024",
      comments: "No Comments",
      description: "Homepage Blog Our Blog Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 4.8 Google Rating",
      image: "/Home/Blog1.png",
    },
    {
      id: 2,
      title: "The Science of Happiness: Cultivating Joy and Fulfillment",
      date: "April 17, 2024",
      comments: "No Comments",
      description: "Homepage Blog Our Blog Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 4.8 Google Rating",
      image: "/Home/Blog2.png",
    },
    {
      id: 3,
      title: "Understanding Relationships: Tools for Healthy Connections",
      date: "April 17, 2024",
      comments: "No Comments",
      description: "Homepage Blog Our Blog Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 4.8 Google Rating",
      image: "/Home/Blog3.png",
    },
  ];

  return (
    <section className="py-16 ">
      <h5 className="text-center text-sm font-semibold text-yellow-500 tracking-widest">
        NOW READING
      </h5>
      <h2 className="text-center text-4xl font-bold text-[rgba(6,104,95,1)] mt-2 mb-10">
        Our Blog Content
      </h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className=" rounded-lg  overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-56 rounded-lg object-cover"
            />
            <div className="py-6">
              <h3 className="text-lg font-bold text-[rgba(6,104,95,1)] hover:text-[rgba(6,104,95,1)]/80 transition">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {blog.date}  {blog.comments}
              </p>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {blog.description}
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-[rgba(255,188,10,1)] font-semibold text-sm hover:underline"
              >
                Read More »
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogContent;