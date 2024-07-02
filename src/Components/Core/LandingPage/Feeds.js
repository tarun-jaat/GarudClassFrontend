import React from "react";
import App from "../../Common/BlogCard";
import CardsGrid from "../../Common/CardGrid";
function Feeds() {
  return (
    <div className="py-20 px-4 ">
      <h1 className="shadow-text text-center text-4xl font-bold text-[#4880ff]">
        Feeds
      </h1>
      <div>
        <h1 className="text-2xl underline font-bold py-4">Recent</h1>
        <div className=" flex gap-4 p-4 bg-richblack-5 border-2 rounded-3xl">
          <div>
            <strong className=" mt-4 text-4xl underline underline-offset-4 ">
              Garud Classes ScholarShip Test
            </strong>
            <p className="px-8 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ad eum dolorum
              architecto obcaecati enim dicta praesentium, quam nobis! Neque ad
              aliquam facilis numquam. Veritatis, sit.
            </p>
          </div>
          <iframe
            className=" rounded-3xl"
            width="500"
            height="315"
            src="https://www.youtube.com/embed/Rv_AZDen4To?si=fQZ_kKKR19jcyorS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <h1 className="text-2xl underline font-bold py-4">Top Rated</h1>
        <App />
      </div>
      <div>
        <h1 className="text-2xl underline font-bold py-4">Updates</h1>
        <CardsGrid />
      </div>
    </div>
  );
}

export default Feeds;
