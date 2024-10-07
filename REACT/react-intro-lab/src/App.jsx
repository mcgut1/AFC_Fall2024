import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import CardContainer from "./components/CardContainer";

const App = () => {
  const users = [
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Alice", age: 25 },
  ];
  const sortByAge = (array) => {
    return array.sort((a, b) => a.age - b.age);
  };

  const sortedUsers = sortByAge(users);

  return (
    <div>
      <Greeting name="Tyler" />

      <CardContainer>
        {sortedUsers.map((user, index) => (
          <UserCard key={index} name={user.name} age={user.age} />
        ))}
      </CardContainer>
    </div>
  );
};

export default App;
