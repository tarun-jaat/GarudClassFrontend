import React from 'react';
import './BlogCard.css'
 
const BlogCard = ({ author, date, tags, image, title, subtitle, description, readMore }) => {
  return (
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${image})` }} />
        <ul className="details">
          <li className="author">
            <a href="#">{author}</a>
          </li>
          <li className="date">{date}</li>
          <li className="tags">
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>
                  <a href="#">{tag}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <p className="read-more">
          <a href="#">{readMore}</a>
        </p>
      </div>
    </div>
  );
};

const blogCards = [
  {
    author: 'John Doe',
    date: 'Aug. 24, 2015',
    tags: ['Learn', 'Code', 'HTML', 'CSS'],
    image: 'https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg',
    title: 'Learning to Code',
    subtitle: 'Opening a door to the future',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
    readMore: 'Read More',
  },
  {
    author: 'Jane Doe',
    date: 'July. 15, 2015',
    tags: ['Learn', 'Code', 'JavaScript'],
    image: 'https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg',
    title: 'Mastering the Language',
    subtitle: 'Java is not the same as JavaScript',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
    readMore: 'Read More',
  },
];

const App = () => {
  return (
    <div>
      {blogCards.map((blogCard, index) => (
        <BlogCard key={index} {...blogCard} />
      ))}
    </div>
  );
};

export default App;