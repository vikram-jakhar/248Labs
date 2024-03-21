

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Herosec from './components/Herosec';
import GamingLavel from './components/GamingLavel';
import Companions from './components/Companions';
import Licensable from './components/Licensable';
import Expertise from './components/Expertise';
import Keepup from './components/Keepup';
import Footer from './components/Footer';
import DOERS from './components/DOERS';
import Roadmap from './components/Roadmap';
import Email from './components/Email';
import Twitchsec from './components/TwitchSec';
import Loder from './components/Loder';
import BacktoTop from './components/BacktoTop';

function App() {
  return (
    <div>
      <Loder />
      <Herosec />
      <Twitchsec />
      <DOERS />
      <GamingLavel />
      <Companions />
      <Licensable />
      <Expertise />
      <Keepup />
      <Roadmap />
      <Email />
      <Footer />
      <BacktoTop />
    </div>
  );
}

export default App;
