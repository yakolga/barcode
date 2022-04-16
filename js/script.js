function validateForms(form) {
  $(form).validate({
  rules: {
    digits: {
      required: true, 
      minlength: 2,
      maxlength: 3, 
      number: true
    },
  }
});
}

 validateForms ('#form');

const form = document.querySelector('.main__form'),
      mainInput = form.querySelector('.main__form_input'), 
      inputTitle = document.querySelector('.main__title'), 
      mainButton = form.querySelector('.main__form_button');
      overlayCountry = document.querySelector('.overlay__country'), 
      overlayFlag = document.querySelector('.overlay__flag'), 
      overlayImages = document.querySelector('.overlay__images'),
      overlay = document.querySelector('.overlay'), 
      overlayTitle = document.querySelector('.overlay__title'), 
      overlayInner = document.querySelector('.overlay__inner'), 
      overlaySubtitle = document.querySelector('.overlay__subtitle'), 
      overlayClose = document.querySelector('.overlay__close'), 
      inputValue = document.querySelector('.main__form_input');

  let addSecondImage = function(link) {
    let img = document.createElement("img");
    img.src = link;
    img.classList.add('overlay__flag__add', 'overlay__flag');
    overlayImages.append(img);
  };

  let addCustom = function() {
    overlay.classList.add('custom'); 
    overlayInner.classList.add('custom__inner');
    overlaySubtitle.classList.remove('hidden');
  };

 

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (inputValue.value === "" || isNaN(inputValue.value) || inputValue.value.length < 2 || inputValue.value.length > 3) {
    form.removeEventListener('submit', function (event) {
    });
  } else if (inputValue.value >= '460' && inputValue.value <= '469') {
    overlayCountry.innerHTML = 'Russia';
    overlayFlag.src = 'img/russia.jpg';
    addCustom();
    overlay.classList.remove('hidden');
  } else if (inputValue.value >= '00' && inputValue.value <= '13') {
    overlayCountry.innerHTML = 'USA or Canada';
    overlayFlag.src = 'img/usa.jpg';
    addSecondImage('img/canada.jpg');
    overlay.classList.remove('hidden');
  } else if (inputValue.value >= 30 && inputValue.value <= 37) {
    overlayCountry.innerHTML = 'France';
    overlayFlag.src = 'img/france.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '380') {
    overlayCountry.innerHTML = 'Bulgaria';
    overlayFlag.src = 'img/bulgaria.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '383') {
    overlayCountry.innerHTML = 'Slovenia';
    overlayFlag.src = 'img/slovenia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '385') {
    overlayCountry.innerHTML = 'Croatia';
    overlayFlag.src = 'img/croatia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '387') {
    overlayCountry.innerHTML = 'Bosnia and Herzegovina';
    overlayFlag.src = 'img/BosniaandHerzegovina.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value >= '400' && inputValue.value <= '440') {
    overlayCountry.innerHTML = 'Germany';
    overlayFlag.src = 'img/Germany.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='45' || inputValue.value === '49') {
    overlayCountry.innerHTML = 'Japan';
    overlayFlag.src = 'img/Japan.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='470') {
    overlayCountry.innerHTML = 'Kyrgyzstan';
    overlayFlag.src = 'img/Kyrgyzstan.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='471') {
    overlayCountry.innerHTML = 'Taiwan';
    overlayFlag.src = 'img/Taiwan.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='474') {
    overlayCountry.innerHTML = 'Estonia';
    overlayFlag.src = 'img/Estonia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='475') {
    overlayCountry.innerHTML = 'Latvia';
    overlayFlag.src = 'img/Latvia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='476') {
    overlayCountry.innerHTML = 'Azerbaijan';
    overlayFlag.src = 'img/Azerbaijan.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='477') {
    overlayCountry.innerHTML = 'Lithuania';
    overlayFlag.src = 'img/Lithuania.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='478') {
    overlayCountry.innerHTML = 'Uzbekistan';
    overlayFlag.src = 'img/uzbekistan.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='479') {
    overlayCountry.innerHTML = 'Sri Lanka';
    overlayFlag.src = 'img/Srilanka.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='480') {
    overlayCountry.innerHTML = 'Philippines';
    overlayFlag.src = 'img/Philippines.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='481') {
    overlayCountry.innerHTML = 'Belarus';
    overlayFlag.src = 'img/Belarus.jpg';
    addCustom();
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='482') {
    overlayCountry.innerHTML = 'Ukraine';
    overlayFlag.src = 'img/Ukraine.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='484') {
    overlayCountry.innerHTML = 'Moldova';
    overlayFlag.src = 'img/Moldova.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='485') {
    overlayCountry.innerHTML = 'Armenia';
    overlayFlag.src = 'img/Armenia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='486') {
    overlayCountry.innerHTML = 'Georgia';
    overlayFlag.src = 'img/Georgia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='487') {
    overlayCountry.innerHTML = 'Kazakhstan';
    overlayFlag.src = 'img/Kazakhstan.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='488') {
    overlayCountry.innerHTML = 'Tajikistan';
    overlayFlag.src = 'img/Tajikistan.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='489') {
    overlayCountry.innerHTML = 'HongKong';
    overlayFlag.src = 'img/HongKong.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='50') {
    overlayCountry.innerHTML = 'Great Britain';
    overlayFlag.src = 'img/GreatBritain.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='520') {
    overlayCountry.innerHTML = 'Greece';
    overlayFlag.src = 'img/Greece.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='528') {
    overlayCountry.innerHTML = 'Lebanon';
    overlayFlag.src = 'img/Lebanon.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='529') {
    overlayCountry.innerHTML = 'Cyprus';
    overlayFlag.src = 'img/Cyprus.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='531') {
    overlayCountry.innerHTML = 'Macedonia';
    overlayFlag.src = 'img/Macedonia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='535') {
    overlayCountry.innerHTML = 'Malta';
    overlayFlag.src = 'img/Malta.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='535') {
    overlayCountry.innerHTML = 'Ireland';
    overlayFlag.src = 'img/Ireland.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='54') {
    overlayCountry.innerHTML = 'Belgium and Luxemburg';
    overlayFlag.src = 'img/Belgium.jpg';
    addSecondImage('img/Luxembourg.jpg');
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='560') {
    overlayCountry.innerHTML = 'Portugal';
    overlayFlag.src = 'img/Portugal.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='569') {
    overlayCountry.innerHTML = 'Iceland';
    overlayFlag.src = 'img/Iceland.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='590') {
    overlayCountry.innerHTML = 'Poland';
    overlayFlag.src = 'img/Poland.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='594') {
    overlayCountry.innerHTML = 'Romania';
    overlayFlag.src = 'img/Romania.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='599') {
    overlayCountry.innerHTML = 'Hungary';
    overlayFlag.src = 'img/Hungary.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='600' || inputValue.value === '601') {
    overlayCountry.innerHTML = 'South African Republic';
    overlayFlag.src = 'img/Southafricanrepublic.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='609') {
    overlayCountry.innerHTML = 'Mauritius';
    overlayFlag.src = 'img/Mauritius.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='611') {
    overlayCountry.innerHTML = 'Morocco';
    overlayFlag.src = 'img/Morocco.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='613') {
    overlayCountry.innerHTML = 'Algeria';
    overlayFlag.src = 'img/Algeria.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='619') {
    overlayCountry.innerHTML = 'Tunisia';
    overlayFlag.src = 'img/Tunisia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='621') {
    overlayCountry.innerHTML = 'Syria';
    overlayFlag.src = 'img/Syria.jpg';
    addCustom();
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='622') {
    overlayCountry.innerHTML = 'Egypt';
    overlayFlag.src = 'img/Egypt.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='625') {
    overlayCountry.innerHTML = 'Jordan';
    overlayFlag.src = 'img/Jordan.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='626') {
    overlayCountry.innerHTML = 'Iran';
    overlayFlag.src = 'img/Iran.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='627') {
    overlayCountry.innerHTML = 'Kuwait';
    overlayFlag.src = 'img/Kuwait.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='628') {
    overlayCountry.innerHTML = 'Saudi Arabia';
    overlayFlag.src = 'img/Saudiarabia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='629') {
    overlayCountry.innerHTML = 'UAE';
    overlayFlag.src = 'img/UAE.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value ==='64') {
    overlayCountry.innerHTML = 'Finland';
    overlayFlag.src = 'img/Finland.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value >= '690' && inputValue.value <= '692') {
    overlayCountry.innerHTML = 'China';
    overlayFlag.src = 'img/China.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '70') {
    overlayCountry.innerHTML = 'Norway';
    overlayFlag.src = 'img/Norway.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '729') {
    overlayCountry.innerHTML = 'Israel';
    overlayFlag.src = 'img/Israel.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '729') {
    overlayCountry.innerHTML = 'Israel';
    overlayFlag.src = 'img/Israel.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '73') {
    overlayCountry.innerHTML = 'Sweden';
    overlayFlag.src = 'img/Sweden.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '740') {
    overlayCountry.innerHTML = 'Guatemala';
    overlayFlag.src = 'img/Guatemala.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '741') {
    overlayCountry.innerHTML = 'Salvador';
    overlayFlag.src = 'img/Salvador.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '742') {
    overlayCountry.innerHTML = 'Honduras';
    overlayFlag.src = 'img/Honduras.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '743') {
    overlayCountry.innerHTML = 'Nicaragua';
    overlayFlag.src = 'img/Nicaragua.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '744') {
    overlayCountry.innerHTML = 'Costa Rica';
    overlayFlag.src = 'img/Costarica.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '745') {
    overlayCountry.innerHTML = 'Panama';
    overlayFlag.src = 'img/Panama.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '746') {
    overlayCountry.innerHTML = 'Dominican Republic';
    overlayFlag.src = 'img/Dominicanrepublic.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '750') {
    overlayCountry.innerHTML = 'Mexico';
    overlayFlag.src = 'img/Mexico.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '759') {
    overlayCountry.innerHTML = 'Venezuela';
    overlayFlag.src = 'img/Venezuela.jpg';
    addCustom();
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '76') {
    overlayCountry.innerHTML = 'Switzerland';
    overlayFlag.src = 'img/Switzerland.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '70') {
    overlayCountry.innerHTML = 'Colombia';
    overlayFlag.src = 'img/Colombia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '773') {
    overlayCountry.innerHTML = 'Uruguay';
    overlayFlag.src = 'img/Uruguay.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '775') {
    overlayCountry.innerHTML = 'Peru';
    overlayFlag.src = 'img/Peru.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '777') {
    overlayCountry.innerHTML = 'Bolivia';
    overlayFlag.src = 'img/Bolivia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '779') {
    overlayCountry.innerHTML = 'Argentina';
    overlayFlag.src = 'img/Argentina.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '780') {
    overlayCountry.innerHTML = 'Chile';
    overlayFlag.src = 'img/Chile.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '784') {
    overlayCountry.innerHTML = 'Paraguay';
    overlayFlag.src = 'img/Paraguay.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '786') {
    overlayCountry.innerHTML = 'Ecuador';
    overlayFlag.src = 'img/Ecuador.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '789') {
    overlayCountry.innerHTML = 'Brazil';
    overlayFlag.src = 'img/Brazil.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value >= '80' && inputValue.value <= '83') {
    overlayCountry.innerHTML = 'Italy';
    overlayFlag.src = 'img/Italy.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '84') {
    overlayCountry.innerHTML = 'Spain';
    overlayFlag.src = 'img/Spain.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '850') {
    overlayCountry.innerHTML = 'Cuba';
    overlayFlag.src = 'img/Cuba.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '858') {
    overlayCountry.innerHTML = 'Slovakia';
    overlayFlag.src = 'img/Slovakia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '859') {
    overlayCountry.innerHTML = 'Czech Republic';
    overlayFlag.src = 'img/Czech.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '860') {
    overlayCountry.innerHTML = 'Serbia';
    overlayFlag.src = 'img/Serbia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '865') {
    overlayCountry.innerHTML = 'Mongolia';
    overlayFlag.src = 'img/Mongolia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '880') {
    overlayCountry.innerHTML = 'North Korea';
    overlayFlag.src = 'img/Northkorea.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '884') {
    overlayCountry.innerHTML = 'Cambodia';
    overlayFlag.src = 'img/Cambodia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '885') {
    overlayCountry.innerHTML = 'Thailand';
    overlayFlag.src = 'img/Thailand.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '888') {
    overlayCountry.innerHTML = 'Singapore';
    overlayFlag.src = 'img/Singapore.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '890') {
    overlayCountry.innerHTML = 'India';
    overlayFlag.src = 'img/India.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '893') {
    overlayCountry.innerHTML = 'Vietnam';
    overlayFlag.src = 'img/Vietnam.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '899') {
    overlayCountry.innerHTML = 'Indonesia';
    overlayFlag.src = 'img/Indonesia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value >= '90' && inputValue.value <= '91') {
    overlayCountry.innerHTML = 'Austria';
    overlayFlag.src = 'img/Austria.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '93') {
    overlayCountry.innerHTML = 'Australia';
    overlayFlag.src = 'img/Australia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '94') {
    overlayCountry.innerHTML = 'New Zeland';
    overlayFlag.src = 'img/NewZeland.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value === '955') {
    overlayCountry.innerHTML = 'Malaysia';
    overlayFlag.src = 'img/Malaysia.jpg';
    overlay.classList.remove('hidden');
  } else if (inputValue.value >= '200' && inputValue.value <= '299') {
    overlayTitle.innerHTML = "This code is used internally by businesses for their own purpose";
    overlayFlag.src = 'img/barcode.svg';
    overlay.classList.remove('hidden');
  } else {
    overlayTitle.innerHTML = "The country is not recognized, you may have entered the wrong code";
    overlayFlag.src = 'img/barcode.svg';
    overlayClose.innerHTML = "Try again";
    overlay.classList.remove('hidden');
  }
});

overlayClose.addEventListener('click', (event) => {
  overlay.classList.add('hidden');
  inputValue.value = "";
  window.location.reload();
});
