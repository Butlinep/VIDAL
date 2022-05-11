///////////////////////BOSS//////OFC///////////////////////////////////////////////////////
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const figlet = require('figlet')
const fs = require("fs");
const { version, bugs } = require('./package.json')
const { banner, start, success, getGroupAdmins } = require("./lib/functions");
const fetch = require("node-fetch");
const moment = require("moment-timezone");
blocked = [];
const { color } = require('./lib/color')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "VIP ⚡";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "VIP ⚡";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "VIP ⚡";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "VIP ⚡️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "VIP ⚡";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "VIP ⚡";
    }
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " horas, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minutos, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["51902061233-1621430788@g.us"]
prefix = '#'
shp = '⬡'
owner = "51902061233@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
require("./index.js");
nocache("./index.js", (module) => console.log(`${module} ah sido actualizado.`));
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const starts = async (client = new WAConnection()) => {
  client.logger.level = "warn";
  client.version = [2, 2143, 3];
  client.browserDescription = ["Boss ofc", "Youtube", "3.0"];
console.log(color(figlet.textSync('', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`      CREADOR BOSS OFC` ,'white'))
console.log(color(``, 'cyan'))
console.log(color(`   [•]`, 'white'), color(`Servidor    : ${ucapanWaktu}`, 'white'))
console.log(color(`   [•]`, 'white'), color(`Bot Version : 2.1.2`, 'white'))
console.log(color(`   [•]`, 'white'), color(`Estado      : Activo`, 'white'))
console.log(color(`   [•]`, 'white'), color(`Usuario     : Vidal Tec`, 'white'))
console.log(color(``, 'white'))
console.log(color(figlet.textSync('', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
  client.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" Escanea el codigo en 30 segundos"),
      client.sendMessage(`51964441224@s.whatsapp.net`, `「 *USER NUEVO* 」\n\n  ʙᴏᴛ ᴄᴏɴᴇᴄᴛᴀᴅᴏ`, MessageType.extendedText)
          
    );
  });

  fs.existsSync("./session.json") && client.loadAuthInfo("./session.json");
  client.on("connecting", () => {
    start("2", "Conectando...");
  });
  client.on("open", () => {
    success("2", "Conectado");
  });
await client.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./session.json",JSON.stringify(client.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/G3a3AQndqS5J45eGgfvhd`
 client.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 
client.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '51902061233-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'Boss oficial',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Boss ofc;;;\nFN:Creador\nitem1.TEL;waid=51902061233:+51 902 061 233\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await client.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Grupo abierto ] \n\n_\n_Ya pueden enviar mensajes_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Grupo Abierto ] - En ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Grupo Cerrado ] \n\n_Grupo Cerrado ya no pueden enviar mensajes_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Grupo Cerrado ]  En ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Nueva Descripción ] \n\n La Nueva Descripción es :\n\n${anu.desc}`
client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ NUEVA DESC ] - En ${metdata.subject}`)
  }
})
  client.on("group-participants-update", async (anu) => {
    try {
      groupMet = await client.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await client.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await client.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anu.jid, "Hola, Soy el bot de ventas.\nDeseas mis servicios?\nMi número wa.me/51964441224", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(client.user.jid)) {      
             const mdata = await client.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await client.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const netf = fs.readFileSync('./stik/netflix.jpeg')
             const bosco1 = await client.prepareMessage("0@s.whatsapp.net", netf, MessageType.location,{ thumbnail: netf})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `✅ *BOT DE VENTAS*`
                welcomeBut = [{buttonId:`no cambiar`,buttonText:{displayText:'OKEY BROSITO'},type:1}]
                welcomeButt = { contentText: `*Hola* @${num.split('@')[0]}\n*¡Bienvenido al grupo VIDAL TEC!* 🌱

🛑 *Suscribete a mi canal de Youtube*
https://youtu.be/AboVKgVZjp8
🟢 *Escuchá mis canciones en Spotify*
https://open.spotify.com/artist/6o2IFYsaiT3bJAQcA0vFYj?si=sSaYz3DZSKSKt_N7kV_J1Q
🔵 *Sígueme en mi Fan Page*
https://www.facebook.com/vidalsalcedozea/
🔰 *Vendo servidores privados a full velocidad de cualquier operador :*

✅ *𝑬𝒏𝒕𝒆𝒍*
✅ *𝑪𝒍𝒂𝒓𝒐*
✅ *𝑩𝒊𝒕𝒆𝒍*
✅ *𝑴𝒐𝒗𝒊𝒔𝒕𝒂𝒓*
✅ *𝑭𝒍𝒂𝒔𝒉 𝑴𝒐𝒃𝒊𝒍𝒆*

✅ *CELL : wa.me/51973504044*`, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'netf', "contextInfo": { "mentionedJid" : [num], },})
                 }      
                 /*if (anu.action == 'remove' && !mem.includes(client.user.jid)) {
                const mdata = await client.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Gᴏᴏᴅ Bʏᴇ* 👋🏻\n@${num.split('@')[0]}\n\n𝘈𝘥𝘪𝘰𝘴 𝘢𝘣𝘰𝘳𝘵𝘰, 𝘌𝘴𝘱𝘦𝘳𝘰 𝘲𝘶𝘦 𝘯𝘰 𝘵𝘦 𝘷𝘶𝘦𝘭𝘷𝘢 𝘢 𝘷𝘦𝘳 𝘱𝘰𝘳 𝘢𝘲𝘶𝘪.\n\nNEW •ც૦੮`
                goodbyeBut = [{buttonId:`htfbjkkkn`,buttonText:{displayText:'BYE'},type:1}, {buttonId:`miembros`,buttonText:{displayText:'MIEMBROS'}, type:1}]
                goodbyeButt = { contentText: ` `, footerText: `${out}`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                client.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
            }
      if (anu.action == "promote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/promote?name=${anu_user}&msg=Ahora%20eres%20admin&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} Bienvenido al mundo de los administradores ⚡`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }

      if (anu.action == "demote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }

        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/demote?name=${anu_user}&msg=Ya%20no%20eres%20admin&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} Gracias por tu servicio 😔🥀`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }*/
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  //ANTIDELETE
 antidel = false
  client.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
   if (antidel === false) return
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("7 noviembre 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
     ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     const type = Object.keys(m.message)[0];

    client.copyNForward(m.key.remoteJid, m.message);
  });
  client.on("chat-update", async (message) => {
    require("./index.js")(client, message);
  });
  isBattre = "No Detectado"; //No añadido
  isCharge = "No Detectado"; // Da flojera literal
  client.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
antical = false
client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
client.sendMessage(call, `*Para que llamas yo ni te conozco tarad@ de mierda*`, MessageType.text)
.then(() => client.blockUser(call, "add"))
})
  client.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
};

function nocache(module, cb = () => {}) {
  console.log("𝙾𝚆𝙽𝙴𝚁", `'𝙱𝙾𝚂𝚂 𝙾𝙵𝙲'`, "");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();
