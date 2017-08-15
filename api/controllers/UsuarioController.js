/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	crearUsuario: function (req, res) {
		var parametros = req.allParams();

		var nuevoUsuario = {
			nombres: parametros.nombres,
			apellidos: parametros.apellidos,
			correo: parametros.correo,
			password: parametros.password
		}

		Usuario.create(nuevoUsuario).exec(function error, usuarioCreado) {
			if (error) {
				console.log("Error"+error);
			} else {
				console.log("Usuario creado");
			}
		})
	}
};
