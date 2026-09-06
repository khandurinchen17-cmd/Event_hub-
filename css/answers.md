Quick Check Q1: You change the footer colour in styles.css. How many pages update? What if the same colour was only set with an inline style on index.html?
Ans:-Changing the footer color in styles.css: 4 pages update (index.html, events.html, gallery.html, and register.html). The external stylesheet controls all linked pages, but contact.html does not update because its embedded internal <style> block overrides the external CSS.
-Setting the color via an inline style on index.html: 1 page updates (index.html only). Inline styles (style="...") only apply to the specific element on the specific HTML file where they are written.

Quick Check Q2: Which is more specific: h1 or #welcome? If both set color, which wins? Write a one-line proof from your page.
Ans: #welcome is more specific — it wins.
Why: CSS specificity is calculated by counting selector types, roughly in this order of weight (highest to lowest): inline styles → IDs → classes/attributes/pseudo-classes → elements/pseudo-elements.
•	h1 is an element selector → specificity value: (0, 0, 1)
•	#welcome is an ID selector → specificity value: (1, 0, 0)
Since IDs outrank elements no matter how many element selectors you stack, #welcome always wins over h1 when both try to set the same property — regardless of which one appears later in the file. Order in the file only matters as a tie-breaker when specificity is equal.
One-line proof, from your actual page:
h1 { color: #0f172a; }        /* element — low specificity */
#welcome { color: crimson; }  /* id — high specificity */

Quick Check Q3: Convert #0369a1 into an approximate rgb(...) value (you may use a colour picker). Why do designers often prefer hex in stylesheets?
Ans: Convert #0369a1 to RGB:
03 = 3, 69 = 105, a1 = 161 → rgb(3, 105, 161)
Why hex over RGB?
•	Shorter to write and read
•	Directly copy-pasted from design tools (Figma, Photoshop, DevTools)
•	More compact — no commas/spaces, and supports 3-digit shorthand (#fff)
•	RGB is mainly used instead when you need transparency (rgba(...))

Quick Check Q4: Set a nav link to display: none, then to visibility: hidden. What is the difference in the layout?
Ans: display: none → The link is completely removed from the layout; the space it occupied disappears, and other elements shift to fill the gap.
 visibility: hidden → The link becomes invisible but still takes up its original space; the layout does not change

Quick Check Q5: In your wireframe, how many event cards appear side-by-side at phone width? At desktop width?
Ans: Desktop width: 3 event cards side-by-side (both "Welcome to My Website" wireframes show this). 
 Phone width: 1 event card per row — they stack vertically (seen in the "Our Events" wireframe with Event Title 1, 2, 3 stacked one under the other).

Quick Check Q6: Why must styles.css be linked AFTER the Bootstrap CSS file? What happens if you reverse the order and both set h1 colour?
Ans: styles.css must load after Bootstrap so custom styles win. CSS follows "last one wins" whichever stylesheet loads last overrides the earlier one.
If reversed: Bootstrap would override the h1 color instead, and the custom CSS would appear "not working" even though it's correct