
import ItemListConatainer from '../containers/itemListContainer';
import NavBar from '../components/navBar';
import {BrowserRouter,Routes,Route,Link,} from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';



export default function Router (){
    return (
<BrowserRouter>
    <NavBar/>
      <Routes>
        {/* en el path se coloca la ruta a la q queremos ir */}
        {/* element,va el componente que quiero mostrar */}
        <Route path='/' element={<ItemListConatainer />} />
        <Route path='/category/:id' element={<ItemListConatainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      {/* aqui puede ir el footer */}
    </BrowserRouter>
  );
}