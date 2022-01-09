const express = require('express');
const multer  = require('multer');
const router = express.Router();
const upload = multer();
const { createUser, getAllUsers, deleteUserById } = require('../model/users');


/* GET home page. */
router.get('/', async (req, res, next) => {
  const userGet = await getAllUsers();
  console.log('userGet >>>', userGet)

  const usersList = userGet.map(({id, name, surname, number, mail, text}) => 
  `<table>
    <tr>
      <td>
        <div class="user">
          <div class="name">
           <a href="http://127.0.0.1:3000/users/${id}">${name} ${surname}</a><br>\n
          </div> 
          <div class="mail">
            ${mail}    ${number}<br>\n
          </div>
          <div>
            ${text}
          </div>
        </div>
      </td>
      <td>
        <a href="delete/${id}"><div class="delete"></div></a>
      </td>
    </tr>
  </table>`).join('');

  console.log('usersList >>>', usersList)

  res.render('index', { usersList: usersList });
});

router.get('/delete/:id', async (req, res, next) => {
  const user = await deleteUserById(req.params.id);
  res.redirect(`/`);
});

router.post('/', upload.none(), async (req, res, next) => {
  await createUser(req.body)
  res.send(`hello ${req.body.name}`)
});

module.exports = router;
