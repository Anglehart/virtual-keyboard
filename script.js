window.onload = funOnLoad;

function funOnLoad(){
  let wrapper = document.createElement('div');
  wrapper.className = "wrapper";

  let textarea = document.createElement('textarea');
  textarea.id = "textarea";
  textarea.rows = "5";
  textarea.cols = "50";

  document.body.append(wrapper);
  document.getElementsByClassName('wrapper')[0].prepend(textarea);
}
