import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ServicesScreen from './screens/HomeScreens/ServicesScreen';
import AboutScreen from './screens/HomeScreens/AboutScreen';
import ContactScreen from './screens/HomeScreens/ContactScreen';
import HomeScreen from "./screens/HomeScreens/HomeScreen";
import MainLayout from "./components/common/MainLayout";
import NotFoundScreen from "./screens/HomeScreens/NotFoundScreen";



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