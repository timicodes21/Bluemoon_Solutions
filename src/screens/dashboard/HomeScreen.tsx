import { View, Text, FlatList } from "react-native";
import React from "react";
import { homeStyles as styles } from "../../styles/home/homeStyles";
import HomeHeader from "../../components/organism/headers/HomeHeader";
import InventoryCard from "../../components/molecules/cards/InventoryCard";
import AddIconButton from "../../components/atoms/buttons/AddIconButton";
import { inventories } from "../../data/inventories";
import { useHome } from "../../hooks/home/useHome";
import CustomModal from "../../components/molecules/modals/CustomModal";

const HomeScreen = () => {
  const { navigate, logoutOpen, setLogoutOpen, logoutUser } = useHome();

  return (
    <View style={styles.container}>
      <View>
        <HomeHeader logoutUser={() => setLogoutOpen(true)} />
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
            onPress={() => navigate("EditInventory")}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <AddIconButton onPress={() => navigate("CreateInventory")} />

      <CustomModal
        open={logoutOpen}
        setOpen={setLogoutOpen}
        onPressBtn={logoutUser}
        closeModal={() => setLogoutOpen(false)}
        message="Are you sure you want to logout?"
      />
    </View>
  );
};

export default HomeScreen;
