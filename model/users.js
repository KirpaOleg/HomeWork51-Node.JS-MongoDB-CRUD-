const User = require('./schemas/users');
const mongoose = require('mongoose');

const createUser = async (obj) => {
  const user = new User({
    name: obj.name,
    surname: obj.surname,
    number: obj.number,
    mail: obj.mail,
    text: obj.text,
  });
  try {
    await user.save();
  } catch (err) {
    console.log('Error >>>', err);
  }
}

const getUserById = async (id) => {
  const user = await User.find({_id: id});
}

const getAllUsers = async () => {
  const user = await User.find({});
  return user; 
}
// getAllUsers()

const updateUserById = async(data) => {
  await User.findOneAndUpdate(
    {_id: data.id},
    {
      name: data.name,
      surname: data.surname,
      number: data.number,
      mail: data.mail,
      text: data.text,
    }
  )
}

const deleteUserById = async(id) => {
  await User.deleteOne({_id: id});
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
};