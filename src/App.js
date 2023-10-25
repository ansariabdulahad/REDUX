import 'bootstrap/dist/css/bootstrap.min.css';

import User from "./Component/User";
import storage from './Redux/storage';
import { Provider } from 'react-redux';

const App = () => {
  const design = (
    <>
      <Provider store={storage}>
        <User />
      </Provider>
    </>
  );

  return design;
}

export default App;