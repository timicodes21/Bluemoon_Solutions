import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { homeStyles as styles } from "../../styles/home/homeStyles";
import HomeHeader from "../../components/organism/headers/HomeHeader";
import InventoryCard from "../../components/molecules/cards/InventoryCard";
import AddIconButton from "../../components/atoms/buttons/AddIconButton";
import { inventories } from "../../data/inventories";
import { useHome } from "../../hooks/home/useHome";

const HomeScreen = () => {
  const { navigate } = useHome();
  return (
    <View style={styles.container}>
      <View>
        <HomeHeader logoutUser={() => {}} />
      </View>
      <View>
        <Text style={styles.headerText}>Lists</Text>
      </View>
      <FlatList
        data={inventories}
        renderItem={(item) => (
          <InventoryCard
            key={item?.index}
            name={item?.item?.name}
            price={item?.item?.price}
            totalStock={item?.item?.totalStock}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <AddIconButton onPress={navigate} />
    </View>
  );
};

export default HomeScreen;