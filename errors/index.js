module.exports = {
  badRequest: function(msg) {
    var err = new Error(msg);
    err.status = 400;
    return err;
  },
  notFound: function(msg) {
    var err = new Error(msg);
    err.status = 404;
    return err;
  }
}