const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();

app.use(express.json());

app.post(
  '/form',
  [
    check('name').isLength({ min: 3 }),
    check('email')
      .custom((value) => {
        if (value === 'omar@mail.com') {
          throw new Error('This email is not allowed');
        }
        return true;
      })
      .isEmail(),
    check('age').isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, email, age } = req.body;

    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Age: ' + age);
    res.send('success');
  }
);

app.listen(5000, () => console.log('Server running'));
