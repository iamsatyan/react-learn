const reactHeading = React.createElement(
    "h1",
    {id:"heading", abc:"xyz"},
    "Hello World From React"
    );

console.log(reactHeading);
const reactRoot = ReactDOM.createRoot(document.getElementById("reactRoot"));
reactRoot.render(reactHeading);

const child1 = React.createElement("div", {id:"child"}, [reactHeading, React.createElement("h2",{}, "I am h2 tag")]);
const child2 = React.createElement("div", {id:"child"}, [reactHeading, React.createElement("h2",{}, "I am h2 tag")]);
const parent = React.createElement("div",{id:"parent"}, [child1,child2]);

reactRoot.render(parent);
console.log(parent);