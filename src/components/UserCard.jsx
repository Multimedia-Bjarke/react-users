function UserCard(user) {
  return (
    <div>
      <img src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <p>{user.mail}</p>
      <p>{user.title}</p>
      <button onClick={() => user.id}>Slet</button>
    </div>
  );
}

export default UserCard;
