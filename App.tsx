import React, { useCallback, useMemo, useState } from "react";
import { Button, Text, View } from "react-native";
import Header from "./src/components/header";


const App = () =>{
  const [render,setRender] = useState(false);
  // console.log('in main')
  const abcFunc = (count:number) =>{
    // heavy calculation
    console.log('abcFunc')
    return 4030;
  }
  const [count,setCount ] = useState(1);
  const abcFunc2 = useCallback(()=>{

      console.log('in abcfunc2')

  },[count])
  

  
  const cal = useMemo(()=>{return abcFunc(30)},[]);
  return(
    <View style={{flex:1}}>
      <Text>Hello main</Text>
      <Button
      title="Click me"
      onPress={()=>setRender(!render)}
      />
      <Text>{cal}</Text>
      <Header hello={abcFunc2}/>
      <Button title="Click2 me" onPress={()=>setCount(count+1)}/>
    </View>
  )
}

export default App;