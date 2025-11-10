
import {Text,StyleSheet} from 'react-native'
function CommonTitle({children}){
     <Text style = {style.titleStyle}>{children}</Text>
}

export default CommonTitle;
const style = StyleSheet.compose({
    titleStyle: {
    fontSize:24,
    fontWeight:'bold',
    color:'#ddb52f',
    textAlign:'center',
    borderBottomWidth:2,
    borderColor:'#ddb52f',
    padding:12,
  }
})