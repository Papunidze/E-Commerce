import Card from "@/components/shared/Card";
import React from "react";

const Accessories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array(9)
        .fill("-")
        .map((_, index) => (
          <div key={index}>
            <Card />
          </div>
        ))}
    </div>
  );
};

export default Accessories;
