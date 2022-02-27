/*
Function submitData takes:
users name (string)
users email (string)
*/
function submitData(userName, userEmail) {
  // Assemble data from form submission
  const formData = {
    name: userName,
    email: userEmail,
  };

  /*
  Create the configurationObject that
  will be passed in to the fetch
  */
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return (
    fetch("http://localhost:3000/users", configurationObject)
      .then(res => res.json())
      // Add object ID to DOM
      .then(obj => {
        document.querySelector("body").innerHTML = obj.id;
      })
      .catch(function (error) {
        document.querySelector("body").innerHTML = error.message;
      })
  );
}
