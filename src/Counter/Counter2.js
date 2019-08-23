import React, {useState} from 'react';

class Counter2 extends React.Component {

    state = { count: 0, message: "No msg" };
    
    getData = () => {
        console.log("test");
        fetch('http://localhost:3001/msg')
        .then(response => response.json())
        .then(response=>this.setState({message: response.message}))
 //       .then(response=>console.log(response))
    }
    
    handleClick = (onClickEvent) => {
        this.setState({count: this.state.count + 1  });
        onClickEvent.preventDefault();
    };
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.handleClick}>
                    Click me
                </button>
                <button onClick={this.getData}>Get a msg</button>
            </div>
        );
    }
};

//export default Counter2;



// // const Body2 = (props) => {
// //     const [count, setCount] = useState(0);
// //     return <div className="Body2">
// //         <div>
// //             <p>You clicked {count} times</p>
// //             <button onClick={() => setCount(count + 1)}>
// //                 Click me
// //             </button>
// //         </div>
// //             {props.txt}
// // //         </div>
// // }
// //     export default Body2;

