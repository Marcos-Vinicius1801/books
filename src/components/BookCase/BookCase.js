import { Container } from './styled'
import bookCase from '../../assets/Bookcase_edt.svg'
export function BookCase(){
    return(
        <Container>
            <img src={bookCase} alt="Book case"/>
        </Container>
    )
}