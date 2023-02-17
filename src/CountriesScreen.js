import { Text, FlatList, Pressable, Modal, View} from "react-native";
import { styles } from "../App";
import { useQuery } from "@apollo/client";
import { COUNTRY_QUERY } from "./gql/Query";

const CountryItem = ({ country }) => {
  const { name} = country;
  return (
    <Pressable style={styles.item}>
      <Text style={styles.header}>{name}</Text>
    </Pressable>
  );
};

export default function CountriesScreen(props) {
  const { loading,error,data } = useQuery(COUNTRY_QUERY, {
    variables: {
      "code": props.code,
    },
  });

  if (loading) {
    return <Text>Fetching data...</Text>;

  }
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text>{data.country.name}</Text>
          <Text>{data.country.native}</Text>
          <Text>{data.country.phone}</Text>
          <Text>{data.country.continent.name}</Text>
          <Text>{data.country.currency}</Text>
          <Text>{data.country.languages.name}</Text>
          <Text>{data.country.states.name}</Text>
          <Pressable style={styles.button} onPress={() => props.setModalVisible(!props.modalVisible)}>
            <Text style={styles.textStyle}>CLOSE</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}