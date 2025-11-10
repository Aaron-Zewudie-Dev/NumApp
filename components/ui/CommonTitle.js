
import {Text,StyleSheet} from 'react-native'
import Colors from '../../constants/colors';
function CommonTitle({children}){
     <Text style = {style.titleStyle}>{children}</Text>
}

export default CommonTitle;
const style = StyleSheet.compose({
    titleStyle: {
    fontSize:24,
    fontWeight:'bold',
    color:Colors.accent500,
    textAlign:'center',
    borderBottomWidth:2,
    borderColor:Colors.accent500,
    padding:12,
  }
})