import React, { useState } from "react";

const testSeriesData = [
  {
    id: 1,
    title: "NEET Ultimate Test Series 2025",
    users: "255.5k",
    freeTests: "3",
    price: "₹499",
    originalPrice: "₹999",
    rating: 4.7,
    reviews: "12.5k",
    category: "Neet",
    highlights: [
      "15 Full Length Mock Tests",
      "25 Chapter-wise Tests",
      "10 Previous Year Papers",
      "+50 more tests",
    ],
    popular: true,
    new: false,
  },
  {
    id: 2,
    title: "JEE Advanced Test Series 2025",
    users: "204.6k",
    freeTests: "5",
    price: "₹799",
    originalPrice: "₹1499",
    rating: 4.8,
    reviews: "24.3k",
    category: "jee",
    highlights: [
      "20 Full Length Mock Tests",
      "30 Topic-wise Tests",
      "15 Previous Year Papers",
      "+40 more tests",
    ],
    popular: true,
    new: true,
  },
  {
    id: 3,
    title: "Class 12 Board Exam Test Series",
    users: "344.2k",
    freeTests: "4",
    price: "₹299",
    originalPrice: "₹599",
    rating: 4.5,
    reviews: "8.7k",
    category: "12th",
    highlights: [
      "10 Subject-wise Tests",
      "5 Sample Papers",
      "8 Revision Tests",
      "+15 more tests",
    ],
    popular: false,
    new: true,
  },
  {
    id: 4,
    title: "Class 11 Foundation Test Series",
    users: "221.4k",
    freeTests: "2",
    price: "₹599",
    originalPrice: "₹1199",
    rating: 4.6,
    reviews: "10.2k",
    category: "11th",
    highlights: [
      "8 Physics Tests",
      "8 Chemistry Tests",
      "8 Maths Tests",
      "+10 more tests",
    ],
    popular: false,
    new: false,
  },
  {
    id: 5,
    title: "Class 10 Board Exam Test Series",
    users: "489.7k",
    freeTests: "5",
    price: "₹399",
    originalPrice: "₹799",
    rating: 4.9,
    reviews: "15.8k",
    category: "10th",
    highlights: [
      "15 Subject-wise Tests",
      "10 Sample Papers",
      "5 Previous Year Papers",
      "+20 more tests",
    ],
    popular: true,
    new: false,
  },
  {
    id: 6,
    title: "NEET Foundation Class 11",
    users: "156.3k",
    freeTests: "2",
    price: "₹449",
    originalPrice: "₹899",
    rating: 4.4,
    reviews: "9.3k",
    category: "11th",
    highlights: [
      "12 Physics Tests",
      "12 Chemistry Tests",
      "10 Biology Tests",
      "+15 more tests",
    ],
    popular: true,
    new: true,
  },
];

const categories = ["All", "Neet", "jee", "12th", "11th", "10th"];

function TestSeries() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredTestSeries = testSeriesData
    .filter((series) => {
      const matchesCategory = selectedCategory === "All" || series.category === selectedCategory;
      const matchesSearch = series.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "popular") {
        return parseFloat(b.users) - parseFloat(a.users);
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      } else if (sortBy === "new") {
        return b.new - a.new;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Popular Test Series
          </h1>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from a wide range of test series for NEET, JEE, and Board Exams.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search test series..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="new">Newest</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                  ? "bg-gradient-to-r from-green-500 to-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Test Series Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestSeries.map((series) => (
            <div
              key={series.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Badges */}
              <div className="px-6 pt-6 pb-4 relative">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2">
                    {series.popular && (
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                    {series.new && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {series.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2 line-clamp-2">
                  {series.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(series.rating) ? "text-amber-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="ml-1 text-sm font-medium text-gray-700">
                      {series.rating} ({series.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="px-6 py-4 bg-gray-50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Free Tests</p>
                    <p className="font-semibold text-green-600">{series.freeTests}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Users</p>
                    <p className="font-semibold text-gray-800">👥 {series.users}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Price</p>
                    <div className="flex items-center">
                      <p className="font-semibold text-gray-800">{series.price}</p>
                      <p className="ml-2 text-sm text-gray-500 line-through">{series.originalPrice}</p>
                      <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        {Math.round((1 - parseFloat(series.price.replace('₹', '')) / parseFloat(series.originalPrice.replace('₹', ''))) * 100)}% off
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="px-6 py-4 flex-1">
                <h3 className="text-sm font-medium text-gray-700 mb-2">What's included:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {series.highlights.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="px-6 pb-6 pt-4">
                <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  View Test Series
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTestSeries.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-700">No test series found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestSeries;