import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Form from './components/form/Form.jsx';


function App() {
  return (
    <>
    <Form/>
    <ToastContainer autoClose={3000}/>
    </>
  );
}

export default App;
