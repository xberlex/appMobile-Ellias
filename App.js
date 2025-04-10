import React, { Component, createRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";

// COMPONENTE REUTILIZÁVEL
class HuntingTopic extends Component {
  render() {
    const { mainImage, description, smallImage, tipText, highlight } = this.props;

    return (
      <View style={[styles.topicContainer, highlight && styles.highlighted]}>
        <Image source={{ uri: mainImage }} style={styles.image} />
        <Text style={styles.text}>{description}</Text>

        <View style={styles.inlineSection}>
          <Image source={{ uri: smallImage }} style={styles.smallImage} />
          <Text style={styles.tipText}>{tipText}</Text>
        </View>

        <View style={styles.separator} />
      </View>
    );
  }
}

// COMPONENTE PRINCIPAL
export default class App extends Component {
  scrollRef = createRef();

  state = {
    search: '',
    highlightedIndex: null,
    topics: [
      {
        mainImage: "https://st3.depositphotos.com/9881890/17090/i/450/depositphotos_170903838-stock-photo-bird-hunting.jpg",
        description: "Confira um dos Animais da caça esportiva e suas peculiaridades no ato da caça",
        smallImage: "https://images.unsplash.com/photo-1465247431621-ae634a2477be?fm=jpg&q=60&w=3000",
        tipText: "A caça de aves aquáticas exige precisão e silêncio.",
      },
      {
        mainImage: "https://st3.depositphotos.com/9881890/17090/i/450/depositphotos_170904672-stock-photo-hunter-loading-gun-with-bullets.jpg",
        description: "Equipamentos modernos e segurança na caça",
        smallImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdm9NicOuJ-14blYzu6a1pEv0wO17zfPH4xQ&s",
        tipText: "Tecnologia moderna e sua evolução auxilia na segurança e precisão.",
      },
      {
        mainImage: "https://www.estimacao.com.br/y/5002/caes-caca-e1564066951560.jpg",
        description: "Cães de caça: algumas raças utilizadas na caça tradicional",
        smallImage: "https://s2-globorural.glbimg.com/sXySyEVNX44TFUvywoqpMmmcIpI=/0x0:3600x2640/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_afe5c125c3bb42f0b5ae633b58923923/internal_photos/bs/2024/W/e/CMn54eSvKAd2aSqSlDLQ/1aev3a5848.jpg",
        tipText: "Raça de cachorro, cão Rastreador Brasileiro, cão usado na caça e proteção rural",
      },
      {
        mainImage: "https://img.odcdn.com.br/wp-content/uploads/2020/12/Przemek-Tokar.Shutterstock.jpg",
        description: "Técnicas de camuflagem na floresta",
        smallImage: "https://a-static.mlcdn.com.br/1500x1500/camuflagem-respiravel-ciclismo-balaclava-bone-mascara-facial-completa-caca-ao-ar-livre-lenco-de-others/aliexpress/202819799/6144cd132db15cd2642928bf47be0dd0.jpeg",
        tipText: "Exemplo de roupa(equipamento) de camuflagem usado na caça",
      },
      {
        mainImage: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Distribui%C3%A7%C3%A3o_cervo_do_pantanal_atual.png",
        description: "Locais para caçar o cervo do pantanal",
        smallImage: "https://conexaoplaneta.com.br/wp-content/uploads/2019/07/encontro-cervo-do-pantanal-zig-koch-2-conexao-planeta.jpg",
        tipText: "O cervo-do-pantanal habita áreas alagadas e vegetações densas.",
      },
      {
        mainImage: "https://media.istockphoto.com/id/1181914680/pt/foto/man-bow-hunting-in-rural-alberta-canada.jpg?s=612x612&w=0&k=20&c=8zJsNpCmfYX_EyZ4gx04zBuef3GvFyFujGTRUfa0qho=",
        description: "Caça silenciosa com arco e flecha",
        smallImage: "https://arcoeflechacuritiba.com.br/wp-content/uploads/2018/10/tipos-de-arcos.jpg?w=659",
        tipText: "Confira alguns dos tipos de arcos utilizados ao longo do tempo e sua evolução",
      },
    ],
  };

  itemRefs = [];

  componentDidMount() {
    this.itemRefs = this.state.topics.map(() => createRef());
  }

  handleSearch = () => {
    const { search, topics } = this.state;
    const index = topics.findIndex(topic =>
      topic.tipText.toLowerCase().includes(search.toLowerCase())
    );

    if (index !== -1 && this.itemRefs[index]?.current) {
      this.itemRefs[index].current.measureLayout(
        this.scrollRef.current,
        (x, y) => {
          this.scrollRef.current.scrollTo({ y, animated: true });
          this.setState({ highlightedIndex: index });

          setTimeout(() => {
            this.setState({ highlightedIndex: null });
          }, 2000);
        }
      );
    }
  };

  render() {
    const { search, topics, highlightedIndex } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#f4f1ec' }}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar . . ."
            value={search}
            onChangeText={(text) => this.setState({ search: text })}
          />
          <TouchableOpacity style={styles.searchButton} onPress={this.handleSearch}>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
        </View>

        <ScrollView ref={this.scrollRef} style={styles.container}>
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Portal do Caçador</Text>
            </View>

            <Text style={styles.subtitle}>
              Explore o mundo da caça e suas peculiaridades
            </Text>

            {topics.map((item, index) => (
              <View key={index} ref={this.itemRefs[index]}>
                <HuntingTopic {...item} highlight={highlightedIndex === index} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f1ec',
    paddingTop: 40,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  titleContainer: {
    borderWidth: 2,
    borderColor: '#006400',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#e5e0d6',
    marginBottom: 10,
  },
  title: {
    color: '#006400',
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
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
  topicContainer: {
    alignItems: 'center',
    marginBottom: 30,
    padding: 10,
    borderRadius: 12,
  },
  highlighted: {
    backgroundColor: '#d3f2d3',
    borderWidth: 2,
    borderColor: '#2e7d32',
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
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  inlineSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  smallImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#3e3e3e',
    fontStyle: 'italic',
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#c0a878',
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginTop: 30,
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#006400',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  searchIcon: {
    fontSize: 20,
    color: '#fff',
  },
  
});
