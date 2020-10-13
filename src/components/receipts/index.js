import React, { Fragment } from 'react';
import Input from '../common/input';
import Textarea from '../common/textarea';
import Select from '../common/select';

const Receipt = () => {

    return ( 
        <React.Fragment>
            <Textarea name="description" label="description" type="text" placeholder="please enter the description" rows="4" cols="10"/>
            <Input name="amount" label="amount" type="number" placeholder="100"></Input> 
            {/* <Select></Select>            */}
        </React.Fragment>

     );
}
 
export default Receipt;