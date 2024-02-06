    // login event healer.
    const buttonArea = document.getElementById("loginBtn");
        buttonArea.addEventListener("click", function(){
            const fullArea = document.getElementById("login-area");
            fullArea.style.display = "none";
    const nextItem = document.getElementById("Next-Area");
         nextItem.style.display = "block";
        })
    // Deposit handler.
    const  deposit = document.getElementById("addDeposit");
        deposit.addEventListener("click", function(){
            const amountA =document.getElementById("addAmount").value;
            const amountNumber = parseFloat(amountA);
            updateText("current",amountNumber)
            updateText("total", amountNumber);
           

            document.getElementById("addAmount").value = "";
            
        })
        function updateText(id, amountNumber){
            const total = document.getElementById(id).innerText;
            const totalBalance = parseFloat(total);
            const mainBalance = amountNumber + totalBalance;
            document.getElementById(id).innerText = mainBalance ;
        }

        //withdraw handler
    const addWithdraw = document.getElementById("addWithdraw");
            addWithdraw.addEventListener("click", function(){
               const disNumber = document.getElementById("disAmount").value;
                const disNumberBalance = parseFloat(disNumber);
               updateText("current1", disNumberBalance);
               updateText("total", -1* disNumberBalance);
                document.getElementById("disAmount").value = "";
            })
            
        function getInputNumber(id){
            const disAmount = document.getElementById(id).value;
            const disBalance = parseFloat(disAmount);
            return disNumber;
        }

    