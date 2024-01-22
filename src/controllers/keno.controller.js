import { KenoService } from '../services/keno.service.js';

const createGame = async (req, res) => {
  const result = await KenoService.createGame(req.body);

  res.send(result);
};

export const KenoController = {
  createGame,
};
