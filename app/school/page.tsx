"use client";

import { Computer, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CategoryNavigation from "@/components/category-navigation";
import { courses, type Course } from "@/data/courses";
import Navbar from "../components/navbar";

const PremiumIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686zm4.493 6.883l-4.244 4.244l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414"
        ></path>
      </g>
    </svg>
  );
};
const CertifiedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 11c2.309 0 3.753 2.5 2.598 4.5a3 3 0 0 1-.598.736v4.955a.5.5 0 0 1-.724.447L19 21l-1.276.638a.5.5 0 0 1-.724-.447v-4.955c-1.721-1.54-1.13-4.365 1.064-5.086c.302-.099.618-.15.936-.15m-7-2H6a1 1 0 0 0-.117 1.993L6 11h6a1 1 0 0 0 .117-1.993zm-4 4H6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2"
        className="duoicon-primary-layer"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 4a2 2 0 0 1 2 2v4c-3.079-2.309-7.504-.419-7.964 3.402A5 5 0 0 0 15 17v3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        className="duoicon-secondary-layer"
        opacity={0.3}
      ></path>
    </svg>
  );
};

const CourseCard = ({
  course,
  onClick,
}: {
  course: Course;
  onClick: () => void;
}) => {
  return (
    <div
      key={course.id}
      onClick={onClick}
      className="bg-background rounded-2xl overflow-hidden cursor-pointer p-2 hover:shadow-lg transition-shadow"
    >
      {/* Course Image */}
      <div className="relative aspect-video bg-muted overflow-hidden rounded-2xl">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {/* {course.price && (
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                        {course.price}
                    </div>
                )} */}
      </div>

      {/* Course Content */}
      <div className="mt-4 flex gap-4">
        {/* Instructor Info */}
        <div className="flex gap-2">
          <img
            src={course.instructorImage}
            alt={course.instructor}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col space-y-1">
          {/* Title */}
          <h3 className="font-semibold text-foreground text-base line-clamp-2">
            {course.title}
          </h3>

          {/* Author */}
          <span className="text-sm text-foreground">{course.instructor}</span>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(course.rating)
                    ? "text-yellow-500 fill-yellow-500"
                    : i < course.rating
                      ? "text-yellow-500 fill-yellow-500 opacity-50"
                      : "text-gray-300"
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="text-sm text-foreground ml-1">
              {course.rating} ({course.reviews})
            </span>
          </div>
          {course.price && (
            <div className="text-base font-semibold text-foreground">
              {course.price}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        {course.remark && (
          <div
            className={`px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 bg-muted text-foreground px-2`}
          >
            {course.remark}
          </div>
        )}

        <div
          className={`px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 bg-purple-500 text-white`}
        >
          <PremiumIcon className="w-4 h-4" />
          Premium
        </div>
      </div>
    </div>
  );
};

function SchoolPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMoreSponsored, setShowMoreSponsored] = useState(false);
  const [showMoreNew, setShowMoreNew] = useState(false);
  const [showMoreTrending, setShowMoreTrending] = useState(false);

  const handleCourseClick = (courseSlug: string) => {
    router.push(`/school/course/${courseSlug}`);
  };

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sponsoredCourses = filteredCourses.filter(
    (course) => course.isSponsored,
  );
  const newCourses = filteredCourses.filter((course) => course.isNew);
  const trendingCourses = filteredCourses.filter((course) => course.isTrending);

  const displayedSponsoredCourses = showMoreSponsored
    ? sponsoredCourses
    : sponsoredCourses.slice(0, 4);
  const displayedNewCourses = showMoreNew ? newCourses : newCourses.slice(0, 4);
  const displayedTrendingCourses = showMoreTrending
    ? trendingCourses
    : trendingCourses.slice(0, 4);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        {/* Category Navigation */}
        <CategoryNavigation onCategoryChange={setSelectedCategory} />

        {/* Sponsored Section */}
        {sponsoredCourses.length > 0 && (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  Sponsored
                </h2>
              </div>
            </div>

            {/* Sponsored Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
              {displayedSponsoredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => handleCourseClick(course.slug)}
                />
              ))}
            </div>

            {/* Show More Button for Sponsored */}
            {sponsoredCourses.length > 4 && (
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => setShowMoreSponsored(!showMoreSponsored)}
                  className="px-6 py-2 bg-muted text-foreground rounded-full font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {showMoreSponsored ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </>
        )}

        {/* New Courses Section */}
        {newCourses.length > 0 && (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  New Courses
                </h2>
              </div>
            </div>

            {/* New Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
              {displayedNewCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => handleCourseClick(course.slug)}
                />
              ))}
            </div>

            {/* Show More Button for New Courses */}
            {newCourses.length > 4 && (
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => setShowMoreNew(!showMoreNew)}
                  className="px-6 py-2 bg-muted text-foreground rounded-full font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {showMoreNew ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </>
        )}

        {/* Suggestions Section */}
        <div className="mb-8">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">
                Suggestions
              </h2>
              <button
                onClick={() => router.push("/School/suggestions")}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                See all
              </button>
            </div>
          </div>

          {/* Featured Creators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Creator 1 */}
            <div className="bg-muted/50 transition-colors rounded-2xl p-6 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/assets/user-1.png"
                  alt="Simone Smerilli"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="font-semibold text-foreground text-lg mb-1">
                  Simone Smerilli
                </h3>
                <div className="flex items-center gap-1 text-sm text-purple-500 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.624 10.107C11.135 9.8 11.922 9.5 13 9.5s1.865.3 2.376.607c.789.472 1.025 1.28 1.037 1.856c.023 1.148.087 4.934.087 12.037s-.064 10.889-.087 12.037c-.012.575-.248 1.384-1.037 1.856c-.511.307-1.298.607-2.376.607s-1.865-.3-2.376-.607c-.789-.472-1.025-1.28-1.037-1.856C9.564 34.89 9.5 31.103 9.5 24s.064-10.889.087-12.037c.012-.575.248-1.384 1.037-1.856m26.752 0C36.865 9.8 36.078 9.5 35 9.5s-1.865.3-2.376.607c-.788.472-1.025 1.28-1.037 1.856C31.564 13.11 31.5 16.897 31.5 24s.064 10.889.087 12.037c.012.575.248 1.384 1.037 1.856c.511.307 1.298.607 2.376.607s1.865-.3 2.376-.607c.788-.472 1.025-1.28 1.037-1.856c.023-1.148.087-4.934.087-12.037s-.064-10.889-.087-12.037c-.012-.575-.249-1.384-1.037-1.856M4.5 14.5c-.66 0-1.189.12-1.594.277c-1.016.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.934.277 1.594.277s1.189-.12 1.594-.277c1.016-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2A4.4 4.4 0 0 0 4.5 14.5m40.594.277A4.4 4.4 0 0 0 43.5 14.5c-.66 0-1.189.12-1.594.277c-1.015.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.935.277 1.594.277c.66 0 1.189-.12 1.594-.277c1.015-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2M18.5 26.857v-5.714c0-.948.776-1.446 1.603-1.517q.256-.024.765-.052c.68-.038 1.707-.074 3.132-.074s2.453.036 3.132.074q.509.028.765.052c.827.07 1.603.569 1.603 1.517v5.714c0 .949-.776 1.446-1.603 1.517q-.256.024-.765.052c-.68.038-1.707.074-3.132.074s-2.453-.036-3.132-.074q-.509-.028-.765-.052c-.827-.07-1.603-.569-1.603-1.517"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Gym Instructor</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-foreground">
                  <svg
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>5.0 (13)</span>
                </div>
              </div>
            </div>

            {/* Creator 2 */}
            <div className="bg-muted/50 transition-colors rounded-2xl p-6 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/assets/user-3.jpg"
                  alt="Samuel | EMA"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="font-semibold text-foreground text-lg mb-1">
                  Samuel | EMA
                </h3>
                <div className="flex items-center gap-1 text-sm text-purple-500 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m17.09 7.974l.23.23c1.789 1.79 2.684 2.684 2.684 3.796s-.895 2.006-2.684 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12s.895 2.006 2.685 3.796l.23.23"
                    ></path>
                  </svg>
                  <span>Backend Engineer</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-foreground">
                  <svg
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>5.0 (20)</span>
                </div>
              </div>
            </div>

            {/* Creator 3 */}
            <div className="bg-muted/50 transition-colors rounded-2xl p-6 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/assets/user-3.jpg"
                  alt="David Emma"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="font-semibold text-foreground text-lg mb-1">
                  David Emma
                </h3>
                <div className="flex items-center gap-1 text-sm text-purple-500 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.5 12.5l.475-.316c.473-.316.71-.474.938-.404c.227.071.333.335.545.864L9 16.5l2.088-6.265c.44-1.32.66-1.98 1.184-2.357s1.22-.378 2.611-.378H18.5M17 12l-1.5 1.5m0 0L14 15m1.5-1.5L17 15m-1.5-1.5L14 12"
                      ></path>
                    </g>
                  </svg>
                  <span>Math Tutor</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-foreground">
                  <svg
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>5.0 (6)</span>
                </div>
              </div>
            </div>

            {/* Creator 4 */}
            <div className="bg-muted/50 transition-colors rounded-2xl p-6 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/assets/user-3.jpg"
                  alt="Lou Attal Studio"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="font-semibold text-foreground text-lg mb-1">
                  Lou Attal Studio
                </h3>
                <div className="flex items-center gap-1 text-sm text-purple-500 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m17.09 7.974l.23.23c1.789 1.79 2.684 2.684 2.684 3.796s-.895 2.006-2.684 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12s.895 2.006 2.685 3.796l.23.23"
                    ></path>
                  </svg>
                  <span>Tech Ethusiast</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-foreground">
                  <svg
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>5.0 (8)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Courses Section */}
        {trendingCourses.length > 0 && (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  Trending Courses
                </h2>
              </div>
            </div>

            {/* Trending Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
              {displayedTrendingCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => handleCourseClick(course.slug)}
                />
              ))}
            </div>

            {/* Show More Button for Trending Courses */}
            {trendingCourses.length > 4 && (
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => setShowMoreTrending(!showMoreTrending)}
                  className="px-6 py-2 bg-muted text-foreground rounded-full font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {showMoreTrending ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </>
        )}

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No courses found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default SchoolPage;
