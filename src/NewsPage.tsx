import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react";
import { client } from "./lib/sanityClient";
import { useEffect, useState } from "react";

interface BlockChild {
  text: string;
  _type?: string;
  marks?: string[];
  _key?: string;
}

interface ContentBlock {
  _type: string;
  children?: BlockChild[];
  style?: string;
  _key?: string;
}

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  publishedAt?: string;
  content?: string | ContentBlock[];
  author?: string;
  location?: string;
  timeRange?: string;
}

const NewsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const fetchBlogs = async () => {
    const query = `*[_type == "blog"] | order(publishedAt desc) {
      _id, 
      title, 
      slug, 
      description,
      publishedAt,
      content,
      author,
      location,
      timeRange
    }`;
    
    const blogs = await client.fetch(query);
    return blogs;
  };

  useEffect(() => {
    fetchBlogs().then((data) => {
      setBlogs(data);
      // Set first blog as selected by default
      if (data.length > 0) {
        setSelectedBlog(data[0]);
      }
      console.log(data);
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#053445] to-[#075670] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-bold text-[#053445]">KostKu</span>
          </div>

          <div className="flex gap-8">
            <a
              href="/"
              className="text-gray-600 hover:text-[#053445] font-semibold text-lg transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#053445] group-hover:w-full transition-all duration-200"></span>
            </a>
            <a
              href="/news"
              className="text-[#053445] font-semibold text-lg relative"
            >
              News
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#053445]"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#053445] via-[#064a5f] to-[#075670] py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Berita Terbaru</h1>
          <p className="text-blue-100 text-lg">
            Ikuti perkembangan dan acara terbaru dari KostKu
          </p>
        </div>
      </section>

      {/* News Content with Sidebar */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <aside className="lg:w-80 w-full">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-[#053445] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Daftar Berita
                </h3>
                <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
                  {blogs.length === 0 ? (
                    <p className="text-gray-500 text-sm">Memuat berita...</p>
                  ) : (
                    blogs.map((blog) => (
                      <button
                        key={blog._id}
                        onClick={() => setSelectedBlog(blog)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 group ${
                          selectedBlog?._id === blog._id
                            ? "bg-gradient-to-r from-[#053445] to-[#075670] text-white shadow-lg"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <h4
                          className={`font-semibold mb-2 line-clamp-2 ${
                            selectedBlog?._id === blog._id
                              ? "text-white"
                              : "text-[#053445]"
                          }`}
                        >
                          {blog.title}
                        </h4>
                        <p
                          className={`text-sm line-clamp-2 ${
                            selectedBlog?._id === blog._id
                              ? "text-blue-100"
                              : "text-gray-600"
                          }`}
                        >
                          {blog.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          {blog.publishedAt && (
                            <span
                              className={`text-xs ${
                                selectedBlog?._id === blog._id
                                  ? "text-blue-200"
                                  : "text-gray-500"
                              }`}
                            >
                              {new Date(blog.publishedAt).toLocaleDateString(
                                "id-ID",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          )}
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              selectedBlog?._id === blog._id
                                ? "text-white transform translate-x-1"
                                : "text-gray-400 group-hover:translate-x-1"
                            }`}
                          />
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {selectedBlog ? (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Featured Image Placeholder */}
                  <div className="bg-gradient-to-br from-[#053445] to-[#075670] h-64 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Calendar className="w-10 h-10" />
                      </div>
                      <p className="text-xl font-semibold">{selectedBlog.title}</p>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-8 md:p-12">
                    <div className="flex flex-wrap gap-4 mb-6">
                      {selectedBlog.publishedAt && (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#053445] rounded-full text-sm font-semibold">
                          <Calendar className="w-4 h-4" />
                          {new Date(selectedBlog.publishedAt).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                      )}
                      {selectedBlog.timeRange && (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
                          <Clock className="w-4 h-4" />
                          {selectedBlog.timeRange}
                        </span>
                      )}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#053445] mb-6 leading-tight">
                      {selectedBlog.title}
                    </h2>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {selectedBlog.description}
                      </p>

                      {selectedBlog.content && (
                        <div className="text-gray-700 leading-relaxed mb-6">
                          {/* You can render the content here based on its format */}
                          {typeof selectedBlog.content === "string" ? (
                            <p>{selectedBlog.content}</p>
                          ) : (
                            <div>
                              {/* If content is an array of blocks, you can map through them */}
                              {Array.isArray(selectedBlog.content) &&
                                selectedBlog.content.map((block: ContentBlock, index: number) => {
                                  if (block._type === "block" && block.children) {
                                    const textContent = block.children
                                      .map((child: BlockChild) => child.text || "")
                                      .join("");
                                    
                                    return (
                                      <p key={block._key || index} className="mb-4">
                                        {textContent}
                                      </p>
                                    );
                                  }
                                  return null;
                                })}
                            </div>
                          )}
                        </div>
                      )}

                      {(selectedBlog.location || selectedBlog.timeRange || selectedBlog.author) && (
                        <div className="bg-gray-50 rounded-xl p-6 mt-8">
                          <h3 className="text-xl font-bold text-[#053445] mb-4">
                            Informasi Detail
                          </h3>
                          <div className="space-y-3 text-gray-700">
                            {selectedBlog.publishedAt && (
                              <div className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-[#053445]" />
                                <span>
                                  <strong>Tanggal:</strong>{" "}
                                  {new Date(selectedBlog.publishedAt).toLocaleDateString(
                                    "id-ID",
                                    {
                                      day: "numeric",
                                      month: "long",
                                      year: "numeric",
                                    }
                                  )}
                                </span>
                              </div>
                            )}
                            {selectedBlog.timeRange && (
                              <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[#053445]" />
                                <span>
                                  <strong>Waktu:</strong> {selectedBlog.timeRange}
                                </span>
                              </div>
                            )}
                            {selectedBlog.location && (
                              <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-[#053445]" />
                                <span>
                                  <strong>Lokasi:</strong> {selectedBlog.location}
                                </span>
                              </div>
                            )}
                            {selectedBlog.author && (
                              <div className="flex items-center gap-3">
                                <span className="w-5 h-5 text-[#053445]">👤</span>
                                <span>
                                  <strong>Penulis:</strong> {selectedBlog.author}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#053445] to-[#075670] text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                        Daftar Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">
                    Pilih berita dari sidebar untuk melihat detailnya
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
