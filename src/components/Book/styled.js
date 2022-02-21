import  styled from 'styled-components';

const Container = styled.div`
    img{
        height: ${props => props.height};
        width: ${props => props.width};
    }
`