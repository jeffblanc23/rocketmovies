import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

export function ButtonBack({ title, linkto, ...rest }) {
    return (
        <Container>
            <a href={linkto}>
                <FiArrowLeft />
                <span>{title}</span>
            </a>
        </Container>
    );
}