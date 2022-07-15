import { NavBar } from '../../components/NavBar';
import { Banner } from '../../components/Banner';
import { Skills } from '../../components/Skills';
import { Projects } from '../../components/Projects';
import { Development } from '../../components/Development';

const HomePage = () => {
    return (
        <div className="app">
            <NavBar />
            <Banner />
            <Skills />
            <Development />
            <Projects />
        </div>
    )
}

export default HomePage;