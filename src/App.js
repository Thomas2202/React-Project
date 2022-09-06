import './app.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import CartWidget from './components/CartWidget';

function App() {

  const categorias = ['Electronicos', 'Audio & Video',  'Clothing']

  return (
    <>
    <NavBar categories={categorias}/>
    <ItemListContainer greeting={'Hola bienvenidos a mi app.'}/>
    <CartWidget/>
    </>
  );
}

export default App;