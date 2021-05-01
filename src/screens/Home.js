import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Cards from '../components/Cards';
import ItemRows from '../components/ItemRows';
const Home = () => {


    const url = "https://api.covid19api.com/summary";
    const [data, setData] = useState();
    const [isLoading, setIsloading] = useState(false);
    const [error,setError] = useState();
    useEffect(() => {
        const fetchCovidData = async () => {
            setIsloading(true);
            try {
                const result = await fetch(url);
                const response = await result.json();
                setData(response)
                setIsloading(false);
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchCovidData();
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.covidHeading}>COVID19 DASHBOARD</Text>
            <View style={styles.cards}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 170 }}
                >
                    <Cards
                        icon="pulse"
                        title="Total Cases"
                        bg="#D93B4A"
                        number={data ? data.Global.TotalConfirmed : 0}
                    />

                    <Cards
                        icon="medkit"
                        title="Recovered"
                        bg="#FFF"
                        number={data ? data.Global.TotalRecovered : 0}
                    />

                    <Cards
                        icon="nuclear"
                        title="Death Reported"
                        bg="#FFF"
                        number={data ? data.Global.TotalDeaths : 0}
                    />
                </ScrollView>
            </View>
            <View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={styles.casesHeading}>Covid Cases by region</Text>
                </View>
            </View>
            <View style={styles.flatList}>
                <FlatList 
                    data={data && data.Countries ?  data.Countries : 0}
                    renderItem={({item})=> <ItemRows item={item}/>} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c2732"
    },
    covidHeading: {
        color: '#FFF',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 50
    },
    cards: {
        marginTop: -90
    },
    casesHeading:{
        color: '#FFF',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 30
    },
    flatList:{
        marginTop:10
    }
})

export default Home;