import { useState } from 'react';
import { StyleSheet } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

const BasicUsage = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <DatePicker
      style={styles.calendar}
      onSelectedChange={date => setSelectedDate(date)}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    width: 300,
  },
});

export default BasicUsage;