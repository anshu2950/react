import React from "react";
import ReactDOM from "react-dom/client";


const parent =   React.createElement('div',{id:'parent', class:'parent'},
 [React.createElement('div',{id:'child'},
 [React.createElement('h1',{id:'heading'},'i am new heading'),
 React.createElement('h2',{id:'heading2'}, 'i am h2 tag')]),
 
 React.createElement('div',{id:'child2'},
 [React.createElement('h1',{id:'heading'},'i am heading'),
 React.createElement('h2',{id:'heading2'}, 'i am h2 tag')])]);
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(parent);

// React Element = React.createElement => JS Object => HTMLELEMENT(render  )

// const heading = React.createElement("h1",{id: "heading"}, " React");
// JSX - is not HTML in js => HTML or XML like syntax
// JSX = Transpiled before it reaches the JS engine
// JSX =(babel)> React.createElement => ReactElement-JS object => HTMLElement(render)

// const jsxHeading = (
//   <h1 id="heading" className="head" yabIndex="5">
//     {" "}
//     React using JSX{" "}
//   </h1>
// );

//React Components
// class based components - OLD
// Functional components - NEW

// const element = <span>React Element</span>

// Component Composition
// const Title = () => (
//     <h1 className="head" tabIndex="5">
//         {element}
      
//       React using JSX
//     </h1>
//   );
// const HeadingComponent = () => (
//   <div id="container">
//     <h1 className="heading"> React Functional Component</h1>
//     <Title> </Title>
//   </div>
// );


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);
