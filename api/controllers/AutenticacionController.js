/**
 * AutenticacionController
 *
 * @description :: Server-side logic for managing autenticacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	autenticacion: function (req, res) {
		var parametros = req.allParams();

		Usuario.findOne({
			correo: parametros.correo
		}).exec(function (error, usuarioEncontrado) {
			if (error) {
				console.log('error');
			} else {
				if (usuarioEncontrado.password == parametros.password) {
					console.log('autenticado');
				}
			}
		})
	}
};
