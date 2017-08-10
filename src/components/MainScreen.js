import React, { Component } from 'react';
import {
  Text, View, ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { listStyles as styles } from '../styles';

export default class MainScreen extends Component {
  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows([
      {id: 1, title: 'Row 1 title', description: 'A very long row 1 description', created: '1 min ago'},
      {id: 2, title: 'Row 2 title', description: 'A very long row 2 description', created: '2 min ago'},
      {id: 3, title: 'Row 3 title', description: 'A very long row 3 description', created: '3 min ago'},
    ]);
    return (
      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderTitle}>List items title</Text>
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={
            (rowData) => (
              <View style={styles.listRow}>
                <Text style={styles.listRowTitle}>{rowData.title}</Text>
                <Text style={styles.listRowSubtitle}>{rowData.description}</Text>
                <Text style={styles.listRowDate}>{rowData.created}</Text>
              </View>
            )
          }
        />
        <ActionButton buttonColor="#E74C3C">
          <ActionButton.Item buttonColor='#8BC34A' title="New Item" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9b59b6' title="Filter items" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-search" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}
