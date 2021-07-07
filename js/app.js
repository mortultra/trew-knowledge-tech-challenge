const app ={}

//when user clicks hamburger menu icon, the class of hide will be removed
//the hamburger menu will disappear
//the X icon will appear in it's place
app.openMenu = function() {
  $(`.fa-bars`).on(`click`, function() {
    $(`.slideOutMenu`).removeClass(`hide`);
    $(`.fa-bars`).addClass(`hide`);
    $(`.fa-times.menu`).removeClass(`hide`);
    $(`.overlay`).removeClass(`hide`);
  });
};

//when user clicks X icon, the class of hide will added to the slideOutMenu
//the X icon disappears
//the hamburger icon appears in it's place
app.closeMenu = function() {
  $(`.fa-times.menu`).on(`click`, function() {
    $(`.slideOutMenu`).addClass(`hide`);
    $(`.fa-bars`).removeClass(`hide`);
    $(`.fa-times`).addClass(`hide`);
    $(`.overlay`).addClass(`hide`);
  });
};

//when the div slideOutLink is clicked, the class of none will be removed from currentTarget element of subMenu
app.openLink = function() {
  $(`.slideOutLink`).on(`click`, function(e) {
    const clicked = e.currentTarget.childNodes[3];
    if (clicked.style.display === "block") {
      clicked.style.display = "none";
    } else {
      clicked.style.display = "block";
    };
  });
};

//when the search icon is clicked, the search menu appears
//the search icon is replaced by the X icon
app.openSearch = function() {
  $(`.fa-search`).on(`click`, function() {
    $(`.searchBar`).removeClass(`hide`);
    $(`.fa-search`).addClass(`hide`);
    $(`.fa-times.search`).removeClass(`hide`);
    $(`.overlay`).removeClass(`hide`);
  });
};

//
app.closeSearch = function () {
  $(`.fa-times.search`).on(`click`, function () {
    $(`.searchBar`).addClass(`hide`);
    $(`.fa-search`).removeClass(`hide`);
    $(`.fa-times.search`).addClass(`hide`);
    $(`.overlay`).addClass(`hide`);
  });
};


app.init = function() {
  app.openMenu();
  app.closeMenu();
  app.openLink();
  app.openSearch();
  app.closeSearch();
};

$(document).foundation(
  app.init()
);
