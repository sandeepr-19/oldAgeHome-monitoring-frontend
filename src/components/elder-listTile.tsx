import React from "react";

function ElderListTile(props: any) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64">
      <img
        src={"public/user.png"}
        alt={"user"}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ElderListTile;
