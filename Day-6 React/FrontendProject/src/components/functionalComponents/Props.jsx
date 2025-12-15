const Props = () => {
  const hi = "Welcome Props";
  const grade = 12;
  const age = 18;
  const img = "/vite.svg"; // just use root-relative path

  return (
    <div>
      <h1>This is props component</h1>
      <ol>
        <li>
          Props are:
          <ul>
            <li>{hi}</li>
            <li>I completed my {grade} grade by the age of {age} years</li>
            <li><img src={img} alt="Example" width="100" /></li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Props;
