// Highlights the navigation link for the section currently on screen.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail-nav a[href^="#"]'));
  if (!links.length || !("IntersectionObserver" in window)) return;

  var byId = {};
  links.forEach(function (link) {
    byId[link.getAttribute("href").slice(1)] = link;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.remove("is-current");
          link.removeAttribute("aria-current");
        });
        var current = byId[entry.target.id];
        if (current) {
          current.classList.add("is-current");
          current.setAttribute("aria-current", "true");
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();
