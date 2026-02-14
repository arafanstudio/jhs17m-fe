import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Akademik from "./pages/Akademik";
import Ekstrakurikuler from "./pages/Ekstrakurikuler";
import Fasilitas from "./pages/Fasilitas";
import Elearning from "./pages/Elearning";
import Perpustakaan from "./pages/Perpustakaan";
import AdminLogin from "./pages/AdminLogin";
import ArticleCreation from "./pages/ArticleCreation";
import ArticleDetail from "./pages/ArticleDetail";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/profil"} component={Profil} />
      <Route path={"/akademik"} component={Akademik} />
      <Route path={"/ekstrakurikuler"} component={Ekstrakurikuler} />
      <Route path={"/fasilitas"} component={Fasilitas} />
      <Route path={"/elearning"} component={Elearning} />
      <Route path={"/perpustakaan"} component={Perpustakaan} />
      <Route path={"/admin/login"} component={AdminLogin} />
      <Route path={"/admin/create-article"} component={ArticleCreation} />
      <Route path={"/article/:id"} component={ArticleDetail} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
