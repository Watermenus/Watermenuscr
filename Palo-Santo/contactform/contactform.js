
function sendmail(params){
	let nombreCliente = document.getElementById("name").value;
	let emailCliente = document.getElementById("email").value;
	let phoneCliente = document.getElementById("phone").value;
	let peopleCliente = document.getElementById("people").value;
	let messageCliente = document.getElementById("message").value;
	var messa = "nombreCliente: " + nombreCliente + "\n Email Cliente: "+ emailCliente + "\n TelefonoCliente: " + phoneCliente + "\n Mensaje: " + messageCliente;
	var tempParams={
		from_name:nombreCliente,
		to_name:"jeaustin",
		message: messa,
	};
	emailjs.send('service_udrnx9s', 'template_5hpzm4y',tempParams)
	.then(function(res){
		console.log("success", res.status);
	})

}

