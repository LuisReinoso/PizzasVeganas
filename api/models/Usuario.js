/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nombres: {
        type: 'string',
        required: true
      },
      apellidos: {
        type: 'string',
        required: true
      },
      correo: {
        type: 'string',
        email: true,
        unique: true
      },
      password: {
        type: 'string'
      },
      pizzas: {
        collection: 'Pizza',
        via: 'idUsuario'
      }
  }
};
