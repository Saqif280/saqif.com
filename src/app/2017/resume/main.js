// initialize typewriter
$(function () {
  var typewriter = new Typewriter($('#position'));
  // typewriter.typeText('Design Engineer');
  // typewriter.setDelay(0, 100);
  animate(typewriter);
});

// animate roles
function animate(typewriter) {
  sequence = [
    {
      text: '\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\bDesign Engineer',
      delayAfter: 500
    },
    {
      text: '\b\b\b\b\b\b\b\b\b\b\b\b\b\b\bFront-end Engineer',
      delayAfter: 500
    },
    {
      text: '\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\bWeb Developer',
      delayAfter: 500
    },
    {
      text: '\b\b\b\b\b\b\b\b\b\b\b\b\bSoftware Engineer',
      delayAfter: 500,
      callback: function () { animate(typewriter) }
    }
  ];
  typewriter.playSequence(sequence);
}

// calculate backspaces
function calculateSpaces(){
  var positions = ['Design Engineer','Front-end Engineer','Web Developer','Software Engineer'];
  var sequenceText = ['','','',''];
  for(i = 0; i<sequenceText.length; i++){
    var text = '';
    var numBackspaces = (i == 0)
                      ? positions[sequenceText.length-1].length
                      : positions[i-1].length;
    for(j=0; j<numBackspaces; j++){
      text += '\\b';
    }
    text += positions[i];
    console.log(text);
  }
}
// calculateSpaces();
