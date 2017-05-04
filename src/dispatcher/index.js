var Dispatcher = require( 'flux' ).Dispatcher;

var AppDispatcher = Object.assign( new Dispatcher(), {

  // 区分是否是UI action 还是 server端action
  handleViewAction: function ( action ) {
    this.dispatch( {
      source: 'VIEW_ACTION',
      action: action
    } );
  },

  handleServerAction: function ( action ) {
    this.dispatch( {
      source: 'SERVER_ACTION',
      action: action
    } );
  }
} );

module.exports = AppDispatcher;
