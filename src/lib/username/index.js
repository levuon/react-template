

function Username() {
  if ( ! ( this instanceof Username ) ) {
    return new Username();
  }

  this.validation = false;
  this.hasUsernameSite = false;
}


Username.prototype.validate = function ( username ) {

  if ( username !== user.get().username ) {

  }
};