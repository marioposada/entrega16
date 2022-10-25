import React , {useState, useEffect} from 'react'
import { View,Text } from 'react-native'
import {styles} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native'


const CategoriesScreen = ({navigation}) => {

    const [categori, setCategori] = useState(null)

    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.selected)
console.warn(categories)
    useEffect(() => {
        setCategori(categories)
    }, [categories])

    return (
        <ScrollView style={styles.containerUp}>
        <View>
            <Text>Categories</Text>
            <Text>Categories</Text>
            <Text>Categories</Text>
        </View>
        </ScrollView>
    )
}

export default CategoriesScreen;

