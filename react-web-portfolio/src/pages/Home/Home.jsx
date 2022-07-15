import { NavBar } from '../../components/NavBar';
import { Banner } from '../../components/Banner';
import { Skills } from '../../components/Skills';

const HomePage = () => {
    return (
        <div className="app">
            <NavBar />
            <Banner />
            <Skills />
        </div>
    )
}

export default HomePage;