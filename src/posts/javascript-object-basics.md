---
title: "Javascript Object basics - Quick Review"
date: "2019-03-01"
tags: ["Javascript", "OOP", "Code"]
author: "Ajeet Chaulagain"
---

**_ Note: Just a dummy post _**

## Object Basics

- Has a _name_ value pair, an object is made up of multiple members, each of which has a name (e.g. name and age above), and a value (e.g. ['Bob', 'Smith'] and 32). Each name/value pair must be separated by a comma, and the name and value in each case are separated by a colon.

```
 const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

```

- Accessing the prperties and methods

```
person.name
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()
```

Object Basics Guide - [Find here the object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
