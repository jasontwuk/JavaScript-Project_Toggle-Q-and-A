// Method 1: traversing the dom
// set const
// const btns = document.querySelectorAll('.question-btn');

// // find out which button has been clicked
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         // console.log(question.classList);
//         question.classList.toggle('show-text');
//     });
// });

// Method 2: using selectors inside the element
// set const
const questions = document.querySelectorAll('.question');

// find out which button has been clicked
questions.forEach(function(question){
    // console.log(question);
    // the question-btn inside a specific question
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function(){
        // toggle questions
        question.classList.toggle('show-text');

        // close unclicked questions when user click a new button
        // Note: in this situation, item and question are the same thing!
        questions.forEach(function(item){
            // console.log(item);
            if(item !== question){
                item.classList.remove('show-text');
            }
        });
    });
});