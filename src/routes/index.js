import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/error/404': Error404
};

window.addEventListener('hashchange', () => {
    window.location.reload();
});

window.addEventListener('load', () => {
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
});

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    header.innerHTML = Header();

    let hash = getHash();
    let route = resolveRoutes(hash);
    let render = routes[route];
    
    content.innerHTML = await render();
};

export default router;
