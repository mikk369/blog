const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const db = require('./../db/database');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const results = await db.promise().query(`SELECT * FROM USERS`);
  res.status(200).send(results[0]);
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((userFound) => {
      if (!userFound) {
        return res.status(404).end();
      }
      return res.status(200).json(userFound);
    })
    .catch((err) => next(err));
};
exports.createUser = (req, res) => {
  const { email, password, passwordConfirm } = req.body;
  if (email && password && passwordConfirm) {
    try {
      db.promise().query(
        `INSERT INTO USERS VALUES("${email}","${password}","${passwordConfirm}")`
      );
      res.status(201).send({ msg: 'Created User' });
    } catch (err) {
      console.log(err);
    }
  }
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
