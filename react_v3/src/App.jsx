// import React from "react";
// import Pet from "./Pet";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Mangi Lal"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Luna",
//       breed: "havanese",
//     }),
//     React.createElement(Pet, {
//       animal: "Bird",
//       name: "Pepper",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Doink",
//       breed: "Mixed",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Mangi Lal</h1>
      {/* <Pet animal="Dog" name="Luna" breed="havanese" />
      <Pet animal="bird" name="Pepper" breed="Cockatiel" />
      <Pet animal="Cat" name="Doinky" breed="mixed" /> */}
      <SearchParams />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
