import React, {useState} from 'react';
import { version } from 'react-dom';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

export default function App() {

  const randomNum = (Math.floor(Math.random() * 10) + 1)
  const[num,setNum]=useState('')
  const[score,setScore]=useState(10)
  const[round,setRound]=useState(0)
  const[getState,setState]=useState(0)
  const[getHint,setHint]=useState(0)
  const[getRand,setRand]=useState(randomNum.toString())
  const[win,setWin]=useState(false)
  

  const Compare = () =>{
    if(getRand==num){
      setWin(true)
      setRound(round+1)
      setScore(score+10)
    }
    else{
      setRound(round+1)
    }
    if(win==true){
      setState(2)
    }
  }

  const Hint = () =>{
    if(getHint<5){
      setHint(getHint+1)
      if(randomNum>5){
        setScore(score-2)
        alert("Number is greater than 5")
      }
      else{
        alert("Number is less than 5")
      }
    }
    setScore(score-2)
  }


  if(getState==0){
    return(

      <View style={styles.container}>
      
        <View>
          <Text style={{fontSize:17,marginBottom:10,fontWeight:'bold'}}>
            Welcome to Guessing Game!</Text>
        </View>
        
        <View style={{height:100,width:200,marginTop:10,}} >
          <Button
            onPress={()=>setState(1)}
            title="Start Game"
            color="green"
          />
        </View>
      </View>
  
    )
  }
  else if(getState==1){
    return(
      <View style={styles.container}>
  
        <View>
          <Text style={{fontSize:14,marginBottom:10,fontWeight:'bold',color:"red"}}>Score: {score} , Round: {round}, Random: {getRand}</Text>
        </View>
  
         <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={(val)=>setNum(num+'1')} style={styles.tile}>
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(val)=>setNum(num+'2')}  style={styles.tile}>
              <Text>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(val)=>setNum(num+'3')} style={styles.tile}>
              <Text>3</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={(val)=>setNum(num+'4')}  style={styles.tile}>
              <Text>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(val)=>setNum(num+'5')} style={styles.tile}>
              <Text>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(val)=>setNum(num+'6')} style={styles.tile}>
              <Text>6</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={(val)=>setNum(num+'7')} style={styles.tile}>
              <Text>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(val)=>setNum(num+'8')} style={styles.tile}>
              <Text>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={(val)=>setNum(num+'9')} style={styles.tile}>
              <Text>9</Text>
            </TouchableOpacity>
          </View>
  
          <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight:'bold',fontSize:20}}>Guess:{num}</Text>
         </View>
  
          <View style={{height:100,width:300,marginTop:20}}>
            <Button
              onPress={(val)=>Compare()}
              title="Guess"
              color="blue"
            />
          </View>

          <View style={{height:100,width:300,marginTop:20}}>
            <Button
              onPress={()=>setState(2)}
              title="Enter"
              color="blue"
            />
          </View>

          <View style={{height:100,width:300}}>
            <Button
              onPress={()=>Hint}
              title="Hint"
              color="blue"
            />
          </View>
  
          <View style={{height:100,width:300}}>
            <Button
              onPress={(val)=>setNum('')}
              title="Reset"
              color="blue"
            />
          </View>
          
      </View>
      
    )

  }
  else if(getState==2){
    return(
      <View style={styles.container}>
        <View>
          <Text style={{fontSize:20,marginBottom:10,fontWeight:'bold',color:"green"}}>Total Score: {score}</Text>
          <Text style={{fontSize:20,marginBottom:10,fontWeight:'bold',color:"orange"}}>Hints Taken: {getHint}</Text>
          <Text style={{fontSize:20,marginBottom:10,fontWeight:'bold',color:"magenta"}}>Rounds: {round}</Text>
          <Text style={{fontSize:20,marginBottom:10,fontWeight:'bold',color:"magenta"}}>Victory: {win.toString()}</Text>
        </View>
        <View style={{height:100,width:300,marginTop:20}}>
          <Button
            onPress={()=>setState(0)}
            title="Finish"
            color="purple"
          />
        </View>
  
        <View style={{height:100,width:300}}>
          <Button
            onPress={()=>setState(0)}
            title="Play Again"
            color="purple"
          />
        </View>
      </View>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile:{
    backgroundColor:'silver',
    borderWidth:5,
    width:100,
    height:100,
    alignItems:'center',
    justifyContent:'center'
  },
});
