Block-level elements are elements that take up the full width of their parent container by default, causing the next element to appear on a new line. Examples include `<div>`, `<p>`, and heading tags like `<h1>` to `<h6>`.

Inline elements only occupy as much width as their content requires. They do not force a line break. Examples include `<span>`, `<a>`, and `<input>`.
> [!NOTE]
> **Keyboard Shortcut For VS Code:** Shift + ! [Generates boilerplate]


A sample code in order to ensure that a certain field is inputted, preventing empty submissions and enforcing user input validation, is as follows below:
```html
<!DOCTYPE html>
<html>

<head>
    <title>HTML required attribute</title>
    <style>
        button {
            margin-top: 5px;
        }
    </style>
</head>

<body>
    <h1>HTML 'required' Attribute</h1>
    <form>
        <label>Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <button>Submit</button>
    </form>
</body>

</html>
```

> [!IMPORTANT]
> It is necessary to use the `<form>` element, IF, you need to implement the feature of having to input the fields as a requirement to submit the form.

HTML truly just provides a structure to the website.

### `<pre>` Tag — Preformatted Text

**Purpose:**  
Displays text exactly as it is written in the HTML source, preserving **spaces**, **tabs**, and **line breaks**.

**Default style:**  
Monospace font, no text wrapping (unless styled otherwise).

**Common uses:**
- Displaying **code** (often combined with `<code>`).
- Showing **logs**, **console output**, or **terminal commands**.
- **ASCII art**, poetry, or text that requires precise formatting.

**Example:**
```html
<pre>
Name:   Shayan
Email:  example@email.com
</pre>
```

> [!TIP]
> If you wish to add background images, or any image, as a matter of fact, in your webpage:  
**unsplash.com** – A website to download free images having high resolution.  

A `<span>` element which is used to color a part of a text:
```html
<p>My mother has <span style="color:blue">blue</span> eyes.</p>
```

