import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
