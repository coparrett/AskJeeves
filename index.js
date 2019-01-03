const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json")



client.on('ready', () => {
   console.log("Connected as " + client.user.tag)

   client.user.setActivity("Lurking" , {type: "WATCHING"})

   client.guilds.forEach((guild) => {
     console.log(guild.name)
     guild.channels.forEach((channel) => {
       console.log(` - ${channel.name} ${channel.typ} ${channel.id}`)
     })
    
    
    })
  
    client.on('message', (receivedMessage) => {
      if (receivedMessage.author.id !== config.ownerID) {
        return
      }
  

      if (receivedMessage.content.includes("hi Jeeves"))  {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Hi! How can I help you?")

        receivedMessage.react("😃")
      } 
      
      if (receivedMessage.content.includes("hi jeeves"))  {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Hi! How can I help you?")

        receivedMessage.react("😃")
      } 

      if (receivedMessage.content.includes("thanks Jeeves"))  {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "No Problem! Glad I can help")

        receivedMessage.react("😃")
      } 
      if (receivedMessage.content.includes("thanks")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "No Problem! Glad I can help")

        receivedMessage.react("😃")
      } 
      if (receivedMessage.content.includes("how are you doing jeeves")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Not too bad, enjoying the day. You? 😎")

        receivedMessage.react("👍")
      } 

      if (receivedMessage.content.includes("good")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "That's great to hear!")

        receivedMessage.react("👍")
      } 

      if (receivedMessage.content.includes("meh")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sorry to hear that")

        receivedMessage.react("😕")
      } 

      if (receivedMessage.content.includes("horrible")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sorry to hear that. I hope it gets better soon")

        receivedMessage.react("😞")
      } 

      if (receivedMessage.content.includes("coffee")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Coming right up! 😁 ")

        receivedMessage.react("☕")
      } 

     

      if (receivedMessage.content.includes("i need something stronger")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍷🍸🍹🍺🥃🍶")

        receivedMessage.react("🤣")
      } 


      if (receivedMessage.content.includes("beer")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍺")

        receivedMessage.react("🤣")
      } 
      if (receivedMessage.content.includes("Beer")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍺")

        receivedMessage.react("🤣")
      } 

      if (receivedMessage.content.includes("wine")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍷")

        receivedMessage.react("🤣")
      } 
      if (receivedMessage.content.includes("Whine")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍺")

        receivedMessage.react("🤣")
      } 

      if (receivedMessage.content.includes("scotch")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🥃")

        receivedMessage.react("🤣")
      } 


      if (receivedMessage.content.includes("Vodka")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍸")

        receivedMessage.react("🤣")
      }

     if (receivedMessage.content.includes("vodka")) {
          receivedMessage.channel.send(
          receivedMessage.author.toString() + " : " + "Sure!!!🍸")
  
          receivedMessage.react("🤣")
          }

      if (receivedMessage.content.includes("Scotch")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍺")

        receivedMessage.react("🤣")
      } 

      if (receivedMessage.content.includes("whiskey")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🥃")

        receivedMessage.react("🤣")
      } 

      if (receivedMessage.content.includes("Whiskey")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍺")

        receivedMessage.react("🤣")
      } 

      if (receivedMessage.content.includes("tequila")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🥃")

        receivedMessage.react("🤣")
      } 

      if (receivedMessage.content.includes("Tequila")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍺")

        receivedMessage.react("🤣")
      } 

      if (receivedMessage.content.includes("sake")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍶")

        receivedMessage.react("🤣")
      } 
      if (receivedMessage.content.includes("Sake")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍶")

        receivedMessage.react("🤣")
      } 
      if (receivedMessage.content.includes("soju")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍶")

        receivedMessage.react("🤣")
      } 
      if (receivedMessage.content.includes("Soju")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sure!!!🍶")

        receivedMessage.react("🤣")
      } 
      if (receivedMessage.content.includes("cheers")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Cheers!")

        receivedMessage.react("🍻")
      } 

      if (receivedMessage.content.includes("happy valentines")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Happy Valentines Day!")

        receivedMessage.react("😍")
      } 

      if (receivedMessage.content.includes("Happy Valentines")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Happy Valentines Day!")

        receivedMessage.react("😍")
      } 
      if (receivedMessage.content.includes("I need sleep")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sleep well and sweet dreams")

        receivedMessage.react("😴")
      } 
      if (receivedMessage.content.includes("i need sleep")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Sleep well and sweet dreams")

        receivedMessage.react("😴")
      } 

      if (receivedMessage.content.includes("I'm tired")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Try and get some rest")

        receivedMessage.react("😴")
      } 

      if (receivedMessage.content.includes("later")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "in a while crocodile")

        receivedMessage.react("🤪")
      } 

      if (receivedMessage.content.includes("bye")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "see you again soon!")

        receivedMessage.react("😉")
      } 

      if (receivedMessage.content.includes("Test")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "I hate tests")

      
      } 

      if (receivedMessage.content.includes("test")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "I hate tests")

      
      } 

      if (receivedMessage.content.includes("lala")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "sing a happy song!")

        receivedMessage.react("🤣")
      } 

      if (receivedMessage.content.includes ("formation")) {
        receivedMessage.channel.send(receivedMessage.author.toString() + " : " 
        + "Please visit the formations channel for additional information <#529362691651797013> ")
         
      }

      if (receivedMessage.content.includes ("pvp")) {
        receivedMessage.channel.send(receivedMessage.author.toString() + " : " 
        + "Please visit the formations channel for additional information <#529362691651797013> ")
         
      }

      if (receivedMessage.content.includes ("pve")) {
        receivedMessage.channel.send(receivedMessage.author.toString() + " : " 
        + "Please visit the formations channel for additional information <#529362691651797013> ")
         
      }

      if (receivedMessage.content.includes ("wolf formation")) {
        receivedMessage.channel.send(receivedMessage.author.toString() + " : " 
        + "Please visit the formations channel for additional information <#529362691651797013> ")
         
      }

      if (receivedMessage.content.includes ("KvK")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #kvk channel for additional information <#529362735872475139> ")
      }

      if (receivedMessage.content.includes ("kvk")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #kvk channel for additional information <#529362735872475139>")
      }

      if (receivedMessage.content.includes ("UAC")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #uac channel for additional information <#529362754562293800>")
      }

      if (receivedMessage.content.includes ("uac")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #uac channel for additional information <#529362754562293800>")
      }

      if (receivedMessage.content.includes ("gear")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #gears channel for additional information <#529363070737317909>")
      }

      if (receivedMessage.content.includes ("demon hunter")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #gears channel for additional information <#529363070737317909>")
      }

      if (receivedMessage.content.includes ("sun king")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #gears channel for additional information <#529363070737317909>")
      }

      if (receivedMessage.content.includes ("retribution gear")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #gears channel for additional information <#529363070737317909>")
      }

      if (receivedMessage.content.includes ("equipment")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #gears channel for additional information <#529363070737317909>")
      }

      if (receivedMessage.content.includes ("gems")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #gems channel for additional information <#529444103788691497>")
      }
      if (receivedMessage.content.includes ("savant gems")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #gems channel for additional information <#529444103788691497>")
      }

      if (receivedMessage.content.includes ("research gems")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #gems channel for additional information <#529444103788691497>")
      }

      if (receivedMessage.content.includes ("creation")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #creations channel for additional information <#529363090207146001>")
      }

      if (receivedMessage.content.includes ("night seige")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #night-seige channel for additional information <#529363175892713486>")
      }

      if (receivedMessage.content.includes ("airship")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #airship channel for additional information <#529363157269872658>")
      }

      if (receivedMessage.content.includes ("airship ability")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #airship channel for additional information <#529363157269872658>")
      }

      if (receivedMessage.content.includes ("airship abilities")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #airship channel for additional information <#529363157269872658>")
      }

      if (receivedMessage.content.includes ("airship setup")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #airship channel for additional information <#529363157269872658>")
      }

      if (receivedMessage.content.includes ("airship skill")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #airship channel for additional information <#529363157269872658>")
      }

      if (receivedMessage.content.includes ("airship skills")) {
        receivedMessage.channel.send(
        receivedMessage.author.toString() + " : " + "Please visit the #airship channel for additional information <#529363157269872658>")
      }


    })

  

  })

 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }else
 
  if (message.content.startsWith("ding")) {
    message.channel.send("dong!");
  }
});

client.login(config.token)

