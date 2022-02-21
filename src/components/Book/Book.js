import { Container } from './styled';
export function Book({src, height, width}){
   
    return(
        <Container>
            <img src={src} height={height} width={width}/>
        </Container>
    );
}