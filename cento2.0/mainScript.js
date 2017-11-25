function externalScripts() {
     var scripts = [
         "https://code.jquery.com/jquery-3.2.1.min.js",
         "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
         
     ];
     var src;
     var script;
     var pendingScripts = [];
     var firstScript = document.scripts[0];
     while ((src = scripts.shift())) {
        if ("async" in firstScript) {
           script = document.createElement("script");
           script.async = false;
           script.src = src;
           document.head.appendChild(script);
        }//if
     }//while
}


externalScripts();


(function (global) {
  //add notloaded to body
  document.body.className += " notloaded";
  var $ = jQuery;
  var SL = {};
  var xhrp, times;
  var valid = new Date();
  SL = {
    init: function () {
      this.mcssone();
      this.mcsstwo();
      this.mcssthree();
      this.mcssfour();
      this.mcssfive();
      this.mcsssix();
      this.banner();
      this.isSports();
      this.slider();
      this.tidyup();


    }, //init 

    mcssone: function () {
      console.info('%c cssone \u221a', 'background:blue;color:white;');
      var mainone = '@media screen and (max-width:1024px) { #root {width:100% !important;} ._3QZWmDp1baLHc7JHCjQQFJ.KambiWidget-primary-color {width:100% !important; left:0 !important;}   } ._3QZWmDp1baLHc7JHCjQQFJ.KambiWidget-primary-color {width:120%;left:-8%;}   ._24d6f3pjhfa71-59bfd2pl {}   #root {width:100%; margin:0 auto;} .site-footer { padding-top:0 !important;}   .KambiWidget-card-background-color {background-color:#001519 !important; }  #bigfoot {border-bottom:1px solid #0221029c; margin-bottom:0; border-top:1px solid rgba(83, 83, 83, 0.1); position:fixed !important; bottom:0px; left:0; width:100%; z-index:10000;}   .site-footer .widget-footer-licence-row .row {width:100%;}     #bigfoot {margin-bottom:0em;} #bigfoot a, #bigfoot a:focus {outline:none !important; border:0 !important; text-decoration:none !important;} #bigfoot ._24d6f3pjhfa71-59bfd2pl:focus {box-shadow:none !important; outline:none !important;}  #bigfoot ._24d6f3pjhfa71-59bfd2pl:hover {background:none !important;}  .KambiWidget-font{font-family:"Roboto", "Helvetica Neue", sans-serif}.KambiWidget-icon-font{font-family:"kambi-icons"}.KambiWidget-primary-color{color:#00c1de}.KambiWidget-primary-background-color{background-color:#00c1de}.KambiWidget-primary-text-color{color:#fff}.KambiWidget,.KambiWidget-card{background:#f6f6f6;color:rgba(0, 0, 0, 0.87);font-family:"Roboto", "Helvetica Neue", sans-serif}.KambiWidget-card-background-color{background-color:#f6f6f6;-webkit-transition:background-color 0.2s ease-out;transition:background-color 0.2s ease-out}.KambiWidget-card-background-color--hoverable:hover{background-color:#ececec}.KambiWidget-card-background-color--clickable:active{background-color:#e7e7e7}.KambiWidget-card-text-color{color:rgba(0, 0, 0, 0.87)}.KambiWidget-card-support-text-color{color:#999}.KambiWidget-card-border-color{border-color:rgba(0, 0, 0, 0.05)}.KambiWidget-header{background:#fff;color:rgba(0, 0, 0, 0.87);font-family:"Roboto", "Helvetica Neue", sans-serif}.KambiWidget-secondary-header{background-color:#f5f5f5;color:rgba(0, 0, 0, 0.87);font-family:"Roboto", "Helvetica Neue", sans-serif}.KambiWidget-card-header-border{border-bottom:solid 1px rgba(0, 0, 0, 0.12)}.KambiWidget-card-inner-border{border-bottom:1px solid rgba(0, 0, 0, 0.05)}.KambiWidget-outcome{height:36px;overflow:hidden;display:block;padding:0;border:none;border-radius:2px;line-height:3;font-size:12px;text-align:left;font-family:"Roboto", "Helvetica Neue", sans-serif;background:#00c1de;-webkit-transition:background-color 0.2s ease-out, color 0.2s ease-out;transition:background-color 0.2s ease-out, color 0.2s ease-out}.KamKambiWidget-outcome:active{background:#00869B}.KambiWidget-outcome: active    .KambiWidget-outcome:focus{outline:0}.KambiWidget-outcome__flexwrap{padding:0 7px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.KambiWidget-outcome__label-wrapper{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 3px;overflow:hidden;color:#fff;opacity:0.85}.KambiWidget-outcome__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;-webkit-box-flex:0;-webkit-flex:0 1 auto;flex:0 1 auto}.KambiWidget-outcome__line{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;display:block;margin-left:4px}.KambiWidget-outcome__odds-wrapper{padding:0 3px;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;text-align:center}.KambiWidget-outcome--no-label .KambiWidget-outcome__odds-wrapper{-webkit-box-flex:1;-webkit-flex:1 0 auto;flex:1 0 auto}.KambiWidget-outcome__odds{font-weight:bold;color:#fff;text-shadow:none;position:relative}.KambiWidget-outcome--selected{background:#FFED00}.KambiWidget-outcome--selected:hover{background:#FFF659}.KambiWidget-outcome--selected:active{background:#FFF893}.KambiWidget-outcome--selected .KambiWidget-outcome__odds{color:rgba(0, 0, 0, 0.87)}.KambiWidget-outcome--selected .KambiWidget-outcome__label-wrapper{color:rgba(0, 0, 0, 0.87)}.KambiWidget-outcome:disabled,.KambiWidget-outcome--suspended{background:#d9d9d9;color:rgba(0, 0, 0, 0.26)}.KambiWidget-outcome:disabled:hover,.KambiWidget-outcome--suspended:hover{background:#d9d9d9;color:rgba(0, 0, 0, 0.26)}.KambiWidget-outcome:disabled:active,.KambiWidget-outcome--suspended:active{background:#d9d9d9;color:rgba(0, 0, 0, 0.26)}.KambiWidget-outcome:disabled .KambiWidget-outcome__label-wrapper,.KambiWidget-outcome--suspended .KambiWidget-outcome__label-wrapper{color:rgba(0, 0, 0, 0.26)}.KambiWidget-outcome--suspended{cursor:default}.KambiWidget-outcome--suspended .KambiWidget-outcome__odds-wrapper{display:none}.KambiWidget-action{overflow:hidden;display:block;border:none;border-radius:4px;padding:12px 8px;line-height:normal;font-size:20px;text-align:center;font-family:"Roboto Condensed", "Helvetica Neue", sans-serif;font-weight:bold;color:#fff;background:#C93D79;-webkit-transition:background-color 0.2s ease-out, color 0.2s ease-out;transition:background-color 0.2s ease-out, color 0.2s ease-out}.KambiWidget-action:hover{background:#cf5187}.KambiWidget-action:active{background:#b9336d}.KambiWidget-action:hover:active,.KambiWidget-action:focus{outline:0}.KambiWidget-action:disabled{background:#2F2F2F;color:#b6b6b6}.KambiWidget-primaryColor1{color:#f6f6f6}.KambiWidget-primaryColor2{color:#00c1de}.KambiWidget-primaryColor3{color:#FFED00}.KambiWidget-primaryColor4{color:#eee}.KambiWidget-primaryColor5{color:#C93D79}.KambiWidget-secondaryColor1{color:rgba(0, 0, 0, 0.87)}.KambiWidget-secondaryColor2{color:#fff}.KambiWidget-secondaryColor3{color:rgba(0, 0, 0, 0.87)}.KambiWidget-secondaryColor4{color:rgba(0, 0, 0, 0.87)}.KambiWidget-secondaryColor5{color:#fff}.KambiWidget-winPrimaryColor{color:#B8E986}.KambiWidget-drawPrimaryColor{color:#98D5F4}.KambiWidget-losePrimaryColor{color:#E98686}.KambiWidget-disabledPrimaryColor{color:#2F2F2F}.KambiWidget-neutralPrimaryColor{color:#333333}.KambiWidget-winSecondaryColor{color:rgba(96, 138, 54, 0.8)}.KambiWidget-drawSecondaryColor{color:rgba(57, 116, 146, 0.8)}.KambiWidget-loseSecondaryColor{color:rgba(172, 0, 0, 0.8)}.KambiWidget-disabledSecondaryColor{color:#b6b6b6}.KambiWidget-neutralSecondaryColor{color:#FFFFFF}.KambiWidget-headerPrimaryColor{color:#f6f6f6}.KambiWidget-headerSecondaryColor{color:rgba(0, 0, 0, 0.54)}    ';

      var head = document.getElementsByTagName('head')[0];

      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(mainone);

    }, //maincss 

    mcsstwo: function () {
      console.info('%c csstwo \u221a', 'background:blue;color:white;');
      var maintwo = '  ._2GxrYIfL4ocwDMDXG5B9cK{-webkit-justify-content:center;justify-content:center}._3VhzVuKZldCtRv5J2EPsSY{cursor:pointer;-webkit-flex:1;flex:1}._3ckHxuwM96lfZZnJgbsgH0{position:relative;padding:0 16px}._3ckHxuwM96lfZZnJgbsgH0._3_P7MBZxlZAZHbQ-F6_W9N{padding:0}._3tKoj0RObqZkwOpujMEGIN{overflow-x:hidden}._3YNAwWC3WBAEwTiUYFXNA1 ._3tKoj0RObqZkwOpujMEGIN{-webkit-overflow-scrolling:touch;overflow-x:scroll}._3Ja5nsZNXVRSBY5FSetfAi{display:-webkit-flex;display:flex;margin:0;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s}._3Ja5nsZNXVRSBY5FSetfAi > *{-webkit-flex:0 0 auto;flex:0 0 auto}.tQoAD6bkpCnN9_janZ8sD,._3dhh-SHcxz_6NJCv-JgQvH{position:absolute;top:0;bottom:0;width:35px;border:none;background:none;font-size:15px;font-weight:bold;cursor:pointer;outline:none;padding:0;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.tQoAD6bkpCnN9_janZ8sD[disabled],._3dhh-SHcxz_6NJCv-JgQvH[disabled]{display:none}.tQoAD6bkpCnN9_janZ8sD ._1kpoEP19rWgjycT60XuWv_,._3dhh-SHcxz_6NJCv-JgQvH ._1kpoEP19rWgjycT60XuWv_{fill:#000;opacity:.3;transition:opacity .3s}.tQoAD6bkpCnN9_janZ8sD:hover ._1kpoEP19rWgjycT60XuWv_,._3dhh-SHcxz_6NJCv-JgQvH:hover ._1kpoEP19rWgjycT60XuWv_{opacity:1}.tQoAD6bkpCnN9_janZ8sD{left:16px}._3dhh-SHcxz_6NJCv-JgQvH{right:16px}._3dhh-SHcxz_6NJCv-JgQvH ._1kpoEP19rWgjycT60XuWv_{-webkit-transform:scale(-1, 1);transform:scale(-1, 1);margin-left:25px}.NaLs4rYr1BcYZHAdNnDSi{cursor:pointer;position:relative;transition:background-color .5s;padding-bottom:3px;width:17.86%;height:44px;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}.NaLs4rYr1BcYZHAdNnDSi:hover{background-color:#f0f0f0}.NaLs4rYr1BcYZHAdNnDSi .ZYhBSbEUYy2VHTRU-4RPp{position:absolute;bottom:0;height:3px;left:0;right:0;visibility:hidden}.NaLs4rYr1BcYZHAdNnDSi._3QoSLu76faChrjjvX8VqzL{font-weight:bold}.NaLs4rYr1BcYZHAdNnDSi._3QoSLu76faChrjjvX8VqzL .ZYhBSbEUYy2VHTRU-4RPp{visibility:visible}.GejRRPuO4rHUaArwkYCeC{display:-webkit-flex;display:flex}.GejRRPuO4rHUaArwkYCeC > *{-webkit-flex:1;flex:1}._2S0ijU841xZjaTMN-ScnkA{display:inline-block;position:relative}._3cNS8fSyjZI9_uV8H_iej9{background:none;border:none;outline:none;padding:7px 7px 7px 7px;position:relative;white-space:nowrap}._3cNS8fSyjZI9_uV8H_iej9 i{border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid;border-color-top:#999;border-color-top:currentColor;display:inline-block;margin-left:5px;margin-bottom:1px}._1b2B001JsVUtLNOEVZUNCj{position:absolute;z-index:1;list-style:none;margin:4px;padding:0;border-radius:2px;box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.5);min-width:280px;text-align:left}._1b2B001JsVUtLNOEVZUNCj li{font-size:16px;padding:17px 16px;line-height:20px;cursor:pointer;white-space:nowrap}@media (max-width: 925px){._2S0ijU841xZjaTMN-ScnkA{position:initial}._1b2B001JsVUtLNOEVZUNCj{left:0;right:0;width:280px;width:100vw;width:calc(100vw - 8px)}}@media (min-width: 925px){._2gXbynwwkKJTtIq60hDhgH{right:auto !important;left:0 !important}._1DmAQyxCjJtoE4xXupSBDm{right:0 !important;left:auto !important}.kB6L4IyIpr1e6EKOSl4eo{top:0 !important;bottom:auto !important}._2XBnRzOW7_LM7CwUKCISFy{top:auto !important;bottom:0 !important}}._3a_1D8R_ViarZtyR3EQOFX{display:-webkit-flex;display:flex;padding:6px 16px}._358kK82Ay4n_giHi7q6bJe{font-size:14px;padding-top:8px;padding-bottom:8px}._2nPosas3_NukqgArIFdqQw{position:relative;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;height:36px;padding:0 10px}.t_U07d_YDIdalSCglAu-M{position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;padding:0;margin:0;opacity:0;border:none;background-color:currentColor;cursor:pointer;transition:background-color 0.2s ease-out, color 0.2s ease-out}.t_U07d_YDIdalSCglAu-M:hover{opacity:0.12}.t_U07d_YDIdalSCglAu-M:active{opacity:0.4}.t_U07d_YDIdalSCglAu-M:focus{outline:0 !important}.t_U07d_YDIdalSCglAu-M[disabled]:hover,.t_U07d_YDIdalSCglAu-M[disabled]:active{opacity:0;cursor:not-allowed}._3oRBeNTOX3WNEd4IPFgJOB{font-weight:bold;background-color:transparent;pointer-events:none;font-size:14px;text-align:left}.EUZnbEcG3SnWYh8hqERrI{border-bottom-style:solid;border-bottom-width:1px;font-size:12px;line-height:36px;height:64px;overflow:hidden;position:relative;display:-webkit-flex;display:flex;padding-left:16px;-webkit-align-items:center;align-items:center}._1SixNuIj9fVsdWVyJERGuu{height:32px;margin-right:12px;width:32px}._3Mq-ch_mN0CXINdygMO_Tt{max-width:calc(100% - 62px)}.FFRZeCnPg2utVvv6y28cu{line-height:16px;max-height:16px;min-height:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:16px;font-weight:bold;text-transform:uppercase}._39nixHWSE1OTk1nFLBMRm-{line-height:16px;max-height:16px;min-height:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}*{-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none}*,*::after,*::before{box-sizing:border-box} #bigfoot {font-family:"kambi-roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:12px;line-height:24px}#bigfoot {margin:0;padding:0;width:100%}html{min-width:100%;width:1px}a{text-decoration:none}strong{font-weight:bold}._2ObtyaTad5SzLYqKpsgOQw{-webkit-transform:none !important;transform:none !important}input:matches([type="button"],[type="submit"],[type="reset"]),input[type="file"]::-webkit-file-upload-button,button{margin:initial}.carousel-wrapper{position:relative;overflow:hidden}.carousel-wrapper *{margin:0;padding:0;box-sizing:border-box}.carousel-wrapper .slider-wrapper{overflow:hidden;margin:auto;width:100%;transition:height .15s ease-in;height:100%;position:relative}.carousel-wrapper .slider-wrapper .slider{display:-webkit-flex;display:flex;position:relative;list-style:none;width:100%;height:100%}.carousel-wrapper .slider-wrapper .slider .carousel-item{-webkit-flex:1 100%;flex:1 100%;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-flow:column;flex-flow:column;position:relative;min-width:100%;height:100%}.carousel-wrapper .slider-wrapper a{display:block;height:100%;width:100%}.carousel-wrapper .slider-wrapper .pseudo-anchor{height:100%;width:100%;cursor:pointer}.carousel-wrapper .slider-wrapper .img{background-size:cover;vertical-align:top;display:inline-block;pointer-events:none}.carousel-wrapper .slider-wrapper img{height:100%}.carousel-wrapper .slider-wrapper .carousel-legend-wrapper{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;position:absolute;bottom:0;left:0;width:100%;color:#fff;height:auto}.carousel-wrapper .slider-wrapper .carousel-legend-wrapper .carousel-legend{font-size:1.2rem;font-weight:800}.carousel-wrapper .slider-wrapper .carousel-legend-wrapper button{max-width:33.33%}._2OxpQtsHRSTr2u_Ynb4ksS{color:white;position:relative;padding:12px 0}._3QZWmDp1baLHc7JHCjQQFJ{-webkit-filter:brightness(90%);filter:brightness(90%);position:absolute;top:0;right:0;left:0;bottom:0;display:block;width:100%;min-width:100%;min-height:100%;overflow:hidden;-moz-transform:translateZ(1px)}._3ZNlUyZ8UEOla98u6xPPKX{position:absolute;top:0;right:0;left:0;bottom:0;display:block;width:100%;min-width:100%;min-height:100%;overflow:hidden}._3UJiKkB6Njjyh4Oi1accwg{fill:currentColor}*{-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none}*,*::after,*::before{box-sizing:border-box} #bigfoot {font-family:"kambi-roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:12px;line-height:24px} #bigfoot {margin:0;padding:0;width:100%}html{min-width:100%;width:1px}a{text-decoration:none}strong{font-weight:bold}._3hCDxQ7KGWjWACV_5FLrSW{-webkit-transform:none !important;transform:none !important}input:matches([type="button"],[type="submit"],[type="reset"]),input[type="file"]::-webkit-file-upload-button,button{margin:initial}*:last-child > ._3-odHunguDZIT9dHmFF29U{border-right:0}._3-odHunguDZIT9dHmFF29U{border-right:1px dotted rgba(255, 255, 255, 0.4);margin-top:6px;max-width:350px;width:350px;height:120px}@media (max-width: 320px){._3-odHunguDZIT9dHmFF29U{max-width:267px;width:267px;-webkit-flex:1 0 267px;flex:1 0 267px}}@media (min-width: 321px) and (max-width: 480px){._3-odHunguDZIT9dHmFF29U{max-width:300px;width:300px;-webkit-flex:1 0 300px;flex:1 0 300px}}@media (min-width: 481px) and (max-width: 568px){._3-odHunguDZIT9dHmFF29U{max-width:334px;width:334px;-webkit-flex:1 0 334px;flex:1 0 334px}}.DC7dFScaZtIUxM27dKnaT{display:-webkit-flex;display:flex;padding-top:6px;opacity:.9;font-size:12px;line-height:24px}.DC7dFScaZtIUxM27dKnaT ._1E5LWOkRG3O56f3HO99jo7{-webkit-flex:1;flex:1;padding-left:16px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.DC7dFScaZtIUxM27dKnaT ._2u-vzJa294rE4akQDb2Lvp{padding-right:16px;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-align-items:center;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}._2ZGrkQkADN6UCnHD2zeyBV{padding:6px 16px 12px 16px;-webkit-flex:1;flex:1;display:-webkit-flex;display:flex}._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU{-webkit-flex:1 1 auto;flex:1 1 auto;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;line-height:24px;overflow:hidden}._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU ._2XYs7xPaAkd3R13TG5JmhU{width:24px;height:24px}._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU ._3cgZi1U0EBvX4OE-J-pLgQ{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:14px;line-height:24px}._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._3QLR5_N8Xmm9fMcPQQtCWS{-webkit-justify-content:flex-start;justify-content:flex-start;margin-right:6px}._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._3QLR5_N8Xmm9fMcPQQtCWS ._2XYs7xPaAkd3R13TG5JmhU{margin-right:12px}._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._1FbptNEDPo-XN4vFgTHBlD{-webkit-justify-content:flex-end;justify-content:flex-end;margin-left:6px}._2ZGrkQkADN6UCnHD2zeyBV ._29A9JKLUCvdCZgU1LA_YsU._1FbptNEDPo-XN4vFgTHBlD ._2XYs7xPaAkd3R13TG5JmhU{margin-left:12px}._2ZGrkQkADN6UCnHD2zeyBV .JxGfh5nVOlonjTs7h9TFH{-webkit-flex:0 0 auto;flex:0 0 auto;line-height:24px;font-size:24px}._2ZGrkQkADN6UCnHD2zeyBV .JxGfh5nVOlonjTs7h9TFH small{font-size:14px;padding:0 6px;vertical-align:top}._2RLG4Me5TbicXjfYUxBfH2{display:-webkit-flex;display:flex;margin-left:16px;margin-right:16px}._2RLG4Me5TbicXjfYUxBfH2 > *{margin-left:3px;-webkit-flex:1;flex:1}._2RLG4Me5TbicXjfYUxBfH2 > *:first-child{margin-left:0}._2RLG4Me5TbicXjfYUxBfH2 ._3Fk-e8i32ASMw-NrXPAtBA{text-transform:uppercase}._2RLG4Me5TbicXjfYUxBfH2 ._3Fk-e8i32ASMw-NrXPAtBA em{color:red;padding-right:6px}._2BGlvm1kLFck9O2GFU4ylE,._24d6f3pjhfa71-59bfd2pl{position:absolute;top:-12px;bottom:-12px;width:8%;min-width:46px;border:none;background:none;font-size:15px;font-weight:bold;cursor:pointer;outline:none;padding:0;transition:opacity .3s}._2BGlvm1kLFck9O2GFU4ylE[disabled],._24d6f3pjhfa71-59bfd2pl[disabled]{opacity:0;cursor:default}._2BGlvm1kLFck9O2GFU4ylE ._2qHBrX_10eszn1kY7ZQlrc,._24d6f3pjhfa71-59bfd2pl ._2qHBrX_10eszn1kY7ZQlrc{fill:#fff;opacity:.15;transition:opacity .3s;margin:0 12px}._2BGlvm1kLFck9O2GFU4ylE:hover ._2qHBrX_10eszn1kY7ZQlrc,._24d6f3pjhfa71-59bfd2pl:hover ._2qHBrX_10eszn1kY7ZQlrc{opacity:1}._2BGlvm1kLFck9O2GFU4ylE{background:linear-gradient(90deg, rgba(0, 0, 0, 0.9) 16px, transparent);left:0;text-align:left}._24d6f3pjhfa71-59bfd2pl{background:linear-gradient(270deg, rgba(0, 0, 0, 0.9) 16px, transparent);right:0;text-align:right}._24d6f3pjhfa71-59bfd2pl ._2qHBrX_10eszn1kY7ZQlrc{-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}._2LrNf_NvtrBLjlIOAsdrUx{cursor:pointer}._1_MkP3PA1jHXnmX_bn5HQL{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;height:120px;overflow:visible}._1_MkP3PA1jHXnmX_bn5HQL i{background:no-repeat 50%;background-size:contain;height:90px;width:90px;min-width:90px}._1_MkP3PA1jHXnmX_bn5HQL._27uBOUWcyrddEFzxleqpmJ{width:0;max-width:0;direction:rtl}    ';

      var head = document.getElementsByTagName('head')[0];

      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(maintwo);

    }, //maincss 


    mcssthree: function () {
      console.info('%c cssthree \u221a', 'background:blue;color:white;');
      var mainone = '._1_MkP3PA1jHXnmX_bn5HQL i {min-width:213px !important; max-width:213px !important; height:90px;  }  i.kw-custom-logo-large-type {margin-top:0em !important;} #root ._1_MkP3PA1jHXnmX_bn5HQL {margin-right: 1.9em !important; height:126px !important; }   #bigfoot button:hover { background-color:transparent; color:#020202; font-weight:bolder; outline: 0px solid #001216;  } ';

      var head = document.getElementsByTagName('head')[0];

      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(mainone);

    }, //maincss 


    mcssfour: function () {
      console.info('%c cssfour \u221a', 'background:blue;color:white;');
          var mainone = '@media screen and (max-width:320px) {#bigfoot a {margin-top:70px !important;}   #Carousel: height:135px; overflow:hidden;}  @media screen and (max-width:440px) {#Carousel: height:140px; overflow:hidden;}    #Carousel .KambiWidget-outcome._3VhzVuKZldCtRv5J2EPsSY:hover {background-color: #efbf2d !important; }    #bigfoot ._2LrNf_NvtrBLjlIOAsdrUx{float:left}.carousel-control.right{right:37%!important;top:-29%!important}.carousel-control.left{left:7%!important;top:-29%!important}.carousel-control{height:55px!important;width:55px!important;background:none repeat scroll 0 0 #032b34b8 !important; border-radius:50%!important;top:22%!important;opacity:.5;line-height:50px!important;font-size:50px!important;position:absolute;color:#0a2e36!important}.carousel{margin-bottom:0;position:relative}._2BGlvm1kLFck9O2GFU4ylE #bigfoot:focus{box-shadow:none}._2BGlvm1kLFck9O2GFU4ylE #bigfoot a:hover{background:none!important}#bigfoot ._24d6f3pjhfa71-59bfd2pl{right:-2%!important}._2BGlvm1kLFck9O2GFU4ylE{display:block!important;opacity:.7!important;cursor:pointer;background:linear-gradient(450deg,rgba(0,0,0,0.35) 16px,transparent);left:5!important}svg._2qHBrX_10eszn1kY7ZQlrc #bigfoot:hover{fill:#f2f2f2!important;opacity:1!important}svg._2qHBrX_10eszn1kY7ZQlrc{fill:#627d82!important;opacity:.7!important}.carousel-control{left:-12px;height:40px;width:40px;background:none repeat scroll 0 0 #222;border:4px solid #fff;border-radius:23px 23px 23px 23px;margin-top:90px}.carousel-control.right{right:-12px}.carousel-indicators{right:50%;top:auto;bottom:-10px;margin-right:-19px}.carousel-indicators li{background:#cecece}  #carousel-indicators .active{background:#428bca}.carousel-control{line-height:46px!important;opacity:.25!important}.carousel-control #bigfoot:hover{line-height:46px!important;opacity:.8!important;background:none repeat scroll 0 0 #092c33!important}._2BGlvm1kLFck9O2GFU4ylE ._2qHBrX_10eszn1kY7ZQlrc,._24d6f3pjhfa71-59bfd2pl ._2qHBrX_10eszn1kY7ZQlrc bigfoot:hover{fill:#f2f2f2;opacity:.55} ';
      var head = document.getElementsByTagName('head')[0];

      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(mainone);

    }, //maincss 


    mcssfive: function () {
      console.info('%c cssfive \u221a', 'background:blue;color:white;');
      var style = document.createElement('style');
      style.type = "text/css";
      //bigfoot
      style.innerHTML = "#bigfoot ._3ZNlUyZ8UEOla98u6xPPKX { mix-blend-mode: luminosity !important; border-top:3px ridge #fff !important;  } \n";
      style.innerHTML += "#bigfoot ._3QZWmDp1baLHc7JHCjQQFJ {filter:brightness(80%) !important; background-color:#032b34 !important;   } \n";
      //carousel-inner
      style.innerHTML += ".carousel-inner {color:#eaeaea; padding: 0 1em; }    \n";
      //site-footer
      style.innerHTML += ".site-footer {position:relative; }    \n";
      //xclose
      style.innerHTML += ".xclose::after { position:absolute !important; content:'X'; font-size:22px; line-height:26px; border:1px solid #0d2126; } \n";
      style.innerHTML += ".xclose::after {z-index:10000; width:30px ;height:30px; right:.125%; bottom:100%; color:#feffff;  } \n";
      style.innerHTML += ".xclose::after {cursor:pointer; text-align:center; background:#274249; filter:brightness(50%); }   \n";
      style.innerHTML += ".xclose::after {transition:display 1s ease-in-out;  }    \n";

      //premier league    
      style.innerHTML += "#bigfoot ._1E5LWOkRG3O56f3HO99jo7 {text-align:left; }    \n";
      //each item -Ux
      style.innerHTML += "#bigfoot ._2LrNf_NvtrBLjlIOAsdrUx {margin-right:1em;  }    \n";

      //button team name + odds
      style.innerHTML += "#bigfoot button.KambiWidget-outcome._3VhzVuKZldCtRv5J2EPsSY:hover span {color:#191919; }    \n";
      style.innerHTML += "#bigfoot button.KambiWidget-outcome._3VhzVuKZldCtRv5J2EPsSY {transition:background .25s ease-in-out, color .5s ease;  }    \n";


      //arrows right
      style.innerHTML += "button._24d6f3pjhfa71-59bfd2pl:hover svg._2qHBrX_10eszn1kY7ZQlrc {fill:#fff !important; opacity:1 !important;    }    \n";
      //arrows left    
      style.innerHTML += "button._2BGlvm1kLFck9O2GFU4ylE:hover svg._2qHBrX_10eszn1kY7ZQlrc {fill:#fff !important; opacity:1 !important;    }    \n";
      style.innerHTML += ".carousel-control {mix-blend-mode:lighten; opacity:.45 !important;  }    \n";
      style.innerHTML += "button._24d6f3pjhfa71-59bfd2pl:hover a.right.carousel-control {background-color: #032b3400 !important;   }    \n";
      style.innerHTML += "button._2BGlvm1kLFck9O2GFU4ylE:hover a.right.carousel-control {background-color: #032b3400 !important;   }    \n";
      style.innerHTML += "button._24d6f3pjhfa71-59bfd2pl:hover,button._2BGlvm1kLFck9O2GFU4ylE:hover {transition:opacity .5s ease-in-out;}    \n";

      //reseting cross styling
      style.innerHTML += "reset-box-sizing, .reset-box-sizing *, .reset-box-sizing *:before, .reset-box-sizing *:after {-webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box;}   \n";

      //keyframes
      style.innerHTML += "@keyframes slideInFromBottom {0% {transform: translateY(200%); } 100% {transform: translateY(0); } }    \n";
      style.innerHTML += ".loaded {opacity:1; -moz-transition:opacity .22s;  -webkit-transition:opacity .22s ease-in; -o-transition:opacity .22s ease-in;transition:opacity .22s ease-in; }    \n";
      style.innerHTML += ".fadeout { background-color:#021416;-moz-transition:background-color .22s ease-in;-webkit-transition:background-color .22s ease-in;-o-transition:background-color .22s ease-in;transition:background-color .22s ease-in; }  \n";


      style.innerHTML += ".notloaded {opacity:0;  }    \n";
      style.innerHTML += "#bigfoot.banup {animation: 2.2s ease-in 0s 1 slideInFromBottom; }    \n";
               style.innerHTML += "#bigfoot {max-height:150px !important; }    \n";
               style.innerHTML += "._3cgZi1U0EBvX4OE-J-pLgQ {cursor:default !important;} ._2u-vzJa294rE4akQDb2Lvp {cursor:default !important;}";
      
          
          style.innerHTML += "#bigfoot ._24d6f3pjhfa71-59bfd2pl { z-index: 10000; right:0% !important; height:150px !important; cursor:pointer !important; } #bigfoo ._2BGlvm1kLFck9O2GFU4ylE { height:150px !important;}  \n";

          style.innerHTML += 'a.right.carousel-control {margin-top:70px !important;} a.left.carousel-control {margin-top:70px !important;}';
          
      //append to head
      document.getElementsByTagName('head')[0].appendChild(style);


    }, //mcssfive - banner changes
      
      
      
      
    mcsssix: function () {
      console.info('%c cssfour \u221a', 'background:blue;color:white;');
      
               var mainone = ' .carousel {position: relative;}.carousel-inner {position: relative;width: 100%;overflow: hidden;}.carousel-inner > .item {position: relative;display: none;-webkit-transition: .6s ease-in-out left;-o-transition: .6s ease-in-out left;transition: .6s ease-in-out left;}.carousel-inner > .item > img,.carousel-inner > .item > a > img {line-height: 1;}@media all and (transform-3d), (-webkit-transform-3d) {.carousel-inner > .item {-webkit-transition: -webkit-transform .6s ease-in-out;-o-transition: -o-transform .6s ease-in-out;transition: transform .6s ease-in-out;-webkit-backface-visibility: hidden;backface-visibility: hidden;-webkit-perspective: 1000px;perspective: 1000px;}.carousel-inner > .item.next,.carousel-inner > .item.active.right {left: 0;-webkit-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);}.carousel-inner > .item.prev,.carousel-inner > .item.active.left {left: 0;-webkit-transform: translate3d(-100%, 0, 0);transform: translate3d(-100%, 0, 0);}.carousel-inner > .item.next.left,.carousel-inner > .item.prev.right,.carousel-inner > .item.active {left: 0;-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}.carousel-inner > .active,.carousel-inner > .next,.carousel-inner > .prev {display: block;}.carousel-inner > .active {left: 0;}.carousel-inner > .next,.carousel-inner > .prev {position: absolute;top: 0;width: 100%;}.carousel-inner > .next {left: 100%;}.carousel-inner > .prev {left: -100%;}.carousel-inner > .next.left,.carousel-inner > .prev.right {left: 0;}.carousel-inner > .active.left {left: -100%;}.carousel-inner > .active.right {left: 100%;}.carousel-control {position: absolute;top: 0;bottom: 0;left: 0;width: 15%;font-size: 20px;color: #fff;text-align: center;text-shadow: 0 1px 2px rgba(0, 0, 0, .6);background-color: rgba(0, 0, 0, 0);filter: alpha(opacity=50);opacity: .5;}.carousel-control.left {background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);background-image: -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));background-image: linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#80000000", endColorstr="#00000000", GradientType=1);background-repeat: repeat-x;}.carousel-control.right {right: 0;left: auto;background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);background-image: -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));background-image: linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000", endColorstr="#80000000", GradientType=1);background-repeat: repeat-x;}.carousel-control:hover,.carousel-control:focus {color: #fff;text-decoration: none;filter: alpha(opacity=90);outline: 0;opacity: .9;}.carousel-control .icon-prev,.carousel-control .icon-next,.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right {position: absolute;top: 50%;z-index: 5;display: inline-block;margin-top: -10px;}.carousel-control .icon-prev,.carousel-control .glyphicon-chevron-left {left: 50%;margin-left: -10px;}.carousel-control .icon-next,.carousel-control .glyphicon-chevron-right {right: 50%;margin-right: -10px;}.carousel-control .icon-prev,.carousel-control .icon-next {width: 20px;height: 20px;font-family: serif;line-height: 1;}.carousel-control .icon-prev:before {content: "\2039";}.carousel-control .icon-next:before {content: "\203a";}.carousel-indicators {position: absolute;bottom: 10px;left: 50%;z-index: 15;width: 60%;padding-left: 0;margin-left: -30%;text-align: center;list-style: none;}.carousel-indicators li {display: inline-block;width: 10px;height: 10px;margin: 1px;text-indent: -999px;cursor: pointer;background-color: #000 \9;background-color: rgba(0, 0, 0, 0);border: 1px solid #fff;border-radius: 10px;}.carousel-indicators .active {width: 12px;height: 12px;margin: 0;background-color: #fff;}.carousel-caption {position: absolute;right: 15%;bottom: 20px;left: 15%;z-index: 10;padding-top: 20px;padding-bottom: 20px;color: #fff;text-align: center;text-shadow: 0 1px 2px rgba(0, 0, 0, .6);}.carousel-caption .btn {text-shadow: none;}@media screen and (min-width: 768px) {.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-prev,.carousel-control .icon-next {width: 30px;height: 30px;margin-top: -10px;font-size: 30px;}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev {margin-left: -10px;}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next {margin-right: -10px;}.carousel-caption {right: 20%;left: 20%;padding-bottom: 30px;}.carousel-indicators {bottom: 20px;}}  ';
            
               var head = document.getElementsByTagName('head')[0];

      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(mainone);

    }, //maincss 


    banner: function () {
      debugger;
      console.info('%c banner \u221a', 'background:blue;color:white;');
      document.body.classList.remove('notloaded');
      var banner = document.createElement('div');
      banner.id = 'bigfoot';
      banner.className = 'notloaded';
      banner.innerHTML += '<div class="KambiWidget-card-text-color KambiWidget-card-background-color KambiWidget-font"> <div id="root"> <div class="_2OxpQtsHRSTr2u_Ynb4ksS"> <div class="_3QZWmDp1baLHc7JHCjQQFJ KambiWidget-primary-color" style="background-color: currentcolor;"> <div class="_3ZNlUyZ8UEOla98u6xPPKX" style="background:url(https://sb.monetate.net/img/1/748/1249748.jpg); background-repeat: no-repeat; mix-blend-mode: multiply; background-size: cover;"></div></div><div class="_3ckHxuwM96lfZZnJgbsgH0" style="opacity: 1;"> <div class="_3tKoj0RObqZkwOpujMEGIN"> <div class="_3Ja5nsZNXVRSBY5FSetfAi"> <div class="_2LrNf_NvtrBLjlIOAsdrUx premierleague"> <div class="_1_MkP3PA1jHXnmX_bn5HQL" style="width:230px; height:90px; max-width:230px;"><i class="kw-custom-logo-large-type" style="background:url(https://sb.monetate.net/img/1/748/1261961.png);"></i> <a data-slide="prev" href="#Carousel" class="_2BGlvm1kLFck9O2GFU4ylE left carousel-control"> <svg class="_2qHBrX_10eszn1kY7ZQlrc" width="22px" height="36px" viewBox="0 860 420 500" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path id="arrowLeft" transform="scale(1, -1) translate(0, -1500)" d="M358.286 640q0-7.429-5.714-13.143l-224.571-224.571 224.571-224.571q5.714-5.714 5.714-13.143t-5.714-13.143l-28.571-28.571q-5.714-5.714-13.143-5.714t-13.143 5.714l-266.286 266.286q-5.714 5.714-5.714 13.143t5.714 13.143l266.286 266.286q5.714 5.714 13.143 5.714t13.143-5.714l28.571-28.571q5.714-5.714 5.714-13.143z"> </path> </svg></a><a data-slide="next" href="#Carousel" class="_24d6f3pjhfa71-59bfd2pl right carousel-control"> <svg class="_2qHBrX_10eszn1kY7ZQlrc" width="22px" height="36px" viewBox="0 860 420 500" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path id="arrowRight" transform="scale(1, -1) translate(0, -1500)" d="M358.286 640q0-7.429-5.714-13.143l-224.571-224.571 224.571-224.571q5.714-5.714 5.714-13.143t-5.714-13.143l-28.571-28.571q-5.714-5.714-13.143-5.714t-13.143 5.714l-266.286 266.286q-5.714 5.714-5.714 13.143t5.714 13.143l266.286 266.286q5.714 5.714 13.143 5.714t13.143-5.714l28.571-28.571q5.714-5.714 5.714-13.143z"> </path> </svg> </a></div></div></div></div> ';

      //append banner
      if (global.location.href == "https://www.grosvenorcasinos.com/" || "https://www.grosvenorcasinos.com/#close") {
        if (global.screen.width >= 1340) {
           //before footer main container
           


          if (document.querySelector('.site-footer .container') != undefined || document.querySelector('.site-footer .container') != null) {
            //debugger;
            var fcon = document.querySelector('.site-footer .container');
            fcon.parentElement.insertBefore(banner, fcon);
            



          }


        } else if (global.screen.width <= 1339) {

          if (document.querySelector('.site-footer .container-fluid') != undefined || document.querySelector('.site-footer .container-fluid') != null) {
            banner.style.marginBottom = 0;
            var fcon = document.querySelector('.site-footer .container-fluid');
            fcon.parentElement.insertBefore(banner, fcon);
           


          }
          
          else if (document.querySelector('.site-footer .container') != undefined || document.querySelector('.site-footer .container') != null) {
            banner.style.marginBottom = 0;
            var fcon = document.querySelector('.site-footer .container');
            fcon.parentElement.insertBefore(banner, fcon);

          }
          

        }//else if 1339


      } //if not null


      function callout() {
        clearTimeout(banup);
      }



    }, //banner 


    isSports: function () {
      console.info('%c isSports \u221a', 'background:blue;color:white;');
      //open popup for the event
      if (global.location.href.indexOf('sport') > -1) {
        // if (document.querySelector('.KambiBC-mod-outcome__label-wrapper') != undefined) {
        //   var cli = document.querySelector('.KambiWidget-outcome._3VhzVuKZldCtRv5J2EPsSY');

        //   cli.click();
        // }
        document.addEventListener('DOMContentLoaded', function(e) {
              var banner = document.getElementById('bigfoot');
              banner.className = 'notloaded';

          
        },false);
        
      } //if sports


    }, //isSports


    slider: function () {
      console.log('go on');
      $(document).ready(function () {
        $('#Carousel').carousel({
              pause: "hover",
              interval: false,
              wrap: false,
              keyboard: false     
          
        });
      });


    }, //slider fn


    tidyup: function () {
      //removes football
      var lo = document.querySelector('.kw-custom-logo-large-type');
      var premierleague = document.querySelector('.premierleague');
               

      if (global.screen.width <= 1024) {
        lo.style.display = 'none';
        premierleague.style.display = 'none';
      }

      var valodds = new Date();
      valodds = valodds.getTime();


      //root
      document.getElementById('bigfoot').className += " xclose";
      //x marks close
      var xclose = document.querySelector('#bigfoot.xclose');
               
          //all items
          if(document.querySelectorAll('.item') != null) {
                    
              var count = 0;   
              //event onclick
              xclose.addEventListener('click', function (e) {
                  //e.preventDefault();
                  
                  if (e.target.classList[0] == "site-body") {
                      e.preventDefault();
                  } 
                  else if ((e.target.className == "xclose") || (e.target.className == "xclose banup")) {

                    document.getElementById('bigfoot').style.display = "none";
                    document.querySelector('.xclose').style.display = "none";

                  }//else if


              }, false);

               
               
          }//if items loaded
               
               

    } //tidypu

  }; //SL
  
         SL.init(); 

})(window);