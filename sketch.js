// Add some header info
// For TM template code

// Video
let video;

let label = 'waiting...';

// STEP 1: Load the model!
function preload(){
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x9qEbc9wF/model.json')
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo()
}

// STEP 2 classify!
function classifyVideo(){
  classifier.classify(video, gotResults)
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 1, 1);

  // STEP 4: Draw the label
  textSize(28);
  textAlign(CENTER,CENTER)
  fill(255)
  text(label, width/2, height - 16)
}


// STEP 3: Get the classification!
function gotResults(error,results){
  if(error){
    console.error(error)
    return
  }
label =  results[0].label;
    classifyVideo()
  }