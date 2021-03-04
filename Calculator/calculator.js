
/* when input button press --> buttons :
 * 0-9,*,/,-,+
 */
function inputAnswer(id)
{
    
   document.getElementById("res").value +=id;

}

/* when button clear press --> C */

let clear = document.getElementById("clear");
clear.addEventListener("click",clearTheScreen);

function clearTheScreen()
{
    document.getElementById("res").value="";
}

/* when button equal press --> = */
let res = document.getElementById("equal");
res.addEventListener("click",CalcRes);

function CalcRes()
{
    /* if the user dont enter number and press on "=" */
    if(document.getElementById("res").value == "")
    {
        window.alert("please enter numbers");
    }
    else // the user entered number and press "="
    {
        let input=document.getElementById("res").value;
        let result = eval(input);
        document.getElementById("res").value=result;
    }
}