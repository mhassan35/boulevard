export type Property = {
  slug: string;
  name: string;
  location: string;
  price: string;
  detail: string;
  image: string;
  alt: string;
  number: string;
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'All Projects', href: '/projects' },
  { label: 'Contact', href: '/#inquiry' },
];

export const developments = [
  {
    slug: 'grand-x',
    name: 'Grand X',
    location: 'Bahria Town Lahore',
    status: 'New Investment',
    description:
      'A mixed-use destination with a premium shopping mall, hotel apartments, and the largest food court, designed around modern city life.',
    highlight:
      'A mixed-use destination with a premium mall, hotel apartments & the largest food court.',
    units: ['Studio', '1 Bed', 'Commercial'],
    image:
      'https://boulevard01.com/new-design/wp-content/themes/boulevard01/public/images/grand-x.webp',
    alt: 'Sculptural contemporary mixed-use tower at dusk',
  },
  {
    slug: 'grand-11',
    name: 'Grand 11',
    location: 'Midway Commercial, Bahria Town Lahore',
    status: 'Now Selling',
    description:
      'A prominent commercial and residential development near Talwar Chowk and Bahria Town’s main entrance, designed for visibility and convenience.',
    highlight:
      'A prominent commercial and residential address by Talwar Chowk.',
    units: ['Studio', '1 Bed', 'Commercial'],
    image:
      'https://boulevard01.com/new-design/wp-content/themes/boulevard01/public/images/grand-14.webp',
    alt: 'Warmly lit modern residential and commercial building',
  },
  {
    slug: 'grand-14',
    name: 'Grand 14',
    location: 'Bahria Town Lahore',
    status: 'Now Selling',
    description:
      'A thoughtfully planned development combining efficient layouts, premium amenities, and a connected address for residents and investors.',
    highlight: 'Efficient layouts, premium amenities, a connected address.',
    units: ['1 Bed', '2 Bed', 'Commercial'],
    image:
      'https://boulevard01.com/new-design/wp-content/themes/boulevard01/public/images/grand-15.webp',
    alt: 'Modern home with a courtyard and clean architectural lines',
  },
  {
    slug: 'grand-15',
    name: 'Grand 15',
    location: 'Bahria Downtown Lahore',
    status: 'Flagship Launch',
    description:
      'Luxury apartments with private terraces, branded commercial outlets, rooftop gardens, and hotel-style amenities in Bahria Downtown.',
    highlight: 'Private terraces, rooftop gardens & hotel-style amenities.',
    units: ['1 Bed', '2 Bed', '3 Bed', 'Commercial'],
    image:
      'https://boulevard01.com/new-design/wp-content/themes/boulevard01/public/images/grand-11.webp',
    alt: 'Contemporary luxury apartment building with balconies',
  },
];

export const reasons = [
  {
    title: 'Trusted in Bahria Town',
    text: 'A name investors recognise — built on nine years of delivery in Lahore’s most sought-after community.',
  },
  {
    title: 'Proven Delivery Record',
    text: '500+ units handed over on schedule. With boulevard01, on-time completion is a guarantee, not a hope.',
  },
  {
    title: 'Quality Construction',
    text: 'Modern architecture and premium finishes, engineered to hold their value for decades.',
  },
  {
    title: 'Residential + Commercial',
    text: 'Apartments, studios and prime retail under one brand — diversify your portfolio in one address.',
  },
  {
    title: 'Built for Returns',
    text: 'Every project is positioned for lifestyle appeal and strong, high-return appreciation.',
  },
];

export const testimonials = [
  {
    quote:
      'Boulevard01 delivered exactly what they promised. The quality, communication, and overall experience exceeded my expectations.',
    name: 'Usman Khalid',
    role: 'NRP Investor',
    location: 'Manchester, UK',
  },
  {
    quote:
      'Bought an apartment in Grand 11 and moved in smoothly. The entire process from booking to handover was transparent.',
    name: 'Sadia Riaz',
    role: 'Homeowner',
    location: 'Bahria Town, Lahore',
  },
  {
    quote:
      'I have invested in two of Boulevard01 projects and both were delivered ahead of schedule. Top-notch quality and finishing.',
    name: 'Tariq Mehmood',
    role: 'Property Investor',
    location: 'DHA, Lahore',
  },
  {
    quote:
      'I refer all my clients looking for Bahria Town investments to Boulevard01. Their track record speaks for itself.',
    name: 'Hassan Raza',
    role: 'Consultant',
    location: 'Islamabad',
  },
];

export const properties: Property[] = developments.map((project, index) => ({
  slug: project.slug,
  name: project.name,
  location: project.location,
  price: 'Contact for pricing',
  detail: project.units.join(' · '),
  image: project.image,
  alt: project.alt,
  number: `0${index + 1}`,
}));

export const distinctions = [
  { number: '01', suffix: '', label: 'dedicated human advisor' },
  { number: '02', suffix: '', label: 'sides to every move' },
  { number: '03', suffix: '', label: 'steps, at your pace' },
];
