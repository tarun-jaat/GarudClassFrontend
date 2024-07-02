import React from 'react';

const Card = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="col rounded-2xl">
      <div className=" transition-all ease-in-out duration-100 hover:shadow-lg hover:scale-105 p-2 shadow-md">
        <img src={imgSrc} className="card-img-top rounded-xl" alt={altText} />
        <div className="card-body">
          <h5 className="py-2 font-bold">{title}</h5>
          <p className="px-3 py-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

const CardsGrid = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
          altText="Hollywood Sign on The Hill"
          title="Card title"
          description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        />
        <Card
          imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
          altText="Palm Springs Road"
          title="Card title"
          description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        />
        <Card
          imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
          altText="Los Angeles Skyscrapers"
          title="Card title"
          description="This is a longer card with supporting text below as a natural lead-in to additional content."
        />
        <Card
          imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
          altText="Skyscrapers"
          title="Card title"
          description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        />
      </div>
    </div>
  );
};

export default CardsGrid;
