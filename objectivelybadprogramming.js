var person = {
  name : 'Bashir',
  country : 'Azerbaijan',
  age : 32,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p> Hello. My name is ' + person.name + '</p>';
message += '<p> I live in ' + person.country+ '</p>';
person.name = 'derpityderp';
message += '<p> But I wish my name was really ' + person.name + '</p>';
print(message);