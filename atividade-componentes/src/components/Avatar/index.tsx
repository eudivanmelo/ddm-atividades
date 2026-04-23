import { View } from "react-native"
import { style } from "./style"

interface AvatarProps {
    avatarURL?: string
    nome: string
}

export const Avatar = ({avatarURL, nome}: AvatarProps) => {


    return (
        <View style={style.container}>

            <View></View>
        </View>
    )
}