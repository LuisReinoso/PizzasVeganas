/**
 * DetallePizza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    precio: {
      type: 'float',
      required: true
    },
    idPizza: {
      model: 'Pizza',
      required: true
    },
    idIngrediente: {
      model: 'Ingrediente',
      required: true
    }
  }
};
