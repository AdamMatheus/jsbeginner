const loading = document.getElementById('loading');
const submitBtn = document.getElementById('submit');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

window.onload = () => {
	setTimeout(fillFormInput, 500);
};

const fillFormInput = () => {
	email.value = 'eve.holt@reqres.in';
	password.value = 'pistol';
	localStorage.setItem('email', EncryptStringAES(email.value));
	localStorage.setItem('password', EncryptStringAES(password.value));
};

submitBtn.addEventListener('click', (e) => {
	// e.preventDefault();
	// console.log("clicked");
	apidRegister();
});

const apidRegister = async () => {
	const bodyData = {
		email: email.value,
		password: password.value
	};
	showLoading();
	const response = await axios({
		url: 'https://regres.in/api/register',
		data: bodyData,
		method: 'post'
	});
};
