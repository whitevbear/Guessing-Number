  // Random number
    const targetNumber = Math.floor(Math.random() * 100) + 1;
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
    let meme01 = document.createElement('img');
    meme01.src ="meme01.jpg";
    // tryAgain 
    let tryAgain = document.createElement('button');
    tryAgain.textContent = "再玩一次";
    tryAgain.className = "tryAgainbutton"
 
    // Event listener
    guessSubmit.addEventListener("click", checkGuess);  
    answerButton.addEventListener("click", askAnswer);
    
    // Answer function
    function askAnswer(){
        theAnswer.textContent = targetNumber;
    }


    // Guess function
      function checkGuess() {
      const userGuess = parseInt(guessText.value);

      timeCount = timeCount+1;//計數 也可寫成 timeCount++;

      console.log("userGuess: " + userGuess);
      console.log("timeCount: " + timeCount);

        if ( timeCount>1 ) {
        // You Failed!
        message.textContent = "You Failed! ";
        guessSubmit.disabled = true
        theAnswer.textContent = "答案是"+targetNumber;
        answerButton.disabled = true;
        // tryAgain 
        document.body.appendChild(tryAgain);
        guessText.type = 'submit';

      } else if (userGuess === targetNumber) {
        message.textContent = "恭喜你，你猜對了！你這次猜了 "+timeCount+" 次哦~";
        message.style.color = "green";
        guessSubmit.disabled = true;
        document.body.appendChild(meme01);
        meme01.style.width = "200px";
      } else if (userGuess < targetNumber) {
        lowerLimit=userGuess;
        message.textContent = userGuess + "到" +upperLimit+ "之間的數字，你猜是多少？";
        message.style.color = "red";
      } else if (userGuess > targetNumber){
        upperLimit=userGuess;
        message.textContent =  lowerLimit + "到" + userGuess +"之間的數字，你猜是多少？";
        message.style.color = "red";
      }else {
        
        message.textContent = "這樣我算你錯喔";
        message.style.color = "red";
      }

      guessText.value = "";
      
    }
