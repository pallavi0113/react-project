import "./EV.css";
export const EventHandling = () => {

    // function handleButtonClick(){
    //     alert("Hey I am onclick event");
    // }
    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey I am onClick Event");
    };

    const handleWelcomeUser= (user) => {
        console.log(`Hey ${user}, Welcome`);
    };
    return (
    <>
        <button onClick={handleButtonClick}>click Me </button>
        <br />

        <button onClick={(event) => handleButtonClick(event)}>click me2</button>
        <br />

        {/* //?Inline Event Handlers */}
        <button onClick={(event) => console.log(event)}>Inline Function</button>
        <br />

        {/*//? function components with inline arrow functions */}
        <button onClick={() => alert("Hey I am inline event Function")}>
            Inline Arr fun
        </button>
        <br />
        {/* //?passing argument to event Handlers */}
        <button onClick={() => handleWelcomeUser("pallavi")}>click me</button>


    </>
    );
};