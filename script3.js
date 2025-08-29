   
  
  //button 3
document.getElementById('call-btn3')
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
      alert('Calling Fire Service 999');
    }

    // save call info
    const callList = {
      name: 'Fire Service',
      num: 999, 
      time: new Date().toLocaleTimeString() 
    };

    callHistory.push(callList);
    console.log(callHistory)

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
})