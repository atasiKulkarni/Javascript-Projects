const downloadCharacterSheet = () => {
  
  const node = document.getElementById('id-card');
  
  html2canvas(node).then(canvas => {
    // document.body.appendChild(canvas)
    // var img    = canvas.toDataURL("image/png");
    // document.write('<img src="'+img+'"/>');
    var link = document.createElement('a');
    link.download = 'filename.jpg';
    link.href = canvas.toDataURL()
    link.click();
  });
  
};

const bindInputToElement = (inputEl, elementEl) => {
  inputEl.addEventListener('change', () => {
    elementEl.textContent = inputEl.value;
  });
}

  // Bind name
bindInputToElement(
  document.getElementById('name'),
  document.getElementById('id-card-name')
);

// Bind date of birth
bindInputToElement(
  document.getElementById('dob'),
  document.getElementById('id-card-date-of-birth')
);

// Bind gender
bindInputToElement(
  document.getElementById('gender'),
  document.getElementById('id-card-gender')
);

// Bind college name
bindInputToElement(
  document.getElementById('college'),
  document.getElementById('id-card-college')
);

// Bind location
bindInputToElement(
  document.getElementById('location'),
  document.getElementById('id-card-location')
);

// Bind mugshot
document.getElementById('mugshot').addEventListener('change', function() 
    {
      if ( this.files && this.files[0] ) 
      {
        var FR= new FileReader();
        FR.onload = function(e) 
        {
           var img = document.getElementById('id-card-mugshot');
           img.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
      }
    });
  
