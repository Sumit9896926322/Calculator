import React , {Component} from 'react';
import {TouchableOpacity,AppRegistry,StyleSheet, Text, View } from 'react-native';

function updateValue(text){
  console.log(this.state.value)
   switch(text){
    case 'C':
      this.setState({
            value: this.state.value.slice(0, -1),
        })
      break;
    
    case "=":
       this.setState({
            value: eval(this.state.value).toString()
        })
       break;
     default:
      this.state.value = this.state.value+text; 
      this.setState({text})
   }
}
class Screen extends Component{
  constructor(props){
    super(props);
    this.state = {
      value:"",
    }
     updateValue = updateValue.bind(this)
  }
  render(){
    return(
    <View style ={{margin:6,width:165,backgroundColor:'grey',height:30, borderRadius:15}}><Text style ={{margin:10}}>{this.state.value}</Text></View>
    )
  }
}

class Button extends Component{
 showAlert(value){
    updateValue(value);
  }
  render(){
    return(
       <View style = {styles.bottom}>
        <Screen value = "25"/>
       
        <View style = {styles.container}>
          
          
        <TouchableOpacity onPress={()=>this.showAlert("1")}><View style = {styles.button}><Text style = {styles.text}>1</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showAlert(2)}><View style = {styles.button}><Text style = {styles.text}>2</Text></View></TouchableOpacity>
        <TouchableOpacity  onPress={()=>this.showAlert(3)}><View style = {styles.button}><Text style = {styles.text}>3</Text></View></TouchableOpacity>
      </View>
      
<View style = {styles.container}>
          
          
        <TouchableOpacity onPress={()=>this.showAlert(4)}><View style = {styles.button}><Text style = {styles.text}>4</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showAlert(5)}><View style = {styles.button}><Text style = {styles.text}>5</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showAlert(6)}><View style = {styles.button}><Text style = {styles.text}>6</Text></View></TouchableOpacity>
      </View>
      
        
      <View style = {styles.container}>
          
          
        <TouchableOpacity onPress={()=>this.showAlert(7)}><View style = {styles.button}><Text style = {styles.text}>7</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showAlert(8)}><View style = {styles.button}><Text style = {styles.text}>8</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showAlert(9)}><View style = {styles.button}><Text style = {styles.text}>9</Text></View></TouchableOpacity>
      </View>
      
        
      <View style = {styles.container}>
          
          
        <TouchableOpacity onPress={()=>this.showAlert('+')}><View style = {styles.button}><Text style = {styles.text}>+</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showAlert('-')}><View style = {styles.button}><Text style = {styles.text}>-</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showAlert('*')}><View style = {styles.button}><Text style = {styles.text}>*</Text></View></TouchableOpacity>
      </View>
      
        
    <View style = {styles.container}>
          
          
        <TouchableOpacity onPress={()=>this.showAlert('/')}><View style = {styles.button}><Text style = {styles.text}>/</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showAlert('C')} ><View style = {styles.button}><Text style = {styles.text}>C</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showAlert('=')}><View style = {styles.button}><Text style = {styles.text}>=</Text></View></TouchableOpacity>
      </View>
      
        
      </View>
     
    );
  }
}

export default class UseCompo extends Component{
  render(){
    return(
       <Button name = "sumit" age = "19"/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width:52,
    height:30,
    margin:2,
    borderRadius:15,
    backgroundColor:'grey',
    },
    
    bottom:{
     marginTop:100, 
    },
    text:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height:30,
        }
  ,
});

