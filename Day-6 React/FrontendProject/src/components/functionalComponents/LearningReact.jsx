import Props from "./Props"; 
import State from "./State";
import Task from "./Task";       
import Events from "./Events";   
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect"
import UseEffectAPI from "./Hooks/UseEffectAPI"
import FakeImageAPI from "./Hooks/FakeImageAPI";  
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
const LearningReact = () => {
  return (
    <div>
      <h1>Learning Page</h1>
      <p>Welcome to my website!</p>
      <hr />
       <ol>
          <li><Props hi="Welcome Props" grade="12" age="18" img="vite.svg"/></li>
          <li><Task item="Welcom to Task" /></li>
          <li>Hooks</li>
          <ul>

          <li><UseState/></li>
          <li><UseEffect/></li>
          <li><UseEffectAPI/></li>
          <li><FakeImageAPI/></li>
          <li><UseRef/></li>
          <li><UseMemo/></li>
          </ul>
          <li><State/></li>
          <li><Events /></li>
          
          
        </ol>
      <hr />
    </div>
  );
};

export default LearningReact;
