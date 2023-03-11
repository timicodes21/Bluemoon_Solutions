import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import PrimaryButton from "../../atoms/buttons/PrimaryButton";
import DeleteButton from "../../atoms/buttons/DeleteButton";
import { XMarkIcon } from "react-native-heroicons/outline";
import { homeStyles as styles } from "../../../styles/home/homeStyles";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message?: string;
  onPressBtn: () => void;
  closeModal: () => void;
  load?: boolean;
}

const CustomModal: React.FC<IProps> = ({
  open,
  setOpen,
  onPressBtn,
  closeModal,
  message,
}) => {
  return (
    <Modal
      hasBackdrop
      isVisible={open}
      onModalHide={() => {
        setOpen(false);
      }}
      animationIn="fadeIn"
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={closeModal}>
              <XMarkIcon color="#242736" size={20} />
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                ...styles.lightText,
                color: "#242736",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              {message}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <View style={{ width: "30%", marginRight: 5 }}>
              <PrimaryButton onPress={closeModal} small>
                No
              </PrimaryButton>
            </View>
            <View style={{ width: "30%", marginLeft: 5 }}>
              <DeleteButton onPress={onPressBtn} small>
                Yes
              </DeleteButton>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
