// Future JavaScript will go here
// I'm writing some code to display the source code of this extension in webpage

// alert('hello')

document.documentElement.innerHTML =
  "<pre>" + document.documentElement.innerHTML.replace(/</g, "&lt;") + "</pre>";
