
      function mansurolIslam(product ,isIncrease){
      const caseInput  = document.getElementById(product + '-count');
      const  inputNumberBtn = parseFloat(caseInput.value);
      let totalItem = inputNumberBtn;
      if (isIncrease == true){
       totalItem = inputNumberBtn + 1;
      }
      if (isIncrease == false && inputNumberBtn > 0 ){
        totalItem = inputNumberBtn - 1;
       }
      caseInput.value = totalItem ;
      let productTotal = 0;
      if(product == 'phone' ){
        productTotal = totalItem * 1200 ;
      }
      if(product == 'case' ){
        productTotal = totalItem * 60 ;
      }
      document.getElementById(product + '-total').innerText = productTotal;
      calculte();
   
     }
      
      function calculte(){
       
      const phoneCount = getInputValue('phone');
      const caseCount = getInputValue('case');
      const finish = phoneCount * 1200 + caseCount * 60;
      document.getElementById("totalPrice").innerText = finish;
 
      const tax =  finish * 0.1 ;
      document.getElementById('tax-amount').innerText = '$' + tax;

      const grandTotal = finish + tax ;
      document.getElementById('Grand-total').innerText = '$'+ grandTotal;

      }

      function getInputValue(product){
        const productInput = document.getElementById(product + "-count");
        const productCount= parseInt(productInput.value);
        return productCount;
      }
  
     

     /*
     function Anahita(){
      const lastPart = document.getElementById("itemNo");
      const lastPartNumber = parseInt(lastPart.value);
  
      const lastPartner = document.getElementById("priceOf");
      const lastPartnerNumber = parseInt(lastPartner.value);
  
      let finish = lastPartNumber * 1200 + lastPartnerNumber * 59;
      document.getElementById("totalPrice").innerText = finish;
     }
    
    /*
    //add
    document.getElementById("Plus").addEventListener("click", function(){
    const caseInput = document.getElementById("itemNo").value;
    const plusNumberBtn = parseInt(caseInput);
    const totalItem = plusNumberBtn + 1;
    document.getElementById("itemNo").value = totalItem ;
    
    
     const result = totalItem * 1200 ;
    document.getElementById("sexy").innerText = result;
    
  
    
    })

          //delete
          document.getElementById("delete").addEventListener("click", function(){
            const minusBtn = document.getElementById("itemNo").value;
            const  minusNumberBtn = parseFloat( minusBtn);
            const totalMinus = minusNumberBtn - 1;
            document.getElementById("itemNo").value = totalMinus ;
    
            const resultBtn = totalMinus * 1219 ;
            document.getElementById("sexy").innerText = resultBtn;
  
              }) 

              //2nd part :
  
    document.getElementById("Check").addEventListener("click", function(){
      const checkBtn = document.getElementById("priceOf").value;
      const checkNumberBtn = parseFloat(checkBtn);
      const checkItem = checkNumberBtn + 1;
      document.getElementById("priceOf").value = checkItem ;
  
      const resultCheck = checkItem * 59 ;
      document.getElementById("checkOut").innerText = resultCheck;
    
    
        })
      
        document.getElementById("cashOut").addEventListener("click", function(){
          const cashBtn = document.getElementById("priceOf").value;
          const  cashNumberBtn = parseFloat( cashBtn);
          const totalCash = cashNumberBtn - 1;
          document.getElementById("priceOf").value = totalCash ;
  
          const  cashResultBtn = totalCash * 59 ;
          document.getElementById("checkOut").innerText = cashResultBtn;
  
         
            })  
     
    
    const lastPart = document.getElementById("itemNo");
    const lastPartNumber = parseInt(lastPart.value);

    const lastPartner = document.getElementById("priceOf");
    const lastPartnerNumber = parseInt(lastPartner.value);

    let finish = lastPartNumber * 1200 + lastPartnerNumber * 59;
    document.getElementById("totalPrice").innerText = finish;
    */