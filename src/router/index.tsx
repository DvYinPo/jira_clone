import { Routes, Route } from 'react-router-dom';
import Home from '@/page/Home';
import About from '../page/About';
import Kanban from '../page/Kanban';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="kanban" element={<Kanban />} />
        <Route path="about" element={<About />} />
      </Route>
      {/* <Route path="/about" element={<About />} />
      <Route path="/kanban" element={<Kanban />} /> */}
    </Routes>
  );
}
