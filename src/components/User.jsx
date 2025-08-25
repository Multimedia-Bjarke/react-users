import { useState, useEffect } from "react";

export default function User({ user }) {
  const { id, image, mail, name, title } = user;
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowdetails] = useState(true);

  useEffect(() => {
    console.log("Likes:", likes);
  }, [likes]);
  if (likes === 10) alert("Du har nået 10 likes");

  return (
    <div className="user-card">
      <img src={image} />
      <h2>Navn: {name}</h2>
      <p>Titel: {title}</p>
      <p>Mail: {mail}</p>
      <button onClick={() => setLikes(likes + 1)}>Like {likes}</button>
      <button onClick={() => setLikes(0)}>Reset likes</button>
      <button onClick={() => setShowdetails(!showDetails)}>
        {showDetails ? "Skjul" : "Vis"} detaljer
      </button>
      {showDetails && <div>{/*detaljer her */}</div>}
    </div>
  );
}
