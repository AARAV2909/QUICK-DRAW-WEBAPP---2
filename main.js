
function setup()
{
    canvas = createcanvas(280, 280);
    canvas.center();
    background("white");
}
function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
check_sketch();
if(drawn_sketch == sketch){
    answer_holder = "set";
    score = score+1;
    document.getElementById("score").innerHTML = "score: "+score;
    }
}

function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: "+timer_counter;
    if(timer_counter>400){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check = "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}

function updateCanvas(){
    background("white");
    sketch = Element_of_array;
    document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: "+sketch;
}