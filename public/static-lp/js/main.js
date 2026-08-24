document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll(".faq-list details[open]").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
