 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "2347045035241";
global.sudo = process.env.SUDO || "94768533896";
global.owner = process.env.OWNER_NUMBER || "2347045035241";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERaSCt5WkJ6MFNYNFJYUmJTeTFCVE9HeDVaYzNVeU1PWFhIa3JxWFIyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk9ZUXQ4aFU0MW4xMkFmNG1oc0ladUhsajFobytZVExCakRWdnhKaGtYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRmkzV2h1TlY2NnJJbFU2clNXQThIYWI3QnZKNzdPdy9rdXFkYzZvRkZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUUIwN1UrL1lDNmZZWW5zbVZTWGpkcUR5NFhNcXc4M3RRTGsxdnAxdDJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVNZXZaK0tOazhrOHVPeWg2RlI1OFBBVTQydkVuaFliUi95Z2JMc210V3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJrZXhZTjJ6ZlhqelpJMVRYbkNDZFptb3c3T1dpWEcwNEZ3Sm5nempoakk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNGUUN0a0NGSjBBY0pBYndqSVFzZllUTjAvZjNmUG5TdG5CK3lkOS9rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtFSCtvS3RrS2FCNjZTMjhxanJWdk9OalpNdGpWUnVrSGEwWXZOd0EzUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZuZFdUMXIzVCs1VHNTZUU0Z1RjeFpUTERGZGdGYmU5RmFvNnlFMWhxRkZxa1czZ25Od2RUZ3BERk1mdHVtS01TanRyMHJBa2N6aXFmZWxvaEorRkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJ4ODlIak5hcnRuWXIraDQzMGsyUkplajI3WXE5dkc0cUYwTUZnMU96NW9NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY4NTMzODk2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY1Qzk2NDEzNDhENTQ4ODBGQzRENjA2MTJENDdBNEZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM0NzIxNDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY4NTMzODk2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBFOTU3QTFBNkQ2MkFFMzk1MUZFNjcwRDc2NEVFQzFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM0NzIxNDl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRXV1pyc25mUkdTQ29rLXZHUnZhdnciLCJwaG9uZUlkIjoiZjExODIwNDktNjVlOC00NTA1LTkzZTUtYjI1NjI3ZWI3NDZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ5TlVJT2xNSVVWTVp1K2hVOUVJeDN5dDE1bz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0Y3VoVW1HWS9WbmhHUGMzemd2dWNOUWIrMVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNFZOSzhWNkQiLCJtZSI6eyJpZCI6Ijk0NzY4NTMzODk2OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidmlzaHdhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdnJzdWdERUlMZnlyb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDTEFmMjVpOHg4RmZqRTJnOWdGRk1LZDFlVGVVckZnOCs2aXROQTdUcUI4PSIsImFjY291bnRTaWduYXR1cmUiOiJEWnB5dTQ3c1dBd2xoblZUMElUMStSZ0NwZDE1TG82cmU0NGYvZXh3QjE4aHJWRGszRUs2VnRRTnE5NG90THFQbUo2OVlIbWpxNlgxR3BoTVRPcWlCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibnpoY3R3UU5PZHFIQ3FBMDdTS0M0OG9Ud2JsVkwzay81NCt3WmhsbTFLV0xZSVNwVklLMnluTk9xT3lwMDgxb1M2T1ZYYW5HOHBCUytWcEYxV3JoQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2ODUzMzg5NjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFpd0g5dVl2TWZCWDR4Tm9QWUJSVENuZFhrM2xLeFlQUHVvclRRTzA2Z2YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM0NzIxNDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjhjIn0= " // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
