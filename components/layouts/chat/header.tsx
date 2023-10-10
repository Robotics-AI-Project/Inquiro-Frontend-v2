import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex flex-grow-0 flex-shrink-0 h-24 justify-center items-center border-b-4 border-border">
      <h1 className="text-2xl font-bold">Top 5 Movies in 2020</h1>
    </div>
  );
};

export default Header;
