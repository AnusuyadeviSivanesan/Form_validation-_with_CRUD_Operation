

// Firstname + last name 
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const fullName = document.getElementById('fullname');
function UpdateFunction() {
  fullName.value = `${firstName.value} ${lastName.value}`;
}

firstName.addEventListener('input', UpdateFunction);
lastName.addEventListener('input', UpdateFunction);

console.log(document.querySelectorAll('input[required]'));

document.querySelectorAll('input[required]').forEach(func => {
  func.addEventListener('blur', () => {
    const error = document.getElementById(func.id + 'Error');
    if (!func.value) {
      error.textContent = '*Field not Empty';
    } 
  });

});


document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
})

function validateForm() {
  const emailInput = document.getElementById('emailInput').value;
  const MobileNumber = document.getElementById('mobileNum').value;
  const firstName = document.getElementById('firstname').value;
  const DateValue = document.getElementById('dob').value;

  const emailInputError = document.getElementById('emailInputError');
  const mobileNumError = document.getElementById('mobileNumError');
  const firstnameError = document.getElementById('firstnameError');
  const dobError = document.getElementById('dobError');

  emailInputError.textContent = "";
  mobileNumError.textContent = "";
  firstnameError.textContent = "";
  dobError.textContent = "";

  let isValidForm = true;
  let dob = new Date(DateValue);
  let today = new Date();

  if (!emailInput.includes('@') || !emailInput.includes('.')) {
    emailInputError.textContent = "Please enter valid Email Id"
    return false;
  }

  if (MobileNumber.length !== 10) {
    mobileNumError.textContent = "Please enter valid Phone number"
    return false;
  }

  if (firstName.includes(" ") || firstName.length <= 4) {
    firstnameError.textContent = "Name should not contain space"
    return false;
  }

  if (dob > today) {
    dobError.textContent = "Please Enter Valid date"
    return false;
  }

  if (isValidForm) {
   alert('Your Form Submitted Successfully')
   datatable()
    document.getElementById('no_record').style.display="none"
    return true;
  }
  else {
    return false;
  }
}

function resetErrors() {
  document.getElementById('emailInputError').textContent = "";
  document.getElementById('mobileNumError').textContent = "";
  document.getElementById('firstnameError').textContent = "";
  document.getElementById('dobError').textContent = "";
}


// let count = 1;

function datatable() {
  const emailInput = document.getElementById('emailInput').value;
  const mobileNum = document.getElementById('mobileNum').value;
  const fullname = document.getElementById('fullname').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const tablebody = document.getElementById('tablebody');
  const tablerow = document.createElement('tr');

  tablerow.innerHTML = `
    <td>${fullname}</td>
    <td>${emailInput}</td>
    <td>${mobileNum}</td>
    <td>${dob}</td>
    <td>${gender}</td>
    <td id="edit" style="background-color: green;"><button class="edit" style="border:none; background-color: green; color:white;">Edit</button></td>
    <td id="delete" style="background-color: red;"><button class="delete" style="border:none; background-color: red; color:white; ">Delete</button></td>
  `;

  tablebody.appendChild(tablerow);

  //Deleting
    tablerow.querySelector('.delete').addEventListener('click', function () 
    // if (confirm('Are you sure you want to delete this record?')
       {
      // tablebody.remove(tablerow);
      tablebody.removeChild(tablerow);
    }
  ); 

 tablerow.querySelector('.edit').addEventListener('click', function() {
    document.getElementById('Update_btn').textContent='Edit';
    document.getElementById('emailInput').value = emailInput;
    document.getElementById('mobileNum').value = mobileNum;
    document.getElementById('firstname').value = fullname.split(' ')[0];
    document.getElementById('lastname').value = fullname.split(' ')[1] ;
    document.getElementById('dob').value = dob;
    document.querySelector(`input[name="gender"][value="${gender}"]`);
    tablebody.removeChild(tablerow);
  });

document.getElementById('Update_btn').textContent='Register';

}



