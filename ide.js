
let editor;
 
 

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}

function changeLanguage() {

    let language = $("#languages").val();

    if(language == 'c' || language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'php')editor.session.setMode("ace/mode/php");
    else if(language == 'python')editor.session.setMode("ace/mode/python");
    else if(language == 'node')editor.session.setMode("ace/mode/javascript");
}

function executeCode() {
   
    
   
    
    var data = JSON.stringify({
               "code":editor.getSession().getValue(),
               "language":$("#languages").val(),
               "input":document.getElementById("input").value
               });
    
    var config = {
      method: 'post',
      url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data,
      // "proxy": "https://cat-fact.herokuapp.com/"
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  
}