// src/data/projects.js
 
export const projects = [
  {
    id: 1,
    title: 'Laundrybird',
    description: 'On-demand laundry service platform with dynamic pricing and scheduling',
    longDescription: 'Designed and developed independently, LaundryBird is a fully customized web app for managing laundry orders, built with Ruby on Rails, JavaScript, and Bootstrap. It features a seamless booking system, dynamic service pricing, user dashboards, admin order management, and time slot scheduling. The project showcases end-to-end development, from database structuring to front-end interactivity, emphasizing user experience and efficient workflow management.',
    // Multiple media items with placeholder for video
    coverImage: {
      src: 'images/laundry/lb-1.png',
      alt: 'Laundrybird app'
    },
    media: [
      { type: 'image', src: 'images/laundry/lb-2.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-3.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-4.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-5.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-8.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-9.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-10.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-11.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-16.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-17.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-18.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-20.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-21.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/laundry/lb-22.png', alt: 'Quest Odyssey homepage' },
      // Placeholder for video - update when available
      { type: 'video', src: 'videos/laundry-demo.mp4', poster: 'images/laundry/laundry-poster.png' }
    ],
    technologies: ['Ruby on Rails', 'StimulusJS', 'PostgreSQL', 'SASS/CSS', 'Stripe API', 'Pundit', 'Bootstrap'],
    featured: true
  },
  {
    id: 2,
    title: 'Scheduling App',
    description: 'A D&D campaign manager with real-time availability tracking, character creation, and in-app chat',
    longDescription: 'Developed in a team using Agile and pair programming, this web app helps D&D players manage campaigns, track availability, and create characters. Built with Ruby on Rails, JavaScript, and StimulusJS, it features real-time updates, interactive character sheets, and an in-app chat system for seamless collaboration.',
    coverImage: {
      src: 'images/quest/quest-cover.png',
      alt: 'Quest Odyssey app'
    },
    media: [
      { type: 'image', src: 'images/quest/QO1.png', alt: 'Quest Odyssey homepage' },
      { type: 'image', src: 'images/quest/QO2.png', alt: 'Quest Odyssey scheduling' },
      { type: 'image', src: 'images/quest/QO3.png', alt: 'Character creation' },
      { type: 'image', src: 'images/quest/QO4.png', alt: 'Campaign dashboard' },
      { type: 'image', src: 'images/quest/QO5.png', alt: 'Player interface' },
      { type: 'image', src: 'images/quest/QO6.png', alt: 'Session details' },
      { type: 'image', src: 'images/quest/QO7.png', alt: 'Chat system' },
      { type: 'image', src: 'images/quest/QO8.png', alt: 'Character sheet' },
      { type: 'image', src: 'images/quest/QO9.png', alt: 'Game master view' },
      { type: 'image', src: 'images/quest/QO11.png', alt: 'Campaign overview' },
      { type: 'image', src: 'images/quest/QO12.png', alt: 'Settings screen' },
      { type: 'image', src: 'images/quest/QO15.png', alt: 'Availability tracker' },
      { type: 'image', src: 'images/quest/QO16.png', alt: 'Mobile view' },
      // Placeholder for video - update when available
      { type: 'video', src: 'videos/quest-demo.mp4', poster: 'images/quest/QO-poster.png' }
    ],
    technologies: ['Ruby on Rails', 'JavaScript', 'Devise', 'PostgreSQL', 'SASS/CSS'],
    githubUrl: 'https://github.com/RooOliver-Weaver/quest_odyssey',
    featured: true
  },
  {
    id: 3,
    title: 'Accommodation App',
    description: 'A rental platform featuring villain-inspired lairs. Browse unique properties and book your perfect hideout',
    longDescription: 'Developed in a team using Agile methodologies, this themed rental platform allows users to browse and book extravagant villain-inspired hideouts. Built with Ruby on Rails, JavaScript, and StimulusJS, it features dynamic property listings, a seamless booking system, and an intuitive UI for both guests and hosts.',
    coverImage: {
      src: 'images/villas/VVhp.png',
      alt: 'Villainous Villas app'
    },
    media: [
      { type: 'image', src: 'images/villas/VV1.png', alt: 'Property listing' },
      { type: 'image', src: 'images/villas/VV2.png', alt: 'Booking interface' },
      { type: 'image', src: 'images/villas/VV3.png', alt: 'Property details' },
      { type: 'image', src: 'images/villas/VV4.png', alt: 'User dashboard' },
      { type: 'image', src: 'images/villas/VV5.png', alt: 'Search functionality' },
      { type: 'image', src: 'images/villas/VV6.png', alt: 'Host view' },
      { type: 'image', src: 'images/villas/VV7.png', alt: 'Property creation' },
      { type: 'image', src: 'images/villas/VV8.png', alt: 'Booking confirmation' },
      { type: 'image', src: 'images/villas/VV9.png', alt: 'User profile' },
      { type: 'image', src: 'images/villas/VV10.png', alt: 'Reviews section' },
      { type: 'image', src: 'images/villas/VV11.png', alt: 'Mobile responsive view' },
      // Placeholder for video - update when available
      { type: 'video', src: 'videos/villas-demo.mp4', poster: 'images/villas/VV-poster.png' }
    ],
    technologies: ['Ruby on Rails', 'JavaScript', 'Devise', 'PostgreSQL', 'SASS/CSS'],
    githubUrl: 'https://github.com/Vohok001/villanous_villas',
    featured: false
  }
];
