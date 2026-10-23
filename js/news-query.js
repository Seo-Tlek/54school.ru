(function () {
  var routes = {
    "?offset=40": { type: "list" },
    "?offset=330": { type: "list" },
    "?date_from=2026-01-01": { type: "list" },
    "?date_from=2026-01-01&offset=10": { type: "list" },
    "?date_from=2025-01-01&offset=20": { type: "list" },
    "?action=rsrtme&mode=browse&offset=214": { type: "go", href: "/news3/monitoring-mnenija-roditelej?offset=222" },
    "?action=rsrtme&mode=browse&offset=204": { type: "go", href: "/news3/monitoring-mnenija-roditelej?offset=222" },
    "?action=rsrtme&mode=browse&offset=194": { type: "go", href: "/news3/zimnjaja-maslenichnaja-estafeta?offset=190" },
    "?action=rsrtme&mode=browse&offset=328": { type: "show", id: "q-328" },
    "?action=rsrtme&mode=browse&offset=315": { type: "show", id: "q-315" },
    "?action=rsrtme&mode=browse&offset=139": { type: "show", id: "q-139" },
    "?action=rsrtme&mode=browse&offset=222": { type: "show", id: "q-222" },
    "?action=rsrtme&mode=browse&offset=231": { type: "show", id: "q-231" },
    "?action=rsrtme&mode=browse&offset=317": { type: "show", id: "q-317" },
    "?action=rsrtme&mode=browse&offset=70": { type: "show", id: "q-70" }
  };
  var route = routes[location.search];
  if (!route || route.type === "list") return;
  if (route.type === "go") {
    var ready = document.documentElement.getAttribute("data-ready-targets") || "";
    if (ready.indexOf(route.href) !== -1) location.replace(route.href);
    return;
  }
  var node = document.getElementById(route.id);
  var list = document.getElementById("news-list");
  if (!node || !list) return;
  list.hidden = true;
  node.hidden = false;
  var title = node.getAttribute("data-title");
  if (title) document.title = title;
})();
