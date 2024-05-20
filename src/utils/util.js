import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';


const jh = {
    now : function(){
        let today = moment().format('YYYY-MM-DD');
        
        return today;
    },
    uuid : function(){
        return uuidv4()
    }


}


export default jh;