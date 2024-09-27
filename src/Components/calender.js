import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getMonth, getYear, isAfter, isBefore } from 'date-fns';
import CalendarPicker from "react-native-calendar-picker";
import { Modal } from "react-native-paper";

export default class calenderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
        

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={this.props.onClose}
        >
        <View style={styles.container}>
        <CalendarPicker onDateChange={this.onDateChange} />
        </View>
        </Modal>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
  },
  main:{

  }
});