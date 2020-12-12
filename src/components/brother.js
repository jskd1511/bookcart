import React,{Component} from 'react';
class App extends Component{
   state ={
      books:[
         'hindi','english','maths'
      ],
      temp:''
   }
   
   render(){
      const addValue = (e)=>{
         this.setState({
            temp:e.target.value
         })
      }
      const addBook = ()=>{
         const newArr = this.state.books
         newArr.push(this.state.temp)
         this.setState({
            books:newArr
         })
      }
      return(
      <div>
         <ul>
         {
            this.state.books.map((item,index)=>{
         return <li key={index}>{item}</li>
         })
         }
         </ul>
         
        <input type = "text" name="book" placeholder="enter here" onChange={
           (e)=>{
              addValue(e)
           }
           }/>
           <button onClick={()=>{
              addBook()
           }}>click</button>
         </div>
      )
   }
  
}
export default App   
