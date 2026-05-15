import { GlobalStyle } from './GlobalStyle';
import { PageBoard } from './components/PageBoard';
import eventsData from "../upcoming-events.json";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageBoard events={eventsData} />
    </>
  );
}

export default App;