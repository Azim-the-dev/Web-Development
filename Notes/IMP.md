|| [Express](#express) || [CSS](#css) || [HTML](#html)

<h1 align="center" id="express">Express</h1>

```js
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
```

<h1 align="center" id="css">CSS</h1>

```html
<link rel="stylesheet" type="text/css" href="/style.css">
```

<h1 align="center" id="html">HTML</h1>