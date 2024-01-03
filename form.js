function calc(){
    let no=0;
    let yes =0;
    let a1=document.getElementById("a1");
    let a2=document.getElementById("a2");
    let a3=document.getElementById("a3");
    let b1=document.getElementById("b1");
    let b2=document.getElementById("b2");
    let b3=document.getElementById("b3");
    if(a1.checked==true)
    {
        yes++;
    }
    if(a2.checked==true)
    {
        yes++;
    }
    if(a3.checked==true)
    {
        yes++
    }
    if(b1.checked==true)
    {
        no++;
    }
    if(b2.checked==true)
    {
    no++
    }
    if(b3.checked==true)
    {
        no++;
    }
    alert("Thank you for your feedback! total: "+ no + "no" + yes +"yes");
}