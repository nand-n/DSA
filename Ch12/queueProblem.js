{/**
    Problem : Design a cahier class that takes in a customer object and handles food ordering on a frist in firest serve basis


    Requirments : The cashier requires a cuseotmer name and order item for the order
                  THe customer who was served first is processed first
                .addOrder(customer) : ensques a customer object to be processed by deliverOrder()
                .deliverOrder() : prints the name and order for the next customer to be processed

*/}

function Customer(name , order){
    this.name = name
    this.order = order
}

function Cashier(){
    this.customres = new Queue()
}

Cashier.prototype.addOrder = function (customer){
    this.customres.enqueue(customer)
}
Cashier.prototype.deliverOrder=function(){
    let finishedCustomer = this.customres.deque()
    console.log(finishedCustomer.name );
}


let cashier = new Cashier()
let customer1 = new Customer('jim' , 'fries')
let customer2 = new Customer('samie' , 'burger')


cashier.addOrder(customer1)
cashier.addOrder(customer2)

cashier.deliverOrder()
cashier.deliverOrder()
