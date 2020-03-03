$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="chat-main__message-list__message-container__handle-container">
            <div class="chat-main__message-list__message-container__handle-container__handle">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__message-container__handle-container__created-at">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-list__message-container__message">
            <p class="chat-main__message-list__message-container__message">
              ${message.body}
            </p>
          </div>
          <img src=${message.image} >`
      return html;
    } else {
        var html =
        `<div class="chat-main__message-list__message-container__handle-container">
            <div class="chat-main__message-list__message-container__handle-container__handle">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__message-container__handle-container__created-at">
              ${message.created_at}
            </div>
          </div>
          <div class="hat-main__message-list__message-container__message">
            <p class="chat-main__message-list__message-container__message">
              ${message.body}
            </p>
          </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list__message-container').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('.submit-btn').removeAttr("disabled");
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});