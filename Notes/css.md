Internal CSS means writing CSS inside the same HTML file but separated from the actual content, placed
within the `<style>` tag inside the `<head>` section.  
Internal CSS is applied using the `<style>` attribute – It is contained within the `<head>` container.  
CSS Selectors is the .(dot) – Class selector
We present the class with a dot(.) but an element is NOT

> [!TIP]
> Always define default styles first (.class { ... }), then effect styles separately (.class:hover { ... }).
This keeps your CSS clean and avoids overwriting by mistake.

## 📌 CSS Hover Effect
The `:hover` pseudo-class in CSS is used to define a style when a user hovers over an element (such as a button, link, or menu item).  
It is a common way to provide **visual feedback** and improve **user interaction**.

---

## 💡 Why Use Hover Effects?
- Improves **user experience** by showing clickable elements clearly.
- Adds **interactivity** to the design.
- Guides users through the interface.

---

## 🔹 Standard Hover Template
Below is a **standard hover effect template** you can use for **menu items** or **buttons**.

```css
/* Base state */
.menu a {
    padding: 5px 10px;               /* clickable area size */
    transition: all 0.3s ease;       /* smooth animation in & out */
}

/* Hover state */
.menu a:hover {
    color: white;                    /* text color on hover */
    background-color: darkgreen;     /* background color on hover */
    border-radius: 5px;              /* rounded edges */
}
```
> [!IMPORTANT]
> Always define transition in the base state (not just inside :hover) so that the animation applies both when hovering in and when hovering out.  

## 📌 Difference Between Margin and Padding

### **1️⃣ Padding – Space inside the element**
- **Definition:** Padding is the space **between the element’s content and its border**.  
- **Think of it as:** *The inside cushioning of a box.*  
- **Effect:** Increases the clickable area / background area **inside** the element.

### **Example:**
```css
button {
    padding: 20px;  /* more space between text and button border */
}
```
> 📌 The text will be further away from the button edges.

### **2️⃣ Margin – Space outside the element**
- **Definition:** Margin is the space **outside the element’s border**, pushing the element away from other elements.
- **Think of it as:** *The gap between your box and other boxes around it.*  
- **Effect:** Controls spacing **between** elements.

### **Example:**
```css
button {
    margin: 20px;  /* more space around the button */
}

```
> 📌 The button will move away from nearby elements.

> [!TIP]
> Always set both width and height on the image when using object-fit, like this:
```css
img {
width: 100%;
height: 250px;
object-fit: cover;
}
```
This makes sure the browser knows how to crop/scale properly.

### Adding ***Social Icons*** on a Webpage

In order to add social icons on a webpage, follow these steps:
1. Go to this website: https://cdnjs.com/libraries/font-awesome **[Font Awesome cdn]**  
From this website, copy the very firs URL in red.
2. Paste the URL in the HTML file, under the `<head>` element. The URL will be pasted and
adjusted automatically, giving us access to the font awesome library.
3. Create a `div class=”socialicons”`, in the HTML file.
4. Go the following website: https://fontawesome.com/ **[Font Awesome]**
From this website then, find the icons that you wish and copy their code, into the
socialicons div class.
5. Apply CSS:
```css
.socialicons {
background-color: lightgrey;
text-align: center;
font-size: 40px;
padding: 20px;
}
```
