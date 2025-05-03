import { Book } from '../types';

export const featuredBooks: Book[] = [
  {
    id: 'book1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Fiction', 'Fantasy', 'Philosophy'],
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
    year: 2020,
    rating: 4.5
  },
  {
    id: 'book2',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.pexels.com/photos/6373307/pexels-photo-6373307.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Self-Help', 'Psychology', 'Productivity'],
    description: 'A revolutionary guide to building good habits and breaking bad ones, offering practical strategies for forming habits that last.',
    year: 2018,
    rating: 4.8
  },
  {
    id: 'book3',
    title: 'A Gentleman in Moscow',
    author: 'Amor Towles',
    cover: 'https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Historical Fiction', 'Literary Fiction'],
    description: 'In 1922, Count Alexander Rostov is deemed an unrepentant aristocrat by a Bolshevik tribunal, and is sentenced to house arrest in the Metropol, a grand hotel across the street from the Kremlin.',
    year: 2016,
    rating: 4.7
  }
];

export const allBooks: Book[] = [
  ...featuredBooks,
  {
    id: 'book4',
    title: 'Educated',
    author: 'Tara Westover',
    cover: 'https://images.pexels.com/photos/5834346/pexels-photo-5834346.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Memoir', 'Biography', 'Education'],
    description: 'A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    year: 2018,
    rating: 4.6
  },
  {
    id: 'book5',
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    cover: 'https://images.pexels.com/photos/6373332/pexels-photo-6373332.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Historical Fiction', 'Fantasy', 'LGBTQ+'],
    description: 'A retelling of the Iliad that focuses on the relationship between Achilles and Patroclus, exploring themes of love, loyalty, and fate.',
    year: 2011,
    rating: 4.4
  },
  {
    id: 'book6',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    cover: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Fiction', 'Mystery', 'Coming of Age'],
    description: 'The story of an abandoned girl who raised herself in the marshes of North Carolina, intertwined with a murder investigation.',
    year: 2018,
    rating: 4.5
  },
  {
    id: 'book7',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.pexels.com/photos/6373325/pexels-photo-6373325.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Science Fiction', 'Adventure'],
    description: 'A lone astronaut must save the earth from disaster in this thrilling science fiction adventure from the author of The Martian.',
    year: 2021,
    rating: 4.7
  },
  {
    id: 'book8',
    title: 'Normal People',
    author: 'Sally Rooney',
    cover: 'https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Contemporary Fiction', 'Romance'],
    description: 'Follows the complex friendship and relationship between two teenagers who navigate adulthood in post-recession Ireland.',
    year: 2018,
    rating: 4.0
  },
  {
    id: 'book9',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    cover: 'https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Non-Fiction', 'History', 'Science'],
    description: 'A sweeping narrative of humanity\'s creation and evolution that explores how biology and history have defined us.',
    year: 2011,
    rating: 4.6
  },
  {
    id: 'book10',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    cover: 'https://images.pexels.com/photos/4466522/pexels-photo-4466522.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Thriller', 'Mystery', 'Psychological Fiction'],
    description: 'A woman shoots her husband five times and then never speaks another word. A criminal psychotherapist is determined to get her to talk.',
    year: 2019,
    rating: 4.3
  },
  {
    id: 'book11',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    cover: 'https://images.pexels.com/photos/4153150/pexels-photo-4153150.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Science Fiction', 'Literary Fiction'],
    description: 'Told from the perspective of an Artificial Friend, this novel asks what it means to love and be human in a rapidly changing world.',
    year: 2021,
    rating: 4.2
  },
  {
    id: 'book12',
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    cover: 'https://images.pexels.com/photos/5834344/pexels-photo-5834344.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: ['Historical Fiction', 'Family Saga'],
    description: 'A portrait of American life during the Great Depression and the Dust Bowl, focusing on a woman\'s struggle to keep her family together.',
    year: 2021,
    rating: 4.4
  }
];