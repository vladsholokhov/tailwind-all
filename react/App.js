import React from 'react';

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline ">
                Hello world!
            </h1>
            <MyComp className={"flex !flex-col "}/>
        </div>
    );
}

const MyComp = (props: {className: string}) => {
    return <div className={props.className}></div>
}
export default App;