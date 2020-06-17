import React from 'react'

function FacebookChatPlugin(){
  return(
    <>
      {/* <!-- Load Facebook SDK for JavaScript --> */}
      <div id="fb-root"></div>

      <script
        dangerouslySetInnerHTML={{ __html: `
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v7.0'
            });
          };

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        ` }}
      />

      {/* <!-- Your Chat Plugin code --> */}
      <div className="fb-customerchat"
        attribution="setup_tool"
        page_id="234349223396657"
        theme_color="#2980b9"
        logged_in_greeting="hello 你好呀我叫 louis 請問有咩我可以幫到你？"
        logged_out_greeting="hello 你好呀我叫 louis 請問有咩我可以幫到你？"
        greeting_dialog_display="show"
        >
      </div>

    </>
  )
}

export default FacebookChatPlugin