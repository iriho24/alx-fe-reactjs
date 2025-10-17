import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useParams } from 'react-router-dom';

const RecipeDetailWrapper = () => {
  const { id } = useParams();
  return <RecipeDetail recipeId={Number(id)} />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetailWrapper />} />
        <Route path="/favorites" element={<FavoritesList />} /> {/* ✅ */}
        <Route path="/recommendations" element={<RecommendationsList />} /> {/* ✅ */}
      </Routes>
    </Router>
  );
}

export default App;
