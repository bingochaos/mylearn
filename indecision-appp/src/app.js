console.log("app.js is running");

const app = {
    title: 'Some title',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No Option"}</p>
        {<ol>
            <li>Item one</li>
            <li>Item tow</li>
        </ol>}
    </div>
);
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}
const user = {
    name: 'Chaos',
    age: 26,
    location: 'Hangzhou'
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age) >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);