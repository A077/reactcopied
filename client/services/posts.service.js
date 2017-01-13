export const ROOT_URL = 'http://localhost:4001/api';

class Service {
  getMessage = () => `${ROOT_URL}/users`
};

export const PostsService = new Service();
