import React, { Component } from "react";
import { View, Text, Image, Platform} from 'react-native';


class App extends Component {
  render() {
    return(
      <View>
        <Text style={{color: '#006400', fontSize: 35, margin: 15,textAlign : 'center'}}>
          Portal do Caçador</Text>
          <Text
  style={{
    fontFamily: Platform.select
    ({
      android: 'Inter_900Black',
      ios: 'Inter-Black',
    }),
  }}>
  
</Text>

        <Image
        source={{uri: 'https://st3.depositphotos.com/9881890/17090/i/450/depositphotos_170903838-stock-photo-bird-hunting.jpg'}}
        style={{width: 360, height: 360}}
        />

        <text style={{color: '#006400', fontSize: 20, margin: 15}}>
          Confira acima uma forma popular de se caçar</text>
        <Jobs largura={400} altura={400}/>
      </View>
    );
  }
}

export default App;

// Processo de Carregamento rápido da aplicação
class Jobs extends Component {
  render() {
      let img = 'https://st3.depositphotos.com/9881890/17090/i/450/depositphotos_170904672-stock-photo-hunter-loading-gun-with-bullets.jpg';

      return(
        <View>
          <Image
          source={{uri: img}}
          style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text style = {{color: '#231c14', fontSize: 20, margin: 15}}>
            Confira o modelo da arma na imagem acima
            </Text>
              <Text style = {{color: '#231c14', fontSize: 15 ,margin: 15}}>
            Principais animais caçados: Cevos e Coelhos</Text>
                <Text style = {{color: '#231c14', fontSize: 15 ,margin: 15}}>
            Ano de fabricação : dentre 1800 - 1900</Text>
        </View>
      );
  }
}