export default class Node{
    constructor(){
        this.list = []
    }

    getHead(){
        return this.list[0];
    }

    insertAtTail(data){
        this.list.push(data);
    }

    insertAtHead(data){
        let copy = this.generateListCopy();
        this.list = copy;
        this.list[0] = data;
    }

    delete(data){
        this.list.splice(this.list.indexOf(data), 0);
        let copy = new Array(this.list.length-1);
        let count = 0;
        this.list.forEach(element => {
            if(element != undefined){
                copy[count] = element;
                count++;
            }
        });
        this.list = copy;
    }

    deleteAtHead(){
        this.list = this.list.slice(1, this.list.length);
    }

    isEmpty(){
        return this.list.length == 0;
    }

    generateListCopy(){        
        let copy = new Array(this.list.length+1);
        let count = 0;
        for (let index = 0; index < copy.length; index++) {
            if (index != 0) {
                copy[index] = this.list[count];
                count++;
            }
        }
        return copy;
    }
}