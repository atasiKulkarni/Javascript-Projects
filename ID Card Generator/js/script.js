
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
  
//download page
setUpDownloadPage();

function setUpDownloadPage() {
  document.getElementById("download-button").addEventListener("click", function()
   {
    html2canvas(document.getElementById("id-card")).then(function(canvas) 
    {
      console.log(canvas);
      simulateDownloadImageClick(canvas.toDataURL(), 'file-name.jpg');
    });
  });
}

function simulateDownloadImageClick(uri, filename) 
{
  var link = document.createElement('a');
  if (typeof link.download !== 'string') 
  {
    window.open(uri);
  } else 
  {
    link.href = uri;
    link.download = filename;
    accountForFirefox(clickLink, link);
  }
}

function clickLink(link) {
  link.click();
}

function accountForFirefox(click) { // wrapper function
  let link = arguments[1];
  document.body.appendChild(link);
  click(link);
  document.body.removeChild(link);
}