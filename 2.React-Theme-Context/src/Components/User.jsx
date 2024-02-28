import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

export default function User({ user,isDarkTheme }) {
  // console.log(data)
//   const { isDarkTheme } = useContext(ThemeContext);
//   console.log(isDarkTheme);

  return (
    <div
      data-testid="user"
      style={isDarkTheme ? { color: "white" } : { color: "black" }}
    >
      <h1>{user.name}</h1>
      <input
        data-testid="level"
        type="range"
        style={
          isDarkTheme ? { accentColor: "yellow" } : { accentColor: "blue" }
        }
      />
      <h1>{user.points}</h1>
      <h1>{user.position}</h1>
    </div>
  );
}
