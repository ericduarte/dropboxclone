class DropBoxController {
  
  constructor(){    
      this.btnSendFileEl = document.querySelector('#btn-send-file');
      this.inputFilesEl = document.querySelector('#files');
      this.snackModalEl = document.querySelector('#react-snackbar-root');
      this.initEvents()    
    
  }

  initEvents(){
    this.btnSendFileEl.addEventListener('click',event =>{
      this.inputFilesEl.click();
    })

    this.inputFilesEl.addEventListener('change',event =>{
      this.uploadTask(event.target.files);
      this.snackModalEl.style.display = 'block';
    });

  }

  uploadTask(files){   
    let promisses = [];
    [...files].forEach(file=>{
  
      promisses.push(new Promisse((resolve, reject)=>{               
      
        let ajax = new XMLHttpRequest();
  
      }));

     }); 

    return Promisse.all(promisses);
  
  }

}