export type Update = {
  id: number
  date: string
  title: string
  excerpt: string
  tag: string
  featured?: boolean
  prayerSnippet?: string
  image?: string
}

export const updates: Update[] = [
  {
    id: 1,
    date: "May 2026",
    title: "Support Raising Milestone Reached",
    excerpt:
      "Praise God! We've reached 65% of our monthly support goal. Thank you to everyone who has partnered with this mission. Your generosity is making this journey to Japan possible.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=500&fit=crop",
    tag: "Fundraising",
    featured: true,
    prayerSnippet: "Pray for the remaining 35% of support to come in before August departure.",
  },
  {
    id: 2,
    date: "April 2026",
    title: "Visa Application Journey",
    excerpt:
      "After months of paperwork and prayer, my visa application is finally submitted! The process has been a lesson in patience and trusting God's timing.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop",
    tag: "Logistics",
    featured: false,
    prayerSnippet: "Pray for quick approval of my religious worker visa.",
  },
  {
    id: 3,
    date: "March 2026",
    title: "Japanese Language Progress",
    excerpt:
      "Finished my first semester of intensive Japanese study! I can now hold basic conversations and read hiragana and katakana. The language is challenging but beautiful.",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=500&fit=crop",
    tag: "Training",
    featured: false,
    prayerSnippet: "Pray for continued language learning and retention.",
  },
  {
    id: 4,
    date: "February 2026",
    title: "Meeting My Future Team",
    excerpt:
      "Had an incredible video call with the campus ministry team in Tokyo! They shared stories of students searching for meaning and hope. My heart is so full.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=500&fit=crop",
    tag: "Team",
    featured: false,
    prayerSnippet: "Pray for unity and strong relationships with my future teammates.",
  },
  {
    id: 5,
    date: "January 2026",
    title: "The Call to Japan",
    excerpt:
      "I'm officially accepted! After two years of prayer and discernment, I said yes to a one-year campus ministry assignment in Tokyo. Here's how God led me to this decision.",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=500&fit=crop",
    tag: "Testimony",
    featured: false,
    prayerSnippet: "Thank God for His clear calling and guidance.",
  },
  {
    id: 6,
    date: "December 2025",
    title: "Preparing My Heart",
    excerpt:
      "Before the logistics began, I spent a month in spiritual preparation. Fasting, prayer, and diving deep into Scripture about God's heart for the nations.",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=500&fit=crop",
    tag: "Spiritual",
    featured: false,
    prayerSnippet: "Pray for continued spiritual growth and preparation.",
  }
]