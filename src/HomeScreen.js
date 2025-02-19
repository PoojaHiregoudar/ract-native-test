import { Text, FlatList, Pressable} from "react-native";
import React, { useState } from "react";
import { styles } from "../App";
import { useQuery } from "@apollo/client";
// import { useQuery } from "@apollo/react-hooks";
import { CONTINENT_QUERY } from "./gql/Query";
import CountriesScreen from "./CountriesScreen";
// import SearchBar from "./SearchBar";


export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState("AF");
  const { data, loading } = useQuery(CONTINENT_QUERY);

    
    

  const ContinentItem = ({ countries }) => {
    const { name,emoji,code } = countries;
    
    
    return (
      
      <Pressable style={styles.item} onPress={() => {setModalVisible(true); setCode(code);}}>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.header}>{emoji}</Text>
        <Text style={styles.header}>{code}</Text>
      </Pressable>
    );
  };

  if (loading) {
    return <Text>Fetching data...</Text>;
  }


  return (
    <>
      <FlatList
        data={data.countries}
        renderItem={({ item }) => <ContinentItem countries={item} />}
        keyExtractor={(item, index) => index}
      />
      <CountriesScreen code={code} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </>
  );
}