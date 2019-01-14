// Ajax call to delete post
$(document).ready(function() {
  $('.delete').on('click', function(e) {
    e.preventDefault();
    $target = $(e.target);
    const id = $target.attr('data-id');
    var remove = confirm('Are you sure you want to delete the post');
    if (remove) {
      $.ajax({
        type: 'GET',
        url: '/post/delete/' + id,
        success: function(response) {
          alert('post deleted');
          window.location.href = '/post/mypost';
        },
        error: function(err) {
          console.log(err);
        }
      })
    }
  });
  $('.edit').on('click', function(e) {
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'GET',
      url: '/post/edit/' + id,
      success: function(response) {
        console.log('success')
        window.location.href = '/post/edit/' + id;
      },
      error: function(err) {
        console.log(err)
      }
    })
  });
  $(".reply-button").click(function() {
    // make corresponding reply-block visible
    $(this).closest(".container").find(".reply-block").show();
    // other code here to act on the click
  });
  $(".reply-cancel").click(function() {
    // make corresponding reply-block visible
    $(this).closest(".container").find(".reply-block").hide();
    // other code here to act on the click
  });

  $("#post-form").submit(function() {
    if (localStorage.getItem('myUserEntity') == null) {
      alert("login to post an Ad");
      return false;
    } else {
      // else part should happen while login and post
      return true;
    }
  });
	// Ajax call when user clicks on send
	// it need the message and id to be passed
	$('.reply-submit').on('click', function() {
    $target = $(this).closest(".target");
    const id = $target.attr('data-id');
		const msg = $(this).closest(".target").find(".reply-msg").val();
		var replyData = {}
		replyData.id=id;
		replyData.msg=msg;
		replyData=JSON.stringify(replyData);
		// How to get the message from text area and send to server through ajax
		var xhr = new XMLHttpRequest();
	  xhr.open('POST', 'http://localhost:3000/post/reply', true);
	  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	  xhr.onload = function() {
	    console.log('Signed in as: ' + xhr.responseText);
	  };
	  xhr.send('replyData='+replyData);
  });
  $('#mypost').on('click',function(){
    $.ajax({
      type: 'GET',
      url: '/post/mypost/',
      success: function(response) {
        console.log('success')
        window.location.href = '/post/mypost/';
      },
      error: function(err) {
        console.log(err)
      }
    })
  })
});
