import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faLockOpen,
} from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu/index';

const CarItem = () => {
  const [locked, setLocked] = useState(true);
  const unlockCar = () => {
    setLocked(!locked);
  };
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}> JadTesla </Text>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.batterySection}>
        <Image
          source={require('../assets/battery.png')}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <View style={styles.controlIcons}>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={unlockCar}>
          <View style={styles.controlButton}>
            <FontAwesomeIcon
              style={styles.icon}
              icon={locked ? faLock : faLockOpen}
              size={24}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;
