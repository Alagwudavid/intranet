'use client';
import {
  ArrowLeft,
  Play,
  Pause,
  Check,
  Bookmark,
  Heart,
  Users,
} from "lucide-react";
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { courses } from '@/data/courses';
import PreviewPageBg from "@/public/analytics-dashboard.png";
import { TabNav } from "@/components/ui/tab-nav";
import SideCurriculum from "../../components/side-curriculum";

const tabs = [
  { id: 'curriculum-tab', label: 'Curriculum', href: '#curriculum-tab' },
  { id: 'creator-tab', label: 'Creator', href: '#creator-tab' },
  { id: 'reviews-tab', label: 'Reviews', href: '#reviews-tab' },
];


export default function CourseOverviewPage() {
  const params = useParams();
  const router = useRouter();
  const courseSlug = params.name as string;

  // Validate slug format (only alphanumeric, dashes, and underscores)
  const isValidSlug = /^[a-z0-9_-]+$/i.test(courseSlug);

  // Find course by slug
  const foundCourse = isValidSlug ? courses.find(c => c.slug === courseSlug) : null;

  const [paymentType, setPaymentType] = useState<"full" | "installment">(
    "full",
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const course = foundCourse;
  const PreviewPageBgSrc = typeof PreviewPageBg === 'string' ? PreviewPageBg : PreviewPageBg.src;

  // Media carousel items
  const mediaItems = [
    {
      type: "video" as const,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: course?.image,
    },
    { type: "image" as const, src: PreviewPageBgSrc },
    { type: "image" as const, src: course?.image || "" },
    { type: "image" as const, src: course?.image || "" },
    { type: "image" as const, src: course?.image || "" },
  ];

  // Get coach information from course data
  const coach = course ? {
    name: course.instructor,
    image: course.instructorImage
  } : null;

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground">The course you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar - Desktop Position */}
        <div className="hidden md:block md:col-span-1 p-4">
          <div className="space-y-2 sticky top-0">
            <SideCurriculum />
          </div>
        </div>
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8 relative p-4">
            {/* Media Carousel */}
            <div className="relative h-auto w-full">
              <div className="relative h-[410px] w-full border overflow-hidden rounded-2xl group">
                {/* Blurred Background */}
                <div
                  className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                  style={{
                    backgroundImage: `url("${course?.image}")`,
                    filter: "blur(20px)",
                    transform: "scale(1.1)",
                  }}
                />

                {/* Content Layer */}
                <div className="relative h-full w-full flex items-center justify-center">
                  {mediaItems[currentSlide].type === "video" ? (
                    <>
                      <video
                        id="course-intro-video"
                        className="w-full h-full object-cover"
                        poster={mediaItems[currentSlide].poster}
                        preload="metadata"
                      >
                        <source
                          src={mediaItems[currentSlide].src}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <button
                        onClick={() => {
                          const video = document.getElementById(
                            "course-intro-video",
                          ) as HTMLVideoElement;
                          if (video) {
                            if (isPlaying) {
                              video.pause();
                              setIsPlaying(false);
                            } else {
                              video.play();
                              setIsPlaying(true);
                            }
                          }
                        }}
                        className="absolute bottom-5 left-5 z-20 flex items-center justify-center bg-white/90 hover:bg-white p-2.5 rounded-full cursor-pointer transition-all shadow-lg group-hover:scale-110"
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 text-primary fill-primary" />
                        ) : (
                          <Play className="w-6 h-6 text-primary fill-primary" />
                        )}
                      </button>
                    </>
                  ) : (
                    <img
                      src={mediaItems[currentSlide].src}
                      alt={course.title}
                      className="w-3xl h-full object-contain mx-auto"
                    />
                  )}

                  {/* Navigation Buttons */}
                  {currentSlide > 0 && (
                    <button
                      onClick={() => {
                        setCurrentSlide(currentSlide - 1);
                        setIsPlaying(false);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-white/90 hover:bg-white p-3 rounded-full cursor-pointer transition-all shadow-lg"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-800" />
                    </button>
                  )}
                  {currentSlide < mediaItems.length - 1 && (
                    <button
                      onClick={() => {
                        setCurrentSlide(currentSlide + 1);
                        setIsPlaying(false);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-white/90 hover:bg-white p-3 rounded-full cursor-pointer transition-all shadow-lg rotate-180"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-800" />
                    </button>
                  )}

                  {/* Slide Counter */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                    {currentSlide + 1} / {mediaItems.length}
                  </div>
                </div>
              </div>
            </div>
            {/* <TabNav tabs={tabs} /> */}
            <div className="md:hidden">
              <div className="space-y-2 mb-6">
                <SideCurriculum className="pt-0"/>
              </div>
            </div>
          {/* Course Details Section */}
          <section id="details-tab" className="">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About This Event
            </h2>
            <p className="text-foreground mb-4">{course.description}</p>

            {isDetailsExpanded && (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  What You&apos;ll Learn
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>Comprehensive understanding of core concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>
                      Hands-on practical experience with real-world projects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>
                      Expert tips and best practices from industry professionals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 mt-1" />
                    <span>Access to exclusive resources and materials</span>
                  </li>
                </ul>

                <div className="pt-4 mt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    This program includes:
                  </h3>
                  <ul className="space-y-3 text-sm text-foreground">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                        >
                          <path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></path>
                          <path d="m14.576 9.235l-3.387-2.117a.777.777 0 0 0-1.189.66v4.445a.777.777 0 0 0 1.189.659l3.387-2.117a.902.902 0 0 0 0-1.53"></path>
                        </g>
                      </svg>
                      <span>Access to recorded replays</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M12 0a4 4 0 0 1 4 4v2.5h-1V4a3 3 0 1 0-6 0v2h.5A2.5 2.5 0 0 1 12 8.5v5A2.5 2.5 0 0 1 9.5 16h-7A2.5 2.5 0 0 1 0 13.5v-5A2.5 2.5 0 0 1 2.5 6H8V4a4 4 0 0 1 4-4M2.5 7A1.5 1.5 0 0 0 1 8.5v5A1.5 1.5 0 0 0 2.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9.5 7z"
                        ></path>
                      </svg>
                      <span>Lifetime access to exclusive materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></path>
                          <path
                            strokeLinecap="round"
                            d="M12 16v3"
                            opacity={0.5}
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"
                          ></path>
                          <path
                            d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"
                            opacity={0.5}
                          ></path>
                          <path d="M11.146 6.023C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path>
                          <path
                            strokeLinecap="round"
                            d="M18 22H6"
                            opacity={0.5}
                          ></path>
                        </g>
                      </svg>
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 18h-.75a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h.75a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75m15.75 0h-.75a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 19.5 9h.75a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3M3.75 9a8.25 8.25 0 1 1 16.5 0M15 21.75h2.25a3 3 0 0 0 3-3V18"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 23.25H12a1.5 1.5 0 1 1 0-3h1.5a1.5 1.5 0 1 1 0 3M9 8.25a3 3 0 0 1 5.753-1.192c.218.505.294 1.06.218 1.605A3 3 0 0 1 13 11.079a1.5 1.5 0 0 0-1 1.415v.256"
                          ></path>
                          <path d="M12 16.5a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></path>
                        </g>
                      </svg>
                      <span>Expert support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 mt-1"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                        >
                          <path d="M16.5 23.25h-6l.75-4.5h4.5zm-8.25 0h10.5m-7.5-18h10.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-1.5m0 0h19.5"></path>
                          <path d="M2.25.75h4.5s1.5 0 1.5 1.5v9s0 1.5-1.5 1.5h-4.5s-1.5 0-1.5-1.5v-9s0-1.5 1.5-1.5m-1.5 9h7.5"></path>
                        </g>
                      </svg>
                      <span>Mobile and desktop access</span>
                    </li>
                  </ul>
                </div>
              </>
            )}

            <button
              onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
              className="mt-4 text-primary hover:underline font-semibold flex items-center gap-2"
            >
              {isDetailsExpanded ? (
                <>
                  Show less
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </>
              ) : (
                <>
                  Show more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </>
              )}
            </button>
          </section>
        </div>
    </div>
  );
}
