import { Container, BackHome } from './styles';

import { Header } from '../../components/Header';
import { ButtonBack } from '../../components/ButtonBack';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { MovieItem } from '../../components/MovieItem';

export function MovieCreate() {
    return (
        <Container>
            <Header />

            <main>
                <BackHome to='/'>
                    <ButtonBack title='Voltar' />
                </BackHome>
                <h1>Novo filme</h1>

                <div className='input-header'>
                    <Input placeholder='Título' />
                    <Input placeholder='Sua nota (de 0 a 5)' />
                </div>

                <Textarea placeholder='Observações' />

                <Section title='Marcadores'>
                    <div className="input-marks">
                        <MovieItem value='Terror' />
                        <MovieItem value='Ficção científica' />
                        <MovieItem isNew placeholder='Novo marcador' />
                    </div>

                </Section>

                <div className="button-footer">
                    <Button title='Excluir filme' />
                    <Button title='Salvar alterações' />
                </div>
            </main>
        </Container>
    );
}