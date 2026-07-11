import React, { useEffect } from "react";

const PracticeApp = () => {
  const fetchImages = () => {
    try {
      fetch("https://dummyjson.com/image/150").then((response) => {
        response.json().then((data) => {
          console.log(data);
        });
      });
    } catch (err) {}
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return <div>Hello</div>;
};

export default PracticeApp;
