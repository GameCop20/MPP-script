try {

    // === variables ===
    const devs = [
        '4e9d7ca429fcfa460efff99a',
        '97f34e0fdf4a942adae2e2af'
    ]

  // === functions ===
  const sendChat = (msg, id) => {
    MPP.client.sendArray([{ m: `a`, message: msg, reply_to: id }]);
  };

  const sendArray = (m, data = {}) => {
    MPP.client.sendArray([{ m: m, ...data }]);
  };

  let lang = localStorage.i18nextLng || `en`;

  // === prefix ===
  let p = ``;

  // === message event listener ===
  MPP.client.on("a", (msg) => {
    // === argument  variables ===
    let args = msg.a.split(" ");
    let cmd = args[0];
    let input = msg.a.substring(cmd.length).trim();

    // === commands ===

    if (!cmd.startsWith(p)) return;

    // === main ===

    // === help ===
    if (cmd === `${p}help`) {
      if (!input) {
        if (lang === `en`) return sendChat(`Please choose category - Main | Fun | Dev.`, msg.id);
        else if (lang === `ru`) return sendChat(`Пожалуйста выберите категорию - Главная | Веселье | Разработка`, msg.id);
        else return sendChat(`Unknown language.`)
      }
    }

    return sendChat(`Command not found.`, msg.id);
  });

  // help, about, dvd,  js, rainbow, language
} catch (err) {
  if (err) console.error(`Unable to connect script: ${err.message}`);
}
