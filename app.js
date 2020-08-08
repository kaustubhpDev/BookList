// Book Constructors
function Book (title,author,isbn){
    this.title =title;
    this.author = author;
    this.isbn =isbn;
}
// UI Constructors
function UI(){}
UI.prototype.addBooktoList=function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row =document.createElement('tr');
    //insert cols in
    row.innerHTML =`<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete"> X </a></td>`;
                
                   list.appendChild(row);
                   title.value="";
                   author.value="";
                   isbn.value="";
}                  

//show alert 
UI.prototype.showAlert=function(message,className){
    //create div
const div = document.createElement('div');
//add classes
div.className=`alert ${className}`;
//add text 
div.appendChild(document.createTextNode(message));
// get parent
const container = document.querySelector('.container');
const form = document.querySelector('#book-form');
container.insertBefore(div,form);

//timeout 3s
setTimeout(function(){
    document.querySelector( '.alert').remove() ;
},3000);

}
//delete books 
UI.prototype.deleteBook=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();



    }
}


// Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
    const title =document.getElementById('title').value,
          author =document.getElementById('author').value,
          isbn =document.getElementById('isbn').value;

    // Instantiate Book
    const book =new Book(title,author,isbn);
    //Instantiate UI
    const ui = new UI();

    //validate 
    if(title===''|| author ===''|| isbn ===''){
       // UI alert
       ui.showAlert('Please fill in all fields','error')
    }else{
        ui.addBooktoList(book);
        ui.showAlert('Book Added Succesfully','success');
    }



          
    
    e.preventDefault();
});
// Event listener for delete 
 document.getElementById('book-list').addEventListener('click',function(e){
      const ui = new UI();
      ui.deleteBook(e.target);
      //show alert 
        ui.showAlert('Book Removed ','deleteItem');
      
    
 });









