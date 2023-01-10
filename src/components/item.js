import PropTypes from 'prop-types';
import './Item.css'    




const Item = (props) => {
    const {title,amount} = props; //ชื่อ props ที่โยนเข้ามาจาก ComponentItem ที่อยู่ใน Transaction มาเก็บไว้ในตัวแปร
    const status = amount<0 ? "expense":"income" 
    const symbol = amount<0 ? "":"+" 
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
    return(
    <li className={status}>{formatNumber(title)}<span>{symbol}{formatNumber(amount)}</span></li>
    );
    
}

// เขียน proptypes หลังจาก Component
Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item;