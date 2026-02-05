"use client";

import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { courses } from '@/data/courses';

export default function SpecialNavbar() {
  const params = useParams();
  const router = useRouter();
  const courseSlug = params.name as string;

  // Validate slug format (only alphanumeric, dashes, and underscores)
  const isValidSlug = /^[a-z0-9_-]+$/i.test(courseSlug);

  // Find course by slug
  const foundCourse = isValidSlug ? courses.find(c => c.slug === courseSlug) : null;

  const course = foundCourse;

  // Get coach information from course data
  const coach = course ? {
    name: course.instructor,
    image: course.instructorImage
  } : null;

  return (
    <nav className="sticky top-0 left-0 right-0 px-2 z-header bg-background border-b">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-10 p-2">
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 justify-center rounded-lg p-1 px-4 border cursor-pointer text-sm hover:bg-muted/50 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
          {/* Center: Breadcrumb Navigation */}
          <div className="flex items-center gap-1 flex-1 justify-center  text-sm text-muted-foreground">
            {courseSlug}
          </div>
          <div className="flex items-center space-x-1 md:space-x-3 ml-2">
            x
          </div>
        </div>
      </div>
    </nav>
  );
}
