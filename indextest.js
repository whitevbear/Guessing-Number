// // delayedDisplay test
// function  delayedDisplay(result, ms, func){
//   function func2() {func(result);}
//   setTimeout( func2 , ms) ;
//   // 以上可縮減為 setTimeout(function() {func(result);}, ms);
// }

// function display(result) {
//   console.log(result);
// }

// delayedDisplay("3", 1000, display);



  // Random number
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    console.log("answer: " + targetNumber);

    // Get element
    const guessText = document.getElementById("guessText");
    const guessSubmit = document.getElementById("guessSubmit");
    const answerButton = document.getElementById("answerButton");
    const message = document.querySelector(".message");
    const theAnswer = document.querySelector(".theanswer");
  

    // add limit hint
    let lowerLimit = 1;
    let upperLimit = 100;
    message.textContent = lowerLimit +"到"+ upperLimit +"之間的數字，你猜是多少？";
    
    let timeCount = 0;

    //增加圖片元素
    let meme01 = document.createElement('img');
    meme01.src ="meme01.jpg";
    meme01.id ="meme01";
    // tryAgain 
    const tryAgainbutton = document.createElement('button');
    tryAgainbutton.textContent = "再玩一次";
    tryAgainbutton.className = "tryAgainbutton"
    tryAgainbutton.id = "tryAgainbutton"
 
    // Event listener
    guessSubmit.addEventListener("click", checkGuess);  
    answerButton.addEventListener("click", askAnswer);
    tryAgainbutton.addEventListener("click", tryAgain);

    //  // 终止延迟函数(失敗)
    // function stopDelayedFunction() {
    //    console.log('延迟函数被终止');
    //    clearTimeout(checkGuessTimeout); // 终止延迟函数
    // }

    // 存储 setTimeout 的标识符的数组
     let delayedDisplayTimeouts = [];

    // 终止所有的 delayedDisplay(GPT)
    function stopAllDelayedDisplays() {
      for (const timeoutId of delayedDisplayTimeouts) {
        clearTimeout(timeoutId);
      }
      delayedDisplayTimeouts = []; // 清空数组
    }

    // tryAgain function
    function tryAgain() {

      stopAllDelayedDisplays(); // 终止所有的 delayedDisplay
      
      // clearTimeout(stopSetTimeout);// 终止SetTimeout(GPT)

      targetNumber = Math.floor(Math.random() * 100) + 1;
      console.log("answer: " + targetNumber);
  
      lowerLimit = 1;
      upperLimit = 100;
      timeCount = 0;
      message.textContent = lowerLimit +"到"+ upperLimit +"之間的數字，你猜是多少？";
      message.style.color = "black";
      theAnswer.textContent = "( つ•̀ω•́)つ答案揭曉";
      guessSubmit.disabled = false;
      answerButton.disabled = false;
      answerButtonimg.src = 'dog01.png';

      // 刪除元素
      let tryAgainButtonElement = document.getElementById('tryAgainbutton');
      if (tryAgainButtonElement) {   
          tryAgainButtonElement.remove();
      }
      // let elementToRemove = document.getElementById('tryAgainbutton');
      // elementToRemove.remove();
      let meme01Element = document.getElementById('meme01');
      if (meme01Element) {
        meme01Element.remove();
      }
      // let elementToRemove2 = document.getElementById('meme01');
      // elementToRemove2.remove();
      }


     // Answer function
     function askAnswer(){
      theAnswer.textContent = "( つ•̀ω•́)つ   " +targetNumber;
      let answerButtonimg = document.getElementById("answerButtonimg");
      answerButtonimg.src = 'blackcat.png';
    } 

    // Guess function
    function checkGuess() {
      const userGuess = parseInt(guessText.value);

      timeCount = timeCount+1;//計數 也可寫成 timeCount++;

      console.log("userGuess: " + userGuess);
      console.log("timeCount: " + timeCount);

      if ( timeCount>5 ) {
          // You Failed!
          function display(result) {
            message.textContent = "你輸惹  ╮(╯_╰)╭  "+result;
          }
          guessSubmit.disabled = true
          theAnswer.textContent = "答案是"+targetNumber;
          answerButton.disabled = true;
          answerButtonimg.src = 'cat01.png';
          // tryAgain 
          document.body.appendChild(tryAgainbutton);
          // guessText.type = 'submit';
  
          // // 倒數計時重新開始 (失敗)
          // function  delayedDisplay(result, ms, func){
          //   function func2() {func(result);}
          //    setTimeout( func2 , ms) ;
          //   // 以上可縮減為 setTimeout(function() {func(result);}, ms);
          // }

          // 倒數計時重新開始 (GPT)
          function delayedDisplay(result, ms, func) {
               function func2() { func(result); }
               const timeoutId = setTimeout(func2, ms);
               delayedDisplayTimeouts.push(timeoutId); // 将标识符保存在数组中
          }

          delayedDisplay("5", 0, display);
          delayedDisplay("4", 1000, display);
          delayedDisplay("3", 2000, display);
          delayedDisplay("2", 3000, display);
          delayedDisplay("1", 4000, display);
          delayedDisplay("0", 5000, tryAgain);
          

    

      } else if (userGuess === targetNumber) {
        function display(result) {
          message.textContent = "恭喜你，你猜對了！你這次猜了 "+timeCount+" 次哦~ "+result;
        }
        message.style.color = "green";
        guessSubmit.disabled = true;
        document.body.appendChild(tryAgainbutton);
        document.body.appendChild(meme01);
        meme01.style.width = "200px";
                // 倒數計時重新開始 (GPT)
                function delayedDisplay(result, ms, func) {
                    function func2() { func(result); }
                    const timeoutId = setTimeout(func2, ms);
                    delayedDisplayTimeouts.push(timeoutId); // 将标识符保存在数组中
                }
        
                delayedDisplay("5", 0, display);
                delayedDisplay("4", 1000, display);
                delayedDisplay("3", 2000, display);
                delayedDisplay("2", 3000, display);
                delayedDisplay("1", 4000, display);
                delayedDisplay("0", 5000, tryAgain);
                
               
        
      } else if (userGuess < targetNumber) {
        lowerLimit=userGuess;
        message.textContent = userGuess + "到" +upperLimit+ "之間的數字，你猜是多少？";
        message.style.color = "red";
      } else if (userGuess > targetNumber){
        upperLimit=userGuess;
        message.textContent =  lowerLimit + "到" + userGuess +"之間的數字，你猜是多少？";
        message.style.color = "red";
      }else {
        
        message.textContent = "這樣我算你錯喔 ʕ•͡ᴥ•ʔ";
        message.style.color = "red";
      }

      guessText.value = "";
      
    }
