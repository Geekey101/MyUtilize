hostname=spclient.wg.spotify.com

^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/QXPublic/MyUtilize/main/SourceParser/Spotify_proto.js
^https:\/\/spclient\.wg\.spotify\.com\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/ url script-request-header https://raw.githubusercontent.com/QXPublic/MyUtilize/main/SourceParser/Spotify_json.js
