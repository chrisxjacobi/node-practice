var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Chris'
  };

  setTimeout(() => {
    callback(user);
  }, 2000);
};

getUser(31, (cb) => {
  console.log(cb);
});
