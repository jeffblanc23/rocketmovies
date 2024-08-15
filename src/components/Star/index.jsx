import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

import { Container } from './styles';

export function Star({ number }) {

    return (
        <Container>
            {Array.from({ length: 5 }, (_, index) => {
                if (index < number) {
                    return <IoIosStar key={index} />;
                } else {
                    return <IoIosStarOutline key={index} />;
                }
            })}
        </Container>
    );


}