Publish.addEventListener("click", function() {
  var userName = document.getElementById("userName"),
    textareaComment = document.getElementById("textarea"),
    commentSection = document.getElementById("comment"),
    Publish = document.getElementById("Publish"),
    lastComment = document.createElement("div"),
    userPictureComment = document.createElement("div"),
    userLastCommentName = document.createElement("div"),
    userLastComment = document.createElement("div"),
    userLastCommentA = document.createElement("p");
  if (userName.value == "") {
    userName.style.border = "2px solid red";
    userName.style.boxShadow = "2px 2px 8px red";
  } else if (textareaComment.value == "") {
    textareaComment.style.border = "2px solid red";
    textareaComment.style.boxShadow = "2px 2px 8px red";
  } else {
    lastComment.setAttribute("class", "lastComment");
    userPictureComment.setAttribute("class", "userPictureComment");
    userLastCommentName.setAttribute("class", "userLastCommentName");
    userLastComment.setAttribute("class", "userLastComment");
    userLastCommentA.setAttribute("id", "userLastCommentA");
    userLastCommentA.textContent = textareaComment.value;
    userLastCommentName.textContent = userName.value;
    lastComment.appendChild(userPictureComment);
    lastComment.appendChild(userLastCommentName);
    lastComment.appendChild(userLastComment);
    userLastComment.appendChild(userLastCommentA);
    commentSection.insertBefore(lastComment, commentSection.childNodes[0]);
    console.log(commentSection);
  }
});

/*
<div class="lastComment">
    <!-- Last Comment -->


    <div class="userPictureComment">
     <!-- User Picture In Comment -->

    </div>
    <!-- End User Picture In Comment -->

    <div class="userLastCommentName"></div>
    <div class="userLastComment">
     <p id="userLastCommentA"></p>
    </div>


   </div>
   <!-- End Last Comment -->
*/
