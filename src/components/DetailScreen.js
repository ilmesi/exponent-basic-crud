import React, { Component } from 'react';
import {
  Image, Text, View, ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { detailStyles as styles } from '../styles';
import logo from '../../assets/icons/app-logo.png';

export default class DetailScreen extends Component {
  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const rows = [
      {icon: 'md-briefcase', name: '', value: 'Row 1 title'},
      {icon: 'md-call', name: '', value: 'A very long row 1 description'},
      {icon: 'md-book', name: '', value: 'A very short description'},
    ];
    const dataSource = ds.cloneWithRows(rows);
    const dataSourceExpanded = dataSource;
    return (
      <View style={styles.detailContainer}>
        <View style={styles.detailHeader}>
          <Image source={logo} style={styles.detailHeaderLogo} resizeMode='contain' />
        </View>
        <View style={styles.detailList}>
          <ListView
            dataSource={dataSource}
            renderRow={this.renderItem.bind(null, rows.length)}
          />
        </View>
        <View style={styles.detailSubList}>
          <Text style={styles.detailSubtitle}>More</Text>
          <View style={styles.detailList}>
            <ListView
              dataSource={dataSourceExpanded}
              renderRow={this.renderItem.bind(null, rows.length)}
            />
          </View>
        </View>
      </View>
    );
  }
  renderItem(total, rowData, stuff, index) {
    const notLast = total !== parseInt(index) + 1;
    return (
      <View style={styles.detailRow}>
        <Icon name={rowData.icon} style={styles.detailIcon} />
        <View style={[styles.detailValue, notLast && styles.detailValueBorder]}>
          <Text>{rowData.value}</Text>
        </View>
      </View>
    )
  }
}
