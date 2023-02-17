import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomeScreen from './src/HomeScreen';
import { useState } from "react";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});


export default function App() {
  // const [query, setQuery] = useState("");
  return (
    <ApolloProvider client={client}>
    <View style={styles.container}>

      <Text style={styles.title}>Countries App</Text>
      {/* <div className="App">
      <label>Search</label>
      <input type = "text" onChange={e => setQuery(e.target.value)} />
      </div> */}
      <HomeScreen/>
    </View>
    </ApolloProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    paddingLeft:20,
    paddingRight: 20
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20
  },
  modalView: { 
    width:'90%',
    height:'50%',
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom:10
  },
  button: {
    borderRadius: 10,
    padding: 5,
    elevation: 2,
    backgroundColor: "lightgrey"
  },
  searchBox: {
    width: "90%",
    padding: 10,
    borderWidth:1,
    borderRadius: 5,
  },
});