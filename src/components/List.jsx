import React from 'react'
import './list.css'

 function List(props) {
 
            const items=props.items;
            const listItems=items.map(item=>
            
            {
                return (
                    <div className="list-style" key="item.key">
                    <p>{item.text}</p>
            
                    </div>
                )}
            )
      
     return (
         <div>{listItems}</div>
     )
        
    
}
export default List;