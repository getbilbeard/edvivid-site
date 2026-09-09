(function () {
  const sampleUrl = "https://forms.edvivid.com/sample_request_form.html";

  const answers = {
    start:
      "Hi, I'm Vivi. I can help you see how EdVivid turns school updates into short visual announcement videos. What do you want to know?",
    sample:
      "The free sample uses your school name, website, mascot or logo, date, and notes to create a private preview video before you decide on a plan.",
    time:
      "EdVivid saves staff time by turning a normal school update into a ready-to-review video, without needing a daily video crew.",
    uses:
      "Schools can use EdVivid for morning news, parent reminders, spirit days, meetings, weather, jokes, assemblies, and campus events.",
    safe:
      "EdVivid is school-safe by design. Student photos should not be used as mascots, and videos are reviewed before client delivery.",
    price:
      "Start with a free sample. A single finished announcement video is $149, and the Weekly Starter is $499 per month for four custom videos."
  };

  const prompts = [
    ["sample", "How does the free sample work?"],
    ["time", "How does this save time?"],
    ["uses", "What can schools use it for?"],
    ["safe", "Is it school-safe?"],
    ["price", "What does it cost?"]
  ];

  const root = document.createElement("aside");
  root.className = "help-bot";
  root.setAttribute("aria-label", "EdVivid help bot");
  root.innerHTML = `
    <button class="help-bot-launcher" type="button" aria-expanded="false">
      <img src="edvivid-circle-logo.png" alt="">
      <span>Ask Vivi</span>
    </button>
    <section class="help-bot-panel" hidden>
      <div class="help-bot-head">
        <img src="edvivid-circle-logo.png" alt="">
        <div>
          <strong>Vivi</strong>
          <span>EdVivid helper</span>
        </div>
        <button class="help-bot-close" type="button" aria-label="Close help bot">x</button>
      </div>
      <div class="help-bot-body">
        <p class="help-bot-message">${answers.start}</p>
        <div class="help-bot-prompts"></div>
      </div>
      <a class="help-bot-cta" href="${sampleUrl}">Request a free sample</a>
    </section>
  `;

  document.body.appendChild(root);

  const launcher = root.querySelector(".help-bot-launcher");
  const panel = root.querySelector(".help-bot-panel");
  const close = root.querySelector(".help-bot-close");
  const message = root.querySelector(".help-bot-message");
  const promptWrap = root.querySelector(".help-bot-prompts");

  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    root.classList.toggle("is-open", open);
  }

  prompts.forEach(([key, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      message.textContent = answers[key] || answers.start;
    });
    promptWrap.appendChild(button);
  });

  launcher.addEventListener("click", () => setOpen(panel.hidden));
  close.addEventListener("click", () => setOpen(false));
})();
