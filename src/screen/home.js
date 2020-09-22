
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {first, second, third, fourth } from '../firebase/Firebase';
import { getvalfirst } from '../firebase/values';



const home = () => {
  const  user = "user"
  const led = "led"
  const led2 = "led2"
  const led3 = "led3"
  const led1 = "led1"
  const[tit1,settit1]=useState("loading")
  const[tit2,settit2]=useState("loading") 
  const[tit3,settit3]=useState("loading") 
  const[tit4,settit4]=useState("loading")
  const[color1,setcolor1]=useState("blue") 
  const[color2,setcolor2]=useState("blue") 
  const[color3,setcolor3]=useState("blue")  
  const[color4,setcolor4]=useState("blue") 
  


  
  useEffect(()=>{
    getvalfirst(user,led,settit1,setcolor1);
    getvalfirst(user,led1,settit2,setcolor2);
    getvalfirst(user,led2,settit3,setcolor3);
    getvalfirst(user,led3,settit4,setcolor4);
    },[]);

  return (
   <View style={{textAlign:"center",alignContent:"center"}}><Text style={{textAlign:"center",alignContent:"center"}}>led</Text>
   <Button title={tit1} color={color1} onPress={()=>{first(user,led,settit1,setcolor1)}}></Button>
   <Text style={{textAlign:"center",alignContent:"center"}}>led1</Text>
   <Button title={tit2} color={color2} onPress={()=>{second(user,led1,settit2,setcolor2)}}></Button>
   <Text style={{textAlign:"center",alignContent:"center"}}>led2</Text>
   <Button title={tit3} color={color3} onPress={()=>{third(user,led2,settit3,setcolor3)}}></Button>
   <Text style={{textAlign:"center",alignContent:"center"}}>led3</Text>
   <Button title={tit4} color={color4} onPress={()=>{fourth(user,led3,settit4,setcolor4)}}></Button></View>
  );
};

const styles = StyleSheet.create({
 
});

export default home;
