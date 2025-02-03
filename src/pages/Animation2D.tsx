import React from "react";

const Animation2D = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">2D Animation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Example Video */}
        <div className="w-full">
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="/videos/2d-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Example Image */}
        <div className="w-full">
          <img
            src="/images/2d-animation-example.jpg"
            alt="2D Animation Example"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Animation2D;
