'use client';

import { useParams, useRouter } from 'next/navigation';
import { courses } from '@/data/courses';
import { ArrowLeft, Play, Check } from 'lucide-react';

const PremiumIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686zm4.493 6.883l-4.244 4.244l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414"></path></g></svg>;
}

export default function CourseOverviewPage() {
    const params = useParams();
    const router = useRouter();
    const courseSlug = params.name as string;

    // Validate slug format (only alphanumeric, dashes, and underscores)
    const isValidSlug = /^[a-z0-9_-]+$/i.test(courseSlug);

    // Find course by slug
    const course = isValidSlug ? courses.find(c => c.slug === courseSlug) : null;

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
                    <p className="text-muted-foreground">The course you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-8">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 bg-muted/70 text-muted-foreground hover:bg-muted mb-6 p-2 rounded-lg cursor-pointer"
            >
                <ArrowLeft className="w-5 h-5" />
                Back
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Course Introductory Video */}
                    <div className="relative aspect-video bg-muted overflow-hidden rounded-2xl mb-6 group">
                        <video
                            id="course-intro-video"
                            className="w-full h-full object-cover"
                            poster={course.image}
                            controls
                            preload="metadata"
                        >
                            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            onClick={() => {
                                const video = document.getElementById('course-intro-video') as HTMLVideoElement;
                                if (video) {
                                    video.play();
                                    (video as any).style.pointerEvents = 'auto';
                                    document.getElementById('video-play-overlay')?.classList.add('hidden');
                                }
                            }}
                            id="video-play-overlay"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-white/90 hover:bg-white p-6 rounded-full cursor-pointer transition-all shadow-lg group-hover:scale-110"
                        >
                            <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                        </button>
                    </div>

                    {/* Course Title */}
                    <h1 className="text-3xl font-bold text-foreground mb-4">{course.title}</h1>

                    {/* Course Description */}
                    {/* <p className="text-lg text-muted-foreground mb-6">{course.description}</p> */}

                    {/* Instructor Info */}
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={course.instructorImage}
                            alt={course.instructor}
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-lg font-semibold text-foreground">{course.instructor}</p>
                            <div className="flex items-center gap-1 text-sm text-purple-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
                                    <path fill="currentColor" fillRule="evenodd" d="M10.624 10.107C11.135 9.8 11.922 9.5 13 9.5s1.865.3 2.376.607c.789.472 1.025 1.28 1.037 1.856c.023 1.148.087 4.934.087 12.037s-.064 10.889-.087 12.037c-.012.575-.248 1.384-1.037 1.856c-.511.307-1.298.607-2.376.607s-1.865-.3-2.376-.607c-.789-.472-1.025-1.28-1.037-1.856C9.564 34.89 9.5 31.103 9.5 24s.064-10.889.087-12.037c.012-.575.248-1.384 1.037-1.856m26.752 0C36.865 9.8 36.078 9.5 35 9.5s-1.865.3-2.376.607c-.788.472-1.025 1.28-1.037 1.856C31.564 13.11 31.5 16.897 31.5 24s.064 10.889.087 12.037c.012.575.248 1.384 1.037 1.856c.511.307 1.298.607 2.376.607s1.865-.3 2.376-.607c.788-.472 1.025-1.28 1.037-1.856c.023-1.148.087-4.934.087-12.037s-.064-10.889-.087-12.037c-.012-.575-.249-1.384-1.037-1.856M4.5 14.5c-.66 0-1.189.12-1.594.277c-1.016.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.934.277 1.594.277s1.189-.12 1.594-.277c1.016-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2A4.4 4.4 0 0 0 4.5 14.5m40.594.277A4.4 4.4 0 0 0 43.5 14.5c-.66 0-1.189.12-1.594.277c-1.015.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.935.277 1.594.277c.66 0 1.189-.12 1.594-.277c1.015-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2M18.5 26.857v-5.714c0-.948.776-1.446 1.603-1.517q.256-.024.765-.052c.68-.038 1.707-.074 3.132-.074s2.453.036 3.132.074q.509.028.765.052c.827.07 1.603.569 1.603 1.517v5.714c0 .949-.776 1.446-1.603 1.517q-.256.024-.765.052c-.68.038-1.707.074-3.132.074s-2.453-.036-3.132-.074q-.509-.028-.765-.052c-.827-.07-1.603-.569-1.603-1.517" clipRule="evenodd"></path>
                                </svg>
                                <span>Content Creator</span>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                        {course.remark && (
                            <div className="px-4 py-2 rounded-full text-sm font-semibold bg-muted text-foreground">
                                {course.remark}
                            </div>
                        )}
                        <div className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 bg-purple-500 text-white">
                            <PremiumIcon className="w-5 h-5" />
                            Premium
                        </div>
                        {course.isSponsored && (
                            <div className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-500 text-white">
                                Sponsored
                            </div>
                        )}
                        {course.isNew && (
                            <div className="px-4 py-2 rounded-full text-sm font-semibold bg-green-500 text-white">
                                New
                            </div>
                        )}
                        {course.isTrending && (
                            <div className="px-4 py-2 rounded-full text-sm font-semibold bg-orange-500 text-white">
                                Trending
                            </div>
                        )}
                    </div>

                    {/* Course Details Section */}
                    <div className="bg-muted rounded-2xl p-6 mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">About This Course</h2>
                        <p className="text-muted-foreground mb-4">
                            {course.description}
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-3">What You'll Learn</h3>
                        <ul className="space-y-2 text-muted-foreground grid grid-cols-2">
                            <li className="flex items-start gap-2">
                                <Check className="size-5 mt-1" />
                                <span>Comprehensive understanding of core concepts</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="size-5 mt-1" />
                                <span>Hands-on practical experience with real-world projects</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="size-5 mt-1" />
                                <span>Expert tips and best practices from industry professionals</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="size-5 mt-1" />
                                <span>Access to exclusive resources and materials</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar - Mobile Position */}
                    <div className="lg:hidden">
                        <div className='space-y-2'>
                            <div className="relative aspect-video bg-muted overflow-hidden rounded-2xl mb-6">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-muted rounded-2xl p-6">
                                <div className="text-center mb-6">
                                    <p className="text-4xl font-bold text-foreground mb-2">{course.price}</p>
                                    {course.price !== 'Free' && (
                                        <p className="text-sm text-muted-foreground">per week</p>
                                    )}
                                </div>

                                <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:opacity-90 transition-opacity mb-4">
                                    Buy Now
                                </button>

                                <button className="w-full bg-background text-foreground py-3 rounded-full font-semibold border border-border hover:bg-muted transition-colors">
                                    Add to Wishlist
                                </button>

                                <div className="mt-6 pt-6 border-t border-border">
                                    <h3 className="font-semibold text-foreground mb-4">This course includes:</h3>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <Check className="size-5 mt-1" />
                                            <span>3 hours on-demand video</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="size-5 mt-1" />
                                            <span>Lifetime access</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="size-5 mt-1" />
                                            <span>Certificate of completion</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="size-5 mt-1" />
                                            <span>Expert support</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="size-5 mt-1" />
                                            <span>Mobile and desktop access</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Curriculum Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground">Course Curriculum</h2>
                                <p className="text-sm text-muted-foreground mt-1">
                                    8 sections • 44 lectures • 2h 47m total length
                                </p>
                            </div>
                            <button className="text-sm font-semibold text-primary hover:underline">
                                Expand all sections
                            </button>
                        </div>

                        {/* Curriculum Sections */}
                        <div className="space-y-2">
                            {/* Section 1 */}
                            <details className="bg-muted rounded-2xl overflow-hidden" open>
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/70 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                        <h3 className="font-semibold text-foreground">Getting Started</h3>
                                    </div>
                                    <span className="text-sm text-muted-foreground">5 lectures • 19min</span>
                                </summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <div className="flex items-center justify-between py-2 hover:bg-background/50 px-2 rounded">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                            </svg>
                                            <span className="text-sm text-foreground">Who Am I... and What's Your Goal?</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="text-sm text-primary hover:underline">Preview</button>
                                            <span className="text-sm text-muted-foreground">01:47</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-2 hover:bg-background/50 px-2 rounded">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                            </svg>
                                            <span className="text-sm text-foreground">Designing a Udemy course structure</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="text-sm text-primary hover:underline">Preview</button>
                                            <span className="text-sm text-muted-foreground">00:48</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-2 hover:bg-background/50 px-2 rounded">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                            </svg>
                                            <span className="text-sm text-foreground">How to get started as a Udemy Instructor</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="text-sm text-primary hover:underline">Preview</button>
                                            <span className="text-sm text-muted-foreground">04:52</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-2 hover:bg-background/50 px-2 rounded">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                            </svg>
                                            <span className="text-sm text-foreground">Choosing a Topic...What Is Going To Be Most Profitable?</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">06:35</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 hover:bg-background/50 px-2 rounded">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                            </svg>
                                            <span className="text-sm text-foreground">Observe Your Competitors Through Analysis</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">04:53</span>
                                    </div>
                                </div>
                            </details>

                            {/* Section 2 */}
                            <details className="bg-muted rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/70 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <h3 className="font-semibold text-foreground">Planning Your Course</h3>
                                    </div>
                                    <span className="text-sm text-muted-foreground">6 lectures • 19min</span>
                                </summary>
                            </details>

                            {/* Section 3 */}
                            <details className="bg-muted rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/70 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <h3 className="font-semibold text-foreground">Making the Course</h3>
                                    </div>
                                    <span className="text-sm text-muted-foreground">15 lectures • 1hr 4min</span>
                                </summary>
                            </details>

                            {/* Section 4 */}
                            <details className="bg-muted rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/70 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <h3 className="font-semibold text-foreground">Finishing Touches For Filming</h3>
                                    </div>
                                    <span className="text-sm text-muted-foreground">5 lectures • 19min</span>
                                </summary>
                            </details>

                            {/* Section 5 */}
                            <details className="bg-muted rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/70 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <h3 className="font-semibold text-foreground">Guide to Selling Your Course and Increasing Sales</h3>
                                    </div>
                                    <span className="text-sm text-muted-foreground">3 lectures • 8min</span>
                                </summary>
                            </details>

                            {/* Section 6 */}
                            <details className="bg-muted rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/70 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <h3 className="font-semibold text-foreground">Finishing Touches for the End of the Course</h3>
                                    </div>
                                    <span className="text-sm text-muted-foreground">4 lectures • 6min</span>
                                </summary>
                            </details>

                            {/* Section 7 */}
                            <details className="bg-muted rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/70 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <h3 className="font-semibold text-foreground">Bonus Videos - 2019 Updates - Earnings, Udemy Changes, and FAQs</h3>
                                    </div>
                                    <span className="text-sm text-muted-foreground">5 lectures • 31min</span>
                                </summary>
                            </details>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Reviews</h2>

                        {/* Rating Summary */}
                        <div className="bg-muted rounded-2xl p-6 mb-6">
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-6 h-6 text-yellow-500 fill-yellow-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg font-semibold text-foreground mb-1">
                                {course.rating} out of 5
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {course.reviews} total reviews
                            </p>

                            {/* Rating Breakdown */}
                            <div className="mt-6 space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-foreground w-12">5 stars</span>
                                    <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-foreground w-12">4 stars</span>
                                    <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500" style={{ width: '0%' }}></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-foreground w-12">3 stars</span>
                                    <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500" style={{ width: '0%' }}></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-foreground w-12">2 stars</span>
                                    <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500" style={{ width: '0%' }}></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-foreground w-12">1 star</span>
                                    <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500" style={{ width: '0%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Individual Reviews */}
                        <div className="space-y-6">
                            {/* Review 1 */}
                            <div className="bg-muted rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <img
                                        src="/assets/user-1.png"
                                        alt="Cod3rMax"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-foreground">Cod3rMax</h4>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            Its great until now i had a lot of winnings parlay
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Review 2 */}
                            <div className="bg-muted rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <img
                                        src="/assets/user-3.jpg"
                                        alt="Wayne Chapman"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-foreground">Wayne Chapman</h4>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            Great picks & support
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Review 3 */}
                            <div className="bg-muted rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <img
                                        src="/assets/user-3.jpg"
                                        alt="Nyle Samuels"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-foreground">Nyle Samuels</h4>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            Excellent content and very helpful!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Review 4 */}
                            <div className="bg-muted rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <img
                                        src="/assets/user-3.jpg"
                                        alt="Donovan Byrd"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-foreground">Donovan Byrd</h4>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">
                                            Worth every penny. Highly recommended!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* See All Reviews Button */}
                        <div className="flex justify-center mt-6">
                            <button className="text-primary hover:underline font-semibold">
                                See all reviews
                            </button>
                        </div>
                    </div>

                    {/* About the Creator Section */}
                    <div className="bg-muted rounded-2xl p-6">
                        <h2 className="text-2xl font-bold text-foreground mb-6">About the creator</h2>

                        <div className="flex items-start gap-4 mb-6">
                            <img
                                src={course.instructorImage}
                                alt={course.instructor}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <p className="text-lg font-semibold text-foreground">{course.instructor}</p>
                                <div className="flex items-center gap-1 text-sm text-purple-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
                                        <path fill="currentColor" fillRule="evenodd" d="M10.624 10.107C11.135 9.8 11.922 9.5 13 9.5s1.865.3 2.376.607c.789.472 1.025 1.28 1.037 1.856c.023 1.148.087 4.934.087 12.037s-.064 10.889-.087 12.037c-.012.575-.248 1.384-1.037 1.856c-.511.307-1.298.607-2.376.607s-1.865-.3-2.376-.607c-.789-.472-1.025-1.28-1.037-1.856C9.564 34.89 9.5 31.103 9.5 24s.064-10.889.087-12.037c.012-.575.248-1.384 1.037-1.856m26.752 0C36.865 9.8 36.078 9.5 35 9.5s-1.865.3-2.376.607c-.788.472-1.025 1.28-1.037 1.856C31.564 13.11 31.5 16.897 31.5 24s.064 10.889.087 12.037c.012.575.248 1.384 1.037 1.856c.511.307 1.298.607 2.376.607s1.865-.3 2.376-.607c.788-.472 1.025-1.28 1.037-1.856c.023-1.148.087-4.934.087-12.037s-.064-10.889-.087-12.037c-.012-.575-.249-1.384-1.037-1.856M4.5 14.5c-.66 0-1.189.12-1.594.277c-1.016.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.934.277 1.594.277s1.189-.12 1.594-.277c1.016-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2A4.4 4.4 0 0 0 4.5 14.5m40.594.277A4.4 4.4 0 0 0 43.5 14.5c-.66 0-1.189.12-1.594.277c-1.015.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.935.277 1.594.277c.66 0 1.189-.12 1.594-.277c1.015-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2M18.5 26.857v-5.714c0-.948.776-1.446 1.603-1.517q.256-.024.765-.052c.68-.038 1.707-.074 3.132-.074s2.453.036 3.132.074q.509.028.765.052c.827.07 1.603.569 1.603 1.517v5.714c0 .949-.776 1.446-1.603 1.517q-.256.024-.765.052c-.68.038-1.707.074-3.132.074s-2.453-.036-3.132-.074q-.509-.028-.765-.052c-.827-.07-1.603-.569-1.603-1.517" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Content Creator</span>
                                </div>
                                <button className="text-sm text-primary hover:underline font-semibold">
                                    View profile
                                </button>
                            </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                            💻 I've built my business around one simple passion — creating and selling digital products.
                            I love turning ideas into assets you can sell over and over again, and now I help others do the same.
                            I share everything I've learned about launching, scaling, and automating income from digital products,
                            plus give you the exact tools and strategies I use myself.
                        </p>

                        {/* Message Creator */}
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Send creator a message..."
                                className="w-full px-4 py-3 bg-background text-foreground rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-muted rounded-full transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12l-.604-5.437C4.223 5.007 5.825 3.864 7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.466c-1.415.67-3.017-.472-2.844-2.028zm0 0h7"></path></svg>
                            </button>
                        </div>

                        {/* Report Creator */}
                        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v1.085l1.574-.315a9.43 9.43 0 0 1 5.35.492l.203.081a7.25 7.25 0 0 0 4.45.302a1.95 1.95 0 0 1 2.423 1.892v7.367c0 .988-.673 1.85-1.632 2.09l-.214.053a9.43 9.43 0 0 1-5.788-.393a7.93 7.93 0 0 0-4.498-.413l-1.868.374V22a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 5 1.25m.75 11.835l1.574-.315a9.43 9.43 0 0 1 5.35.492a7.93 7.93 0 0 0 4.866.33l.215-.054a.654.654 0 0 0 .495-.634V5.537a.45.45 0 0 0-.559-.437a8.75 8.75 0 0 1-5.371-.364l-.204-.082a7.93 7.93 0 0 0-4.498-.413l-1.868.374z" clipRule="evenodd"></path></svg>
                            Report this creator
                        </button>
                    </div>
                </div>

                {/* Sidebar - Desktop Position */}
                <div className="hidden lg:block lg:col-span-1">
                    <div className='space-y-2 sticky top-6'>
                        <div className="relative aspect-video bg-muted overflow-hidden rounded-2xl mb-6">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-muted rounded-2xl p-6">
                            <div className="text-center mb-6">
                                <p className="text-4xl font-bold text-foreground mb-2">{course.price}</p>
                                {/* {course.price !== 'Free' && (
                                    <p className="text-sm text-muted-foreground">per week</p>
                                )} */}
                            </div>

                            <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:opacity-90 transition-opacity mb-4">
                                Buy Now
                            </button>

                            <button className="w-full bg-background text-foreground py-3 rounded-full font-semibold border border-border hover:bg-muted transition-colors">
                                Add to Cart
                            </button>

                            <div className="mt-6 pt-6 border-t border-border">
                                <h3 className="font-semibold text-foreground mb-4">This course includes:</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-1" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></path><path d="m14.576 9.235l-3.387-2.117a.777.777 0 0 0-1.189.66v4.445a.777.777 0 0 0 1.189.659l3.387-2.117a.902.902 0 0 0 0-1.53"></path></g></svg>
                                        <span>3 hours on-demand video</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-1" width={16} height={16} viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M12 0a4 4 0 0 1 4 4v2.5h-1V4a3 3 0 1 0-6 0v2h.5A2.5 2.5 0 0 1 12 8.5v5A2.5 2.5 0 0 1 9.5 16h-7A2.5 2.5 0 0 1 0 13.5v-5A2.5 2.5 0 0 1 2.5 6H8V4a4 4 0 0 1 4-4M2.5 7A1.5 1.5 0 0 0 1 8.5v5A1.5 1.5 0 0 0 2.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9.5 7z"></path></svg>
                                        <span>Lifetime access</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-1" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></path><path strokeLinecap="round" d="M12 16v3" opacity={0.5}></path><path strokeLinecap="round" strokeLinejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></path><path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5" opacity={0.5}></path><path d="M11.146 6.023C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path><path strokeLinecap="round" d="M18 22H6" opacity={0.5}></path></g></svg>
                                        <span>Certificate of completion</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-1" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 18h-.75a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h.75a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75m15.75 0h-.75a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 19.5 9h.75a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3M3.75 9a8.25 8.25 0 1 1 16.5 0M15 21.75h2.25a3 3 0 0 0 3-3V18"></path><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 23.25H12a1.5 1.5 0 1 1 0-3h1.5a1.5 1.5 0 1 1 0 3M9 8.25a3 3 0 0 1 5.753-1.192c.218.505.294 1.06.218 1.605A3 3 0 0 1 13 11.079a1.5 1.5 0 0 0-1 1.415v.256"></path><path d="M12 16.5a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></path></g></svg>
                                        <span>Expert support</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mt-1" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M16.5 23.25h-6l.75-4.5h4.5zm-8.25 0h10.5m-7.5-18h10.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-1.5m0 0h19.5"></path><path d="M2.25.75h4.5s1.5 0 1.5 1.5v9s0 1.5-1.5 1.5h-4.5s-1.5 0-1.5-1.5v-9s0-1.5 1.5-1.5m-1.5 9h7.5"></path></g></svg>
                                        <span>Mobile and desktop access</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
