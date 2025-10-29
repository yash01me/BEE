class OrderBook{
    constructor(symbol="BTCUSD"){
        this.bids= [],
        this.ask= [],
        this._nextId= 1,
        this.lastTradedPrice=null

    }
    //helper
    _genOrderId(){
        return this._nextId++;
    }
    _sort(sides){
        if(sides==="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price - a.price;
                }
                return a.timestamp - b.timestamp;
            })
        }else{
            this.ask.sort((a,b)=>{
                if(a.price!=b.price){
                    return a.price - b.price;
                }
                return a.timestamp - b.timestamp;
            })

        }
    }
    //   explain the logic why bids and ask are sorted in such way ?
    // Ans - Bids are sorted in descending order because buyers want to pay the lowest price possible, so higher bids take precedence.
    // Asks are sorted in ascending order because sellers want to sell at the highest price possible, so lower asks take precedence.
    

    //function to place new order in orderbook
    /* 
    1. create new order {orderId,side,type,price?,orignqty,remainingqty,execqty,timestamp,user}
    2. match type if type == market , call marketMatch else call limitMatch
    
    */

    placeholder(symbol,side,type,price=null,quantity,user){
        /* Baasic Validation */
        let order = {
            orderId : this._genOrderId(),
            symbol : this.symbol,
            side : side,
            type : type,
            price : price,
            orignqty : quantity,
            remainingqty : quantity,
            execqty : 0,
            timestamp : Date.now(),
            user : user
        }
        if(type==="MARKET"){
            this._marketMatch(order);
        }else{
            this._limitMatch(order);
        }
    }
    //execute order if it is market order
    /* 
    bids: [] sorted descending
    ask: [] sorted ascending
    1. type: buy/sell
    2. if buy start buying from asks array starting from index 0.
    loop while order remainingqty >0 and asks.length>0
    buy min(order.remainingqty,asks[0].remainingqty)
    update remainingqty and execqty of both orders
  

    */
    _marketMatch(order){
       if(order.side==="BUY"){


       }

    }
    //execute order if it is limit order
    _limitMatch(){
        
    }
}
//if a function or variable start with (private)
//let orderbook = new OrderBook("BTCUSD")
let BTCUSDOrderBook = new OrderBook("BTCUSD");
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:100,quantity:10,
timestamp:Date.now(),user:"Vansh"});
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:99,quantity:10,
timestamp:Date.now(),user:"Sahil"});
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:98,quantity:10,
timestamp:Date.now(),user:"Gaurish"});

BTCUSDOrderBook._sort("BUY");
console.log(BTCUSDOrderBook.bids);