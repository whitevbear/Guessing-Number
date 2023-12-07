  // Random number
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    console.log("answer: " + targetNumber);

    // Get element
    const guessField = document.getElementById("guessField");
    const guessSubmit = document.getElementById("guessSubmit");
    const message = document.querySelector(".message");
    const theAnswer = document.querySelector(".theanswer");

    // add limit hint
    let lowerLimit = 1;
    let upperLimit = 100;
    message.textContent = lowerLimit +"到"+ upperLimit +"之間的數字，你猜是多少？";
    

    let timeCount = 0;
    let img = document.createElement('img');
    img.src ="meme01.jpg";


    // Event listener
    guessSubmit.addEventListener("click", checkGuess);  
    answerbutton.addEventListener("click", askAnswer);
    
    // Answer function
    function askAnswer(){
        theAnswer.textContent = targetNumber;
    }

   




    // Guess function
      function checkGuess() {
      const userGuess = parseInt(guessField.value);

      timeCount = timeCount+1;//計數 也可寫成 timeCount++;

      console.log("userGuess: " + userGuess);
      console.log("timeCount: " + timeCount);

        if ( timeCount>5 ) {
        // You Failed!
        message.textContent = "You Failed! 答案是"+ targetNumber;
        guessSubmit.disabled = true

      } else if (userGuess === targetNumber) {
        message.textContent = "恭喜你，你猜對了！你這次猜了 "+timeCount+" 次哦~";
        message.style.color = "green";
        guessSubmit.disabled = true;
        document.body.appendChild(img);
        img.style.width = "200px";
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

      guessField.value = "";
      
    }
