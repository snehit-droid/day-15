var mform = document.getElementById('myform');
mform.addEventListener("submit", function(event)
{

    event.preventDefault();

    var FirstName = document.getElementById('fname').value;
    var LastName = document.getElementById('lname').value;
    var Address = document.getElementById('address').value;
    var PinCode = document.getElementById('pin').value;
    var gender = document.querySelector('input[type=radio]:checked').value; 

    var food = []; 
    var inputElements = document.getElementsByName('food');
    for(var i=0; i<inputElements.length; i++){
      if(inputElements[i].checked){
        food.push(inputElements[i].value);
      }
    }

    var State = document.getElementById('state').value;
    var Country = document.getElementById('country').value; 

    document.getElementById("fname").required = true;
    document.getElementById("lname").required = true;
    document.getElementById("address").required = true;
    document.getElementById("pin").required = true;
    document.getElementsByName('gender').required = true;
    document.getElementsByName('food').required = true;
    document.getElementById("state").required = true;
    document.getElementById("country").required = true;
    
        var trow = document.createElement("TR");

        var tdata_1 = document.createElement('TD');
        tdata_1.classList.add('td');
        tdata_1.innerHTML = FirstName;

        var tdata_2 = document.createElement('TD');
        tdata_2.classList.add('td');
        tdata_2.innerHTML = LastName;

        var tdata_3 = document.createElement('TD');
        tdata_3.classList.add('td');
        tdata_3.innerHTML = Address;

        var tdata_4 = document.createElement('TD');
        tdata_4.classList.add('td');
        tdata_4.innerHTML = PinCode;

        var tdata_5 = document.createElement('TD');
        tdata_5.classList.add('td');
        tdata_5.innerHTML = gender;

        var tdata_6 = document.createElement('TD');
        tdata_6.classList.add('td');
        tdata_6.innerHTML = food.join(", ");

        var tdata_7 = document.createElement('TD');
        tdata_7.classList.add('td');
        tdata_7.innerHTML = State;

        var tdata_8 = document.createElement('TD');
        tdata_8.classList.add('td');
        tdata_8.innerHTML = Country;

        trow.append(tdata_1, tdata_2, tdata_3, tdata_4, tdata_5, tdata_6, tdata_7, tdata_8);

        var send = document.getElementById("tb");
        send.appendChild(trow);

});