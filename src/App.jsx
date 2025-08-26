import { useEffect, useState } from "react";
import User from "./components/User";
import Header from "./components/Header";
import UserList from "./components/UserList";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(users);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
        );
        const data = await response.json();

        if (data.length === 0) {
          alert("Ingen brugere!");
        }

        setUsers(data);
      } catch (error) {
        console.error("Fejl ved hentning af brugere:", error);
      } finally {
        setLoading(false); // Stop loading uanset succes eller fejl
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Vis mens data hentes
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      id: crypto.randomUUID(),
      name: form.name.value,
      mail: form.mail.value,
      title: form.title.value,
      image: form.image.value,
      age: form.age.value,
    };
    setUsers([...users, newUser]);
    form.reset();
  }

  function handleDeleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div className="page">
      <h1>Users</h1>
      <section className="grid">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </section>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Navn" />
        <input name="mail" placeholder="Mail" />
        <input name="title" placeholder="Titel" />
        <input name="image" placeholder="Billede-URL" />
        <input name="age" placeholder="Alder" />
        <button type="submit">Tilføj bruger</button>
      </form>
    </div>
  );
}

export default App;
