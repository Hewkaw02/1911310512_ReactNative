import { View, Text , Button} from 'react-native'
import React,{useState , useEffect} from 'react'

const Count = (props) => {
            //({num,title})=> // props 3 แล้วเรียกใช้งาน num กับ title เลย

    const [count,setCount] = useState(props.num); //  props 1 แบบเรียกใช้เลย

        const {num,title} = props; // props 2 เป็นการประกาศตัวแปรแล้วเรียกใช้

    // useEffect(()=> {
    //     console.log("use Effect 1"); // ไม่ค่อยได้ใช้
    // })

    // useEffect(()=> {
    //     console.log("use Effect 2"); // เหมาะสำหรับรับจาก Backend เชิง API ครั้งเดียว
    // },[count])

    // useEffect(()=> {
    //     console.log("use Effect 3"); // เหมาะสำหรับรับข้อมูลตั้งต้นจาก Database
    // },[])

  return (
    <View style={{alignItems:"center"}}>
        <Text >{props.title} : {count}</Text>
        <Button
            title="Click Me"
            onPress={ ()=> setCount(count+1)}/>
    </View>
  )
}

export default Count