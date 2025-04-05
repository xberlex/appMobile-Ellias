import React, { Component } from "react";
import { View, Text, Image, ScrollView, Platform, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Portal do Caçador</Text>

          <Text style={styles.subtitle}>
            Explore o mundo da caça e seus equipamentos
          </Text>

          <Image
            source={{ uri: 'https://st3.depositphotos.com/9881890/17090/i/450/depositphotos_170903838-stock-photo-bird-hunting.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Confira acima as Técnicas tradicionais de caça utilizadas no mundo
          </Text>

          <View style={styles.separator} />

          <Image
            source={{ uri: 'https://st3.depositphotos.com/9881890/17090/i/450/depositphotos_170904672-stock-photo-hunter-loading-gun-with-bullets.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Equipamentos modernos e segurança na caça
          </Text>

          <View style={styles.separator} />

          <Image
            source={{ uri: 'https://www.estimacao.com.br/y/5002/caes-caca-e1564066951560.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Cães de caça: algumas das raças utilizadas na caça tradicional
          </Text>

          <View style={styles.separator} />

          <Image
            source={{ uri: 'https://img.odcdn.com.br/wp-content/uploads/2020/12/Przemek-Tokar.Shutterstock.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Técnicas de camuflagem na floresta
          </Text>

          <View style={styles.separator} />

          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Distribui%C3%A7%C3%A3o_cervo_do_pantanal_atual.png' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Locais para caçar o cervo do pantanal
          </Text>

          <View style={styles.separator} />

          <Image
            source={{ uri: 'https://media.istockphoto.com/id/1181914680/pt/foto/man-bow-hunting-in-rural-alberta-canada.jpg?s=612x612&w=0&k=20&c=8zJsNpCmfYX_EyZ4gx04zBuef3GvFyFujGTRUfa0qho=' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            Caça no estilo mais silencioso, utilizando o arco e flecha
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f1ec',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: '#006400',
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: Platform.select({
      android: 'Inter_900Black',
      ios: 'Inter-Black',
    }),
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#3e3e3e',
  },
  image: {
    width: 360,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: '#231c14',
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#c0a878',
    marginVertical: 20,
  },
});