import { Injectable } from '@angular/core';

export interface Animal {
  nome: string;
  tags: string[];
  historia: string;
  detalhes: string[];
  imagens: string[];
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private dadosAnimais: Record<string, Omit<Animal, 'id'>> = {
      rex: {
          nome: "Rex",
          tags: ["Macho", "2 anos", "Porte Médio", "Energia Alta"],
          historia: "Fui resgatado de uma situação de negligência, mas nunca perdi minha alegria de viver! Sou um cão extremamente leal, brincalhão e adoro correr atrás de bolas. Meu passatempo favorito é receber carinho na barriga e dar longos passeios no parque. Procuro uma família ativa que possa me dar todo o amor e atenção que mereço.",
          detalhes: ["Vacinado", "Vermifugado", "Castrado", "Sociável com outros cães", "Sociável com crianças"],
          imagens: [
              'https://images.pexels.com/photos/16622616/pexels-photo-16622616.jpeg',
              'https://images.pexels.com/photos/16622600/pexels-photo-16622600.jpeg',
              'https://images.pexels.com/photos/16622672/pexels-photo-16622672.jpeg'
          ]
      },
      mimi: {
          nome: "Mimi",
          tags: ["Fêmea", "1 ano", "Porte Pequeno", "Calma"],
          historia: "Sou uma gatinha muito doce e um pouco tímida no início, mas depois de ganhar confiança, adoro um bom colo e um carinho atrás das orelhas. Gosto de observar o movimento pela janela e de longas sonecas ao sol. Sou a companhia perfeita para quem procura uma amiga tranquila e amorosa.",
          detalhes: ["Vacinada", "Vermifugada", "Castrada", "Prefere ser filha única"],
          imagens: [
              'https://images.pexels.com/photos/18160469/pexels-photo-18160469.jpeg',
              'https://images.pexels.com/photos/33202406/pexels-photo-33202406.jpeg',
              'https://images.pexels.com/photos/10485356/pexels-photo-10485356.jpeg'
          ]
      },
      thor: {
          nome: "Thor",
          tags: ["Macho", "3 anos", "Porte Grande", "Brincalhão"],
          historia: "Sou um grandalhão com um coração de ouro. Adoro pessoas, festas e brincadeiras. Sou um pouco desajeitado por causa do meu tamanho, mas sou bastante amoroso. Me dou bem com todo mundo e só quero uma família que tenha espaço e energia para acompanhar meu ritmo. Prometo ser seu melhor amigo e protetor.",
          detalhes: ["Vacinado", "Vermifugado", "Castrado", "Sociável com crianças"],
          imagens: [
              'https://images.pexels.com/photos/8850585/pexels-photo-8850585.jpeg',
              'https://images.pexels.com/photos/16219483/pexels-photo-16219483.jpeg',
              'https://images.pexels.com/photos/9470881/pexels-photo-9470881.jpeg'
          ]
      },
      bolinha: {
          nome: "Bolinha",
          tags: ["Macho", "5 anos", "Porte Pequeno", "Preguiçoso"],
          historia: "A vida para mim é uma longa soneca interrompida por petiscos. Sou um especialista em encontrar o lugar mais confortável da casa e ronco como um trator. Se você procura um companheiro para maratonas de séries, sou o cão ideal. Minha maior aventura é ir da cama para a tigela de comida.",
          detalhes: ["Vacinado", "Vermifugado", "Castrado", "Sociável com todos"],
          imagens: [
              'https://images.pexels.com/photos/1289557/pexels-photo-1289557.jpeg',
              'https://images.pexels.com/photos/33870418/pexels-photo-33870418.jpeg',
              'https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg'
          ]
      },
      nina: {
          nome: "Nina",
          tags: ["Fêmea", "2 anos", "Pelo Longo", "Elegante"],
          historia: "Sou uma gata de linhagem nobre, ou pelo menos gosto de pensar que sim. Exijo ser escovada diariamente e aprecio os prazeres mais finos da vida, como salmão e almofadas de veludo. Não me entrego para qualquer um, mas se conquistar minha confiança, terá uma rainha a governar seu lar com elegância e afeto.",
          detalhes: ["Vacinada", "Vermifugada", "Castrada"],
          imagens: [
              'https://images.pexels.com/photos/8931752/pexels-photo-8931752.jpeg',
              'https://images.pexels.com/photos/8931757/pexels-photo-8931757.jpeg',
              'https://images.pexels.com/photos/8931758/pexels-photo-8931758.jpeg'
          ]
      },
       biscoito: {
          nome: "Biscoito",
          tags: ["Macho", "8 meses", "Porte Médio", "Dócil"],
          historia: "Fui encontrado na rua, um pouco assustado, mas cheio de vontade de dar e receber amor. Sou um filhote muito inteligente e aprendo truques muito rápido. Adoro carinho e sou o campeão mundial de abanar o rabo. Só preciso de uma chance para mostrar o companheiro incrível que posso ser.",
          detalhes: ["Vacinado", "Vermifugado", "Sociável com outros cães"],
          imagens: [
              'https://images.pexels.com/photos/59965/dog-young-dog-puppy-59965.jpeg',
              'https://images.pexels.com/photos/59988/dog-puppy-animal-portrait-small-dog-59988.jpeg',
              'https://images.pexels.com/photos/30398763/pexels-photo-30398763.jpeg'
          ]
      },
      frajola: {
          nome: "Frajola",
          tags: ["Fêmea", "3 anos", "Porte Pequeno", "Independente"],
          historia: "Tenho uma pelagem elegante preta e branca e um ar de mistério. Gosto do meu espaço, mas não dispenso uma boa sessão de carinho no sofá no final do dia. Sou uma ótima ouvinte e a companhia perfeita para quem aprecia a independência e o charme felino. Gosto de caçar brinquedos e observar pássaros da janela.",
          detalhes: ["Vacinada", "Vermifugada", "Castrada", "Tímida com estranhos"],
          imagens: [
              'https://images.pexels.com/photos/7275538/pexels-photo-7275538.jpeg',
              'https://images.pexels.com/photos/7347413/pexels-photo-7347413.jpeg',
              'https://images.pexels.com/photos/18156670/pexels-photo-18156670.jpeg'
          ]
      }
  };

  constructor() { }

  getAnimals(): Animal[] {
    return Object.keys(this.dadosAnimais).map(key => ({
      id: key,
      ...this.dadosAnimais[key]
    }));
  }

  getAnimalById(id: string): Animal | undefined {
    if (!this.dadosAnimais[id]) {
      return undefined;
    }
    return {
      id: id,
      ...this.dadosAnimais[id]
    };
  }
}