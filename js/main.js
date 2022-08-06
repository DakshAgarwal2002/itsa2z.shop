var a=1;
function show_sigin()
{
    if(a==1)
    {
        document.getElementById("signin-page").style.display="inline";
        document.getElementById("signin-page").style.opacity="1";
        document.getElementById("full-body").style.opacity=".5";
        return a=0;
    }
    else{
        document.getElementById("signin-page").style.display="none";
        document.getElementById("full-body").style.opacity="1";
        return a=1;
    }
}