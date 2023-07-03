const Person = ({ name, age, image, id, people, setPeople }) => {
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
        <button type="button" className="btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
    </article>
  );
};
export default Person;
