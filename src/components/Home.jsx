import React, { Component } from 'react';
import './Home.css'
import ListItem from './List'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            items: [],
            currentItem: {
                text: "",
                key:""
            }

             
        }
    }
    handleChange = (e) => {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            
            }

            
        })
          }
    addItem = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem)
        if (newItem.text !== "")
        {
            const newItems=[...this.state.items,newItem]
            this.setState({
                items:newItems,
                currentItem: {
                    text: "",
                    key:""
                }
                
            })
        }    


    }
    

    
  
    render() { 
    return (
        <div className="home">
          
            <form className="todo" action="" onSubmit={this.addItem}>
                <p className="styling">To-do <span style={{ color: "#6EDF28" }}>|</span>
                    <span style={{ color: "#ABABAB" }}>Done</span>  </p>    
               <div className="align">
                    <input type="text" placeholder="Enter Text" value={this.state.currentItem.text}  onChange={this.handleChange}/>
                    <button type="submit">+</button>
                </div>
                <ListItem items={this.state.items} />
                <div className="line"></div>  

                
            </form>
            
        </div>
    )
}
}
 
export default Home;