export const EventPropagation = () => {
    const handleGrandparent= () =>{
        console.log("GrandParent Clicked");
    };
    const handleParentClick = () => {
        console.log("Parent Clicked");
    };
    const handleChildClick =() => {
        console.log(event);
        event.stopPropagation();
        console.log("Child clicked");

    };
    return (
        <section className ="main-div">
            <div className="g-div" onClickCapture={handleGrandparent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        child div
                    </button>
                </div>
            </div>
        </section>
    );
};