// import UserFriends from './components/UserFriends/UserFriends';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Countries from "./components/Countries/Countries";
import CountriesSearch from "./components/Countries/CountriesSearch";
import CountryDetails from "./components/Countries/CountryDetails";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDbItems from './components/MealDbItems/MealDbItems';
import NotFound from "./components/NotFound/NotFound";
import PostDetails from "./components/Posts/PostDetails";
import Posts from "./components/Posts/Posts";
import SingleUserFriendDetails from './components/UserFriends/SingleUserFriendDetails';
import UserFriends from './components/UserFriends/UserFriends';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/meals" element={<MealDbItems/>} />
        
        <Route path="/findcountry" element={ <CountriesSearch/> } />
        
        <Route path="/countries" element={ <Countries/> } />
        <Route path="/country/:countryName" element={ <CountryDetails/> } />
        
        <Route  path="/posts" element={<Posts/>}>
          <Route  path=":postId" element={ <PostDetails/> }></Route>
        </Route>
        
        <Route path="/bondhugon" element={<UserFriends/>} />
        <Route path="/bondhu/:bondhuId" element={<SingleUserFriendDetails/>} />
        
        <Route path="*" element={<NotFound/>} />
      </Routes>

      {/* 52-2 Create Simple Route and simple router setup */}
    </div>
  );
}

export default App;
