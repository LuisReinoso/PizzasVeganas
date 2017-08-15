/**
 * PizzaController
 *
 * @description :: Server-side logic for managing Ingredientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  generarPizza: function (req, res) {
    var parametros = req.allParams();
    var costo = 0;

    Usuario.findOne({
      usuario: parametros.correo
    }).exec(function (error, usuarioEncontrado) {
      if (error) {
        console.log("error");
      } else {
        console.log("usuarioEncontrado");
        console.log(parametros);
        console.log(parametros.length);

        for (var i in parametros) {
          console.log(parametros[i]);
          switch (parametros[i]) {
            case 'cebollas':
              costo = costo + 10;
              break;
            case 'tomate':
              costo = costo + 15;
              break;
            case 'pimiento':
              costo = costo + 20;
              break;
            case 'champiñones':
              costo = costo + 25;
              break;
            default:
              costo = costo + 0;
              break;
          }
        }

        var nuevaPizza = {
          costo: costo,
          //idUsuario: usuarioEncontrado.id
        }

        Pizza.create(nuevaPizza).exec(function (error, nuevaPizza) {
          if (error) {
    				console.log("Error"+error);
    			} else {
    				console.log("Pizza creada");
            return res.view('detalle', {
              costo: nuevaPizza.costo
            })
    			}
        })
      }
    })
  }
};
