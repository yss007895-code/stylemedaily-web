export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Editor-in-Chief',
    bio: 'Sarah has 10+ years of experience in fashion editorial, previously at Vogue and InStyle. She leads our team\'s style direction and ensures every guide meets our standards for accuracy, inclusivity, and real-world wearability.',
    initials: 'SM',
    color: 'bg-gold-100 text-gold-800',
  },
  {
    name: 'Emma Clarke',
    role: 'Senior Style Writer',
    bio: 'Emma specializes in body-positive fashion and budget-friendly styling. She personally tests every product before recommending it and has a knack for finding designer-look pieces at accessible prices.',
    initials: 'EC',
    color: 'bg-rose-100 text-rose-800',
  },
  {
    name: 'Jordan Lee',
    role: 'Fashion Researcher',
    bio: 'Jordan tracks emerging trends across global fashion weeks and street style scenes. She bridges the gap between runway and everyday wear, translating high-fashion moments into practical outfit ideas for our readers.',
    initials: 'JL',
    color: 'bg-indigo-100 text-indigo-800',
  },
];
