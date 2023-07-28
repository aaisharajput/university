//greatest number
function check(){
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var c=parseInt(document.getElementById("c").value);
    var r=document.getElementById("result");
    var result=(a>b&&a>c?a:b>a&&b>c?b:c);
    r.value=result;
    
}

//finding unique words
function unique_words(input_id,choice){
    if(choice=='0') 
        var data = document.getElementById('txt').value;
    else
        var data = choice;
   var result = document.getElementById(input_id);
   var temp = data;
   var words = new Array();
   words = temp.split(" ");
   var uniqueWords = new Array();
   var count = new Array();
   var k=-1,freq_word,longest_word;
   var max_freq=0,longest_count=0,j;

   for (var i = 0; i < words.length; i++) {
     var f = 0;
     for (j = 0; j < uniqueWords.length; j++) {
       if (words[i] == uniqueWords[j]) {
         count[j] = count[j] + 1;
         //finding the max frequency of unique word
         if(count[j]>max_freq){
            freq_word=uniqueWords[j];
            max_freq=count[j];
         }

          f = 1;
          break;
        }
      }
      if (f == 0) {
         k++;
        count[k] = 1;
        uniqueWords[k] = words[i];

        //finding the longest word
        if(uniqueWords[j].length>longest_count){
            longest_count=uniqueWords[j].length;
            longest_word=uniqueWords[j];
         }
      }
                             
    }

    result.append("Word having highest frequency : " + freq_word + " (" + max_freq+")" + "\n");
    result.append("Longest unique word : " + longest_word + " (" + longest_count+")" + "\n\n");

    if(choice=='0'){
        for(var i=0;i<uniqueWords.length;i++){
            result.append("count of " + uniqueWords[i] + " : " + count[i]+"\n");
        }
    }

   
  }


  //replacing the words
function replace_word(){
    var data = document.getElementById('txt').value;
    var word_rep=document.getElementById('replace').value;
    var result=document.getElementById('result2');
    data=data.replace(/ a /gi," "+word_rep+" ");
    result.append("New String after replaceing: \n" + data +"\n\n");
    unique_words('result2',data);
}


//finding the words containing given character
function process(){
    var str = document.getElementById("input_txt").value;
    var result=document.getElementById('result3');
    var result1=document.getElementById('result4');
    var result2=document.getElementById('result5');
    var words = str.split(" ");
    var pattern1 = /[aprs]/g;
    var pattern2 = /\b[apros]/gi;

    result.append("Words containing 'a','p','r' or 's': \n-->");
    for (var i in words){
        if(words[i].match(pattern1)){
            result.append(" | "+words[i]);
        }
    }

    result1.append("Words beginning with 'a','p','r','o' or 's' \n-->");
    for (var i in words){
        if(words[i].match(pattern2)){
            result1.append(" | "+words[i]);
        }
    }

    result2.append("Words containing 'a','p','r' or 's' replace with 123CSDEPARTMENT: \n");
    for (var i in words){
        if(words[i].match(pattern1)){
            words[i]="123CSDEPARTMENT";
        }

        result2.append(words[i]+" ");

    }

}


//Finding the age by dob
var roll_no=1;
const year = [];
const ages = [];
const age = [];
var young_age=100;
var rollNo_young=0;
var curr = new Date().getFullYear();
function dob(){

    if(roll_no<=10){
        year[roll_no] = parseInt(document.getElementById("st_dob").value);
        ages[roll_no] = curr - year[roll_no];
        age[roll_no]=ages[roll_no];
        if(ages[roll_no]<young_age){
            young_age=ages[roll_no];
            rollNo_young=roll_no;
        }
            
        roll_no++;
        document.getElementById("roll_no").value="Roll No: "+roll_no;
        document.getElementById("st_dob").value=" "; 
    }

    if(roll_no>10){
        
        var age_result=document.getElementById("age_result");
        document.getElementById("roll_no").value="10 Student entered";
        ages.sort();
        age_result.append("Roll no. of the youngest student: ",rollNo_young);
        age_result.append("\nAge of students in increase order: ",ages);
        document.getElementById("show").innerHTML='<h6 onclick="get_age(1)">Roll No.: 1</h6><h6 onclick="get_age(2)">Roll No.: 2</h6><h6 onclick="get_age(3)">Roll No.: 3</h6><h6 onclick="get_age(4)">Roll No.: 4</h6><h6 onclick="get_age(5)">Roll No.: 5</h6>';
        document.getElementById("show1").innerHTML='<h6 onclick="get_age(6)">Roll No.: 6</h6><h6 onclick="get_age(7)">Roll No.: 7</h6><h6 onclick="get_age(8)">Roll No.: 8</h6><h6 onclick="get_age(9)">Roll No.: 9</h6><h6 onclick="get_age(10)">Roll No.: 10</h6>';
    }
        
}

function get_age(roll){
    alert("Age of roll no. "+roll+" is: "+age[roll]);
}

//gmail form validation
function validate() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var mail = document.getElementById("mail");
    var pass = document.getElementById("pass");
    var cpass = document.getElementById("cpass");
    var e1 = document.getElementById("error1");
    var e2 = document.getElementById("error2");
    var e3 = document.getElementById("error3");
    var e4 = document.getElementById("error4");
    var e5 = document.getElementById("error5");
    var emptymsg = "*Field can't be empty";
    var nummsg = "*Field can't contain numbers";
    let num = /\d/;
  
    e1.innerHTML = "";
    e2.innerHTML = "";
    e3.innerHTML = "";
    e4.innerHTML = "";
    e5.innerHTML = "";
  
    // check if field is empty
    if (fname.value.length == 0) {
      e1.innerHTML = emptymsg;
      e1.style.color = "red";
    }
    if (lname.value.length == 0) {
      e2.innerHTML = emptymsg;
      e2.style.color = "red";
    }
    if (mail.value.length == 0) {
      e3.innerHTML = emptymsg;
      e3.style.color = "red";
    }
    if (pass.value.length == 0) {
      e4.innerHTML = emptymsg;
      e4.style.color = "red";
    }
    if (cpass.value.length == 0) {
      e5.innerHTML = emptymsg;
      e5.style.color = "red";
    }
  
    // check if name contains numbers
    if (fname.value.match(num)) e1.innerHTML = nummsg;
    if (lname.value.match(num)) e2.innerHTML = nummsg;
  
    // check if email is valid
    if (
      mail.value.match(/^\d+/) ||
      mail.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)
    ) {
      e3.innerHTML = "Invalid Email Address";
      e3.style.color = "red";
    }
  
    //check password
    if (pass.value.length < 8) {
      e4.innerHTML += "*Should have 8 or more characters";
      e4.style.color = "red";
    }
    if (!pass.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/)) {
      e4.innerHTML += "<br>*Should contain special symbols";
      e4.style.color = "red";
    }
    if (!pass.value.match(/\d/)) {
      e4.innerHTML += " <br>*Should contain number";
      e4.style.color = "red";
    }
  
    if (pass.value != cpass.value) {
      e5.innerHTML = "*Dosen't match password";
      e5.style.color = "red";
    }
  }