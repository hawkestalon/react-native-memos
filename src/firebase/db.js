import database from '@react-native-firebase/database';

/*
 Memo Model.
 memoText: String,
 memoTitle: String,
 id: string (firebase id for deletion) // this may not be necessary
*/
// user should just be an id value

const getAllUserMemos = async user => {
  // connect to db and return all user memos. as an array probably.
  const data = await database()
    .ref(user + '/memos')
    .once('value');
  console.log(data);
  return data;
};

const createMemo = async (user, {memoText, memoTitle}) => {
  // connect to db and push a memo for the user
};

const deleteMemo = async (user, memo) => {
  // delete memo;
};

export default {
  getAllUserMemos,
  createMemo,
  deleteMemo,
};