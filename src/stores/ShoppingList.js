import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        const item=new Item(name)
        this.list.push(item)
    }
    @action editItem = (itemName,newLocation) => {
        let item=this.list.find(i=>i.name===itemName)
        item.location=newLocation
    }
    @action deleteItem = (name)=>{
        const itemIndex=this.list.findIndex(i=>i.name===name)
        this.list.splice(itemIndex,1)
    }
    deleteItem = () => {
        // your code here
    }
}

