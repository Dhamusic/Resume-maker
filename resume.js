function resume(){ 
    var name=document.getElementById("name").value;
    localStorage.setItem("resname",name);

    var dob=document.getElementById("dob").value;
    localStorage.setItem("dob1",dob);

    var mailid=document.getElementById("mailid").value;
    localStorage.setItem("resmailid",mailid);

    var mobnum=document.getElementById("mobnum").value;
    localStorage.setItem("resmobnum",mobnum);

    var branch=document.getElementById("branch").value;
    localStorage.setItem("resbranch",branch);

}

