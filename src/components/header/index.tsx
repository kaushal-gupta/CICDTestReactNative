import React,{memo} from "react";
import { View, Text } from "react-native";

const Header  = (props:any) =>{
    console.log('inside the header')
    
        props.hello()
    
    return(
        <View>
           
            <Text>Hello Header</Text>
        </View>
    )
}

export default memo(Header);