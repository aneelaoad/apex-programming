import { LightningElement,api } from 'lwc';
import uploadFile from '@salesforce/apex/fileUploaderClass.uploadFile'
export default class FileUpload extends LightningElement {
    @api recordId
    @api fileData
    openFileUpload(event){
        const file = event.target.files[0];
        var reader =  new FileReader()
        reader.onload = () => {
            let base = reader.result.split(',')[1];
            this.fileData  = {
                'filename': file.name,
                'filebase': base,
                'ID': this.recordId
            }
            console.log(this.fileData);
        }
        reader.readAsDataURL(file)
        
    }

    handleClick(){
        const {base, filename, ID} = this.fileData
        uploadFile({base, filename, ID}).then(result => {
            console.log(`${filename} uploaded successfully!`);
        })
    }
}