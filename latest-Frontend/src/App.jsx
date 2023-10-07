
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ServicesScreen from './screens/ServicesScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import HomeScreen from "./screens/HomeScreen";
import MainLayout from "./components/common/MainLayout";
import NotFoundScreen from "./screens/NotFoundScreen";



export default function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path='/'>
          <Route index element={<MainLayout><HomeScreen /></MainLayout>} />
          <Route path='contact' element={<MainLayout><ContactScreen /></MainLayout>} />
          <Route path='about' element={<MainLayout><AboutScreen /></MainLayout>} />
          <Route path='services' element={<MainLayout><ServicesScreen /></MainLayout>} />
          <Route path='*' element={<NotFoundScreen />} />
        </Route>
      </Routes>


    </BrowserRouter >
  )
}