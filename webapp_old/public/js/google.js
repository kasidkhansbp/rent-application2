function onSignIn(googleUser) {
  //profile need to be global to be access in main.js to trigger login for posting an ad.
  profile = googleUser.getBasicProfile();
  $('.g-signin2').css('display', 'none');
  $('.reply-button').css('display', 'block');
  $('.g-loginData').css('display', 'block');
  $('#g-loginPic').attr('src', profile.getImageUrl());
  $('#g-accountDisplayName').text(profile.getGivenName());
  $('#g-emailAddress').text(profile.getEmail());
  var myUserEntity = {};
  myUserEntity.email = profile.getEmail();
  myUserEntity.name = profile.getName();
  //Store the entity object in localStorage where it will be accessible from all pages of your site.
  localStorage.setItem('myUserEntity', JSON.stringify(myUserEntity));
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/login', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    console.log('Signed in as: ' + xhr.responseText);
  };
  xhr.send('myUserEntity=' + localStorage.getItem('myUserEntity'));
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    localStorage.removeItem('myUserEntity');
    location.reload();
  });
  alert("google logout done.");
}
