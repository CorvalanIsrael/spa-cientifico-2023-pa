const resolveRoutes = (route) => {
  if (route === '#/') return '/';
  if (route === '/error/404') return '/error/404';
  return '/:id'
};

export default resolveRoutes;