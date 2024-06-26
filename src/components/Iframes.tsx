import React from "react";

const UrbanScape: React.FC = () => {
  return (
    <iframe
      className="w-full min-h-screen pt-5 aspect-auto"
      src="https://urbanscape-xi.vercel.app"
      title="UrbanScape"
    />
  );
};

const Blog: React.FC = () => {
  return (
    <iframe
      className="w-full min-h-screen pt-5 aspect-auto"
      src="https://blog-g77g.onrender.com"
      title="Prasenjit's Blog"
    />
  );
};

const PrimeReality: React.FC = () => {
  return (
    <iframe
      className="w-full min-h-screen pt-5 aspect-auto"
      src="https://prime-reality.onrender.com"
      title="Prime Reality"
    />
  );
};

export { UrbanScape, Blog, PrimeReality };
