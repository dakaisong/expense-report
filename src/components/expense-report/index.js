import React, { Component } from 'react';
import Receipt from '../receipts/index';

class ExpenseReport extends Component {

    // const [receiptlist, setReceiptList] = useState([<Receipt />]);
    state = {
        receiptlist:[<Receipt />]
    }

    handleAdd = ()=>{
        const list = [...this.state.receiptlist];
        console.log(list);
        list.push(<Receipt />);
        if(list.length >5){
            return
        }else{
            this.setState({receiptlist:list})
        }
    }

    render(){
        return ( 
            <div>
                <div>This is ExpenseReport</div>
                <div className="container">
                    <form>
                        {
                            this.state.receiptlist.map((data,index)=>(
                                <div className="form-row" key={index}>
                                    <div className="form-group col-md-10">
                                        {data}
                                    </div>
                                    <div className="form-group col-md-2">
                                        <button className="btn btn-default" onClick={this.handleAdd}>ADD</button>
                                    </div>
                                </div>
                            ))
                        }
                    </form>
                </div>
            </div>
         );
    }

}
 
export default ExpenseReport;