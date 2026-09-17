import { Link } from "expo-router";
import { StyleSheet } from "react-native";
export default function App (){
  return(
    <view style={styles.container}>
      <text style={styles.text}> Asistencia </text>
      <Link href="/about" style={styles.button}>
      Go To About Us
      </Link>
    </view>
  )
}

const styles = StyleSheet.create ({
  button:{
   fontSize: 18,
   color: "fff",
   backgroundColor: "#415252",
  },
  container: {
    flex:1,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor:"#20614D"

  },
  text: {
    color: "fff",
    fontSize :24,
    fontWeight : "bold",

  },
})
