const clickMe = () => {
    alert("Thank you for clicking me.. Have a nice day!!");
  };
  const submitForm = () => {
    let formData = {
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val()
    };
    console.log("Form Data Submitted: ", formData);
  };
   
   
  $(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('#clickMeButton').click(() => clickMe());
    $('#formSubmit').click(() => submitForm());
    addCards(cardList);
  });
   
   
  
  