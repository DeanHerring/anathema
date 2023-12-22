import { UserService } from '../services/user.service.js';

const getUser = async (req, res) => {
  const result = await UserService.getUser(req.params.id);

  res.send(result);
};

export const UserController = {
  getUser,
};
