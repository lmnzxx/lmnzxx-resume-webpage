export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'First Post in My Vue Resume Page',
        slug: 'first-post-in-my-vue-resume-page',
        excerpt: 'Ini adalah blog post pertama saya di halaman resume berbasis Vue!',
        date: '2025-05-15',
    },
];
