"use client";

import { ArrowLeft, ChevronRight, Heart, Users, Bookmark } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { courses } from '@/data/courses';
import PreviewPageBg from "@/public/analytics-dashboard.png";

interface sideCurriculumProps {
  className?: string;
}
export default function SideCurriculum({className}: sideCurriculumProps) {
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

  // Curriculum accordion states - Modules and Chapters
  const [module1Open, setModule1Open] = useState(false);
  const [module2Open, setModule2Open] = useState(false);
  const [module3Open, setModule3Open] = useState(false);
  const [module4Open, setModule4Open] = useState(false);

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


  return (
    <section className={`space-y-4 relative ${className}`}>
      <div className="bg-background overflow-hidden py-4 max-md:sticky top-0">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <button className="w-full bg-foreground hover:bg-purple-500 text-background py-3 rounded-lg font-semibold hover:opacity-90 transition-colors cursor-pointer">
              Start learning
            </button>
            <button className="flex items-center justify-center w-14 h-full bg-background text-foreground py-3 rounded-lg font-semibold border border-border hover:cursor-pointer transition-colors">
             <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Curriculum Section */}
      <div>
        <div className="overflow-hidden">
          <ol className="">
            {/* Module 01 - Writers and stories */}
            <li className="overflow-hidden">
              <button
                onClick={() => setModule1Open(!module1Open)}
                className="w-full bg-background cursor-pointer p-4 flex items-start gap-3 transition-colors"
              >
                <div className="shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-muted-foreground"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-foreground mb-2">
                    Lorem ipsum
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-primary bg-muted font-semibold p-1 px-2 rounded-lg">
                      Self-paced
                    </span>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${module1Open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Chapters for Module 1 */}
              <div
                className={`space-y-2 pl-8 pr-3 pb-3 transition-all duration-300 ${module1Open ? "block" : "hidden"}`}
              >
                <ul className="w-full gap-3 text-sm list-disc list-inside">
                  <li className="flex items-center justify-between gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                    <div className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                        >
                          <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                          <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                        </g>
                      </svg>
                      <span className="font-medium">
                        The basics: demo video
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">23:01</div>
                  </li>
                  <li className="flex items-center justify-between gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                    <div className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                        >
                          <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                          <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                        </g>
                      </svg>
                      <span className="font-medium">The introduction</span>
                    </div>
                    <div className="flex items-center gap-1.5">15:00</div>
                  </li>
                  <li className="flex items-center gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path d="M7.5 3.5c-1.556.047-2.483.22-3.125.862c-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C5.253 22 6.668 22 9.496 22h5c2.829 0 4.243 0 5.121-.88c.88-.879.88-2.294.88-5.126V9.488c0-2.83 0-4.246-.88-5.126c-.641-.642-1.569-.815-3.125-.862"></path>
                        <path
                          strokeLinejoin="round"
                          d="M7.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75Z"
                        ></path>
                        <path strokeLinecap="round" d="M6.5 10h4"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 11s.5 0 1 1c0 0 1.588-2.5 3-3"
                        ></path>
                        <path strokeLinecap="round" d="M6.5 16h4"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 17s.5 0 1 1c0 0 1.588-2.5 3-3"
                        ></path>
                      </g>
                    </svg>
                    <span className="font-medium">Assessment</span>
                  </li>
                  <li className="flex items-center gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                    </svg>
                    <span>Notebook examples</span>
                  </li>
                </ul>
              </div>
            </li>

            {/* Module 02 - Demo tutor */}
            <li className="overflow-hidden">
              <button
                onClick={() => setModule2Open(!module2Open)}
                className="w-full bg-background cursor-pointer p-4 flex items-start gap-3 transition-colors"
              >
                <div className="shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-muted-foreground"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-foreground mb-1">
                    Demo session
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-primary bg-muted font-semibold p-1 px-2 rounded-lg">
                      1:1 Session
                    </span>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${module2Open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`space-y-2 pl-8 pr-3 pb-3 transition-all duration-300 ${module2Open ? "block" : "hidden"}`}
              >
                <div className="mt-3 border rounded-lg flex items-center gap-3 text-sm p-3">
                  <div className="flex flex-col items-center justify-center lg:px-3">
                    <span className="text-xs text-muted-foreground">
                      Sun
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      07
                    </span>
                  </div>
                  <span className="w-px h-10 bg-border"></span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span className="font-medium text-foreground">
                        Revision of module 01
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-xs text-purple-400 bg-muted font-semibold p-1 px-2 rounded-lg flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-purple-500"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                          >
                            <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                            <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                          </g>
                        </svg>
                        Zoom
                      </span>
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              fill="currentColor"
                              fillOpacity="0.25"
                            ></circle>
                            <path
                              stroke="currentColor"
                              // strokeLineCap="round"
                              d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25"
                              strokeWidth="1"
                            ></path>
                          </g>
                        </svg>
                        02:00 PM EST(Africa/Lagos)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Module 03 - The future of books */}
            <li className="overflow-hidden">
              <button
                onClick={() => setModule3Open(!module3Open)}
                className="w-full bg-background cursor-pointer p-4 flex items-start gap-3 transition-colors"
              >
                <div className="shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-muted-foreground"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-foreground mb-2">
                    Mind map
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-primary bg-muted font-semibold p-1 px-2 rounded-lg">
                      Self-paced
                    </span>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${module3Open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Chapters for Module 1 */}
              <div
                className={`space-y-2 pl-8 pr-3 pb-3 transition-all duration-300 ${module3Open ? "block" : "hidden"}`}
              >
                <ul className="w-full gap-3 text-sm list-disc list-inside">
                  <li className="flex items-center justify-between gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                    <div className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                        >
                          <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                          <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                        </g>
                      </svg>
                      <span className="font-medium">
                        The intermediate video
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">2:00:00</div>
                  </li>
                  <li className="flex items-center justify-between gap-1.5 hover:bg-muted text-muted-foreground px-2 py-1 rounded">
                    <div className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                        >
                          <path d="M15.538 18.592c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 16.93 2 15.288 2 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4.5 6.212 4.5 9.5 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 7.07 17 8.712 17 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554ZM17 13v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8z"></path>
                          <path d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"></path>
                        </g>
                      </svg>
                      <span className="font-medium">
                        The introduction to professional study
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">15:00</div>
                  </li>
                </ul>
              </div>
            </li>

            {/* Module 04 - Revision A */}
            <li className="overflow-hidden">
              <button
                onClick={() => setModule4Open(!module4Open)}
                className="w-full bg-background cursor-pointer p-4 flex items-start gap-3 transition-colors"
              >
                <div className="shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-muted-foreground"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-foreground mb-1">
                    Projects & Certification
                  </h3>
                  <span className="text-xs text-primary bg-muted font-semibold p-1 px-2 rounded-lg">
                    Compulsory
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${module4Open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Projects and Certificate for Module 4 */}
              <div
                className={`space-y-2 pl-8 pr-3 pb-3 transition-all duration-300 ${module4Open ? "block" : "hidden"}`}
              >
                <div className="px-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Apply your knowledge through hands-on projects and earn
                    your certification upon successful completion.
                  </p>

                  {/* Projects Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Capstone Projects
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3">
                      {/* Project 1 */}
                      <div className="">
                        <div className="flex flex-col items-center gap-3">
                          <div className="bg-muted p-2 rounded-lg shrink-0 w-30 h-30">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-blue-600"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5 className="text-sm font-semibold text-center text-foreground mb-1">
                              Project 1: Foundation Build
                            </h5>
                            <span className="text-xs text-muted-foreground">
                              📊 Easy
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Project 2 */}
                      <div className="">
                        <div className="flex flex-col items-center gap-3">
                          <div className="bg-muted p-2 rounded-lg shrink-0 w-30 h-30">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-green-600"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5 className="text-sm font-semibold text-center text-foreground mb-1">
                              Project 2: Advanced Integration
                            </h5>
                            <span className="text-xs text-muted-foreground">
                              📊 Hard
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Project 3 */}
                      <div className="">
                        <div className="flex flex-col items-center gap-3">
                          <div className="bg-muted p-2 rounded-lg shrink-0 w-30 h-30">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-purple-600"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5 className="text-sm font-semibold text-center text-foreground mb-1">
                              Final Capstone Project
                            </h5>
                            <span className="text-xs text-muted-foreground">
                              📊 Professional
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Section */}
                  <div className="mt-6 pb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Your Certificate of Completion
                    </h4>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full -mr-12 -mt-12 opacity-50"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full -ml-10 -mb-10 opacity-50"></div>
                      <div className="relative z-10">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-2"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
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
                          <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-1">
                            Certificate of Completion
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            This is to certify that
                          </p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            [Your Name]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            has successfully completed
                          </p>
                          <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-3">
                            {course.title}
                          </p>
                          <div className="flex justify-center gap-8 pt-2  border-blue-200 dark:border-blue-800">
                            <div className="text-center">
                              <div className="w-16 h-0.5 bg-gray-800 dark:bg-gray-400 mb-1 mx-auto"></div>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Instructor
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-16 h-0.5 bg-gray-800 dark:bg-gray-400 mb-1 mx-auto"></div>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                Date
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Upon successful completion of all projects and
                      assessments, you&apos;ll receive a verified digital
                      certificate.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
