function decryptText()
{
	var key = document.getElementById('encryptionKey').value;
	
	var encrypted = document.getElementById('encryptedText').value;
	var decrypted = CryptoJS.AES.decrypt(encrypted, key);
		
	document.getElementById("decryptedText").value = decrypted.toString(CryptoJS.enc.Utf8);
		
	if (encrypted == "U2FsdGVkX1//Q2tOi2ordaNuwNl6+u7+/dRyrYrqwKdK3+LntYtR+g9iX/m/hOE5+zrTJS98Fw10cxPadiu44Q==")
	{
		setTimeout(changePicture(), "10000");
	}
}
function encryptText()
{
	var key = document.getElementById('encryptionKey').value;
	
	var message = document.getElementById('decryptedText').value;
	var encrypted = CryptoJS.AES.encrypt(message, key);
		
	document.getElementById("encryptedText").value = encrypted;
}
function clearFields()
{
	document.getElementById("decryptedText").value = "";
	document.getElementById("encryptedText").value = "";
	document.getElementById("image").src = "images/Fire Truck On MIT.jpg";
}
function changePicture()
{
	document.getElementById("image").src = "images/CPHS.jpg";
}