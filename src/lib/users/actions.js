const Dispatcher = require( 'dispatcher' ),
 UsersStore = require( 'lib/users/store' );


const UsersActions = {
  fetchUsers: () => {
    Dispatcher.handleServerAction( {
      type: 'RECEIVE_USERS',
      data: {
        users: [ { id: 1, name: 'lev' }, { id: 2, name: 'liu' }, { id: 3, name: 'chen' }, { id: 4, name: 'huan' } ],
        total: 20
      }
    } );
  }
}


module.exports = UsersActions;
