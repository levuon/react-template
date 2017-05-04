var EventEmitter = require( 'events/' ).EventEmitter,
 assign = require( 'lodash/assign' );

module.exports = function ( prototype ) {
  assign( prototype, EventEmitter.prototype );
  prototype.emitChange = function () {
    this.emit( 'change' );
  };
  prototype.off = prototype.removeListener;
};
