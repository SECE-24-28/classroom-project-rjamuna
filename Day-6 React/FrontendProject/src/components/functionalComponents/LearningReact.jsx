import Props from "./Props"; 
import State from "./State";
import Task from "./Task";       
import Events from "./Events";   

const LearningReact = () => {
  return (
    <div>
      <h1>Learning Page</h1>
      <p>Welcome to my website!</p>
      <hr />
       <ol>
          <li><Props hi="Welcome Props" grade="12" age="18" img="public\vite.svg"/></li>
          <li><Task item="Welcom to Task" /></li>
          <li><State/></li>
          <li><Events /></li>
       
        </ol>
      <hr />
    </div>
  );
};

export default LearningReact;
