// I use this helper function to create <a> tags inside a given node
function addLink(node, text, url) {
    // clear the node of text; create a new "a" node; add the appropriate attributes;
    // append the new node as a child; return the original node.
    var a= document.createElement('a');
    node.textContent="";
    a.innerHTML= text;
    a.href=url;
    //console.log(a);
    node.appendChild(a);
    return node;
}

// another helper function, if you want to replace spaces w/ "_"
function wikify(text) {
    // replace spaces w/ "_"; concatenate w/ Wikipedia prefix; return concatenated string
    return text.replace(/ /g, "_");
}

function colorize(){
  var myList=document.body.getElementsByTagName("*");
  for(node of myList){
    if(node.className=="PM") node.style.backgroundColor="yellow";
    else if(node.className=="Party"){
      if(node.textContent=="Conservative") node.style.backgroundColor="#3377FF";
      else if(node.textContent=="Liberal") node.style.backgroundColor="#FF5733";
    }
    else if(node.className=="To") node.style.backgroundColor="#989898";
    else if(node.className=="From") node.style.backgroundColor="#B0B1B4";
  }
}


// take a class name as parameter, and linkify all such classes.
function linkifyClass (c) {
    // get all elements of class c; loop through elements;
    // add link to each element
    var PMs=document.body.getElementsByClassName(c);
    for(var i=0; i<PMs.length; i++){
      var pm=PMs[i];
      var name= pm.textContent;
      var url= "https://en.Wikipedia.org/wiki/" + wikify(name);
      addLink(pm, name,url);
      colorize(pm)
    }
    // no need for a return value.
}

// now call the function so that the work actually gets done.
//linkifyClass("PM");

colorize()

// You can probably link all of the fields if you want:
function linkify(){
  var classesToWikify = ["PM", "Party", "From", "To"];
  for (i of classesToWikify){
    linkifyClass(i)
  }
}
// what would you need to do next? Solution is left for the reader.
