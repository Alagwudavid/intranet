'use client';

import { useRouter } from 'next/navigation';
import { courses, type Course } from '@/data/courses';

const PremiumIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686zm4.493 6.883l-4.244 4.244l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414"></path></g></svg>;
}

const CourseCard = ({ course, onClick }: { course: Course; onClick: () => void }) => {
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
                                    ? 'text-yellow-500 fill-yellow-500'
                                    : i < course.rating
                                        ? 'text-yellow-500 fill-yellow-500 opacity-50'
                                        : 'text-gray-300'
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
            <div className='flex items-center gap-2 mt-2'>
                {course.remark && (
                    <div className={`px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 bg-muted text-foreground px-2`}>
                        {course.remark}
                    </div>
                )}

                <div className={`px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 bg-purple-500 text-white`}>
                    <PremiumIcon className='w-4 h-4' />
                    Premium
                </div>
            </div>
        </div>
    );
};

export default function ClassroomPage() {
    const router = useRouter();

    const handleCourseClick = (courseSlug: string) => {
        router.push(`/intranet/course/${courseSlug}`);
    };

    return (
        <div className="py-6 px-4">
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Classroom</h2>
                <p className="text-muted-foreground">Access your courses and learning materials.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onClick={() => handleCourseClick(course.slug)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
