import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import { MonoText } from '../components/StyledText';
import { AdMobBanner } from 'expo-ads-admob';


export default function HomeScreen() {

  const [openMenu, setOpenMenu] = useState(false);
  const [openNum, setOpenNum] = useState(false);
  const [menu, setMenu] = useState('');
  const [num, setNum] = useState(0);
  const handleStart = () => {
    setMenu(menus[rand]);
    setOpenMenu(true);
  }
  const handleFin = () => {
    setOpenMenu(false);
  }
  const handleStartNum = () => {
    setNum(nums[randNum]);
    setOpenNum(true);
  }
  const handleFinNum = () => {
    setOpenNum(false);
  }
  const menus = ['生', '生', '神泡サイコロ！', 'ハイボール', 'ハイボール濃いめ', 'ハイボールサイコロ！',
                 '濃厚サワー', 'サワーほろ酔い', 'サワーノーマル', 'サワーノーマル', 'サワー男前', 'サワーストロング', 'お茶ハイ', 'ミルク酒',
                 'フルーツサワー', 'カクテル', '梅酒', '白ワイン', '赤ワイン', '芋焼酎', '麦焼酎', '白水!!!', '白水!!!',
                 '白水!!!', 'ささいなた!!', 'ささいなた!!', '日本酒1合!', '日本酒2合!!', 'おきまさ',
                 '逃げのソフトドリンク', '右隣の人と日本酒1合ずつ', 'ジャンボコロッケ'];
  const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                3, 3, 3, 3,
                4, 
                5];
  const min = 0;
  const max = menus.length - 1;
  const rand = Math.floor(min + Math.random(9) * (max - min));
  const randNum = Math.floor(0 + Math.random(9) * (nums.length - 0));

  console.log(menu);

  return (
    <View style={styles.container}>      
      <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.titleText}>イッキュー何飲む?</Text>
          <Text style={styles.subTitle}>次に飲むドリンクを選ぼう！！</Text>
          <Text style={styles.subsubTitle}>お酒の飲み過ぎには気をつけよう</Text>
          <Image
            source={require('../assets/images/kanpai.png')}
            style={styles.kanpaiImage}
          />
          <Button
            title="あなたが飲むのは"
            titleStyle={{
              color: "white",
              fontSize: 40,
            }}
            buttonStyle={{
              backgroundColor:'red',
            }}
            onPress={() => handleStart()}
          />
          <Button
            title="あなたが飲むのは"
            titleStyle={{
              color: "white",
              fontSize: 40,
            }}
            buttonStyle={{
              backgroundColor:'blue',
              marginTop: 10,
              marginBottom: 0,
            }}
            onPress={() => handleStartNum()}
          />
        </View>
        <Modal isVisible={openMenu}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
          <Text style={{fontSize: 25}}>とりあえず</Text>
          <Text style={styles.result}>{menu}</Text>
              <Button
                  title="とじる"
                  titleStyle={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handleFin()}
              />
          </View>
        </Modal>
        <Modal isVisible={openNum}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
          <Text style={{fontSize: 25}}>あなたが飲むのは</Text>
          <Text style={styles.result}>{num}杯!</Text>
              <Button
                  title="とじる"
                  titleStyle={{
                    color: "white",
                    fontSize: 30,
                  }}
                  onPress={() => handleFinNum()}
              />
          </View>
        </Modal>
      </ScrollView>
      <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-9015913348050296/4318375924" // Test ID, Replace with your-admob-unit-id
      // ca-app-pub-9015913348050296/4318375924  admob unit id
      // ca-app-pub-3940256099942544/6300978111  test id
      // testDeviceID="EMULATOR"
      servePersonalizedAds// true or false
      onDidFailToReceiveAdWithError={() => (console.log("error to receive ad"))} />
      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View> */}
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  titleText: {
    paddingTop: 50,
    fontSize: 45,
  },
  subTitle: {
    paddingTop: 20,
    fontSize: 25,
  },
  subsubTitle: {
    paddingTop: 15,
    fontSize: 5,
  },
  result: {
    fontSize: 50,
    marginBottom: 40,
    marginTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  kanpaiImage: {
     width: 140,
     height: 140,
     marginTop: 50,
     marginBottom: 40,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
