
callHistory = [];

// heart button function
document.querySelectorAll('.heart-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    // console.log('heart button clicked');

    const heart = parseInt(document.getElementById('heart').innerText)

    // console.log(heart)
    const heartCount = heart + 1;
    document.getElementById('heart').innerText = heartCount;


  });
});

//copy button function
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    // console.log('heart button clicked');

    const copy = parseInt(document.getElementById('copy').innerText)

    // console.log(heart)
    const copyCount = copy + 1;
    document.getElementById('copy').innerText = copyCount;


  });
});

// Select all copy buttons
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the parent card dynamically
    const cart = button.closest('.cart'); // works for all cards

    // Get the h3 number inside this card
    const number = cart.querySelector('h3').innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(number)
      .then(() => alert(`Number ${number} copied!`))
      .catch(err => console.error('Failed to copy:', err));
  });
});



//call button function

//button 1

document.getElementById('call-btn1')
  .addEventListener('click', function(event) {
    event.preventDefault();

    // get current coin count
    const coin = parseInt(document.getElementById('coin').innerText);

    if (coin < 20) {
      alert('Not enough coin. You need at least 20 coin to call.');
      return;
    } else {
      const coinCount = coin - 20;
      document.getElementById('coin').innerText = coinCount;
      alert('Calling National Emergency 999');
    }

    // save call info
    const callList = {
      name: 'National Emergency',
      num: 999, 
      time: new Date().toLocaleTimeString() 
    };

    callHistory.push(callList);
    // console.log(callHistory)
    




    // create new call history element
    const historyContainer = document.getElementById('history-container');

    const div = document.createElement('div');
    div.innerHTML = `
      <div class="callHistoryList flex justify-between items-center p-2 bg-gray-50 shadow-[0px_2px_3px_0px_#00000026] text-[12px]">
        <div class="font-semibold">
          <h1>${callList.name}</h1>
          <p>${callList.num}</p>
        </div>
        <div>
          ${callList.time}
        </div>
      </div>
    `;

    historyContainer.appendChild(div);

  });


  //clear button function
  document.getElementById('clear-btn')
  .addEventListener('click', function(){
    const container = document.getElementById('history-container')
    container.innerHTML = ''
  });






