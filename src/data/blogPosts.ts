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
        excerpt: 'Ini adalah blog post pertama saya yang terhubung langsung ke halaman resume berbasis Vue. Di sini saya akan membagikan catatan perjalanan saya dalam membangun portofolio teknikal, termasuk proyek, pemikiran, dan pembelajaran saya.',
        date: '2025-05-15',
    },{
        id: 2,
        title: 'First Post in My Vue Resume Page',
        slug: 'first-post-in-my-vue-resume-page',
        excerpt: 'Ini adalah blog post pertama saya yang terhubung langsung ke halaman resume berbasis Vue. Di sini saya akan membagikan catatan perjalanan saya dalam membangun portofolio teknikal, termasuk proyek, pemikiran, dan pembelajaran saya.',
        date: '2025-05-15',
    },
];
