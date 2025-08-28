

// document.querySelectorAll('.heart-btn')
// .addEventListener('click', function(event){
//     event.preventDefault();

//    console.log('heart button clicke')
// })

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

