var Dispatcher = require( 'dispatcher' ),
 emitter = require( 'lib/mixins/emitter' );

var _fetchingUsers = {};

var UsersStore = {
  getUsers: function () {
    return _fetchingUsers;
  },

  // emit 数据变动后，触发change事件，一般定义在组件更改state状态
  emitChange: function () {
    this.emit( 'change' );
  }
};

function updateUsers ( users, total ) {
  _fetchingUsers.users = users;
  _fetchingUsers.total = total;
}

UsersStore.dispatchToken = Dispatcher.register( function ( payload ) {
  var action = payload.action,
   namespace;

  switch ( action.type ) {
    case 'RECEIVE_USERS':
      if ( !action.error ) {
        updateUsers( action.data.users, action.data.total );
        UsersStore.emitChange();
      }
      break;

  }
} );

emitter( UsersStore );

module.exports = UsersStore;
