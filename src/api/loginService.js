const LoginService = async (props) => {
  var myHeaders = new Headers();
  myHeaders.append("Referer", "https://test.adcuratio.net/");

  var formdata = new FormData();
  formdata.append("username", "admin_lambo@adcuratio.com");
  formdata.append("password", "password123");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  };

  let response = await fetch(
    "https://test-api.adcuratio.net/login/",
    requestOptions
  ).then((response) => response.json());
  // const jsonResponse = await response.text();

  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.log("error", error));
  // return response.json();
  return response;
};

export default LoginService;
