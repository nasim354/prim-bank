    // login event healer.
    const buttonArea = document.getElementById("loginBtn");
        buttonArea.addEventListener("click", function(){
            const fullArea = document.getElementById("login-area");
            fullArea.style.display = "none";
    const nextItem = document.getElementById("Next-Area");
         nextItem.style.display = "block";
        })
    // next healer
    const  deposit = document.getElementById("addDeposit");
        deposit.addEventListener("click", function(){
            const amountA =document.getElementById("Amount").value;
            const amountNumber = parseFloat(amountA);
            const currentB = document.getElementById("current").innerText;
            const currentNumber =parseFloat(currentB);
            const totalNumber = amountNumber + currentNumber;
            document.getElementById("current").innerText = totalNumber;

            const total = document.getElementById("total").innerText;
            const totalBalance = parseFloat(total);
            const mainBalance = amountNumber + totalBalance;
            document.getElementById("total").innerText = mainBalance ;

            document.getElementById("Amount").value = "";
            
        })
        const addWithdraw = document.getElementById("addWithdraw");
            addWithdraw.addEventListener("click",function(){
                const disAmount = document.getElementById("disAmount").value;
                const disBalance = parseFloat(disAmount);
                const disValue = totalBalance - disBalance;
                document.getElementById("disAmount").value = disValue;

                document.getElementById("disAmount").value = "";
            })