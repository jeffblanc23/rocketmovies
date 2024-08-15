import { Container, Logo, Search, Profile  } from './styles';

import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <Logo>
                <h1>RocketMovies</h1>
            </Logo>

            <Search>
                <Input placeholder='Pesquisar pelo título'/>
            </Search>


            <Profile to="/profile">
                <div>
                    <strong>Jeffrey Blanc</strong>
                    <span>sair</span>
                </div>

                <img
                    src="https://github.com/jeffblanc23.png"
                    alt="Foto do usuário"
                />
            </Profile>
        </Container>
    )
}