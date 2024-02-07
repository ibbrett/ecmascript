---
title: 'ES1 ECMAScript 1997'
description: '1st Edition – ECMAScript 1997'
pubDate: 'Dec 01 1997'
---

```js
// create a team object
var team1 = {
    city: "Seattle",
    name: "Seahawks",
    shortName: "Hawks",
    declaration: function () {
        console.log("My favorite team is the " +
            this.city +
            " " +
            this.name +
            ". Go " +
            this.shortName +
            "!");
    }
};
// create another team object
var team2 = {
    city: "San Francisco",
    name: "49ers",
    shortName: "Niners",
    declaration: function () {
        console.log("My favorite team is the " +
            this.city +
            " " +
            this.name +
            ". Go " +
            this.shortName +
            "!");
    }
};
// create array
var teams = [team1, team2];
// iterate teams
for (var i = 0; i < teams.length; i++) {
    teams[i].declaration();
}
// Expected output: 
My favorite team is the Seattle Seahawks. Go Hawks!
My favorite team is the San Francisco 49ers. Go Niners!
```
