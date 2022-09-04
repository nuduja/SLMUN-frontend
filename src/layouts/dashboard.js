import React from "react";
import Timer from "../components/Timer";
// import CountryDropDown from "../components/CountryDropDown";
import DropDown from "../components/DropDown";
import CList from "../components/CountryList.js/CList";
import axios from 'axios';




class dashboard extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
			time: "",
      countryD:"",
      country:"",
      SCountry:"Country",
      Lcountries: []
    }
      
      // this.handleClick = this.handleClick.bind(this);
	}

  componentDidMount() {
    this.state.time = new Date();
    this.retriveCountries();
  }

	componentDidUpdate(){
		
    console.log("Hello");
    
    this.state.time.setSeconds(this.state.time.getSeconds() + 700); // 10 minutes timer
    
	}
  


//   handleChangeValue = event => {this.setState({country: event.target.value});
//   console.log("Hello1");
// };
handleChangeValue = v => {this.setState({countryD: v}, console.log("adfs" + v));
  console.log("handlechange" + this.state.countryD);


//   const{
    
//     Country
// } = this.state;

// const countries={
    
//     Country:this.state.countryD
    
// };

// console.log(countries);


// axios.post("http://localhost:8000/post/save", {Country:this.state.countryD}).then(() => {
  axios.post("http://localhost:8000/post/save", {Country:v}).then(() => {
  // axios.post("http://localhost:8000/post/save", countries).then(() => {
    alert('Country added');
})
.catch(error => {
    alert (error.message);
});



};



// handleClick(id){
//   // e.preventDefault();
//   console.log(id);
//   axios.delete(`/post/delete/${id}`).then((res) => {
//     alert("Delete Successfull");
//     this.retrieveReminders();
// }).catch(error => {
//   alert (error.message);
// });
// }

onDelete = (id) => {
  axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) => {
      alert("Delete Successfull");
      this.retriveCountries();
  })
}  

onClick = (NCountry) => {
  this.setState({ SCountry:NCountry});
  console.log("onClick");
}  

retriveCountries(){
  axios.get(`http://localhost:8000/posts`)
      .then(res => {
        const Lcountriess = res.data.existingPosts;
        this.setState({ Lcountries:res.data.existingPosts });
        console.log("existingposts" + res.data.existingPosts);
        console.log(res.data.existingPosts);
        console.log("Lcountries" + Lcountriess);
        console.log(Lcountriess);
        console.log("this.state.Lcountries");
        console.log(this.state.Lcountries);
      }).catch(error => {
        alert (error.message);
    });
}





	render() {
    let time = this.state.time;
    let country = this.state.SCountry;



    
		return (
            <div>
              <p>{country}</p>
                Hello
                <Timer expiryTimestamp={time} />
          {/* <DropDown /> */}
          <p>LIst f</p>
          <table>
            <tbody>
            
        {
          this.state.Lcountries
            .map(Lcountry =>
              <tr key={Lcountry._id}>
                <td>{Lcountry._id}</td>
                <td ><div onClick = {() => this.onClick(Lcountry.Country)}>{Lcountry.Country}</div></td>
                <td>
                  {/* <button type="button" onClick={this.handleClick(Lcountry._id)}>delete</button>  */}
                  <button type="button" onClick = {() => this.onDelete(Lcountry._id)}>delete</button> 

                </td>
              </tr>
            )
        }
        </tbody>
      </table>
          <DropDown 
          ass={this.state.ass}
        onChangeValue={this.handleChangeValue}/>
          {/* <Child
        value={this.state.value}
        onChangeValue={this.handleChangeValue}
      /> */}

            </div>

            
        );
	}
}


export default dashboard;

// class Child extends React.Component{
//   //...
  
//   render() {
//     return (
//       <input
//         type="text"
//         value={this.props.value}
//         onChange={this.props.onChangeValue}
//       />
//     );
//   }
// }



// export default function dashboard() {
//     const time = new Date();
//     time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
//     console.log("Hello");
//     return (
//       <div>
//         <Timer expiryTimestamp={time} />
//         <DropDown />
//         {/* <CList /> */}
        
//       </div>
//     );
//   }
