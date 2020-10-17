import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header = ({ title, showCancel = true }: HeaderProps) => {
  const navigation = useNavigation();

  const handleNavigateToHomePage = () => {
    navigation.navigate("OrphanagesMap");
  };

  return (
    <View style={styles.container}>
      <BorderlessButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Feather name="arrow-left" size={24} color="#15B6D6" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleNavigateToHomePage}>
          <Feather name="x" size={24} color="#FF669D" />
        </BorderlessButton>
      ) : (
        <View style={styles.fakeView} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#F9FaFC",
    borderBottomWidth: 1,
    borderColor: "#DDE3F0",
    paddingTop: 44,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "Nunito_600SemiBold",
    color: "#8FA7B3",
    fontSize: 16,
  },

  fakeView: {
      width: 24,
      height: 24,
  },
});

export default Header;
