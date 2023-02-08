import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { NewsDetail } from '../pages/NewsDetail'
import { NotFound } from '../pages/NotFound/NotFound'
import { Profile } from '../pages/Profile/Profile'

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/newDetails" element={<NewsDetail></NewsDetail>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
