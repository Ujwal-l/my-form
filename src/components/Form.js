import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              First_name:'',
              Last_name:'',
              email:'',
              topic:"react"
         }
     }
     handleFirst_nameChange=(event) =>{
         this.setState({
             First_name: event.target.value
         })

     }
     handleLast_nameChange=(event) =>{
         this.setState({
             Last_name: event.target.value
         })

     }
     handleemailChange=(event) =>{
         this.setState({
             email: event.target.value
         })

     }
     handleTopicChange=(event) =>{
         this.setState({
             Topic: event.target.value
         })

     }
     handleSubmit  =event =>{
         alert(`${this.state.First_name} ${this.state.Last_name} ${this.state.email} ${this.state.Topic}`)
         

     }
     
     
    render() {
        return (
           <div className="edit">
               <form onSubmit={this.handleSubmit}>
               <div>
                   <h1>REGISTRATION</h1>
                   <br></br>
                   <label>First_name - </label>
                   <input type="text" value={this.state.First_name} onChange={this.handleFirst_nameChange}/>
               </div>
               <br></br>
               <div>
                   <label>Last_name - </label>
                   <input type="text" value={this.state.Last_name} onChange={this.handleLast_nameChange}/>
               </div>
               <br></br>
               <div>
                   <label>      Email -  </label>
                   <input type="email" value={this.state.email} onChange={this.handleemailChange}/>
               </div>
               <br></br>
               <div>
                   <label> Topic : </label>
                   <select value={this.state.topic} onChange={this.handleTopicChange}>
                       <option value="react">React</option>
                       <option value="angular">Angular</option>
                       <option value="vue">Vue</option>
                   </select>
               </div>
               <br></br>
               <br></br>
               
                   <button className="button"  type="submit">Submit</button>
               
               
               


           </form>
           </div>
        )
    }
}

export default Form
