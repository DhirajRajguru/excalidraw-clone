

const undo = document.getElementById("undo")
const redo = document.getElementById("redo")

let redoArray=[];

function updateUndoButton() {
    // Disable the "Undo" button when historyIndex is 0, and enable it otherwise
    undo.disabled = historyIndex === -1;
}


function onUndo(){

    if (historyIndex >=0) {
        // Decrement the history index
        historyIndex--;

        if(historyIndex==-1)
        {
        // Clear the canvas
        c.clearRect(0, 0, canvas.width, canvas.height);
        }

        else{
        // Restore the previous canvas state
        c.putImageData(history[historyIndex], 0, 0);
        }

        // Move the undone state to the redo array
        redoArray.push(history.pop());

        updateUndoButton(); // Update the "Undo" button state
    }

    // if(historyIndex>=0) {
    //     // 
    //     // 
    //     if(historyIndex === 0) {
    //         c.clearRect(0, 0, canvas.width, canvas.height);
    //     }
    //     else {
    //         c.putImageData(history[historyIndex - 1], 0, 0);
    //         historyIndex -- ;
    //         redoArray.push(history.pop());
    //     }
    //     updateUndoButton();
    // }
}

function onRedo(){
    if (redoArray.length > 0) {
        // Restore the next state from the redo array
        const redoState = redoArray.pop();
        history.push(redoState);

        // Increment the history index
        historyIndex++;

        console.log("redo btn");
        // Redraw the canvas with the redo state
        c.putImageData(redoState, 0, 0);

        updateUndoButton(); // Update the "Undo" button state
    }
}

// updateUndoButton();

undo.addEventListener("click",onUndo)
redo.addEventListener("click",onRedo)