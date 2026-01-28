export interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    instructor: string;
    instructorImage: string;
    price: string;
    rating: number;
    reviews: number;
    image: string;
    remark?: string;
    category: string;
    isSponsored?: boolean;
    isNew?: boolean;
    isTrending?: boolean;
}

export const courses: Course[] = [
    {
        id: 1,
        title: 'Run faster with coach ryan',
        slug: 'parlay-pros',
        description: 'Run faster with coach ryan - Athletic sports',
        instructor: 'Parlay Pros',
        instructorImage: '/assets/user-1.png',
        price: '$7.50 • 3 weeks',
        rating: 5,
        reviews: 6,
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
        remark: 'Trending',
        category: 'Business',
        isSponsored: true,
        isTrending: true
    },
    {
        id: 2,
        title: 'Become the BEST Producer You Can Be',
        slug: 'become-the-best-producer-you-can-be',
        description: 'SoniX Academy',
        instructor: 'SoniX Academy',
        instructorImage: '/assets/user-3.jpg',
        price: '$29.99 • 1 month',
        rating: 4.86,
        reviews: 36,
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
        remark: 'Bestseller',
        category: 'Music',
        isSponsored: true,
        isTrending: true
    },
    {
        id: 3,
        title: 'Productor Musical de Éxito - FASE I',
        slug: 'productor-musical-de-exito-fase-i',
        description: 'David Cañada - PME - FASE 1',
        instructor: 'David Cañada',
        instructorImage: '/assets/user-3.jpg',
        price: '€100.00',
        rating: 5,
        reviews: 7,
        image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=300&fit=crop',
        category: 'Music',
        isSponsored: true,
        isNew: true
    },
    {
        id: 4,
        title: 'Made for all music creators',
        slug: 'made-for-all-music-creators',
        description: 'Duetti',
        instructor: 'Duetti',
        instructorImage: '/assets/user-3.jpg',
        price: 'Free',
        rating: 3.56,
        reviews: 90,
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
        remark: 'Includes certificate',
        category: 'Music',
        isSponsored: true,
        isNew: true
    },
    {
        id: 5,
        title: 'Digital Marketing Mastery',
        slug: 'digital-marketing-mastery',
        description: 'Learn advanced digital marketing strategies',
        instructor: 'Marketing Pro',
        instructorImage: '/assets/user-3.jpg',
        price: '$49.99',
        rating: 4.5,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        category: 'Marketing',
        isSponsored: true,
        isTrending: true
    },
    {
        id: 6,
        title: 'Full Stack Web Development',
        slug: 'full-stack-web-development',
        description: 'Build modern web applications from scratch',
        instructor: 'Code Academy',
        instructorImage: '/assets/user-3.jpg',
        price: '$79.99',
        rating: 4.8,
        reviews: 245,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
        category: 'Development',
        isNew: true,
        isTrending: true
    },
    {
        id: 7,
        title: 'Photography Basics',
        slug: 'photography-basics',
        description: 'Master the fundamentals of photography',
        instructor: 'Photo Master',
        instructorImage: '/assets/user-3.jpg',
        price: '$39.99 • 2 months',
        rating: 4.7,
        reviews: 150,
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
        category: 'Photography',
        isNew: true,
        isTrending: true
    },
    {
        id: 8,
        title: 'Data Science with Python',
        slug: 'data-science-with-python',
        description: 'Learn data analysis and machine learning',
        instructor: 'Data Pro',
        instructorImage: '/assets/user-3.jpg',
        price: '$89.99',
        rating: 4.9,
        reviews: 300,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        category: 'Development',
        isNew: true
    },
];
