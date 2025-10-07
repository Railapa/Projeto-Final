import { Routes } from '@angular/router';

// Importe os componentes com os nomes de CLASSE corretos
import { Home } from './pages/home/home';
import { HowToHelp } from './pages/how-to-help/how-to-help';
import { HappyEndings } from './pages/happy-endings/happy-endings';
import { AdoptionGuide } from './pages/adoption-guide/adoption-guide';
import { AboutUs } from './pages/about-us/about-us';
import { Auth } from './pages/auth/auth';
import { AnimalDetail } from './pages/animal-detail/animal-detail';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
    // Use os nomes de CLASSE corretos aqui também
    { path: '', component: Home },
    { path: 'ajudar', component: HowToHelp },
    { path: 'finais-felizes', component: HappyEndings },
    { path: 'guia-adocao', component: AdoptionGuide },
    { path: 'sobre-nos', component: AboutUs },
    { path: 'login', component: Auth },
    { path: 'privacidade', component: PrivacyPolicy },
    { path: 'animal/:id', component: AnimalDetail },
    { path: '**', redirectTo: '' }
];