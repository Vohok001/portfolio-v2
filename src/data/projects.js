// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Ruby on Rails and React.',
    longDescription: 'This project demonstrates my ability to build complex web applications...',
    // Multiple media items
    media: [
      { type: 'image', src: '/images/project1-1.jpg', alt: 'Dashboard view' },
      { type: 'image', src: '/images/project1-2.jpg', alt: 'Product listing' },
      { type: 'video', src: '/videos/project1-demo.mp4', poster: '/images/project1-video-thumbnail.jpg' }
    ],
    technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Tailwind CSS', 'Stripe API'],
    liveUrl: 'https://example.com/project1', // Can still include these if available
    githubUrl: 'https://github.com/yourusername/project1',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates using Action Cable and React. Organize tasks with boards, lists, and cards.',
    longDescription: 'This task management app was inspired by Trello and built with Ruby on Rails backend and React frontend. It features real-time updates using Action Cable (WebSockets), drag-and-drop functionality for tasks, user collaboration with permissions, and a notification system. The app is fully responsive and works across all devices.',
    image: '/images/project2.jpg',
    technologies: ['Ruby on Rails', 'React', 'Action Cable', 'PostgreSQL', 'Redux'],
    liveUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/yourusername/project2',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather information using the OpenWeatherMap API. Built with React and Tailwind CSS.',
    longDescription: 'This weather dashboard pulls data from the OpenWeatherMap API to show current weather conditions and a 5-day forecast. Users can search for locations, save favorite cities, and view detailed weather information including temperature, humidity, wind speed, and UV index. The app uses geolocation to show the user\'s local weather by default.',
    image: '/images/project3.jpg',
    technologies: ['React', 'Tailwind CSS', 'OpenWeatherMap API', 'Chart.js'],
    liveUrl: 'https://example.com/project3',
    githubUrl: 'https://github.com/yourusername/project3',
    featured: false
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A social media analytics dashboard that aggregates data from various platforms. Built with React, D3.js for data visualization.',
    longDescription: 'This dashboard aggregates analytics data from multiple social media platforms including Twitter, Instagram, and Facebook. It displays key metrics like engagement rate, follower growth, and post performance. The app uses D3.js for interactive data visualizations and implements OAuth for connecting to the different social media APIs.',
    image: '/images/project4.jpg',
    technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com/project4',
    githubUrl: 'https://github.com/yourusername/project4',
    featured: true
  },
  {
    id: 5,
    title: 'Real Estate Listings',
    description: 'A real estate listing platform with advanced search features, interactive maps, and property management. Built with Ruby on Rails.',
    longDescription: 'This real estate platform allows users to search for properties using various filters including location, price range, and amenities. It features an interactive map view using the Google Maps API, virtual tours with 360° images, and a direct messaging system for contacting property owners or agents. The admin panel allows realtors to manage their listings and track viewer statistics.',
    image: '/images/project5.jpg',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Google Maps API', 'Stimulus.js', 'Hotwire'],
    liveUrl: 'https://example.com/project5',
    githubUrl: 'https://github.com/yourusername/project5',
    featured: false
  }
];
