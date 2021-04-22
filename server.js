const express = require("express");
const MAIN = require("./data/main.js");
const app = express();
user = "def";

app.listen(3000);

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(
    "///////////////////////////////////////////////////////////////////////////////"
  );
  res.render("login");
});

app.get("/mwhome", (req, res) => {
  MAIN.getUserInfo().then((data) => {
    MAIN.getCodPoints(
      data.identities[1].username,
      data.identities[1].provider
    ).then((codpoints) => {
      MAIN.getSettings(
        data.identities[1].username,
        data.identities[1].provider
      ).then((visibility) => {
        if (data) {
          console.log(data, codpoints);
          res.render("mw/mwhome", {
            data: data,
            codpoints: codpoints.codPoints,
            visibility: visibility[data.identities[1].provider].data_visible,
          });
        }
      });
    });
  });
});

app.post("/mwhome", (req, res) => {
  authenticate(req.body.email, req.body.password, req.body.default).then(() => {
    console.log("post request to home");
    res.send("ok");
  });
});

app.post("/mwstats", (req, res) => {
  username = req.body.username;
  platform = req.body.platform;
  res.send("ok");
});

app.get("/mwstats", (req, res) => {
  MAIN.getMWalltime(username, platform).then((data) => {
    console.log(data);
    if (data) {
      res.render("mw/mwstats", {
        username: username,
        data: data,
      });
    }
  });
});

app.get("/mwkillstreaks", (req, res) => {
  MAIN.getMWalltime(username, platform).then((data) => {
    if (data) {
      res.render("mw/mwks", {
        username: username,
        data: data,
      });
    }
  });
});

app.get("/mwmatches", (req, res) => {
  MAIN.getMWMatchInfo(username, platform).then((data) => {
    if (data) {
      res.render("mw/mwmatches", {
        username: username,
        summary: data.summary.all,
        matchesArr: data.matches,
      });
    }
  });
});

app.get("/mwweapons", (req, res) => {
  MAIN.getMWalltime(username, platform).then((data) => {
    if (data) {
      console.log(data.lifetime.itemData.weapon_launcher);
      res.render("mw/mwweapons", {
        username: username,
        data: data,
      });
    }
  });
});

//404

app.use((req, res) => {
  res.render("404/404.ejs");
});
