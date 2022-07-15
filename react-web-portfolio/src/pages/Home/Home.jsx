import { NavBar } from '../../components/NavBar';
import { Banner } from '../../components/Banner';
import { Skills } from '../../components/Skills';
import { Projects } from '../../components/Projects';

const HomePage = () => {
    return (
        <div className="app">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
        </div>
    )
}

export default HomePage;