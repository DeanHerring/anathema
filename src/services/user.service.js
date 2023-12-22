import { UserRepository } from '../repositories/user.repository.js';

const getUser = async (userID) => {
  console.log('UserID:', userID);

  try {
    if (!userID) {
      throw new Error('User ID is not defined.');
    }

    const data = await UserRepository.getUser(parseInt(userID));

    if (!data.length) {
      throw new Error('This user has no active wallets.');
    }

    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e.message };
  }
};

export const UserService = {
  getUser,
};
