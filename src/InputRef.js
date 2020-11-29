import React, { Component } from 'react'

 class InputRef extends Component {
     constructor(props) {
         super(props)
         this.input_ref=React.createRef()
     }

     componentDidMount(){
      this.input_ref.current.focus()
     }
     clickHandler=()=>{
         alert(this.input_ref.current.value)
     }
    render() {
        return (
            <div>
                <input type="text" ref={this.input_ref} />
                <button onClick={this.clickHandler}>Click me </button>
            </div>
        )
    }
}

export default InputRef
