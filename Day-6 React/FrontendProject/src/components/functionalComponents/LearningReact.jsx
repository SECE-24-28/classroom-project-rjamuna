import Props from "./Props";
import State from "./State";
import Task from "./Task";
import Events from "./Events";

import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseEffectAPI from "./Hooks/UseEffectAPI";
import FakeImageAPI from "./Hooks/FakeImageAPI";
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";

const LearningReact = ({ selected }) => {
  const renderSection = () => {
    switch (selected) {
     case "props":
  return <Props hi="Welcome Props" grade="12" age="18" img="/vite.svg" />;


      case "task":
        return <Task item="Welcome to Task" />;

      case "state":
        return <State />;

      case "events":
        return <Events />;

      case "usestate":
        return <UseState />;

      case "useeffect":
        return <UseEffect />;

      case "useeffectapi":
        return <UseEffectAPI />;

      case "fakeimageapi":
        return <FakeImageAPI />;

      case "useref":
        return <UseRef />;

      case "usememo":
        return <UseMemo />;

      case "usecallback":
        return <UseCallback />;

      default:
        return <p>Please select a section from the dropdown.</p>;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Learning React</h1>
      <p>Welcome to my React learning page 🚀</p>
      <hr />
      {renderSection()}
    </div>
  );
};

export default LearningReact;
