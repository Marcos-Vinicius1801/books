import { BookList } from "../src/components/BookList/BookList";
import { Clock } from "../src/components/Clock/index";
import { BookCase } from "../src/components/BookCase/BookCase";
import { SortDashboard } from "../src/components/SortDashboard/index";



import {ComponentWrapper, Container } from './global';
import { GlobalStyle } from './global'

export default function App() {
  /*const count = useSelector((state) => state);
  const dispatch = useDispatch(count);*/
  return (
    <div className="App">
      <Container>
            <ComponentWrapper>
              <Clock />
              <BookCase />
              <BookList />
            </ComponentWrapper>
            <SortDashboard />
      </Container> 
      <GlobalStyle/>
    </div>
  );
}
