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
          $target.parent().remove();
          alert('post deleted');
        },
        error: function(err) {
          console.log(err);
        }
      })
    }
  });
  $('.edit').on('click', function(e) {
    e.preventDefault();
    $(this).closest(".container").find(".title").attr("contenteditable", "true");
    $(this).closest(".container").find(".description").attr("contenteditable", "true");
    $(this).closest(".container").find(".pincode").attr("contenteditable", "true");
    $(this).closest(".container").find(".address").attr("contenteditable", "true");
    $(this).closest(".container").find(".reply-button").css("display", "none");
    $(this).closest(".container").find(".edit-save").css("display", "inline-block");
    $(this).closest(".container").find(".edit-cancel").css("display", "inline-block");
    $(this).closest(".container").find(".title").css("border-bottom", "1px solid black");
    $(this).closest(".container").find(".description").css("border-bottom", "1px solid black");
    $(this).closest(".container").find(".pincode").css("border-bottom", "1px solid black");
    $(this).closest(".container").find(".address").css("border-bottom", "1px solid black");
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
    replyData.id = id;
    replyData.msg = msg;
    replyData = JSON.stringify(replyData);
    // How to get the message from text area and send to server through ajax
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/post/reply', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('replyData=' + replyData);
  });
  $('#mypost').on('click', function() {
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
  $(".edit-cancel").click(function() {
    $(this).closest(".container").find(".title").attr("contenteditable", "false");
    $(this).closest(".container").find(".description").attr("contenteditable", "false");
    $(this).closest(".container").find(".pincode").attr("contenteditable", "false");
    $(this).closest(".container").find(".address").attr("contenteditable", "false");
    $(this).closest(".container").find(".reply-button").css("display", "block");
    $(this).closest(".container").find(".edit-save").css("display", "none");
    $(this).closest(".container").find(".edit-cancel").css("display", "none");
    $(this).closest(".container").find(".title").css("border-bottom", "0px solid black");
    $(this).closest(".container").find(".description").css("border-bottom", "0px solid black");
    $(this).closest(".container").find(".pincode").css("border-bottom", "0px solid black");
    $(this).closest(".container").find(".address").css("border-bottom", "0px solid black");
  });
  $(".edit-save").click(function(e) {
    e.preventDefault();
    $target = $(e.target);
    //const id = $target.attr('data-id');
    const id = $(this).closest(".target").attr('data-id');
    const title = $(this).closest(".container").find(".title").text();
    const description = $(this).closest(".container").find(".description").text();
    const pincode = $(this).closest(".container").find(".pincode").text();
    const address = $(this).closest(".container").find(".address").text();

    var updatePost = {}
    updatePost.id = id;
    updatePost.title = title;
    updatePost.description = description;
    updatePost.pincode = pincode;
    updatePost.address = address;
    updatePost = JSON.stringify(updatePost);
    console.log('updated post'+updatePost)
    $.ajax({
      type: 'POST',
      url: '/post/edit/',
      dataType: 'json',
      data:{updatePost},
      success: function(response) {
        console.log('success')
        window.location.href = '/post/mypost/';
        $(this).closest(".container").find(".title").attr("contenteditable", "false");
        $(this).closest(".container").find(".description").attr("contenteditable", "false");
        $(this).closest(".container").find(".pincode").attr("contenteditable", "false");
        $(this).closest(".container").find(".address").attr("contenteditable", "false");
        $(this).closest(".container").find(".reply-button").css("display", "block");
        $(this).closest(".container").find(".edit-save").css("display", "none");
        $(this).closest(".container").find(".edit-cancel").css("display", "none");
        $(this).closest(".container").find(".title").css("border-bottom", "0px solid black");
        $(this).closest(".container").find(".description").css("border-bottom", "0px solid black");
        $(this).closest(".container").find(".pincode").css("border-bottom", "0px solid black");
        $(this).closest(".container").find(".address").css("border-bottom", "0px solid black");
      },
      error: function(err) {
        console.log(err)
      }
    })
  });
});
