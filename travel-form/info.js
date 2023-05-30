function submitForm() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let location = document.getElementById("location").value;
  let foodRestrict = [];
  let checkboxes = document.querySelectorAll(
    'input[name="foodRestrict"]:checked'
  );

  for (let i = 0; i < checkboxes.length; i++) {
    foodRestrict.push(checkboxes[i].value);
  }
  alert(
    "First Name:" +
      firstName +
      "\nLast Name:" +
      lastName +
      "\nAge:" +
      age +
      "\nGender:" +
      gender +
      "\nLocation:" +
      location +
      "\nFood Restrictions:" +
      foodRestrict
  );
}
