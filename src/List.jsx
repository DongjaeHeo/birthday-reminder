import Person from "./Person";

const List = ({ people, setPeople }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            {...person}
            people={people}
            setPeople={setPeople}
          />
        );
      })}
    </section>
  );
};
export default List;
