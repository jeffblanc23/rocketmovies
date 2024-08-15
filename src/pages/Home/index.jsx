import { LuPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { AddButton, Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Star } from '../../components/Star';
import { Tag } from '../../components/Tag';
import { MovieCard } from '../../components/MovieCard';
import { TextTruncated } from '../../components/TextTruncated';

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div className='header'>
          <h1>Meus filmes</h1>
          <AddButton to='/movie/create'>
            <Button icon={LuPlus} title='Adicionar filme' />
          </AddButton>
        </div>

        <div className="movies">
          <AddButton to='/movie/preview/1'>
            <MovieCard title='Interestellar'>
              <Star number={4} />

              <TextTruncated
                text="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o 'fantasma' é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As 'missões Lázaro' enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy."
                maxLength={300}
              />

              <Tag title='Ficção Científica' />
              <Tag title='Drama' />
              <Tag title='Família' />
            </MovieCard>
          </AddButton>

          <MovieCard title='O Exorcista'>
            <Star number={3} />

            <TextTruncated
              text="Uma atriz vai gradativamente tomando consciência de que a sua filha de doze anos está tendo um comportamento completamente assustador. Deste modo, ela pede ajuda a um padre, que também é um psiquiatra, e este chega a conclusão de que a garota está possuída pelo demônio. Ele solicita então a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta terrível possessão."
              maxLength={300}
            />

            <Tag title='Terror' />
            <Tag title='Suspense' />
            <Tag title='Sobrenatural' />
          </MovieCard>

          <MovieCard title='Batman: O Cavaleiro das Trevas'>
            <Star number={4} />

            <TextTruncated
              text="Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em um verdadeiro caos."
              maxLength={300}
            />

            <Tag title='Super-heróis' />
            <Tag title='Ação' />
            <Tag title='Crimes' />
          </MovieCard>

          <MovieCard title='Deadpool e Wolverine'>
            <Star number={5} />

            <TextTruncated
              text="Deadpool & Wolverine reúne o icônico mercenário tagarela Wade Wilson (Ryan Reynolds) e o poderoso mutante Wolverine (Hugh Jackman) em uma aventura explosiva, escrita e produzida pelos mesmos talentos por trás de Deadpool (2016) e Deadpool 2 (2018). Wade Wilson desfruta de um momento de aparente calma ao lado de Vanessa (Morena Baccarin) e seus amigos e, em contra partida, Wolverine se recupera de seus ferimentos. Um têm os seus caminhos cruzados com o outro, dando início a uma improvável aliança. Juntos, eles enfrentam um inimigo formidável em comum, desencadeando uma jornada repleta de ação, humor e reviravoltas surpreendentes. Deadpool & Wolverine promete ser uma aventura épica, cheia de referências aos quadrinhos e momentos de pura adrenalina, proporcionando aos fãs uma experiência única e inesquecível no universo dos super-heróis."
              maxLength={300}
            />

            <Tag title='Super-heróis' />
            <Tag title='Ação' />
            <Tag title='Comédia' />
          </MovieCard>
        </div>

      </main>
    </Container>
  );
}